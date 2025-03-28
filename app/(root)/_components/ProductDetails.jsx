"use client";
import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import ToggleDescription from "./ToggleDescription";
import ToggleReview from "./ToggleReview";

const ProductDetails = ({ product }) => {
  const mainSplideRef = useRef(null);
  const mainSliderRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (mainSliderRef.current) {
      mainSplideRef.current = new Splide(mainSliderRef.current, {
        type: "fade",
        rewind: true,
        pagination: false,
        arrows: true,
        speed: 400,
      });

      mainSplideRef.current.mount();

      mainSplideRef.current.on("moved", function (newIndex) {
        setActiveImageIndex(newIndex);
      });
    }

    return () => {
      if (mainSplideRef.current) {
        mainSplideRef.current.destroy();
      }
    };
  }, []);

  const selectThumbnail = (index) => {
    if (mainSplideRef.current) {
      mainSplideRef.current.go(index);
    }
    setActiveImageIndex(index);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleDescription = () => {
    setIsDescriptionOpen((prev) => !prev);
    if (!isDescriptionOpen) {
      setIsReviewsOpen(false);
    }
  };

  const toggleReviews = () => {
    setIsReviewsOpen((prev) => !prev);
    if (!isReviewsOpen) {
      setIsDescriptionOpen(false);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-5">
        <div className="space-y-5">
          <div className="splide" ref={mainSliderRef}>
            <div className="splide__track">
              <ul className="splide__list">
                {product.images.map((image, index) => (
                  <li key={index} className="splide__slide">
                    <div className="relative h-[500px] bg-white">
                      <Image src={image} fill className="object-cover" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => selectThumbnail(index)}
                className={`relative w-32 h-24 bg-white border cursor-pointer hover:opacity-80 transition-opacity ${
                  activeImageIndex === index
                    ? "border-2 border-black"
                    : "border-gray-200"
                }`}
              >
                <Image src={image} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {product.tags && (
            <div>
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-green-600 text-white text-xs font-bold uppercase px-2 py-1 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="text-sm">({product.reviewsCount} Reviews)</p>
          <p className="text-gray-700">{product.shortDescription}</p>
          <div className="flex items-center">
            {product.salePrice ? (
              <>
                <span className="text-gray-500 line-through text-lg mr-3">
                  ${product.regularPrice.toFixed(2)}
                </span>
                <span className="text-2xl font-bold">
                  ${product.salePrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">
                ${product.regularPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center">
            {product.weight && (
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium mr-3 mb-2">
                {product.weight}
              </span>
            )}
            {product.servings && (
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium mb-2">
                Serves {product.servings}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <span className="mr-4 font-medium">Quantity</span>
            <div className="flex items-center border border-gray-300 ">
              <button
                onClick={decrementQuantity}
                className="px-3 py-2 text-gray-600 w-10 h-10"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 border-l border-r w-12 h-10 flex items-center justify-center">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-2 text-gray-600 w-10 h-10"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            className={`w-full py-3 px-4 font-bold uppercase text-sm ${
              product.inStock
                ? "bg-black hover:bg-gray-800 text-white transition-colors"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to bag" : "Out of stock"}
          </button>

          <div className="space-y-3">
            <h3 className="font-bold">Find out more</h3>
            <ul className="space-y-2">
              {product.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <ToggleDescription
          toggleDescription={toggleDescription}
          isDescriptionOpen={isDescriptionOpen}
          product={product}
        />

        <ToggleReview
          toggleReviews={toggleReviews}
          isReviewsOpen={isReviewsOpen}
          showReviewForm ={showReviewForm }
          setShowReviewForm={setShowReviewForm}
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
