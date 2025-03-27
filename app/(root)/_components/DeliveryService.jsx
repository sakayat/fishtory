"use client";
import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import ProductCard from "./ProductCard";

const DeliveryService = () => {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);

  const deliveryProducts = [
    {
      id: 1,
      title: "Fresh Jersey Oysters x 12",
      price: 12.99,
      image: "/images/image2.webp",
      hoverImage: "/images/image1.jpg",
      link: "/products/salmon",
      isNew: true,
      isSuitableForFreezing: true,
      reviewsCount: 124,
      servings: "2+",
    },
    {
      id: 2,
      title: "Fresh Live Mussels 1kg",
      price: 8.99,
      image: "/images/img4.webp",
      hoverImage: "/images/img5.webp",
      link: "/products/mussels",
      isNew: false,
      isSuitableForFreezing: true,
      reviewsCount: 95,
      servings: "2-3",
    },
    {
      id: 3,
      title: "Fresh Scallops x 6 in Shells",
      price: 18.99,
      image: "/images/img6.webp",
      hoverImage: "/images/img7.webp",
      link: "/products/scallops",
      isNew: true,
      isSuitableForFreezing: true,
      reviewsCount: 56,
      servings: "2+",
    },
    {
      id: 4,
      title: "Wild-Caught Salmon Fillets (2pcs)",
      price: 14.99,
      image: "/images/img8.webp",
      hoverImage: "/images/img9.webp",
      link: "/products/salmon",
      isNew: false,
      isSuitableForFreezing: true,
      reviewsCount: 245,
      servings: "2",
    },
    {
      id: 5,
      title: "King Prawns (500g)",
      price: 11.49,
      image: "/images/prawns1.webp",
      hoverImage: "/images/prawns2.jpg",
      link: "/products/prawns",
      isNew: true,
      isSuitableForFreezing: true,
      reviewsCount: 82,
      servings: "2-3",
    },
    {
      id: 6,
      title: "Fresh Crab Legs (400g)",
      price: 15.99,
      image: "/images/crab1.webp",
      hoverImage: "/images/crab2.jpg",
      link: "/products/crab",
      isNew: false,
      isSuitableForFreezing: true,
      reviewsCount: 63,
      servings: "2",
    },
  ];

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        perMove: 1,
        gap: "2rem",
        pagination: false,
        arrows: false,
        breakpoints: {
          1024: { perPage: 3 },
          992: { perPage: 2 },
          768: { perPage: 1, gap: "1rem" },
        },
        updateOnMove: true,
        type: "loop",
        mediaQuery: "min",
      });

      splide.mount();

      splideInstanceRef.current = splide;

      return () => splide.destroy();
    }
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
    <div className="container mx-auto px-4">
      <div className="space-y-5">
        <div className="flex justify-center items-center relative py-5">
          <h1 className="text-lg font-bold border-b-2 border-black uppercase">
            Next Day Delivery
          </h1>
          <div className="hidden md:flex gap-2 absolute right-0">
            <button
              className="text-black font-bold transition-all border border-gray-400 hover:bg-black hover:text-white hover:border-black rounded-full flex items-center justify-center w-8 h-8"
              onClick={handlePrev}
            >
              <MoveLeft size={18} />
            </button>
            <button
              className="text-black font-bold transition-all border border-gray-400 hover:bg-black hover:text-white hover:border-black rounded-full flex items-center justify-center w-8 h-8"
              onClick={handleNext}
            >
              <MoveRight size={18} />
            </button>
          </div>
        </div>

        <div className="splide" ref={splideRef}>
          <div className="splide__track">
            <div className="splide__list">
              {deliveryProducts.map((product) => (
                <div className="splide__slide" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryService;
