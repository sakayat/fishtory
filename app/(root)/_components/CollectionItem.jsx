import React from "react";
import Link from "next/link";
import classes from "./Collection.module.css";

const CollectionItem = ({ product }) => {
  return (
    <div
      key={product.id}
      className={`splide__slide ${classes.splide__slide} w-full bg-white`}
    >
      <Link href={product.link}>
        <div className="group overflow-hidden block h-64 w-full">
          <img
            src={product.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="py-3 text-center">
          <h3 className="text-sm font-bold uppercase text-black">
            {product.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CollectionItem;
