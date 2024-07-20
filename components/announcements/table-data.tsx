import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const TableData = () => {
  return (
    <div className="max-h-max w-full bg-white dark:bg-neutral-950 flex items-center border-b border-[.5px] border-neutral-200 dark:border-neutral-700 hover:bg-slate-100 font-medium text-[14px]">

      <div className="w-[190px] h-[80px] py-[10px] pl-[60px] gap-[10px] flex items-center">
        <p className="text-neutral-600">Promax Power Ltd</p>
      </div>

      <div className="flex items-center w-[250px] h-[80px] py-[10px] pl-[40px] gap-[10px] ">
        <p className="flex items-center w-max h-[32px] p-[4px] px-[10px] gap-[10px] rounded-[4px] text-neutral-700 bg-neutral-100 border-[1px] border-neutral-400">
        Investor Conferences
        </p>
      </div>

      {/* main div */}
      <div className="flex-1 p-[10px] px-[20px] gap-[10px]">
        <p className="text-neutral-700 font-semibold py-1">Financial Results</p>
        <p className="text-neutral-400 leading-relaxed font-normal py-1">
          Vaibhav Global Limited announced its financial results for the third
          quarter ending December 31, 2023, with a revenue growth of 23% YoY and
          declared a third interim dividend of Rs. 1.50 per equity share.
        </p>
      </div>

      <div className="flex items-center justify-center w-[69px] h-[80px] py-[10px] gap-[10px]">
        <Image
          src={"/announcements/positive.svg"}
          width={20}
          height={20}
          alt="pdf"
        />
      </div>

      <div className="flex items-center justify-center w-[151px] h-[80px] py-[10px] pl-[20px] gap-[10px] mr-[60px]">
        <div className="flex flex-col gap-2.5">
          <Button
            variant={"outline"}
            className="flex gap-[10px] w-[81px] h-[32px]"
          >
            <Image
              src={"/announcements/pdf.svg"}
              width={10}
              height={11}
              alt="pdf"
            />
            <p className="text-[12px]">Source</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableData;