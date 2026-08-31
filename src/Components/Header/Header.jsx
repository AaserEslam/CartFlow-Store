import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Light from "../../Images/Light.png";
import Dark from "../../Images/Dark.png";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [isMenuOpen , setIsMenuOpen] = useState(false);


  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  const Links = [
    {
      Name: "Home",
      Link: "/Home",
    },
    {
      Name: "Accesories",
      Link: "/Accesories",
    },
    {
      Name: "About",
      Link: "/About",
    },
    {
      Name: "Contact",
      Link: "/Contact",
    },
    {
      Name: "Categories",
      Link: "/Categories",
    },
  ];

  return (
    <header className=" transition-all duration-300 w-[90%] mx-auto">
        <div className="pt-6 flex max-md:justify-between items-center gap-4 md:gap-15">
          <div>
            <Link to="/"><h2 className="text-lg md:text-3xl font-semibold dark:text-white">Cart<span className="bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">Flow</span></h2></Link>
          </div>
                  <div className="md:hidden ml-4 md:ml-0 w-70 md:w-90 relative md:group">
          <form action="" className="flex items-center  ">
            <input type="text" placeholder="Search ... " className="outline-0 border dark:text-white border-[#222] dark:border-gray-300 dark:placeholder-white rounded-full px-4 py-2 md:w-0 md:group-hover:w-full md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"/>
            <FaSearch className="text-text dark:text-white hover:text-secondry transition-all duration-300 cursor-pointer absolute left-53 md:left-full md:-translate-x-8"/>
          </form>
        </div>
          <nav className="max-md:relative transition-all duration-300">
            <BiMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl text-text dark:text-white z-50 cursor-pointer transition-all duration-300 ease-in-out"/>
            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} max-md:bg-linear-to-b  from-primary to-secondry max-md:border border-primary rounded-lg max-md:mt-4 p-2 max-md:absolute -left-7 z-50 md:flex flex-col md:flex-row items-center justify-between gap-6 max-md:transition-all duration-300`}>
                {Links.map((item , key) => (
                  <Link className="text-text dark:text-white font-normal max-md:flex items-center justify-center max-md:hover:text-white max-md:text-sm max-md:dark:hover:text-text max-md:p-2 md:text-md hover:text-primary transtion-all duration-300" key={key} to={item.Link}>{item.Name}</Link>
                ))}
            </ul>
          </nav>
        <div className="hidden md:block w-90 relative group">
          <form action="" className="flex items-center  ">
            <input type="text" placeholder="Search ... " className="outline-0 border dark:text-white dark:placeholder-white border-[#222] dark:border-gray-300 rounded-full px-4 py-2 w-0 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300"/>
            <FaSearch className="text-text dark:text-white hover:text-secondry transition-all duration-300 cursor-pointer absolute left-full -translate-x-8"/>
          </form>
        </div>
                <div className="md:h-10 flex items-center">
                  {theme === "dark" ? (
                    <img src={Light} alt="Light" className={`md:w-full h-8 w-15 md:h-12 cursor-pointer transition-all duration-300 ${theme === "dark" ? 'opacity-100' : 'opacity-0'}`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>
                  ) : (
                    <img src={Dark} alt="dark" className={`md:w-full h-8 w-15 md:h-12 cursor-pointer transition-all duration-300 ${theme === "light" ? 'opacity-100' : 'opacity-0'}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
                  )}
                </div>
        </div>
    </header>
  );
};

export default Header;

{/* <div className="max-md:hidden w-15 ">
  {theme === "dark" ? (
    <img
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={Light}
      alt="Light"
      className={`w-12 cursor-pointer transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
    />
  ) : (
    <img
      src={Dark}
      alt="Dark"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-12 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
    />
  )}
</div> */}