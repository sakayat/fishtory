import React from "react";
import HeroItem from "./HeroItem";

const Hero = () => {

  const data = [
    {
      id: 1,
      title: "Fresh Fish",
      description: "",
      buttonText: "shop now",
      buttonLink: "/shop",
      gridClasses: "col-span-12 lg:col-span-8 row-span-2 lg:h-full h-[75vh]",
      image: "./images/image1.jpg",
    },
    {
      id: 2,
      title: "$1 Oysters",
      description: " Enjoy at one of our three iconic London restaurants.",
      buttonText: "book now",
      buttonLink: "/book",
      gridClasses: "col-span-12 lg:col-span-4 lg:h-full h-[40vh]",
      image: "./images/image2.webp",
    },
    {
      id: 3,
      title: "Earn 100 loyalty points",
      description: "Enjoy at one of our three iconic London restaurants.",
      buttonText: "book now",
      buttonLink: "/book",
      gridClasses: "col-span-12 lg:col-span-4 lg:h-full h-[40vh]",
      image: "./images/image3.webp",
    },
  ];

  return (
    <div className="lg:grid grid-cols-12 md:h-[calc(100vh-9rem)] lg:min-h-[600px] gap-1 space-y-[1px]">
      {data.map((item) => (
        <HeroItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Hero;
