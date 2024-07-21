import React from "react";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <div className="w-screen flex justify-end h-[88px] border-b border-neutral-200 dark:border-neutral-700 dark:bg-neutral-950">
      <div className="flex justify-center items-center mx-[34px]">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
