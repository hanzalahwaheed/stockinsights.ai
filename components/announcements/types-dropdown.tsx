import { FC, useState } from "react";
import { announcementTypes } from "@/types";
import Image from "next/image";

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
          <span className="font-medium">Announcements</span>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="w-full h-[300px] overflow-y-auto overflow-x-hidden">
          {types.map((type) => (
            <div
              key={type}
              className="flex items-center justify-between h-[50px]"
            >
              <label
                htmlFor={`type-${type}`}
                className="text-neutral-400 font-normal text-[12px] leading-2 ml-[40px] text-wrap"
              >
                {announcementTypes[type]}
              </label>
              <input
                type="checkbox"
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onChange={() => onTypeChange(type)}
                className="mr-[30px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypesDropdown;
