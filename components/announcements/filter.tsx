"use client";

import { FC } from "react";
import SentimentsDropdown from "./sentiments-dropdown";
import TypesDropdown from "./types-dropdown";

interface FilterProps {
  sentiments: string[];
  selectedSentiments: string[];
  onSentimentChange: (sentiment: string) => void;
  types: string[];
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
}

const Filter: FC<FilterProps> = ({
  sentiments,
  selectedSentiments,
  onSentimentChange,
  types,
  selectedTypes,
  onTypeChange,
}) => {
  return (
    <div className="w-[254px] h-[calc(100vh-88px)] flex flex-col dark:bg-neutral-900 border-r-[1px] border-neutral-300">
      <h3 className="text-[14px] font-medium py-[23px] ml-[30px]">Filter By</h3>
      <SentimentsDropdown
        sentiments={sentiments}
        selectedSentiments={selectedSentiments}
        onSentimentChange={onSentimentChange}
      />
      
      <TypesDropdown
        types={types}
        selectedTypes={selectedTypes}
        onTypeChange={onTypeChange}
      />
    </div>
  );
};

export default Filter;
