import React from "react";

import AnnouncementsSidebar from "@/components/announcements/sidebar";
import AnnouncementsTopbar from "@/components/announcements/topbar";
import AnnouncementsTable from "@/components/announcements/table";

const page = () => {
  return (
    <div className="ml-[65px] flex h-full">
      <AnnouncementsSidebar />
      <div className="flex flex-col w-full h-[calc(100vh-158px)] overflow-auto">
        <AnnouncementsTopbar />
        <AnnouncementsTable />
      </div>
    </div>
  );
};

export default page;
