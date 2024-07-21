"use client";

import { useState, useEffect } from "react";
import Filter from "./filter";
import Pagination from "../pagination";
import { announcementTypes } from "@/types";
import AnnouncementsTopbar from "./topbar";
import TableHeader from "./table-header";
import TableData from "./table-data";

interface DataItem {
  _id: { oid: string };
  attachment_name: string;
  company_id: string;
  company_name: string;
  created_at: { date: string };
  created_by: string;
  published_time: { date: string };
  sentiment: string;
  source_url: string;
  sub_type: string;
  summary: string;
  ticker: string;
  type_id: string;
  year: string;
}

interface AnnouncementProps {
  sentiments: string[];
  types: string[];
  initialData: DataItem[];
  initialTotalPages: number;
}

const Announcements: React.FC<AnnouncementProps> = ({
  sentiments,
  types,
  initialData,
  initialTotalPages,
}) => {
  const [selectedSentiments, setSelectedSentiments] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredData, setFilteredData] = useState<DataItem[]>(initialData);
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);

  const fetchData = async () => {
    // Build query parameters conditionally
    const sentimentQuery =
      selectedSentiments.length > 0
        ? `sentiments=${selectedSentiments.join(",")}`
        : "";
    const typeQuery =
      selectedTypes.length > 0 ? `types=${selectedTypes.join(",")}` : "";
    const pageQuery = `page=${currentPage}`;

    // Combine query parameters
    const query = [sentimentQuery, typeQuery, pageQuery]
      .filter((param) => param) // Remove empty parameters
      .join("&"); // Join with '&'

    // Fetch data from the API with query parameters
    const response = await fetch(`http://localhost:3000/api?${query}`);
    const data = await response.json();

    // Update state with fetched data
    setFilteredData(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSentiments, selectedTypes, currentPage]);

  const handleSentimentChange = (sentiment: string) => {
    setSelectedSentiments((prev) =>
      prev.includes(sentiment)
        ? prev.filter((s) => s !== sentiment)
        : [...prev, sentiment]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="w-full">
      <div className="absolute">
        <Filter
          sentiments={sentiments}
          selectedSentiments={selectedSentiments}
          onSentimentChange={handleSentimentChange}
          types={types}
          selectedTypes={selectedTypes}
          onTypeChange={handleTypeChange}
        />
      </div>
      <div className="h-[calc(100vh-88px)] ml-[254px]">
        {filteredData.length > 0 ? (
          <div className="max-h-[800px] overflow-y-auto">
            <AnnouncementsTopbar />
            <TableHeader />
            {filteredData.map((item) => (
              <TableData
                key={item._id.oid}
                company_name={item.company_name}
                summary={item.summary}
                source_url={item.source_url}
                sentiment={item.sentiment}
                announcement_type={announcementTypes[item.type_id]}
                sub_type={item.sub_type}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Announcements;
