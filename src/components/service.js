import React from 'react';
import { SiReact } from 'react-icons/si';
import { FaDatabase, FaPython, FaJava } from 'react-icons/fa';
import { RiFlutterFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { useTheme } from '../context/themeContext'; // Đảm bảo import useTheme từ context của bạn

const Services = () => {
  const { theme } = useTheme(); // Lấy theme hiện tại từ context

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Web Development */}
          <div className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 col-span-1 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <SiReact className="text-3xl" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-700">Using <span className="font-bold">React.js</span> to build modern web applications.</p>
            </div>
          </div>

          {/* Backend Development */}
          <div className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 col-span-1 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <FaPython className="text-3xl" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-700">Building scalable APIs with <span className="font-bold">Python</span>.</p>
            </div>
          </div>

          {/* Database Management */}
          <div className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 col-span-1 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <FaDatabase className="text-3xl" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Database Management</h3>
              <p className="text-gray-700">Designing efficient databases for your applications.</p>
            </div>
          </div>

          {/* Mobile & Desktop Apps */}
          <div className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 col-span-1 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <RiFlutterFill className="text-3xl" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Mobile & Desktop Apps</h3>
              <p className="text-gray-700">Developing apps with <span className="font-bold">Flutter</span> and <span className="font-bold">React Native</span>.</p>
            </div>
          </div>

          {/* Python Backend */}
          <div className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 col-span-1 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
            <div className="p-3 rounded-full bg-red-100 text-red-500">
              <SiDjango className="text-3xl" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Python Backend</h3>
              <p className="text-gray-700">Backend solutions with <span className="font-bold">Python</span>.</p>
            </div>
          </div>

          {/* Java Backend */}
          <div className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 col-span-1 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
            <div className="p-3 rounded-full bg-red-100 text-sky-500">
              <FaJava className="text-3xl" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Java Backend</h3>
              <p className="text-gray-700">Backend solutions with <span className="font-bold">Java</span> <span className='text-gray-400'>(coming soon)</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
