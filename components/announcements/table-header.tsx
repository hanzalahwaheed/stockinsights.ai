import React from "react";
import TableHeaderText from "./table-header-text";

const TableHeader = () => {
  return (
    <div className="w-full min-h-[90px] bg-white dark:bg-neutral-900 flex items-center border-b-[1px] border-neutral-200 dark:border-neutral-700 hover:bg-slate-100">
      <div className="w-[190px]  py-[10px] pl-[60px] gap-[10px] flex items-center">
        <TableHeaderText content="Company" />
      </div>

      <div className="flex items-center w-[250px]  py-[10px] pl-[40px] gap-[10px] ">
        <TableHeaderText content="Announcement Type" />
      </div>

      <div className="flex-1 p-[10px] px-[20px] gap-[10px]">
        <TableHeaderText content="Announcement Summary" />
      </div>

      <div className="flex items-center justify-center w-[69px]  py-[10px] gap-[10px]">
        <TableHeaderText content="Sentiment" />
      </div>

      <div className="flex items-center justify-center w-[151px] h-[80px] py-[10px] pl-[20px] gap-[10px] mr-[60px]">
        <div className="flex flex-col gap-2.5">
          <TableHeaderText content="Source" />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
