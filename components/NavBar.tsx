"use client";
import React, { useState } from "react";
import SideBarButtons from "./ui/NavBarButtons";
import Image from "next/image";

const NavBar = () => {
  const Buttons = [
    {
      imageSrc: "/NavBar/AIAssist.svg",
      content: "AI Assist",
    },
    {
      imageSrc: "/NavBar/SearchFilings.svg",
      content: "Search Filings",
    },
    {
      imageSrc: "/NavBar/Companies.svg",
      content: "Companies",
    },
    {
      imageSrc: "/NavBar/Announcements.svg",
      content: "Announcements",
    },
    {
      imageSrc: "/NavBar/EmailUpdates.svg",
      content: "Email Updates",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`h-screen bg-neutral-100 group transition-width duration-200 flex justify-center border-r border-default
         ${isOpen ? "w-[256px]" : "w-[65px]"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen ? (
        <div className="mx-[20px] mt-[47px]">
          <Image
            src={"/logo.svg"}
            width={23}
            height={25}
            alt="logo"
            className="ml-[5px] mb-[36px]"
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
        <div className="mx-[20px] mt-[47px]">
          <div>
            <Image
              src={"/logo.svg"}
              width={23}
              height={25}
              alt="logo"
              className="mb-[36px]"
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
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// "use client";

// import React, { useState } from 'react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Mobile Hamburger Icon */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleSidebar}
//           className="p-4 focus:outline-none"
//         >
//           {isOpen ? '✖️' : '☰'}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`bg-gray-400 text-white fixed top-0 left-0 h-full z-30 transition-all duration-300 ease-in-out
//           ${isOpen ? 'w-64' : 'w-16'} md:w-16 md:hover:w-64`}
//         onMouseEnter={() => setIsOpen(true)}
//         onMouseLeave={() => setIsOpen(false)}
//       >
//         <div className="p-4">
//           <h1 className="text-xl">Logo</h1>
//         </div>
//         <nav className="mt-4">
//           <ul>
//             <li className="p-4 hover:bg-gray-700">Home</li>
//             <li className="p-4 hover:bg-gray-700">About</li>
//             <li className="p-4 hover:bg-gray-700">Services</li>
//             <li className="p-4 hover:bg-gray-700">Contact</li>
//           </ul>
//         </nav>
//       </div>

//       {/* Content */}
//       <div className="flex-1 ml-16 md:ml-64 p-8">
//         <h1 className="text-2xl font-bold">Main Content</h1>
//         <p>Here is the main content of the page...</p>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
