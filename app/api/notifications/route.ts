import { roomDetails } from "@/const/roomDetails";
import { NotificationValidationError, validateNotification } from "@/lib/notifications";
import { sendFormNotification } from "@/lib/ses";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Invalid request format." }, { status: 415 });
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 20_000) {
      return Response.json({ error: "Your message is too long." }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  try {
    const input = validateNotification(body);
    const property = input.type === "availability"
      ? roomDetails.find((item) => item.slug === input.propertySlug)
      : undefined;
    if (input.type === "availability" && !property) {
      throw new NotificationValidationError("Please select a valid property.");
    }
    await sendFormNotification(input, property?.propertyTitle);
    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof NotificationValidationError) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    // Log only operational metadata; never credentials or the submitted personal details.
    console.error("SES form notification failed", {
      name: error instanceof Error ? error.name : "UnknownError",
      requestId: (error as { $metadata?: { requestId?: string } })?.$metadata?.requestId,
    });
    return Response.json({
      error: "We couldn't send your request. Please try again or contact us by phone.",
    }, { status: 503 });
  }
}
