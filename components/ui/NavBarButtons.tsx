import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  content: string;
  className?: string;
}

const SideBarButtons = ({ imageSrc, content, className }: Props) => {
  return (
    <div
      className={`${className} w-[216px] h-[45px] hover:bg-[#F0F0F0] flex items-center justify-start`}
    >
      <div className="pl-[10px] h-[20px] flex gap-[12px]">
        <Image src={imageSrc} width={17} height={20} alt={content} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SideBarButtons;
