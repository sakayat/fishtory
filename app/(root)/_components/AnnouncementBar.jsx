import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-black text-white py-2 text-center fixed top-0 left-0 right-0 z-10">
      <p className="flex justify-center items-center gap-4">
        <span>Order now: delivery from Thursday</span>
        <span className="underline">Find out more</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
