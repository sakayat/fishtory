"use client";
import { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import SectionTitle from "./SectionTitle";
import { MoveLeft, MoveRight } from "lucide-react";
import classes from "./Collection.module.css";
import CollectionItem from "./CollectionItem";

const ProductCollections = () => {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);

  const productData = [
    {
      id: 1,
      title: "Everyday Essentials",
      link: "/collections/everyday-essentials",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 2,
      title: "Whole Fish",
      link: "/collections/whole-fish",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 3,
      title: "Shellfish",
      link: "/collections/shellfish",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 4,
      title: "Fish Portions",
      link: "/collections/fish-portions",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 5,
      title: "Smoked & Cured Fish",
      link: "/collections/smoked-cured-fish",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 6,
      title: "Oysters",
      link: "/collections/oysters",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 7,
      title: "Prawns",
      link: "/collections/prawns",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 8,
      title: "Lobster",
      link: "/collections/lobster",
      image: "./images/Shellfish-1000_540x.jpg",
    },
    {
      id: 9,
      title: "Chef Made Meat Collection",
      link: "/collections/chef-made-meat-collection",
      image: "./images/Shellfish-1000_540x.jpg",
    },
  ];

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "1rem",
      pagination: false,
      arrows: false,
    });

    splide.mount();

    splideInstanceRef.current = splide;

    return () => splide.destroy();
  }, []);

  const handleNext = () => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go("+");
    }
  };

  const handlePrev = () => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go("-");
    }
  };

  return (
    <div className="md:mt-[38rem] lg:mt-0">
      <div className="container mx-auto px-4 py-5">
        <div className="relative">
          <SectionTitle
            title="The UK's Best Online Fresh Fishmonger"
            description="We've supplied London’s best restaurants with fresh fish & shellfish for
        over 20 years – now we're bringing it to you. Every morning, we buy the
        finest catch from local fishermen before filleting, preparing and
        delivering it straight to your door. Get all your fresh fish by post -
        order today."
          />

          <div className="hidden md:flex items-center gap-2 absolute top-5 right-0">
            <button
              onClick={handlePrev}
              className="text-black font-bold transition-all border border-gray-400 hover:bg-black hover:text-white hover:border-black rounded-full flex items-center justify-center w-8 h-8"
            >
              <MoveLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="text-black font-bold transition-all border border-gray-400 hover:bg-black hover:text-white hover:border-black rounded-full flex items-center justify-center w-8 h-8"
            >
              <MoveRight size={18} />
            </button>
          </div>
        </div>
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <div className={`splide__list ${classes.splide__list}`}>
              {productData.map((product) => (
                <CollectionItem product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ProductCollections;
