import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BsArrowBarDown } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        axios.get("https://dummyjson.com/products/category-list")
          .then((res) => {
          setCategories(res.data);
          setLoading(false);          
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  } , []);

  

  const Links = [
    {
      Name: "Home",
      Link: "/",
    },
    {
      Name: "Accessories",
      Link: "/accessories",
    },
    {
      Name: "About",
      Link: "/about",
    },
    {
      Name: "Contact",
      Link: "/contact",
    },
  ];

  return (
    <nav className="max-md:relative transition-all duration-300">
      <BiMenu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-2xl text-text dark:text-white z-50 cursor-pointer transition-all duration-300 ease-in-out"
      />
      <ul
        className={`${isMenuOpen ? "flex" : "hidden"} max-md:bg-linear-to-b  from-primary to-secondry max-md:border border-primary rounded-lg max-md:mt-4 p-2 max-md:absolute top-11 -left-18 z-50 md:flex flex-col md:flex-row items-center justify-between gap-6 max-md:transition-all duration-300`}
      >
        {Links.map((item, key) => (
          <Link
            className={` dark:text-white font-normal max-md:flex items-center justify-center max-md:hover:text-white  max-md:text-sm max-md:dark:hover:text-text max-md:p-2 md:text-md hover:text-primary transtion-all duration-300 ${
              location.pathname === item.Link
                ? "md:text-primary md:dark:text-primary font-semibold"
                : "md:text-text"
            }`}
            key={key}
            to={item.Link}
          >
            {item.Name}
          </Link>
        ))}
        <div
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="flex items-center gap-3 relative group cursor-pointer"
        >
          <li className="text-white md:text-text font-normal max-md:flex items-center justify-center max-md:hover:text-white max-md:text-sm max-md:dark:hover:text-text max-md:p-2 md:text-md group-hover:text-primary transtion-all duration-300 cursor-pointer dark:text-white">
            Categories
          </li>
          <IoMdArrowDropup className="group-hover:rotate-180 dark:text-white group-hover:text-primary transition-all duration-300 cursor-pointer" />
          <ul
            className={`absolute z-50 top-10 -left-7 bg-linear-to-b p-2 from-primary to-secondry border-2 border-gray-600/70 dark:border-2 dark:border-white  rounded-lg overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#696970] [&::-webkit-scrollbar-thumb]:rounded-full  ${isCategoriesOpen ? "opacity-100 h-100" : "h-0 opacity-0 pointer-events-none"}  transition-all duration-300 ease-in-out`}
          >
            {categories.map((item, key) => (
              <li
                className="p-4 transition-all capitalize duration-300 ease-in-out my-2 rounded-lg text-white w-34 font-normal cursor-pointer bg-gray-200/40 hover:tracking-wider"
                key={key}
              >
                {item.replace("-"," ")}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
