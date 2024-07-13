import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/image/Logo.png';
import { FiList } from 'react-icons/fi';
import ThemeToggle from './theme/theme';
import { useTheme } from '../context/themeContext';

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const { theme } = useTheme();
  const mobileNavRef = useRef(null);

  const toggleNavbar = () => {
    setIsMobileNavVisible(prev => !prev);
  };

  const closeNavbar = () => {
    setIsMobileNavVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        closeNavbar();
      }
    };
    if (isMobileNavVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileNavVisible]);

  return (
    <div className={`w-full ${theme === 'light' ? 'bg-gray-300' : 'bg-black'} sticky top-0 z-50 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
      <div className="mx-auto flex w-full max-w-7xl justify-between px-8 py-5 text-sm">
        <div className="flex items-center">
          <section className="mr-10">
            <a href="/">
              <img src={Logo} alt="Logo" id="logo" />
            </a>
          </section>
          <section className="flex-1 hidden md:flex justify-center items-center space-x-8">
            <a
              href="#banner"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={closeNavbar}
            >
              <span className='text-xl font-bold'>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#about"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={closeNavbar}
            >
              <span className='text-xl font-bold'>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#workingprocess"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={closeNavbar}
            >
              <span className='text-xl font-bold'>Process</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#tech-stack"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={closeNavbar}
            >
              <span className='text-xl font-bold'>Technologies</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#services"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={closeNavbar}
            >
              <span className='text-xl font-bold'>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </section>
        </div>
        <section className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className={`bg-red-200 hover:bg-red-500 font-bold rounded-lg text-sm px-5 py-2.5 ${theme === 'light' ? 'text-black hover:text-white' : 'text-white hover:text-white'}`}
            onClick={closeNavbar}
          >
            Contact Us
          </a>
          <ThemeToggle />
        </section>
        <FiList
          className="cursor-pointer text-5xl md:hidden"
          style={{ color: theme === 'light' ? 'black' : 'white' }}
          onClick={toggleNavbar}
        />
      </div>
      {isMobileNavVisible && (
        <div ref={mobileNavRef} className={`w-full md:hidden flex flex-col items-end ${theme === 'light' ? 'bg-gray-300' : 'bg-black'} ${theme === 'light' ? 'text-black' : 'text-white'} py-5 px-5`}>
          <a
            href="#banner"
            className="block py-4 text-lg"
            onClick={closeNavbar}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-4 text-lg"
            onClick={closeNavbar}
          >
            About Us
          </a>
          <a
            href="#workingprocess"
            className="block py-4 text-lg"
            onClick={closeNavbar}
          >
            Process
          </a>
          <a
            href="#tech-stack"
            className="block py-4 text-lg"
            onClick={closeNavbar}
          >
            Technologies
          </a>
          <a
            href="#services"
            className="block py-4 text-lg"
            onClick={closeNavbar}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block py-4 text-lg"
            onClick={closeNavbar}
          >
            Contact Us
          </a>
          <ThemeToggle />
        </div>
      )}
    </div>
  );
};

export default Navbar;
