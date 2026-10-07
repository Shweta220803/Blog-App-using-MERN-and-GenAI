import React from "react";
import { FiArrowRight, FiMoon, FiSun } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className="
        flex items-center justify-between
        border-b
        border-gray-200 dark:border-gray-800
        bg-white dark:bg-[#0d0f14]
        px-6 py-5
        sm:px-12
        xl:px-24
        transition-colors duration-300
      "
    >
      {/* Logo & Brand */}
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center gap-3"
      >
        {/* Logo Mark */}
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
              bg-gradient-to-br from-emerald-600 to-green-600
            shadow-md
          "
        >
          <span className="text-lg font-bold text-white">I</span>
        </div>

        {/* Brand Name */}
        <div>
          <h1
            className="
              text-lg font-bold tracking-tight
              text-gray-900 dark:text-white
              sm:text-xl
            "
          >
            InkForge
            <span className="text-emerald-600 dark:text-emerald-400"> AI</span>
          </h1>

          <p
            className="
              text-[10px] font-medium uppercase
              tracking-[0.2em]
              text-gray-500 dark:text-gray-400
            "
          >
            AI-Powered Publishing
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            border border-gray-200 dark:border-gray-700
            bg-gray-50 dark:bg-gray-900
            text-gray-700 dark:text-gray-200
            transition-all duration-300
            hover:scale-105
            hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer
          "
        >
          {darkMode ? (
            <FiSun className="text-lg" />
          ) : (
            <FiMoon className="text-lg" />
          )}
        </button>

        {/* Login / Dashboard */}
        <button
          onClick={() => navigate("/admin")}
          className="
            flex items-center gap-2
            rounded-xl
            bg-gradient-to-br from-emerald-600 to-green-600          
            px-5 py-2.5
            text-sm font-medium text-white
            shadow-md shadow-emerald-500/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-lg hover:shadow-primary/30
            cursor-pointer
            sm:px-7
          "
        >
          {token ? "Dashboard" : "Login"}

          <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
