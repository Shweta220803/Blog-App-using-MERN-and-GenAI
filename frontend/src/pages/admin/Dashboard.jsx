import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { axios } = useAppContext();

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  // fetch dashboard function
  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div
      className="
        flex-1 min-h-full
        bg-slate-50
        p-4 md:p-10
        dark:bg-zinc-950
        transition-colors duration-300
      "
    >
      {/* Stats Cards */}
      <div className="flex flex-wrap gap-5">
        {/* Blogs */}
        <div
          className="
            flex min-w-[230px] items-center gap-4
            rounded-2xl
            border border-slate-200
            bg-white
            p-5
            shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-md
            dark:border-zinc-800
            dark:bg-zinc-900
          "
        >
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-xl
              bg-emerald-50
              dark:bg-emerald-500/10
            "
          >
            <img
              src={assets.dashboard_icon_1}
              alt=""
              className="h-6 w-6"
            />
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-zinc-100">
              {dashboardData.blogs}
            </p>
            <p className="text-sm font-light text-slate-500 dark:text-zinc-400">
              Blogs
            </p>
          </div>
        </div>

        {/* Comments */}
        <div
          className="
            flex min-w-[230px] items-center gap-4
            rounded-2xl
            border border-slate-200
            bg-white
            p-5
            shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-md
            dark:border-zinc-800
            dark:bg-zinc-900
          "
        >
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-xl
              bg-emerald-50
              dark:bg-emerald-500/10
            "
          >
            <img
              src={assets.dashboard_icon_2}
              alt=""
              className="h-6 w-6"
            />
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-zinc-100">
              {dashboardData.comments}
            </p>
            <p className="text-sm font-light text-slate-500 dark:text-zinc-400">
              Comments
            </p>
          </div>
        </div>

        {/* Drafts */}
        <div
          className="
            flex min-w-[230px] items-center gap-4
            rounded-2xl
            border border-slate-200
            bg-white
            p-5
            shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-md
            dark:border-zinc-800
            dark:bg-zinc-900
          "
        >
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-xl
              bg-emerald-50
              dark:bg-emerald-500/10
            "
          >
            <img
              src={assets.dashboard_icon_3}
              alt=""
              className="h-6 w-6"
            />
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-zinc-100">
              {dashboardData.drafts}
            </p>
            <p className="text-sm font-light text-slate-500 dark:text-zinc-400">
              Drafts
            </p>
          </div>
        </div>
      </div>

      {/* Latest Blogs */}
      <div className="mt-8">
        <div
          className="
            mb-4 flex items-center gap-3
            text-slate-700
            dark:text-zinc-200
          "
        >
          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              bg-emerald-50
              dark:bg-emerald-500/10
            "
          >
            <img
              src={assets.dashboard_icon_4}
              alt=""
              className="h-5 w-5"
            />
          </div>

          <p className="text-base font-semibold">
            Latest Blogs
          </p>
        </div>

        <div
          className="
            relative max-w-5xl
            overflow-x-auto
            rounded-2xl
            border border-slate-200
            bg-white
            shadow-sm
            scrollbar-hide
            dark:border-zinc-800
            dark:bg-zinc-900
          "
        >
          <table className="w-full text-left text-sm text-slate-500 dark:text-zinc-400">
            <thead
              className="
                border-b border-slate-200
                text-xs uppercase
                text-slate-600
                dark:border-zinc-800
                dark:text-zinc-300
              "
            >
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>

                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>

                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>

                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>

                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboardData}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
