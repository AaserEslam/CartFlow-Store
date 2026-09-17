import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobile } from "react-icons/fa";
import { FaMessage, FaMobileScreen } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {


    const [scrollPosition , setScrollPosition] = useState(0)


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrollPosition(currentScroll)
        }


        window.addEventListener('scroll' , handleScroll)
        return () => {
            window.removeEventListener("scroll" , handleScroll)
        }
        
    } , [])
    

    const handleScrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <footer className="container-center mt-20 pb-15">
      <div className="flex flex-col gap-8 md:grid grid-cols-5 md:gap-5">
        <div className=" col-span-2 w-95">
          <h2 className="mb-5 text-lg md:text-2xl font-semibold italia dark:text-white">
            Cart
            <span className="italia bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
              Flow
            </span>
          </h2>
          <p className="font-semibold dark:text-white">
            At CartFlow, We blend cutting-edge UI design with seamless
            functionality to bring you the best online shopping experience. Our
            mission is to make high-quality products accessible, fast, and
            stylish.
          </p>
          <p className="mt-8 dark:text-white">Made With 💖 By Aaser Eslam</p>
        </div>
        <div className="">
          <h2 className="md:text-lg font-semibold dark:text-white">
            Important Links
          </h2>
          <div className="flex flex-col mt-8 gap-2 text-gray-500 dark:text-gray-400">
            <Link onClick={() => handleScrollTop()} to="/" className="hover:text-primary transition-all duration-300 cursor-pointer">
              Home
            </Link>
            <Link onClick={() => handleScrollTop()} to="/about" className="hover:text-primary transition-all duration-300 cursor-pointer">
              About
            </Link>
            <Link onClick={() => handleScrollTop()} to="/contact" className="hover:text-primary transition-all duration-300 cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="md:text-lg font-semibold dark:text-white">Links</h2>
          <div className="flex flex-col mt-8 gap-2 text-gray-500 dark:text-gray-400">
            <Link onClick={() => handleScrollTop()} to="/" className="hover:text-primary transition-all duration-300 cursor-pointer">
              Home
            </Link>
            <Link onClick={() => handleScrollTop()} to="/about" className="hover:text-primary transition-all duration-300 cursor-pointer">
              About
            </Link>
            <Link onClick={() => handleScrollTop()} to="/contact" className="hover:text-primary transition-all duration-300 cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
        <div className="dark:text-white">
          <p className="flex gap-4 items-center">
            <IoIosSend />
            Cairo, Egypt
          </p>
          <p className="flex gap-4 items-center mt-4">
            <FaMobileScreen />
            +20 123 456 789
          </p>
          {/* Icons */}
          <div className="flex item-center gap-3 text-3xl mt-8">
            <FaInstagram className="hover:text-primary transition-all duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-primary transition-all duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-primary transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
