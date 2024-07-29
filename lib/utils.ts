import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert date_and_time into the desired format
export function refactorDateAndTime(date_and_time: string) {
  const date = new Date(date_and_time);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleDateString("en-Uk", options);
}

// Generate query string based on selected filters and current page
export function generateQuery(
  selectedSentiments: string[],
  selectedTypes: string[],
  currentPage: number
) {
  const sentimentQuery =
    selectedSentiments.length > 0
      ? `sentiments=${selectedSentiments
          .map((sentiment) => sentiment.toLowerCase())
          .join(",")}`
      : "";
  const typeQuery =
    selectedTypes.length > 0 ? `types=${selectedTypes.join(",")}` : "";
  const pageQuery = `page=${currentPage}`;

  // Combine query parameters
  return [sentimentQuery, typeQuery, pageQuery]
    .filter((param) => param)
    .join("&");
}

export function calculateTotalPages(itemsPerPage: number, totalItems: number) {
  return Math.ceil(totalItems / itemsPerPage);
}
