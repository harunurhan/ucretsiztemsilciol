import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function get18YearsAgo(): Date {
  return new Date(new Date().getTime() - 18 * 365 * 24 * 60 * 60 * 1000);
}
