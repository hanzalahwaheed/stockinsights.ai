import { FC, useState } from "react";
import DropdownHeading from "@/components/ui/dropdown-heading";
import DropdownOption from "@/components/ui/dropdown-option";

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
      <DropdownHeading isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} text="Sentiment" />
      {isDropdownOpen && (
        <div>
          {sentiments.map((sentiment) => (
            <DropdownOption
              key={sentiment}
              id={`sentiment-${sentiment}`}
              label={sentiment}
              checked={selectedSentiments.includes(sentiment)}
              onChange={() => onSentimentChange(sentiment)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SentimentsDropdown;
