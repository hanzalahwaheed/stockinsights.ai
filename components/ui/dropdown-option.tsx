import { FC } from "react";

interface DropdownOptionProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const DropdownOption: FC<DropdownOptionProps> = ({
  id,
  label,
  checked,
  onChange,
}) => (
  <div className="flex items-center justify-between h-[40px]">
    <label
      htmlFor={id}
      className="text-neutral-400 font-normal text-[12px] leading-6 ml-[50px]"
    >
      {label}
    </label>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="mr-[30px]"
    />
  </div>
);

export default DropdownOption;
