import React from 'react';
import { SiReact } from 'react-icons/si';
import { FaDatabase, FaPython, FaJava } from 'react-icons/fa';
import { RiFlutterFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { useTheme } from '../context/themeContext'; // Ensure you import useTheme from your context

const Services = () => {
  const { theme } = useTheme(); // Get the current theme from context

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Item */}
          {[
            { icon: SiReact, title: 'Web Development', description: 'Using React.js to build modern web applications.', bg: 'bg-blue-100', text: 'text-blue-500' },
            { icon: FaPython, title: 'Backend Development', description: 'Building scalable APIs with Python.', bg: 'bg-green-100', text: 'text-green-500' },
            { icon: FaDatabase, title: 'Database Management', description: 'Designing efficient databases for your applications.', bg: 'bg-purple-100', text: 'text-purple-500' },
            { icon: RiFlutterFill, title: 'Mobile & Desktop Apps', description: 'Developing apps with Flutter and React Native.', bg: 'bg-yellow-100', text: 'text-yellow-500' },
            { icon: SiDjango, title: 'Python Backend', description: 'Backend solutions with Python.', bg: 'bg-red-100', text: 'text-red-500' },
            { icon: FaJava, title: 'Java Backend', description: 'Backend solutions with Java (coming soon).', bg: 'bg-red-100', text: 'text-sky-500' },
          ].map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} h-64`}
            >
              <div className={`p-3 rounded-full ${service.bg} ${service.text}`}>
                <service.icon className="text-3xl" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
