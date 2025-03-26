import React from "react";
import AnnouncementBar from "./_components/AnnouncementBar";
import Header from "./_components/Header";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default HomeLayout;
