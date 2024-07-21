import Image from "next/image";
import React from "react";

const AnnouncementsTopbar = () => {
  return (
    <div className="w-full min-h-[70px] bg-neutral-100 dark:bg-neutral-950 flex items-center justify-between border-b-[.5px] border-neutral-200 dark:border-neutral-700">
      <div className="flex">
        <h1 className="text-[16px] font-semibold text-neutral-700 dark:text-neutral-300 ml-[60px]">
          Announcements Dashboard
        </h1>
        <div className="flex gap-[10px] ml-[14px]">
          <Image
            src={"/announcements/ai-powered.svg"}
            width={15}
            height={17}
            alt="AI-Powered"
          />
          <h2 className="">AI-Powered</h2>
        </div>
      </div>
      <div className="flex gap-[10px] mr-[80px]">
        <Image
          src={"/announcements/updates.svg"}
          width={14}
          height={10}
          alt="AI-Powered"
        />
        <p className="text-neutral-700 dark:text-neutral-200 text-[12px]">Updates every 15 mins</p>
      </div>
    </div>
  );
};

export default AnnouncementsTopbar;
