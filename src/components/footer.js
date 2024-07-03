import React from 'react';
import { SiZalo } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegramPlane, FaFacebookSquare, FaWhatsappSquare  } from "react-icons/fa";
import { BiMailSend } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaSquareXTwitter } from "react-icons/fa6";

import Logo from '../assets/image/Logo.png'

const Footer = () => {
  return (
    <>
      <div className="bg-white w-full flex flex-wrap justify-around items-start p-5">
        <div className="p-5 flex flex-col items-center">
          <img src={Logo} alt='Company Logo' id='logo' className="mb-4" />
          <p className="text-black text-lg text-center mb-4 max-w-xs"> Welcome to XLR Team
            Your full-stack web design experts specializing in both
            backend and frontend
            development.
          </p>
          <div className="flex gap-6 pb-5">
            <a href="https://link_to_facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-2xl text-black cursor-pointer hover:text-red-400" />
            </a>
            <a href="https://www.tiktok.com/@xlr.team03?_t=8neyjldfMXf&_r=1&fbclid=IwZXh0bgNhZW0CMTAAAR07JSflNavTwAuJef6NdQ4GP_ErGzbhqkIB5R67qnZS0Q0EYkYwvxgskoo_aem_SFgx8eRIy5yV1saUXP3saw" target="_blank" rel="noopener noreferrer">
              <AiFillTikTok className="text-2xl text-black cursor-pointer hover:text-red-400" />
            </a>
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-2xl text-black cursor-pointer hover:text-red-400" />
            </a>
            <a href="https://x.com/XLRTeam03" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="text-2xl text-black cursor-pointer hover:text-red-400" />
            </a>
          </div>
        </div>
        <div className="p-5 max-w-xs">
          <ul>
            <p className="text-black font-bold text-2xl pb-4">Contact Us</p>
            <li className="text-black text-md pb-2 font-semibold flex items-center">
              <BiMailSend className="mr-2 text-lg" />
              xlr.devteam03@gmail.com
            </li>
            <li className="text-black text-md pb-2 font-semibold flex items-center">
              <AiOutlinePhone className="mr-2 text-lg" />
              +84 377783437
            </li>
            <li className="text-black text-md pb-2 font-semibold flex items-center">
              <SiZalo className="mr-2 text-lg" />
              +84 377783437
            </li>
            <li className="text-black text-md pb-2 font-semibold flex items-center">
              <FaWhatsappSquare  className="mr-2 text-lg" />
              +84 377783437
            </li>
          </ul>
        </div>
        <div className="p-5 max-w-xs">
          <ul>
            <p className="text-black font-bold text-2xl pb-4">Company</p>
            <li className="text-black text-md pb-2 font-semibold hover:text-black cursor-pointer">
              <a href="/about_us">About</a>
            </li>
            <li className="text-black text-md pb-2 font-semibold hover:text-black cursor-pointer">
              <a href="/contact_us">Product</a>
            </li>
          </ul>
        </div>
        <div className="p-5 max-w-xs">
          <ul>
            <p className="text-black font-bold text-2xl pb-4">Support</p>
            <li className="text-black text-md pb-2 font-semibold hover:text-black cursor-pointer">
              <a href="/contact_us">Contact</a>
            </li>
            <li className="text-black text-md pb-2 font-semibold hover:text-black cursor-pointer">
              <a href="/service">Services</a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="flex flex-col justify-center items-center text-center p-2 bg-black">
        <h1 className="text-gray-50 font-semibold">
          © 2024 by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            XLR Team
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
