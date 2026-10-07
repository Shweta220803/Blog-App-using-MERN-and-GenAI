import React, { useState } from "react";
import { FiArrowRight, FiLock, FiMail } from "react-icons/fi";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="
        relative flex min-h-screen items-center justify-center
        overflow-hidden
        bg-gray-50 dark:bg-[#0d0f14]
        px-6
        transition-colors duration-300
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute
          -left-32 -top-32
          h-72 w-72
          rounded-full
          bg-violet-500/10
          blur-3xl
          dark:bg-violet-600/10
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-32 -right-32
          h-72 w-72
          rounded-full
          bg-indigo-500/10
          blur-3xl
          dark:bg-indigo-600/10
        "
      />

      {/* Login Card */}
      <div
        className="
          relative w-full max-w-md
          overflow-hidden
          rounded-2xl
          border border-gray-200 dark:border-gray-800
          bg-white dark:bg-[#12151c]
          p-8
          shadow-xl shadow-gray-200/50
          dark:shadow-black/30
          transition-colors duration-300
          sm:p-10
        "
      >
        {/* Brand */}
        <div className="mb-8 flex flex-col items-center text-center">
          {/* Logo */}
          <div
            className="
              mb-5 flex h-12 w-12 items-center justify-center
              rounded-xl
            bg-gradient-to-br from-emerald-600 to-green-600
              shadow-lg shadow-violet-500/20
            "
          >
            <span className="text-xl font-bold text-white">I</span>
          </div>

          {/* Heading */}
          <h1
            className="
              text-3xl font-bold tracking-tight
              text-gray-900 dark:text-white
            "
          >
            Welcome back <span className="text-primary">Admin</span>
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sign in to access your InkForge AI dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="
                mb-2 block text-sm font-medium
                text-gray-700 dark:text-gray-300
              "
            >
              Email address
            </label>

            <div className="relative">
              <FiMail
                className="
                  absolute left-3 top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  w-full rounded-xl
                  border border-gray-200 dark:border-gray-700
                  bg-gray-50 dark:bg-[#0d0f14]
                  py-3 pl-10 pr-4
                  text-sm
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400
                  outline-none
                  transition-all duration-200
                  focus:border-emerald-500
                  focus:ring-2 focus:ring-violet-500/10
                "
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="
                mb-2 block text-sm font-medium
                text-gray-700 dark:text-gray-300
              "
            >
              Password
            </label>

            <div className="relative">
              <FiLock
                className="
                  absolute left-3 top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="
                  w-full rounded-xl
                  border border-gray-200 dark:border-gray-700
                  bg-gray-50 dark:bg-[#0d0f14]
                  py-3 pl-10 pr-4
                  text-sm
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400
                  outline-none
                  transition-all duration-200
                  focus:border-emerald-500
                  focus:ring-2 focus:ring-violet-500/10
                "
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              group flex w-full
              items-center justify-center gap-2
              rounded-xl
              bg-gradient-to-br from-emerald-600 to-green-600             
              py-3 text-sm font-semibold text-white
              shadow-lg shadow-emerald-500/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-xl hover:shadow-emerald-500/30
              cursor-pointer
            "
          >
            Sign in
            <FiArrowRight
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </form>

        {/* Footer Text */}
        <p className="mt-7 text-center text-xs text-gray-400 dark:text-gray-500">
          Secure access to your publishing dashboard
        </p>
      </div>
    </div>
  );
};

export default Login;
