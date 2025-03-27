import React from "react";
import AnnouncementBar from "./_components/AnnouncementBar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
