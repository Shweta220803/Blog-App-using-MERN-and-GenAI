import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPlusSquare,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside
      className="
        flex min-h-full w-auto flex-col
        border-r border-gray-200
        bg-white
        pt-6
        dark:border-zinc-800
        dark:bg-zinc-950
        transition-colors duration-300
      "
    >
      <NavLink
        end
        to="/admin"
        className={({ isActive }) =>
          `group flex items-center gap-3
          border-r-4 py-3.5 px-3 md:px-9 md:min-w-64
          cursor-pointer transition-all duration-200
          ${
            isActive
              ? "border-emerald-600 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-emerald-400"
          }`
        }
      >
        <FiHome className="min-w-5 text-xl transition-colors duration-200" />
        <p className="hidden md:inline-block text-sm font-medium">
          Dashboard
        </p>
      </NavLink>

      <NavLink
        end
        to="/admin/addBlog"
        className={({ isActive }) =>
          `group flex items-center gap-3
          border-r-4 py-3.5 px-3 md:px-9 md:min-w-64
          cursor-pointer transition-all duration-200
          ${
            isActive
              ? "border-emerald-600 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-emerald-400"
          }`
        }
      >
        <FiPlusSquare className="min-w-5 text-xl transition-colors duration-200" />
        <p className="hidden md:inline-block text-sm font-medium">
          Add Blog
        </p>
      </NavLink>

      <NavLink
        end
        to="/admin/listBlog"
        className={({ isActive }) =>
          `group flex items-center gap-3
          border-r-4 py-3.5 px-3 md:px-9 md:min-w-64
          cursor-pointer transition-all duration-200
          ${
            isActive
              ? "border-emerald-600 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-emerald-400"
          }`
        }
      >
        <FiFileText className="min-w-5 text-xl transition-colors duration-200" />
        <p className="hidden md:inline-block text-sm font-medium">
          List Blog
        </p>
      </NavLink>

      <NavLink
        end
        to="/admin/comments"
        className={({ isActive }) =>
          `group flex items-center gap-3
          border-r-4 py-3.5 px-3 md:px-9 md:min-w-64
          cursor-pointer transition-all duration-200
          ${
            isActive
              ? "border-emerald-600 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-emerald-400"
          }`
        }
      >
        <FiMessageSquare className="min-w-5 text-xl transition-colors duration-200" />
        <p className="hidden md:inline-block text-sm font-medium">
          Comments
        </p>
      </NavLink>
    </aside>
  );
};

export default Sidebar;


