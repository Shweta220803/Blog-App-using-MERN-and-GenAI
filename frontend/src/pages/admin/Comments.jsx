import React, { useEffect, useState } from "react";
import CommentTableItem from "../../components/admin/CommentTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Comments = () => {
  const { axios } = useAppContext();
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  // fetch comments
  const fetchComments = async () => {
    try {
      const { data } = await axios.get("/api/admin/comments");

      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div
      className="
        flex-1 min-h-full
        bg-slate-50
        px-5 pt-5
        sm:pl-16
        dark:bg-zinc-950
        transition-colors duration-300
      "
    >
      {/* Header */}
      <div
        className="
          flex max-w-4xl
          flex-col gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <h1 className="text-xl font-semibold text-slate-900 dark:text-zinc-100">
          Comments
        </h1>

        {/* Filter Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("Approved")}
            className={`
              rounded-full
              border
              px-4 py-1.5
              text-xs font-medium
              cursor-pointer
              transition-all duration-200
              ${
                filter === "Approved"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
                  : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
              }
            `}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter("Not Approved")}
            className={`
              rounded-full
              border
              px-4 py-1.5
              text-xs font-medium
              cursor-pointer
              transition-all duration-200
              ${
                filter === "Not Approved"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-600 dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
                  : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
              }
            `}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Comments Table */}
      <div
        className="
          relative mt-5
          h-4/5 max-w-4xl
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
              text-slate-700
              dark:border-zinc-800
              dark:text-zinc-300
            "
          >
            <tr>
              <th scope="col" className="px-6 py-4">
                Blog Title & Comments
              </th>

              <th scope="col" className="px-6 py-4 max-sm:hidden">
                Date
              </th>

              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter((comment) => {
                if (filter === "Approved") {
                  return comment.isApproved === true;
                }

                return comment.isApproved === false;
              })
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;

