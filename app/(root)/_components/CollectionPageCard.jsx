import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionPageCard = ({ product }) => {
  return (
    <div className="bg-white">
      <Link href={`/products/${product.slug}`}>
        <div className="product-card__image relative h-[250px] overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="product-card__content p-4">
        <div className="mb-2">
          <h3 className="product-card__title text-lg font-bold">
            <Link
              href={`/products/${product.slug}`}
              className="hover:underline"
            >
              {product.title}
            </Link>
          </h3>
          <div className="text-xs text-gray-600">
            ({product.reviewsCount} Reviews)
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold">
            {product.salePrice ? (
              <>
                <span className="text-gray-500 line-through text-sm mr-2">
                  ${product.regularPrice}
                </span>
                ${product.salePrice}
              </>
            ) : (
              <>${product.regularPrice}</>
            )}
          </span>
          <span className="text-gray-400 px-1">|</span>
          <span className="text-sm text-gray-600">
            Serves {product.servings}
          </span>
        </div>

        <button
          className={`w-full py-2.5 px-4 font-bold uppercase text-sm ${
            product.soldOut
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black hover:bg-gray-800 text-white transition-colors"
          }`}
          disabled={product.soldOut}
        >
          {product.soldOut ? "Sold out" : "Add to bag"}
        </button>
      </div>
    </div>
  );
};

export default CollectionPageCard;
