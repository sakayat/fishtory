import Link from "next/link";
import React from "react";

const SelectionItem = ({ item }) => {
  return (
    <div className="h-[400px] relative overflow-hidden group">
      <Link href="/" className="w-full">
        <div
          className="bg-cover bg-center bg-no-repeat absolute inset-0 scale-105 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url("${item.imagePath}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent top-[30%]"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white text-center space-y-3">
          <h2 className="text-xl md:text-3xl font-bold">{item.title}</h2>
          <p className="text-xs font-bold">{item.description}</p>
          <button className="border px-4 md:px-6 py-3 text-black border-white bg-white hover:bg-transparent hover:text-white transition-colors uppercase text-xs font-bold">
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SelectionItem;
