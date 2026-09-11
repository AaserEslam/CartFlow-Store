import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeMode from "./ThemeMode";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../CartProvider/CartContext";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import PageTransition from "../../Shared/PageTransition";

const Header = () => {

        const { cartItems, addToCart  , addToFav , favouriteItems} = useContext(CartContext);
      


  return (<PageTransition>
        <header className=" transition-all duration-300 container-center pb-8">
      <div className="pt-6 flex max-md:justify-between items-center gap-4 md:gap-10">
        <div>
          <Link to="/">
            <h2 className="text-lg md:text-2xl font-semibold italia dark:text-white">
              Cart
              <span className="italia bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                Flow
              </span>
            </h2>
          </Link>
        </div>
        {/* Moblile Search Bar */}
    <MobileSearchBar/>
        {/* Navbar */}
        <Navbar />
        {/* Search Bar */}
        <SearchBar/>
        {/* Icons */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/cart">
                      <div className="flex items-center relative cursor-pointer"><FaCartShopping className="text-[20px] text-primary" /><span className="absolute bottom-3.5 left-3 bg-linear-to-tr from-primary to-secondry w-1 h-1 flex justify-center items-center p-2.5 text-[12px] text-white rounded-full">{cartItems?.length}</span></div>

          </Link>
          <Link to="/favourite">
            
          <div className="flex items-center relative cursor-pointer"><FaRegHeart className="text-[20px] text-secondry"/><span className="absolute bottom-3.5 left-3 bg-linear-to-tr from-primary to-secondry w-1 h-1 flex justify-center items-center p-2.5 text-[12px] text-white rounded-full">{favouriteItems?.length}</span></div>
          </Link>
        </div>
        {/* Theme */}
        <ThemeMode />
      </div>
    </header>
  </PageTransition>
  );
};

export default Header;
