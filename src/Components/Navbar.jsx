import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Btn from './Btn';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed lg:px-20 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navbarScrolled ? 'bg-gray-800 lg:bg-opacity-85 shadow-md ' : 'bg-gray-800 lg:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold ">Lexis</span>
        </div>
        <div className="hidden md:flex md:items-center space-x-8">
          <NavLink to={"/"} style={(e)=>{return{color: e.isActive ? "text-purple-600" : "" }}} className={` transition duration-300 ${navbarScrolled ? 'text-white' : 'text-white'}`}>Home</NavLink>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className={`inline-flex justify-center items-center w-full transition duration-300 ${
                  navbarScrolled ? 'text-white' : 'text-white'
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Dropdown
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isDropdownOpen && (
              <div
                className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-1" role="none">
                  <NavLink href="#" className="block px-4 py-2 text-sm text-white hover:bg-slate-400" role="menuitem">Dashboard</NavLink>
                  <NavLink href="#" className="block px-4 py-2 text-sm text-white hover:bg-slate-400" role="menuitem">Settings</NavLink>
                  <NavLink href="#" className="block px-4 py-2 text-sm text-white hover:bg-slate-400" role="menuitem">Earnings</NavLink>
                  <NavLink href="#" className="block px-4 py-2 text-sm text-white hover:bg-slate-400" role="menuitem">Sign out</NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink href="#" className={`transition duration-300 ${navbarScrolled ? 'text-white' : 'text-white'}`}>Services</NavLink>
          <NavLink href="#" className={`transition duration-300 ${navbarScrolled ? 'text-white' : 'text-white'}`}>Pricing</NavLink>
          <NavLink href="#" className={`transition duration-300 ${navbarScrolled ? 'text-white' : 'text-white'}`}>Contact</NavLink>
          <Btn text={"Let's talk"}/>
        </div>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className={`transition duration-300 ${navbarScrolled ? 'text-white' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 h-screen transition-all duration-300 ease-in-out transform">
          <NavLink href="#" className="block px-4 py-2 text-sm text-white">Home</NavLink>
          <div className="relative">
            <button
              type="button"
              className="w-full text-left px-4 py-2 text-sm text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Dropdown
              <svg
                className="ml-2 w-5 h-5 inline "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="pl-4 w-full mt-1 bg-slate-400 shadow-lg"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Dashboard</NavLink>
                  <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Settings</NavLink>
                  <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Earnings</NavLink>
                  <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Sign out</NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink href="#" className="block px-4 py-2 text-sm text-white">Services</NavLink>
          <NavLink href="#" className="block px-4 py-2 text-sm text-white">Pricing</NavLink>
          <NavLink href="#" className="block px-4 py-2 text-sm text-white">Contact</NavLink>
          <Btn text={"Let's talk"}/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
