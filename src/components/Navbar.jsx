import { NavLink } from "react-router-dom";
import "@fontsource/oswald/700.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a2e] shadow-md w-full px-5">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white font-oswald uppercase">
            NK EARTHMOVING CORPORATION
          </h1>
          <p className="hidden md:block text-sm text-gray-300 mt-1">
            Specialist in Bucket & Fork | Earthmoving Attachments & Spare Parts
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative text-white font-medium transition
              after:absolute after:left-0 after:-bottom-1 after:h-[3px]
              after:bg-orange-500 after:transition-all
              ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative text-white font-medium transition
              after:absolute after:left-0 after:-bottom-1 after:h-[3px]
              after:bg-orange-500 after:transition-all
              ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            Products & Services
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a2e] px-4 pb-4">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-white border-b border-gray-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-white"
          >
            Products & Services
          </NavLink>
        </div>
      )}
    </nav>
  );
}
