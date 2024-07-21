"use client";
import React, { useState } from "react";
import SideBarButtons from "./ui/navbar-buttons";
import Image from "next/image";

const Navbar = () => {
  const Buttons = [
    {
      imageSrc: "/navbar/AIAssist.svg",
      content: "AI Assist",
    },
    {
      imageSrc: "/navbar/SearchFilings.svg",
      content: "Search Filings",
    },
    {
      imageSrc: "/navbar/Companies.svg",
      content: "Companies",
    },
    {
      imageSrc: "/navbar/Announcements.svg",
      content: "Announcements",
    },
    {
      imageSrc: "/navbar/EmailUpdates.svg",
      content: "Email Updates",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`absolute z-10 h-screen bg-neutral-100 transition-width duration-200 flex border-r-[.5px] dark:border-neutral-700
         ${isOpen ? "w-[256px] justify-center" : "w-[65px] justify-start"} 
          dark:bg-neutral-900
         `}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen ? (
        <div className="mx-[10px] mt-[47px] ml-0">
          <Image
            src={"/logo.svg"}
            width={23}
            height={25}
            alt="logo"
            className="ml-[5px] mb-[36px] w-auto h-auto"
          />
          {Buttons.map((button, index) => (
            <SideBarButtons
              key={index}
              imageSrc={button.imageSrc}
              content={button.content}
            />
          ))}
        </div>
      ) : (
        <div className="mx-[20px] mt-[47px] flex flex-col items-center">
          <Image
            src={"/logo.svg"}
            width={23}
            height={25}
            alt="logo"
            className="mb-[36px] w-auto h-auto"
          />
          {Buttons.map((button, index) => (
            <div key={index} className="h-[45px] flex gap-[12px]">
              <Image
                src={button.imageSrc}
                width={17}
                height={20}
                alt="buttons"
              />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
