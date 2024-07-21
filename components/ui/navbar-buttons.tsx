"use client";

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
      className={`${className} w-[216px] h-[45px] hover:bg-neutral-200 dark:hover:bg-neutral-300 flex items-center justify-start rounded-md`}
    >
      <div className="pl-[10px] h-[20px] flex gap-[12px] items-center justify-center">
        <Image src={imageSrc} width={17} height={20} alt={content} />
        <p className="text-neutral-500 font-semibold">{content}</p>
      </div>
    </div>
  );
};

export default SideBarButtons;
