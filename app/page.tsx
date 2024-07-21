import React from "react";
import Announcements from "@/components/announcements/announcements";
import { types, sentimentTypes } from "@/types";
import { fetchDataHome } from "@/actions";

const Home = async () => {
  const { data, totalPages } = await fetchDataHome();
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
