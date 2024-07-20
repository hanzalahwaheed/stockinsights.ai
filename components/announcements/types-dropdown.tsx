import { FC, useState } from "react";
import { announcementTypes } from "@/types";

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
    <div className="mb-4">
      <h4 className="text-lg font-medium mb-2">Types</h4>
      <button
        type="button"
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
        onClick={toggleDropdown}
      >
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707a1 1 0 11-1.414-1.414l6-6A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
        Announcements
      </button>

      {isDropdownOpen && (
        <div className="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 h-80 overflow-y-auto">
          <div className="py-1">
            {types.map((type) => (
              <div key={type} className="flex items-center px-4 py-2">
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  checked={selectedTypes.includes(type)}
                  onChange={() => onTypeChange(type)}
                  className="mr-2"
                />
                <label htmlFor={`type-${type}`} className="text-gray-700">
                  {announcementTypes[type]}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypesDropdown;
