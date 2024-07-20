import Image from "next/image";
import { FC, useState } from "react";

interface SentimentsDropdownProps {
  sentiments: string[];
  selectedSentiments: string[];
  onSentimentChange: (sentiment: string) => void;
}

const SentimentsDropdown: FC<SentimentsDropdownProps> = ({
  sentiments,
  selectedSentiments,
  onSentimentChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mb-4">
      <h4 className="text-lg font-medium mb-2">Sentiments</h4>
      <button
        type="button"
        className="w-[254px] h-[70px] p-[10px] px-[30px]"
        onClick={toggleDropdown}
      >
        <div className="flex gap-[10px] w-[87px] h-[24px]">
          <Image
            src={"/announcements/dropdown.svg"}
            width={10}
            height={10}
            alt="dropdown"
          />
          <span className="font-medium">Sentiment</span>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {sentiments.map((sentiment) => (
              <div key={sentiment} className="flex items-center px-4 py-2">
                <input
                  type="checkbox"
                  id={`sentiment-${sentiment}`}
                  checked={selectedSentiments.includes(sentiment)}
                  onChange={() => onSentimentChange(sentiment)}
                  className="mr-2"
                />
                <label
                  htmlFor={`sentiment-${sentiment}`}
                  className="text-gray-700"
                >
                  {sentiment}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SentimentsDropdown;
