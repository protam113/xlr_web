import { useTheme } from "../../context/themeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <div
        className={`w-20 h-10 ${
          theme === "dark" ? "bg-gradient-to-r from-gray-400 to-gray-600" : "bg-gradient-to-r from-pink-300 to-pink-500"
        } rounded-full relative`}
      >
        <input
          id="check-5"
          type="checkbox"
          className="absolute opacity-0 w-full h-full cursor-pointer"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <label
          htmlFor="check-5"
          className="block w-full h-full rounded-full transition-all duration-300 cursor-pointer relative"
        >
          <span
            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-lg ${
              theme === "dark" ? "right-1" : "left-1"
            }`}
          >
            {theme === "dark" ? (
              <FiMoon className="text-gray-600 transition-opacity duration-300 opacity-100" />
            ) : (
              <FiSun className="text-yellow-500 transition-opacity duration-300 opacity-100" />
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
