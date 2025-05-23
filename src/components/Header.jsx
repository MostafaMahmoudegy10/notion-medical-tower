import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-50 shadow-md flex items-center justify-between px-6 py-3 sticky top-0 z-50 ">
        <div className="flex items-center">
        <Link to="/">
          <img
            src="/logo psd copy.png"
            alt="Notion Logo"
            className="h-13 w-auto object-contain"
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-900 hover:text-teal-500 font-semibold relative group transition-colors"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all"></span>
        </Link>
        <Link
          to="/clinics"
          className="text-gray-900 hover:text-teal-500 font-semibold relative group transition-colors"
        >
          Clincs
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all"></span>
        </Link>
        <Link
          to="/about"
          className="text-gray-900 hover:text-teal-500 font-semibold relative group transition-colors"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all"></span>
        </Link>
        <Link
          to="/contact"
          className="text-gray-900 hover:text-teal-500 font-semibold relative group transition-colors"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all"></span>
        </Link>
      </nav>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="text-gray-900 hover:text-teal-500 focus:outline-none"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-50 shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-900 hover:text-teal-500 font-semibold text-lg"
          >
            Home
          </Link>
          <Link
            to="/clinics"
            onClick={toggleMenu}
            className="text-gray-900 hover:text-teal-500 font-semibold text-lg"
          >
            Clincs
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-gray-900 hover:text-teal-500 font-semibold text-lg"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-gray-900 hover:text-teal-500 font-semibold text-lg"
          >
            Contact
          </Link>
        </nav>
      )}

    </header>
  );
};

export default Header;