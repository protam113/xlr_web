import React from "react";
import { SiFlutter, SiElectron } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`py-8 sm:py-12 ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          About <span className="red_gradient">XLR Team</span>
        </h2>
        <p className="text-lg mb-8 text-center">
          XLR Team stands at the forefront of innovation, specializing in
          creating comprehensive solutions across web, mobile, and desktop
          platforms. We excel in leveraging cutting-edge technologies to deliver
          seamless, impactful experiences tailored to meet the diverse needs of
          our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Web Development */}
          <div
            className={`group rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 ${
              theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700 text-white"
                : "bg-white hover:bg-blue-200 text-gray-800"
            }`}
          >
            <div className="p-3 rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white">
              <FaReact className="text-2xl sm:text-3xl" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Web Development
              </h3>
              <p className="text-sm sm:text-base">
                Utilizing <span className="font-bold">React.js</span> and{" "}
                <span className="font-bold">Next.js</span> to build cutting-edge
                web solutions.
              </p>
            </div>
          </div>

          {/* Mobile Applications */}
          <div
            className={`group rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 ${
              theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700 text-white"
                : "bg-white hover:bg-lime-200 text-gray-800"
            }`}
          >
            <div className="p-3 rounded-full bg-green-100 text-green-500 group-hover:bg-green-500 group-hover:text-white">
              <SiFlutter className="text-2xl sm:text-3xl" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Mobile Applications
              </h3>
              <p className="text-sm sm:text-base">
                Harnessing the power of{" "}
                <span className="font-bold">Flutter</span> for cross-platform
                mobile app development.
              </p>
            </div>
          </div>

          {/* Desktop Solutions */}
          <div
            className={`group rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 ${
              theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700 text-white"
                : "bg-white hover:bg-violet-200 text-gray-800"
            }`}
          >
            <div className="p-3 rounded-full bg-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white">
              <SiElectron className="text-2xl sm:text-3xl" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Desktop Solutions
              </h3>
              <p className="text-sm sm:text-base">
                Building robust <span className="font-bold">Electron</span> and{" "}
                <span className="font-bold">Flutter</span> applications for
                desktop environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
