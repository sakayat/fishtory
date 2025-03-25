import React from "react";
import AnnouncementBar from "./_components/AnnouncementBar";
import Header from "./_components/Header";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <main className="pt-10">{children}</main>
    </div>
  );
};

export default HomeLayout;
