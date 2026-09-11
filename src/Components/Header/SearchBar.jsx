import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchBox = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchSearchProducts = async () => {
      if (searchInput !== "") {
        try {
          const results = await axios.get(
            `https://dummyjson.com/products/search?q=${searchInput}`,
          );
          setProducts(results.data.products);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchProducts();
  }, [searchInput]);


  return (
    <div className="hidden md:block w-90 relative group">
      <form action="" className="flex items-center  ">
        <input
          onChange={handleSearchBox}
          type="text"
          placeholder="Search ... "
          className={`outline-0 border dark:text-white dark:placeholder-white border-[#222] dark:border-gray-300 rounded-full px-4 py-2 w-0 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${searchInput === "" ? "" : "rounded-br-none rounded-bl-none rounded-tl-lg rounded-tr-lg border border-[#222] opacity-100 w-full"}`}
        />
        <FaSearch className="text-text dark:text-white hover:text-secondry transition-all duration-300 cursor-pointer absolute left-full -translate-x-8" />
      </form>
      <div
        className={`absolute border border-t-0 rounded-lg overflow-y-auto border-[#222] dark:border-gray-300 bg-white/50 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-linear-to-b [&::-webkit-scrollbar-thumb]:from-primary [&::-webkit-scrollbar-thumb]:to-secondry  [&::-webkit-scrollbar-thumb]:rounded-full dark:bg-gray-500/60 z-50 w-88.5 p-2 transition-all duration-300 ${searchInput === "" ? "hidden h-0 opacity-0" : "opacity-100 h-95 rounded-tl-none rounded-tr-none border border-[#222]"}`}
      >
        <ul>
          {products.map((item, key) => (
            <li className="bg-gray-300/70 rounded-full  p-2 my-2" key={key}>
              <Link
                to={`/products/${item.id}`}
                className="flex items-center gap-4 bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent font-semibold"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-10 h-10"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
