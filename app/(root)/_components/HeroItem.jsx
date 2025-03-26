import Link from "next/link";
import React from "react";

const HeroItem = ({ item }) => {
  return (
    <div className={`${item.gridClasses} group relative overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gradient-to-t from-black/50 to-transparent p-4 z-10 space-y-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg uppercase">
          {item.title}
        </h2>
        <p className="text-center text-sm md:text-base mb-4 md:mb-6 drop-shadow-md">
          {item.description}
        </p>
        <Link href={item.buttonLink}>
          <button className="border-2  px-4 md:px-6 py-1 md:py-2  text-black border-white bg-white hover:bg-transparent hover:text-white transition-colors uppercase text-xs font-bold">
            {item.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroItem;
