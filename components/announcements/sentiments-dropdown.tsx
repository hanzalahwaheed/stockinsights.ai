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
    <div className="">
      <button
        type="button"
        className="w-[254px] h-[70px] p-[10px] px-[30px]"
        onClick={toggleDropdown}
      >
        <div className="flex gap-[10px] w-[87px] h-[24px]">
          {isDropdownOpen ? (
            <Image
              src={"/announcements/dropdown-close.svg"}
              width={10}
              height={10}
              alt="dropdown"
            />
          ) : (
            <Image
              src={"/announcements/dropdown-open.svg"}
              width={10}
              height={10}
              alt="dropdown"
            />
          )}
          <span className="font-medium">Sentiment</span>
        </div>
      </button>

      {isDropdownOpen && (
        <div>
          {sentiments.map((sentiment) => (
            <div
              key={sentiment}
              className="flex items-center justify-between h-[40px]"
            >
              <label
                htmlFor={`sentiment-${sentiment}`}
                className="text-neutral-400 font-normal text-[12px] leading-6 ml-[50px]"
              >
                {sentiment}
              </label>
              <input
                type="checkbox"
                id={`sentiment-${sentiment}`}
                checked={selectedSentiments.includes(sentiment)}
                onChange={() => onSentimentChange(sentiment)}
                className="mr-[30px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SentimentsDropdown;
