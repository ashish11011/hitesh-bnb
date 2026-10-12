import assert from "node:assert/strict";
import { after, mock, test } from "node:test";
import { SESv2Client } from "@aws-sdk/client-sesv2";
import { POST } from "../app/api/notifications/route.ts";
import { NotificationValidationError, validateNotification } from "../lib/notifications.ts";
import { submitNotification } from "../lib/submit-notification.ts";

const environmentKeys = [
  "AWS_SES_REGION", "AWS_SES_ACCESS_KEY_ID", "AWS_SES_SECRET_ACCESS_KEY",
  "SES_FROM_EMAIL", "SES_TO_EMAIL",
];
const previousEnvironment = Object.fromEntries(environmentKeys.map((key) => [key, process.env[key]]));
process.env.AWS_SES_REGION = "ap-south-1";
process.env.AWS_SES_ACCESS_KEY_ID = "test-access-key";
process.env.AWS_SES_SECRET_ACCESS_KEY = "test-secret-key";
process.env.SES_FROM_EMAIL = "notification@ashishbuilds.in";
process.env.SES_TO_EMAIL = "bishnoi11011@gmail.com";

const send = mock.method(SESv2Client.prototype, "send", async () => ({ MessageId: "test-message-id" }));
const log = mock.method(console, "error", () => {});
after(() => {
  mock.restoreAll();
  for (const key of environmentKeys) {
    if (previousEnvironment[key] === undefined) delete process.env[key];
    else process.env[key] = previousEnvironment[key];
  }
});

const enquiry = { type: "enquiry", name: " Guest ", phone: "+91 98765 43210", email: "guest@example.com" };
const availability = {
  ...enquiry, type: "availability", propertySlug: "jb-villa-home-stay",
  checkIn: "2026-12-01", checkout: "2026-12-03", guests: "5-7 guests",
};
function request(body, headers = {}) {
  return new Request("https://example.com/api/notifications", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://example.com", ...headers },
    body: JSON.stringify(body),
  });
}

test("all three form types send only to the configured admin inbox", async () => {
  for (const input of [enquiry, { ...enquiry, type: "contact", message: "Hello" }, availability]) {
    const response = await POST(request(input));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { success: true });
    const command = send.mock.calls.at(-1).arguments[0].input;
    assert.equal(command.FromEmailAddress, "7 Heaven <notification@ashishbuilds.in>");
    assert.deepEqual(command.Destination, { ToAddresses: ["bishnoi11011@gmail.com"] });
    assert.deepEqual(command.ReplyToAddresses, ["guest@example.com"]);
  }
  const command = send.mock.calls.at(-1).arguments[0].input;
  assert.match(command.Content.Simple.Body.Text.Data, /JB Villa/i);
  assert.match(command.Content.Simple.Body.Text.Data, /2026-12-01/);
  assert.match(command.Content.Simple.Body.Text.Data, /5-7 guests/);
});

test("optional email is accepted with no Reply-To, and HTML content is escaped", async () => {
  const response = await POST(request({ ...enquiry, type: "contact", email: "", message: '<script>alert("hello")</script>' }));
  assert.equal(response.status, 200);
  const command = send.mock.calls.at(-1).arguments[0].input;
  assert.equal(command.ReplyToAddresses, undefined);
  assert.match(command.Content.Simple.Body.Html.Data, /&lt;script&gt;/);
  assert.doesNotMatch(command.Content.Simple.Body.Html.Data, /<script>/);
});

test("server rejects invalid details, date order, impossible dates, and guest options", () => {
  assert.equal(validateNotification(enquiry).name, "Guest");
  for (const input of [
    { ...enquiry, name: "" }, { ...enquiry, phone: "abc" },
    { ...enquiry, email: "guest@example.com\r\nBcc:other@example.com" },
    { ...enquiry, type: "contact", message: "" },
    { ...enquiry, type: "contact", message: "x".repeat(5001) },
    { ...availability, email: "" }, { ...availability, checkout: availability.checkIn },
    { ...availability, checkIn: "2026-02-30" }, { ...availability, guests: "100 guests" },
    { ...enquiry, type: "unknown" },
  ]) assert.throws(() => validateNotification(input), NotificationValidationError);
});

test("unknown property and malformed requests never reach SES", async () => {
  const calls = send.mock.callCount();
  assert.equal((await POST(request({ ...availability, propertySlug: "not-a-property" }))).status, 400);
  assert.equal((await POST(request(enquiry, { origin: "https://other.example" }))).status, 403);
  assert.equal((await POST(request(enquiry, { "content-type": "text/plain" }))).status, 415);
  assert.equal((await POST(request({ ...enquiry, message: "x".repeat(21_000) }))).status, 413);
  assert.equal((await POST(new Request("https://example.com/api/notifications", {
    method: "POST", headers: { "content-type": "application/json" }, body: "{bad-json",
  }))).status, 400);
  assert.equal(send.mock.callCount(), calls);
});

test("missing credentials fail without attempting a send", async () => {
  const calls = send.mock.callCount();
  delete process.env.AWS_SES_SECRET_ACCESS_KEY;
  try {
    const response = await POST(request(enquiry));
    assert.equal(response.status, 503);
    assert.equal(send.mock.callCount(), calls);
    assert.equal((await response.json()).success, undefined);
  } finally {
    process.env.AWS_SES_SECRET_ACCESS_KEY = "test-secret-key";
  }
});

test("SES rejection returns an error without disclosing credentials or submitted data", async () => {
  send.mock.mockImplementationOnce(async () => { throw new Error("test-secret-key"); });
  const response = await POST(request(enquiry));
  assert.equal(response.status, 503);
  assert.doesNotMatch(await response.text(), /test-secret-key|Guest|guest@example/);
  assert.doesNotMatch(JSON.stringify(log.mock.calls.at(-1).arguments), /test-secret-key|Guest|guest@example/);
});

test("an unacknowledged SES send does not report success", async () => {
  send.mock.mockImplementationOnce(async () => ({}));
  assert.equal((await POST(request(enquiry))).status, 503);
});

test("client surfaces a server failure instead of reporting success", async () => {
  const fetch = mock.method(globalThis, "fetch", async () => Response.json({ error: "Please enter a valid phone number." }, { status: 400 }));
  try {
    await assert.rejects(submitNotification(enquiry), /valid phone number/);
  } finally {
    fetch.mock.restore();
  }
});
