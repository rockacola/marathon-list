import { DEFAULT_LOCALE } from "@/constants/locale";

/**
 * Formats a date string to a user-friendly format
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date string (e.g., "August 31, 2025")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString + "T00:00:00"); // Add time to avoid timezone issues

  return date.toLocaleDateString(DEFAULT_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Formats a date string to a short format
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date string (e.g., "Aug 31, 2025")
 */
export const formatDateShort = (dateString: string): string => {
  const date = new Date(dateString + "T00:00:00"); // Add time to avoid timezone issues

  return date.toLocaleDateString(DEFAULT_LOCALE, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
