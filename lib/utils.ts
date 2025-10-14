import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function jsonDbBaseUrl() {
  const base = process.env.NEXT_PUBLIC_JSON_DB_URL || process.env.JSON_DB_URL;
  if (!base) {
    throw new Error("JSON DB base URL is not configured");
  }
  return base.replace(/\/$/, "");
}
