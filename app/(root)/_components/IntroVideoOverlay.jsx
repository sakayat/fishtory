import Link from "next/link";
import React from "react";

const IntroVideoOverlay = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dmbu1haaj/video/upload/v1743080277/yx8ylem38vkhrgumnkls.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-white flex flex-col items-center gap-3">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            OUR STORY
          </h2>
          <p className=" leading-relaxed font-medium text-center">
            The journey from wholesalers and restaurants to online fishmonger.
          </p>
          <Link
            href="/about-us"
            className="border px-4 md:px-6 py-3 text-black border-white bg-white hover:bg-transparent hover:text-white transition-colors uppercase text-xs font-bold block w-fit"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroVideoOverlay;
