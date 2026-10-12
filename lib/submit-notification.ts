import type { NotificationInput } from "@/lib/notifications";

export async function submitNotification(input: NotificationInput) {
  const response = await fetch("/api/notifications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const result = await response.json();
  if (!response.ok || result.success !== true) {
    throw new Error(result.error || "We couldn't send your request. Please try again.");
  }
}
