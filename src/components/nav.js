import React, { useState } from 'react';
import Logo from '../assets/image/Logo.png';
import { FiList } from 'react-icons/fi';
import ThemeToggle from './theme/theme';
import { useTheme } from '../context/themeContext'; // Đảm bảo import useTheme từ context

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [show, setShow] = useState(false);
  const { theme } = useTheme(); // Lấy theme từ context

  const toggleNavbar = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

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
              onClick={() => setShow(!show)}
            >
              <span className='text-xl font-bold'>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#about"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={() => setShow(!show)}
            >
              <span className='text-xl font-bold'>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#workingprocess"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={() => setShow(!show)}
            >
              <span className='text-xl font-bold'>Process</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#tech-stack"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={() => setShow(!show)}
            >
              <span className='text-xl font-bold'>Technologies</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#services"
              className={`relative group px-4 py-3 transition-all ${theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-600'} flex items-center`}
              onClick={() => setShow(!show)}
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
        <div className={`md:hidden flex flex-col items-end bg-gray-300 ${theme === 'light' ? 'text-black' : 'text-white'} py-5 px-5`}>
          <a
            href="#banner"
            className="block py-4 text-lg"
            onClick={() => setShow(!show)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-4 text-lg"
            onClick={() => setShow(!show)}
          >
            About Us
          </a>
          <a
            href="#workingprocess"
            className="block py-4 text-lg"
            onClick={() => setShow(!show)}
          >
            Process
          </a>
          <a
            href="#tech-stack"
            className="block py-4 text-lg"
            onClick={() => setShow(!show)}
          >
            Technologies
          </a>
          <a
            href="#services"
            className="block py-4 text-lg"
            onClick={() => setShow(!show)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block py-4 text-lg"
            onClick={() => setShow(!show)}
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
