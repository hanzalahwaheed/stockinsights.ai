import { FC } from "react";
import Image from "next/image";

interface DropdownHeadingProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  text: string;
}

const DropdownHeading: FC<DropdownHeadingProps> = ({
  isOpen,
  toggleDropdown,
  text,
}) => (
  <button
    type="button"
    className="w-[254px] h-[70px] p-[10px] px-[30px]"
    onClick={toggleDropdown}
  >
    <div className="flex gap-[10px] w-[87px] h-[24px]">
      {isOpen ? (
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
      <span className="font-medium">{text}</span>
    </div>
  </button>
);

export default DropdownHeading;
