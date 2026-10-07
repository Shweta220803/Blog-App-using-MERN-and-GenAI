import React, { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const { axios } = useAppContext();

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div
      className="
        flex-1 min-h-full
        bg-slate-50
        px-5 pt-5
        sm:pl-16 sm:pt-12
        dark:bg-zinc-950
        transition-colors duration-300
      "
    >
      <div
        className="
          relative mt-4
          h-4/5 max-w-5xl
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
        <table
          className="
            w-full
            text-left text-sm
            text-slate-500
            dark:text-zinc-400
          "
        >
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
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
