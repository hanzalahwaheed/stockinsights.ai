import { NextRequest, NextResponse } from "next/server";
import { DataItem } from "@/types";

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await req.json();
    const data: DataItem[] = body.data;

    // Get query parameters
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    
    // Extract filter values and page number
    const sentiments = searchParams.get("sentiments")?.split(",") || [];
    const types = searchParams.get("types")?.split(",") || [];
    const page = Number(searchParams.get("page")) || 1;

    console.log("page", page);

    // Filter the data based on sentiments
    let filteredData = data;

    if (sentiments.length > 0) {
      filteredData = filteredData.filter((item) =>
        sentiments.includes(item.sentiment)
      );
    }
    if (types.length > 0) {
      filteredData = filteredData.filter((item) =>
        types.includes(item.type_id)
      );
    }

    // Sort the filtered data by date in descending order
    filteredData = filteredData.sort((a, b) => {
      const dateA = new Date(a.published_time.date).getTime();
      const dateB = new Date(b.published_time.date).getTime();
      return dateB - dateA;
    });

    console.log("filtered data", filteredData);

    // Calculate pagination
    const itemsPerPage = 10;
    const totalItems = filteredData.length;
    console.log("totalItems", totalItems);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    // Return the filtered, sorted, and paginated data as a response
    return NextResponse.json({ data: paginatedData, totalPages });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
