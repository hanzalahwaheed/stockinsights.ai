import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    // Define the path to your data file
    const filePath = path.join(process.cwd(), "public", "data.json");

    // Read the file synchronously
    const fileContents = fs.readFileSync(filePath, "utf8");
    // const fileContents = await fs.promises.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    // Get query parameters
    const { searchParams } = new URL(req.url);

    // Extract filter values and page number
    const sentiments = searchParams.get("sentiments")?.toLowerCase()?.split(",") || [];
    const types = searchParams.get("types")?.split(",") || [];
    const page = Number(searchParams.get("page")) || 1;

    const itemsPerPage = 10;

    // Filter the data based on sentiments
    let filteredData = data;

    if (sentiments.length > 0) {
      filteredData = filteredData.filter((item: any) =>
        sentiments.includes(item.sentiment)
      );
    }

    // Filter the data based on types
    if (types.length > 0) {
      filteredData = filteredData.filter((item: any) =>
        types.includes(item.type_id)
      );
    }



    // Calculate pagination
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    console.log(paginatedData);
    
    // Return the filtered and paginated data as a response
    return NextResponse.json({ data: paginatedData, totalPages });
  } catch (error) {
    console.error("Error reading data.json:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
