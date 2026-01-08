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
      <div className="bg-black border-t border-gray-700">
        <div
          className="
            max-w-7xl mx-auto px-4 py-4
            flex flex-col sm:flex-row
            gap-3 sm:gap-0
            justify-between items-center
            text-xs sm:text-sm
          "
        >
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">
              Terms & Support
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Credit */}
          <div className="opacity-80 text-center sm:text-right">
            Designed with <span className="font-semibold">Canva</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
