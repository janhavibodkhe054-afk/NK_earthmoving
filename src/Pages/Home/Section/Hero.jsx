import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-[#12142e] text-white overflow-hidden
                        pt-16 sm:pt-20 md:pt-24
                        pb-24 sm:pb-28 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          NK EARTHMOVING CORPORATION
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-200">
          Specialist in Bucket & Fork | Earthmoving Attachments & Spare Parts
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <button
            className="bg-orange-400 text-white font-bold text-base sm:text-lg
               px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:shadow-lg transition
               w-full sm:w-auto max-w-[200px] sm:max-w-[200px] sm:mx-0 mx-auto"
          >
            Get Started
          </button>

          <button
            className="bg-green-500 text-white font-bold text-base sm:text-lg
               px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2
               hover:shadow-lg transition
               w-full sm:w-auto max-w-[200px] sm:max-w-[200px] sm:mx-0 mx-auto"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Diagonal Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <polygon points="0,150 1440,50 1440,150 0,150" fill="#12142e" />
        </svg>
      </div>

      {/* ONLY SECTION ANIMATION */}
      <style>
        {`
          .hero-slide {
            opacity: 0;
            transform: translateY(40px);
            animation: heroUp 0.9s ease-out forwards;
          }

          @keyframes heroUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
