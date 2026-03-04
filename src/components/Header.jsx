import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/LOGO.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass =
    "bg-gradient-to-r from-[#F43325] to-[#F98006] bg-clip-text text-transparent font-bold";

  const normalClass =
    "text-white hover:text-[#F43325] transition";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1209px] px-4 md:px-0">
      
      <div className="h-[80px] rounded-[24px] bg-white/10 backdrop-blur-md flex items-center justify-between px-6 md:px-12 shadow-lg">

        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="text-white text-[24px] font-bold font-inter tracking-[-0.6px]"
          >
            <img src={logo} alt="HIMY Logo" className="h-[70px] object-contain" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 text-[20px] uppercase tracking-[0.7px] font-helvetica">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : normalClass}>
            Home
          </NavLink>

          <NavLink to="/menu" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Menu
          </NavLink>

          <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Gallery
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile 3-Line Menu */}
        <div
          className="md:hidden flex flex-col gap-[6px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 
            ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 
            ${isOpen ? "opacity-0" : ""}`}></span>

          <span className={`w-6 h-[2px] bg-white transition-all duration-300 
            ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-[400px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="rounded-[24px] bg-white/10 backdrop-blur-md py-6 flex flex-col items-center gap-6 text-[20px] uppercase tracking-[0.7px] font-helvetica">

          <NavLink onClick={() => setIsOpen(false)} to="/" end className={({ isActive }) => isActive ? activeClass : normalClass}>
            Home
          </NavLink>

          <NavLink onClick={() => setIsOpen(false)} to="/menu" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Menu
          </NavLink>

          <NavLink onClick={() => setIsOpen(false)} to="/gallery" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Gallery
          </NavLink>

          <NavLink onClick={() => setIsOpen(false)} to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>
            About
          </NavLink>

          <NavLink onClick={() => setIsOpen(false)} to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>
            Contact
          </NavLink>

        </div>
      </div>

    </div>
  );
};

export default Header;