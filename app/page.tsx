import React from "react";

import AnnouncementsSidebar from "@/components/announcements/sidebar";
import AnnouncementsTopbar from "@/components/announcements/topbar";
import AnnouncementsTable from "@/components/announcements/table";

const page = () => {
  return (
    <div className="ml-[65px] flex h-[calc(100%-88px)] w-[calc(100%-65px)]">
      <AnnouncementsSidebar />
      <div className="flex flex-col w-full">
        <AnnouncementsTopbar />
        <AnnouncementsTable />
      </div>
    </div>
  );
};

export default page;
