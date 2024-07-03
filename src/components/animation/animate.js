import React, { useState } from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { RiTailwindCssFill, RiFlutterFill } from 'react-icons/ri';
import { SiDjango, SiFlask } from "react-icons/si";

const OrbitingElectrons = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="relative flex items-center justify-center w-full h-screen ">
            <div 
                className="nucleus"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="icon-nucleus text-3xl font-bold text-white">XLR</span> 
            </div>

          {/* Orbits */}
            <div className={`orbit orbit-1 ${isHovered ? 'align' : ''}`}>
                <div className="electron">
                    <FaReact className="icon" />
                    <div className="popup">ReactJS</div>
                </div>
            </div>
            <div className={`orbit orbit-2 ${isHovered ? 'align' : ''}`}>
                <div className="electron">
                    <RiTailwindCssFill className="icon" />
                    <div className="popup">TailwindCSS</div>
                </div>
            </div>
            <div className={`orbit orbit-3 ${isHovered ? 'align' : ''}`}>
                <div className="electron">
                    <FaPython className="icon" />
                    <div className="popup">Python</div>
                </div>
            </div>
            <div className={`orbit orbit-4 ${isHovered ? 'align' : ''}`}>
                <div className="electron">
                    <RiFlutterFill className="icon" />
                    <div className="popup">Flutter</div>
                </div>
            </div>
            <div className={`orbit orbit-5 ${isHovered ? 'align' : ''}`}>
                <div className="electron">
                    <SiDjango className="icon" />
                    <div className="popup">Django</div>
                </div>
            </div>
            <div className={`orbit orbit-6 ${isHovered ? 'align' : ''}`}>
                <div className="electron">
                    <SiFlask className="icon" />
                    <div className="popup">Flask</div>
                </div>
            </div>
        </div>
    );
};

export default OrbitingElectrons;
