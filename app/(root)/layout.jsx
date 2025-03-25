import React from "react";
import AnnouncementBar from "./_components/AnnouncementBar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <AnnouncementBar />
      <main className="pt-10">{children}</main>
    </div>
  );
};

export default HomeLayout;
