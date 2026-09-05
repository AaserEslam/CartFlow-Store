import React, { useEffect, useState } from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeMode from "./ThemeMode";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className=" transition-all duration-300 container-center pb-8">
      <div className="pt-6 flex max-md:justify-between items-center gap-4 md:gap-10">
        <div>
          <Link to="/">
            <h2 className="text-lg md:text-2xl font-semibold dark:text-white">
              Cart
              <span className="bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                Flow
              </span>
            </h2>
          </Link>
        </div>
        <div className="md:hidden ml-4 md:ml-0 w-70 md:w-90 relative md:group">
          <form action="" className="flex items-center  ">
            <input
              type="text"
              placeholder="Search ... "
              className="outline-0 border dark:text-white border-[#222] dark:border-gray-300 dark:placeholder-white rounded-full px-4 py-2 max-md:h-8 md:w-0 md:group-hover:w-full md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
            />
            <FaSearch className="text-text dark:text-white hover:text-secondry transition-all duration-300 cursor-pointer absolute left-53 md:left-full md:-translate-x-8" />
          </form>
        </div>
        {/* Navbar */}
        <Navbar />
        {/* Search Bar */}
        <div className="hidden md:block w-90 relative group">
          <form action="" className="flex items-center  ">
            <input
              type="text"
              placeholder="Search ... "
              className="outline-0 border dark:text-white dark:placeholder-white border-[#222] dark:border-gray-300 rounded-full px-4 py-2 w-0 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
            <FaSearch className="text-text dark:text-white hover:text-secondry transition-all duration-300 cursor-pointer absolute left-full -translate-x-8" />
          </form>
        </div>
        {/* Icons */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center relative cursor-pointer"><FaCartShopping className="text-[20px] text-primary" /><span className="absolute bottom-3.5 left-3 bg-linear-to-tr from-primary to-secondry w-1 h-1 flex justify-center items-center p-2.5 text-lg text-white rounded-full">4</span></div>
          <div className="flex items-center relative cursor-pointer"><FaRegHeart className="text-[20px] text-secondry"/><span className="absolute bottom-3.5 left-3 bg-linear-to-tr from-primary to-secondry w-1 h-1 flex justify-center items-center p-2.5 text-lg text-white rounded-full">4</span></div>
        </div>
        {/* Theme */}
        <ThemeMode />
      </div>
    </header>
  );
};

export default Header;
