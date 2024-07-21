"use client";

import Image from "next/image";
import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - 1);
    // const endPage = Math.min(totalPages, startPage + 2);
    const endPage = startPage + 2;
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex justify-center items-center mt-1 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-white text-white rounded-lg"
      >
        <Image
          src={"/announcements/dropdown-open.svg"}
          width={10}
          height={20}
          alt="arrow-right"
          className="rotate-[90deg]"
        />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            page === currentPage
              ? "bg-neutral-300 text-neutral-700 rounded-md border-[1px]"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-white text-white rounded-lg "
      >
        <Image
          src={"/announcements/dropdown-open.svg"}
          width={10}
          height={20}
          alt="arrow-right"
          className="rotate-[-90deg]"
        />
      </button>
    </div>
  );
};

export default Pagination;
