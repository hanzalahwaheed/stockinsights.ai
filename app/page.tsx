import React from "react";
import Announcements from "@/components/announcements/announcements";
import { promises as fs } from "fs";
import { calculateTotalPages } from "@/lib/utils";

const Home = async () => {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const dataFile = JSON.parse(file);

  const itemsPerPage = 10;
  const totalItems = dataFile.length;
  const totalPages = calculateTotalPages(itemsPerPage, totalItems);

  return (
    <div className="absolute w-full left-[65px]">
      <Announcements
        initialData={dataFile}
        initialTotalPages={totalPages}
      />
    </div>
  );
};

export default Home;
