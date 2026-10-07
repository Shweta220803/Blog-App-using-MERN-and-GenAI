import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";
import { useTheme } from "../../context/ThemeContext";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";

const Layout = () => {
  const { navigate, axios, setToken } = useAppContext();
  const { darkMode, toggleTheme } = useTheme();

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d0f14] transition-colors duration-300">
      {/* Top Navbar */}
      <header
        className="
          flex h-[70px] items-center justify-between
          border-b border-gray-200 dark:border-gray-800
          bg-white dark:bg-[#0d0f14]
          px-5 sm:px-8 lg:px-10
          transition-colors duration-300
        "
      >
        {/* Brand */}
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => navigate("/admin")}
        >
          {/* Logo */}
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              bg-gradient-to-br from-emerald-600 to-green-600
              shadow-md shadow-emerald-500/20
            "
          >
            <span className="text-lg font-bold text-white">I</span>
          </div>

          {/* Brand Text */}
          <div>
            <h1
              className="
                text-lg font-bold tracking-tight
                text-gray-900 dark:text-white
                sm:text-xl
              "
            >
              InkForge
              <span className="text-emerald-600 dark:text-emerald-400">
                {" "}
                AI
              </span>
            </h1>

            <p
              className="
                text-[9px] font-medium uppercase
                tracking-[0.2em]
                text-gray-500 dark:text-gray-400
                sm:text-[10px]
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

          {/* Logout */}
          <button
            onClick={logout}
            className="
              group flex items-center gap-2
              rounded-xl
              bg-gradient-to-r from-emerald-600 to-green-600
              px-4 py-2.5
              text-sm font-medium text-white
              shadow-md shadow-emerald-500/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg hover:shadow-emerald-500/30
              cursor-pointer
            "
          >
            <FiLogOut
              className="
                text-base
                transition-transform duration-300
                group-hover:-translate-x-0.5
              "
            />

            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-70px)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
