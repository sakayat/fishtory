"use client";
import Link from "next/link";
import React, { useState } from "react";
import Breadcrumbs from "../../_components/Breadcrumbs";
import SectionTitle from "../../_components/SectionTitle";
import CollectionPageCard from "../../_components/CollectionPageCard";

const CollectionsPage = ({ params }) => {
  const [sortBy, setSortBy] = useState("manual");

  const { slug } = params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const products = [
    {
      id: 1,
      title: "Breaded Whitebait (Frozen)",
      slug: "breaded-whitebait-frozen",
      image: "/images/product1.webp",
      regularPrice: 4,
      reviewsCount: 15,
      servings: "1",
      soldOut: true,
    },
    {
      id: 2,
      title: "Brown Crab Meat",
      slug: "brown-crab-meat",
      image: "/images/product2.webp",
      regularPrice: 8.99,
      salePrice: 7.5,
      reviewsCount: 32,
      servings: "2",
      soldOut: false,
    },
    {
      id: 3,
      title: "Butterfly Mackerel",
      slug: "butterfly-mackerel",
      image: "/images/product3.webp",
      regularPrice: 10.99,
      salePrice: 6.55,
      reviewsCount: 48,
      servings: "3-4",
      soldOut: false,
    },
    {
      id: 4,
      title: "Cod Fillets x 2",
      slug: "cod-fillets-x2",
      image: "/images/product4.webp",
      regularPrice: 12.99,
      salePrice: 10.99,
      reviewsCount: 24,
      servings: "2",
      soldOut: false,
    },
    {
      id: 5,
      title: "Coley Portions x 2",
      slug: "coley-portions-x2",
      image: "/images/product5.webp",
      regularPrice: 12.99,
      salePrice: 10.99,
      reviewsCount: 24,
      servings: "2",
      soldOut: false,
    },
    {
      id: 6,
      title: "Dressed Crab",
      slug: "dressed-crab",
      image: "/images/product6.webp",
      regularPrice: 12.99,
      salePrice: 10.99,
      reviewsCount: 24,
      servings: "2",
      soldOut: false,
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "best-selling") return b.reviewsCount - a.reviewsCount;
    if (sortBy === "title-ascending") return a.title.localeCompare(b.title);
    if (sortBy === "title-descending") return b.title.localeCompare(a.title);
    if (sortBy === "price-ascending")
      return (a.salePrice || a.regularPrice) - (b.salePrice || b.regularPrice);
    if (sortBy === "price-descending")
      return (b.salePrice || b.regularPrice) - (a.salePrice || a.regularPrice);
    return 0;
  });

  return (
    <div className="bg-[#F0EDEB]">
      <div className="container mx-auto px-4 py-5">
        <Breadcrumbs title={title} />
        <SectionTitle title={title} />
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <div className="flex justify-end items-center">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium" htmlFor="SortBy">
                  Sort by
                </label>
                <div className="relative">
                  <select
                    id="SortBy"
                    className="py-2 pl-3 pr-8 border rounded text-sm appearance-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="price-ascending">Price: Low to high</option>
                    <option value="price-descending">Price: High to low</option>
                    <option value="title-ascending">A-Z</option>
                    <option value="title-descending">Z-A</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <CollectionPageCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
