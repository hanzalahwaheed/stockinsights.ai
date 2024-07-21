import { FC, useState } from "react";
import { announcementTypes } from "@/types";
import DropdownHeading from "@/components/ui/dropdown-heading";
import DropdownOption from "@/components/ui/dropdown-option";

interface TypesDropdownProps {
  types: string[];
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
}

const TypesDropdown: FC<TypesDropdownProps> = ({
  types,
  selectedTypes,
  onTypeChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-[350px]">
      <DropdownHeading
        isOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        text="Announcements"
      />
      {isDropdownOpen && (
        <div className="w-full h-[300px] overflow-y-auto overflow-x-hidden">
          {types.map((type) => (
            <DropdownOption
              key={type}
              id={`type-${type}`}
              label={announcementTypes[type]}
              checked={selectedTypes.includes(type)}
              onChange={() => onTypeChange(type)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypesDropdown;
