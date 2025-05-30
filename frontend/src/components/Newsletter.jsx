import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form className="flex justify-between items-center max-w-2xl w-full md:h-13 h-2">
        <input
          type="text"
          className="border border-gray-300 rounded-md h-full min-h-[40px] border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          className="bg-primary/80 md:px-12 px-8 h-full min-h-[40px] text-white  hover:bg-primary rounded-md  round-1-nonecursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
