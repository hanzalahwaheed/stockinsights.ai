import React from "react";
import Announcements from "@/components/announcements/announcements";
import { types, sentimentTypes } from "@/types";
import { promises as fs } from "fs";

const Home = async () => {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const dataFile = JSON.parse(file);

  const itemsPerPage = 10;
  const totalItems = dataFile.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log("totalItems", totalItems);

  return (
    <div className="absolute w-full left-[65px]">
      <Announcements
        sentiments={sentimentTypes}
        types={types}
        initialData={dataFile}
        initialTotalPages={totalPages}
      />
    </div>
  );
};

export default Home;
