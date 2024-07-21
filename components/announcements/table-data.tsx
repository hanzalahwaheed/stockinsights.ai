"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface TableDataProps {
  company_name: string;
  announcement_type: string;
  summary: string;
  sentiment: string;
  key?: string;
  source_url: string;
  sub_type: string;
}

const TableData: React.FC<TableDataProps> = ({
  company_name,
  announcement_type,
  summary,
  sentiment,
  source_url,
  sub_type,
}) => {
  return (
    <div className="max-h-max w-full bg-white dark:bg-neutral-950 flex items-center border-b border-[.5px] border-neutral-200 dark:border-neutral-700 hover:bg-slate-100 font-medium text-[14px]">
      <div className="w-[190px] min-h-[80px] py-[10px] pl-[60px] gap-[10px] flex items-center">
        <p className="text-neutral-600">{company_name}</p>
      </div>

      <div className="flex items-center w-[250px] min-h-[80px] py-[10px] pl-[40px] gap-[10px] ">
        <p className="flex items-center w-max h-[32px] p-[4px] px-[10px] gap-[10px] rounded-[4px] text-neutral-700 bg-neutral-100 border-[1px] border-neutral-400">
          {announcement_type}
        </p>
      </div>

      {/* main div */}
      <div className="flex-1 p-[10px] px-[20px] gap-[10px]">
        <p className="text-neutral-700 font-semibold py-1">{sub_type}</p>
        <p className="text-neutral-400 leading-relaxed font-normal py-1">
          {summary}
        </p>
      </div>

      <div className="flex items-center justify-center w-[69px] min-h-[80px] py-[10px] gap-[10px]">
        <Image
          src={`/announcements/${sentiment}.svg`}
          width={20}
          height={20}
          alt="pdf"
        />
      </div>

      <div className="flex items-center justify-center w-[151px] min-h-[80px] py-[10px] pl-[20px] gap-[10px] mr-[60px]">
        <Button variant={"outline"}>
          <a
            href={source_url}
            target="_blank"
            className="flex items-center gap-[10px]"
          >
            <Image
              src={"/announcements/pdf.svg"}
              width={10}
              height={11}
              alt="pdf"
            />
            <p className="text-[12px]">Source</p>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TableData;
