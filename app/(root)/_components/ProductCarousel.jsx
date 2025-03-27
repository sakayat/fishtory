"use client";
import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState("new");
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);

  const newProducts = [
    {
      id: 1,
      title: "Fresh Atlantic Salmon",
      price: 12.99,
      image: "/images/image2.webp",
      hoverImage: "/images/image1.jpg",
      link: "/products/salmon",
      isNew: true,
      isSuitableForFreezing: true,
    },
    {
      id: 2,
      title: "Wild Caught Tuna",
      price: 15.99,
      image: "/images/tuna1.jpg",
      hoverImage: "/images/tuna2.jpg",
      link: "/products/tuna",
      isNew: true,
      isSuitableForFreezing: true,
    },
    {
      id: 3,
      title: "King Prawns",
      price: 9.99,
      image: "/images/prawns1.jpg",
      hoverImage: "/images/prawns2.jpg",
      link: "/products/prawns",
      isNew: true,
      isOffer: true,
    },
    {
      id: 4,
      title: "Scottish Oysters",
      price: 18.99,
      image: "/images/oysters1.jpg",
      hoverImage: "/images/oysters2.jpg",
      link: "/products/oysters",
      isNew: true,
    },
    {
      id: 9,
      title: "Sea Bass",
      price: 14.5,
      image: "/images/seabass1.jpg",
      hoverImage: "/images/seabass2.jpg",
      link: "/products/seabass",
      isNew: true,
      isSuitableForFreezing: true,
    },
    {
      id: 10,
      title: "Scallops",
      price: 21.99,
      image: "/images/scallops1.jpg",
      hoverImage: "/images/scallops2.jpg",
      link: "/products/scallops",
      isNew: true,
      isSuitableForFreezing: true,
    },
  ];

  const bestsellers = [
    {
      id: 5,
      title: "Premium Fish Box",
      price: 45.99,
      image: "/images/fishbox1.jpg",
      hoverImage: "/images/fishbox2.jpg",
      link: "/products/fishbox",
      isOffer: true,
      isSuitableForFreezing: true,
    },
    {
      id: 6,
      title: "Smoked Salmon",
      price: 14.99,
      image: "/images/smoked1.jpg",
      hoverImage: "/images/smoked2.jpg",
      link: "/products/smoked",
      isSuitableForFreezing: true,
    },
    {
      id: 7,
      title: "Cod Fillets",
      price: 11.99,
      image: "/images/cod1.jpg",
      hoverImage: "/images/cod2.jpg",
      link: "/products/cod",
      isOffer: true,
      isSuitableForFreezing: true,
    },
    {
      id: 8,
      title: "Lobster Tails",
      price: 29.99,
      image: "/images/lobster1.jpg",
      hoverImage: "/images/lobster2.jpg",
      link: "/products/lobster",
      isSuitableForFreezing: true,
    },
    {
      id: 11,
      title: "Whole Trout",
      price: 16.5,
      image: "/images/trout1.jpg",
      hoverImage: "/images/trout2.jpg",
      link: "/products/trout",
      isOffer: true,
      isSuitableForFreezing: true,
    },
    {
      id: 12,
      title: "Mussels",
      price: 8.99,
      image: "/images/trout1.webp",
      hoverImage: "/images/trout2.webp",
      link: "/products/mussels",
      isOffer: true,
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
  }, [activeTab]);

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
    <div className="container mx-auto px-4 py-5">
      <div className="space-y-5">
        <div className="flex justify-center items-center relative py-5">
          <div className="flex items-center gap-10">
            <button
              className={`text-lg font-bold ${
                activeTab === "new"
                  ? "border-b-2 border-black "
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("new")}
            >
              NEW IN
            </button>
            <button
              className={`text-lg font-bold ${
                activeTab === "bestsellers"
                  ? "border-b-2 border-black -mb-[2px]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("bestsellers")}
            >
              BESTSELLERS
            </button>
          </div>
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
              {activeTab === "new"
                ? newProducts.map((product) => (
                    <div className="splide__slide">
                      <ProductCard product={product} key={product.id} />
                    </div>
                  ))
                : bestsellers.map((product) => (
                    <div className="splide__slide">
                      <ProductCard product={product} key={product.id} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
