"use client";

import { useState, useEffect } from "react";
import Filter from "./filter";
import Pagination from "../pagination";
import AnnouncementsTopbar from "./topbar";
import TableHeader from "./table-header";
import TableData from "./table-data";
import { announcementTypes, DataItem } from "@/types";
import { generateQuery } from "@/lib/utils";

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

  const fetchData = async (initialData: DataItem[]) => {
    const query = generateQuery(selectedSentiments, selectedTypes, currentPage);

    // Fetch data from the API with query parameters
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api?${query}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: initialData,
        }),
      }
    );

    const { data, totalPages } = await response.json();
    setFilteredData(data);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    fetchData(initialData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSentiments, selectedTypes, currentPage, initialData]);

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
          <div className="max-h-[calc(100%-50px)] overflow-y-auto">
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
                date_and_time={item.published_time.date}
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
