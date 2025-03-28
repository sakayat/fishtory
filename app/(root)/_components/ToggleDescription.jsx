import React from "react";
import { ChevronDown } from "lucide-react";

const ToggleDescription = ({
  toggleDescription,
  isDescriptionOpen,
  product,
}) => {
  return (
    <div className="border border-gray-200 bg-white mb-4">
      <button
        className="w-full px-6 py-4 flex justify-between items-center font-medium"
        onClick={toggleDescription}
      >
        <span>Description</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isDescriptionOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isDescriptionOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 border-t border-gray-200">
          {product.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleDescription;
