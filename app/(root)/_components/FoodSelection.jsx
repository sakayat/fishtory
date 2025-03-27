import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import SelectionItem from "./SelectionItem";

const FoodSelection = () => {
  const fishItems = [
    {
      id: 1,
      title: "LONDON DINING",
      description: "For a Wright seafood experience 7 days a week",
      imagePath: "/images/Restaurant-Festive-Dark.jpg",
    },
    {
      id: 2,
      title: "ENJOY AT HOME",
      description: "Order online and pick up from our restaurants",
      imagePath: "/images/festive_food_1.webp",
    },
    {
      id: 3,
      title: "SEND A GIFT",
      description: "Hook the perfect present",
      imagePath: "/images/gift_2.webp",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="FISH LOVERS"
          description="Enjoy premium seafood in one of our London restaurants or at home."
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {fishItems.map((item) => (
            <SelectionItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodSelection;
