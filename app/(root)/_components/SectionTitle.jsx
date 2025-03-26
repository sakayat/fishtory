import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="py-5 text-center space-y-5">
      <h1 className="uppercase font-bold text-2xl lg:text-3xl">
        {title}
      </h1>
      <p className=" max-w-3xl mx-auto text-sm font-medium">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
