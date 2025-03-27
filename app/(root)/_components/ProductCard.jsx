"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col group bg-white duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-[300px] w-full">
        <div className="w-full h-full transition-opacity duration-300 ease-in-out">
          <Image
            src={isHovered ? product.hoverImage : product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-4 left-0 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-black text-white text-xs font-bold uppercase p-2 w-fit block">
              New
            </span>
          )}

          {product.isOffer && (
            <span className="bg-red-600 text-white text-xs font-bold uppercase p-2 w-fit block">
              Offer
            </span>
          )}

          {product.isSuitableForFreezing && (
            <span className="bg-blue-600 text-white text-xs font-bold uppercase p-2 w-fit block">
              Suitable for freezing
            </span>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow gap-3">
        <h3 className="text-lg font-bold">{product.title}</h3>
        {product.reviewsCount && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-700 font-medium">
              ({product.reviewsCount}{" "}
              {product.reviewsCount === 1 ? "Review" : "Reviews"})
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          {product.servings && (
            <>
              <span className="text-gray-400 px-1">|</span>
              <div className="flex items-center gap-1">
                <span className="font-medium">Serves 2+</span>
              </div>
            </>
          )}
        </div>
        <Link
          href={product.link}
          className="border px-4 md:px-6 py-3 border-white bg-black text-white hover:bg-transparent hover:border-black hover:text-black transition-colors uppercase text-xs font-bold w-fit"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
