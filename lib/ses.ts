import "server-only";

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { emailPattern, type NotificationInput } from "@/lib/notifications";

const titles = {
  enquiry: "New stay enquiry",
  contact: "New contact message",
  availability: "New availability request",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

export async function sendFormNotification(input: NotificationInput, propertyTitle?: string) {
  const region = process.env.AWS_SES_REGION?.trim() || "ap-south-1";
  const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY?.trim();
  const from = process.env.SES_FROM_EMAIL?.trim() || "notification@ashishbuilds.in";
  const to = process.env.SES_TO_EMAIL?.trim() || "bishnoi11011@gmail.com";

  if (!accessKeyId || !secretAccessKey || !emailPattern.test(from) || !emailPattern.test(to)) {
    throw new Error("SES notification configuration is missing or invalid.");
  }

  const client = new SESv2Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
    // Avoid retrying a potentially accepted email after an ambiguous network failure.
    maxAttempts: 1,
  });
  const title = titles[input.type];
  const rows: Array<[string, string]> = [
    ["Name", input.name],
    ["Phone", input.phone],
    ["Email", input.email || "Not provided"],
  ];
  if (input.type === "availability") {
    rows.push(
      ["Property", propertyTitle || input.propertySlug || ""],
      ["Check-in", input.checkIn || ""],
      ["Checkout", input.checkout || ""],
      ["Guests", input.guests || ""],
    );
  }
  if (input.message) rows.push(["Message", input.message]);

  try {
    const result = await client.send(new SendEmailCommand({
      FromEmailAddress: `7 Heaven <${from}>`,
      Destination: { ToAddresses: [to] },
      ...(input.email ? { ReplyToAddresses: [input.email] } : {}),
      Content: {
        Simple: {
          Subject: { Data: `7 Heaven: ${title}`, Charset: "UTF-8" },
          Body: {
            Text: {
              Data: `${title}\n\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n\n")}`,
              Charset: "UTF-8",
            },
            Html: {
              Data: `<h1>${title}</h1><table>${rows.map(([label, value]) => `<tr><th style="text-align:left;vertical-align:top;padding:8px">${label}</th><td style="padding:8px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}</table>`,
              Charset: "UTF-8",
            },
          },
        },
      },
    }), { abortSignal: AbortSignal.timeout(15_000) });
    if (!result.MessageId) throw new Error("SES did not acknowledge the message.");
  } finally {
    client.destroy();
  }
}
