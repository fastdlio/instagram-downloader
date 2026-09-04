import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidInstagramUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  const regex =
    /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|reels|tv)\/([A-Za-z0-9_-]+)/i;
  return regex.test(url.trim());
}

export function extractInstagramShortcode(url: string): string | null {
  const match = url.trim().match(
    /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|reels|tv)\/([A-Za-z0-9_-]+)/i
  );
  return match ? match[1] : null;
}
