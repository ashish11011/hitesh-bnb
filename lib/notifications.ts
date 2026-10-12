export type NotificationType = "enquiry" | "contact" | "availability";

export type NotificationInput = {
  type: NotificationType;
  name: string;
  phone: string;
  email: string;
  message?: string;
  propertySlug?: string;
  checkIn?: string;
  checkout?: string;
  guests?: string;
};

export const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

export class NotificationValidationError extends Error {}

function field(
  input: Record<string, unknown>,
  key: string,
  label: string,
  maxLength: number,
  required = true,
) {
  const value = input[key];
  if (value === undefined && !required) return "";
  if (typeof value !== "string") {
    throw new NotificationValidationError(`Please enter ${label}.`);
  }
  const trimmed = value.trim();
  if ((required && !trimmed) || trimmed.length > maxLength) {
    throw new NotificationValidationError(`Please enter a valid ${label}.`);
  }
  return trimmed;
}

function dateField(input: Record<string, unknown>, key: string, label: string) {
  const value = field(input, key, label, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new NotificationValidationError(`Please select a valid ${label}.`);
  }
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new NotificationValidationError(`Please select a valid ${label}.`);
  }
  return value;
}

export function validateNotification(value: unknown): NotificationInput {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new NotificationValidationError("Invalid form submission.");
  }
  const input = value as Record<string, unknown>;
  const type = input.type;
  if (type !== "enquiry" && type !== "contact" && type !== "availability") {
    throw new NotificationValidationError("Invalid form submission.");
  }
  const name = field(input, "name", "name", 120);
  if (/[\r\n\x00-\x1f\x7f]/.test(name)) {
    throw new NotificationValidationError("Please enter a valid name.");
  }
  const phone = field(input, "phone", "phone number", 30);
  const digits = phone.replace(/\D/g, "");
  if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
    throw new NotificationValidationError("Please enter a valid phone number.");
  }
  const email = field(input, "email", "email address", 254, type === "availability");
  if (email && !emailPattern.test(email)) {
    throw new NotificationValidationError("Please enter a valid email address.");
  }
  const result: NotificationInput = { type, name, phone, email };
  if (type === "contact") {
    result.message = field(input, "message", "message", 5000);
  }
  if (type === "availability") {
    result.propertySlug = field(input, "propertySlug", "property", 150);
    result.checkIn = dateField(input, "checkIn", "check-in date");
    result.checkout = dateField(input, "checkout", "checkout date");
    if (result.checkout <= result.checkIn) {
      throw new NotificationValidationError("Checkout must be after check-in.");
    }
    result.guests = field(input, "guests", "guest count", 30);
    if (!["2-4 guests", "5-7 guests", "8-10 guests"].includes(result.guests)) {
      throw new NotificationValidationError("Please select a valid guest count.");
    }
  }
  return result;
}
