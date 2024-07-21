"use server";

export const fetchDataHome = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
  const { data, totalPages } = await response.json();
  return { data, totalPages };
};

// lib/fetchData.js
export const fetchDataAnnouncements = async (
  selectedSentiments = [] as string[],
  selectedTypes = [] as string[],
  currentPage = 1
) => {
  // Build query parameters conditionally
  const sentimentQuery =
    selectedSentiments.length > 0
      ? `sentiments=${selectedSentiments.map(sentiment => sentiment.toLowerCase()).join(",")}`
      : "";
  const typeQuery =
    selectedTypes.length > 0 ? `types=${selectedTypes.join(",")}` : "";
  const pageQuery = `page=${currentPage}`;

  // Combine query parameters
  const query = [sentimentQuery, typeQuery, pageQuery]
    .filter((param) => param) // Remove empty parameters
    .join("&"); // Join with '&'
  
  // Fetch data from the API with query parameters
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api?${query}`
  );
  const data = await response.json();

  return data;
};
