import React from "react";
import Announcements from "@/components/announcements/announcements";
import { types, sentimentTypes } from "@/types";

const Home = async () => {
  const response = await fetch("http://localhost:3000/api");
  const { data, totalPages } = await response.json();

  return (
    <div className="absolute w-full left-[65px]">
      <Announcements
        sentiments={sentimentTypes}
        types={types}
        initialData={data}
        initialTotalPages={totalPages}
      />
    </div>
  );
};

export default Home;
