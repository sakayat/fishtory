import React from "react";
import ReviewForm from "./ReviewForm";
import { ChevronDown } from "lucide-react";

const ToggleReview = ({
  toggleReviews,
  isReviewsOpen,
  showReviewForm,
  setShowReviewForm,
  product,
}) => {
  return (
    <div className="border border-gray-200 bg-white">
      <button
        className="w-full px-6 py-4 flex justify-between items-center font-medium"
        onClick={toggleReviews}
      >
        <span>Reviews ({product.reviews.length})</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isReviewsOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      <div
        id="reviews-content"
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isReviewsOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 border-t border-gray-200">
          <div className="mb-8">
            {!showReviewForm ? (
              <button
                className="bg-black text-white px-4 py-2 text-sm font-medium"
                onClick={() => setShowReviewForm(true)}
              >
                Write a review
              </button>
            ) : (
              <div className="bg-gray-100 p-5 mt-4">
                <h4 className="font-bold mb-4">Write Your Review</h4>
                <ReviewForm setShowReviewForm={setShowReviewForm} />
              </div>
            )}
          </div>

          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="font-bold mb-1">{review.title}</h4>
                <p className="text-sm mb-2">{review.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">{review.author}</span>
                  <span className="mx-2">•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleReview;
