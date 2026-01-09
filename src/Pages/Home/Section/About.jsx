import React from "react";

const About = () => {
  return (
    <section
      className="bg-white text-gray-800
                        py-16 sm:py-20 md:py-19"
    >
      <div
        className="max-w-4xl mx-auto
                      px-4 sm:px-6
                      text-center"
      >
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl
                       font-bold mb-2 text-[#12142e]
                       opacity-0 animate-fadeInUp"
        >
          ABOUT US
        </h2>

        {/* Underline */}
        <div
          className="w-12 sm:w-16 h-1 bg-orange-500
                        mx-auto mb-6 sm:mb-8
                        opacity-0 animate-fadeInUp animation-delay-200"
        ></div>

        {/* Paragraph */}
        <p
          className="text-sm sm:text-base md:text-lg
                      leading-relaxed
                      opacity-0 animate-fadeInUp animation-delay-400"
        >
          NK Earthmoving Corporation is a reliable and growing name in the
          earthmoving industry. We specialize in manufacturing, supplying, and
          servicing high-quality buckets, forks, and heavy equipment
          attachments. With our new workshop facility, we provide durable
          products, precision fabrication, and dependable repair services for
          loaders, excavators, and construction machinery.
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </section>
  );
};

export default About;
