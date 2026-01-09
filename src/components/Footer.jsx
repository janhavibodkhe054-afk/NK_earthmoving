import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c2541] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 text-center">
        <h1 className="text-base sm:text-lg font-bold tracking-wide">
          NK EARTHMOVING CORPORATION
        </h1>

        <p className="mt-2 text-xs sm:text-sm opacity-90">
          © 2024 All Rights Reserved
        </p>

        <p className="mt-1 text-xs sm:text-sm opacity-80 max-w-2xl mx-auto">
          Specialist in Bucket & Fork | Earthmoving Attachments & Spare Parts
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-white/10">
        <div
          className="
            max-w-7xl mx-auto px-4 py-4
            flex flex-col sm:flex-row
            gap-3 sm:gap-0
            justify-between items-center
            text-xs sm:text-sm
          "
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
