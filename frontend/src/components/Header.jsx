import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  //  search handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  // clear search
  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm">
          <p>New: AI Powered Content Creation</p>
          <img src={assets.star_icon} alt="star-icon" className="w-2.5" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 dark:text-white">
          {" "}
          Create. <span className="text-primary">Write.</span> Inspire. <br />{" "}
          <span className="text-primary">Powered by AI.</span>{" "}
        </h1>{" "}
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs tezt-gray-700">
          Turn your ideas into meaningful stories with intelligent writing
          tools. Create, discover, and share engaging content on a modern
          AI-powered publishing platform.{" "}
        </p>
        
        {/* form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            className="w-full pl-4 outline-none"
            placeholder="search for blogs"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs font-semibold text-gray-700 py-1 px-3  hover:bg-primary hover:text-white rounded-sm shadow-custom-sm cursor-pointer "
          >
            Clear Search
          </button>
        )}
      </div>
      <img
        src={assets.gradientBackground}
        alt="background-gradient"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
