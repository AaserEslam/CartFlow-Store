import React, { useContext } from "react";
import { FaCartPlus, FaCheck, FaHeart, FaShare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartProvider/CartContext";
import toast from "react-hot-toast";

const CardProducts = ({ item }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const isInCart = cartItems?.some((i) => i.id === item.id);

  const handleAddToCart = () => {
    addToCart(item)

    toast.success(
      <div className="flex justify-center items-center gap-4 ">
        <div className="h-20 w-20">
          <img src={item.images[0]} alt="" className="w-full h-full"/>
        </div>
        <div>
                  <div>
          <h1 className="text-md font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">{item.title}</h1>
          <p className="mt-4 font-semibold text-sm dark:text-gray-300">Added To Cart</p>
        </div>
        <div>
          <Link to="/cart"><button className="mt-4 scale-90 hover:scale-100 cursor-pointer text-md rounded-full bg-linear-to-r from-primary to-secondry text-white px-4 py-2 transition-all duration-300">View In Cart</button></Link>
        </div>
        </div>
      </div>
      ,{duration:2500}
    )
  }

  return (
    <div className="container-center p-4 relative border-2 border-primary w-50 h-70 rounded-lg dark:bg-gray-500/20 flex flex-col items-center hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 group overflow-hidden">
      {isInCart ? (
        <div
          className={`absolute bottom-60 text-md flex items-center gap-2 transition-all duration-300`}
        >
          <FaCheck className={`text-green-500 transition-all duration-300`} />
          <p className="font-semibold text-text dark:text-white transition-all duration-300">
            In Cart
          </p>
        </div>
      ) : (
        <div
          className={`absolute bottom-70 text-md flex items-center gap-2 transition-all duration-300`}
        >
          <FaCheck className={`text-green-500 transition-all duration-300`} />
          <p className="font-semibold text-text dark:text-white transition-all duration-300">
            In Cart
          </p>
        </div>
      )}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-center absolute z-50 top-10 left-50 group-hover:left-36 gap-10 transition-all duration-300"
      >
        <span
          onClick={handleAddToCart}
          className={`border-2 border-primary active:scale-90 p-2 bg-primary rounded-full hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 cursor-pointer ${isInCart ? "bg-white pointer-events-none" : ""}`}
        >
          <FaCartPlus
            className={`text-[22px] ${isInCart ? "text-primary" : "text-white"}`}
          />
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="border-2 border-primary  p-2 bg-primary rounded-full active:scale-90 hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 cursor-pointer"
        >
          <FaHeart className="text-secondry text-[22px]" />
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="border-2 border-primary  p-2 bg-primary rounded-full active:scale-90 hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 cursor-pointer"
        >
          <FaShare className="text-cyan-500 text-[22px]" />
        </span>
      </div>

      <Link
        to={`/products/${item.id}`}
        className="w-full h-full flex flex-col items-center cursor-pointer"
      >
        <div className="h-30 w-30 mt-4">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-full w-full rounded-lg scale-80"
          />
        </div>

        <div className="flex-col flex items-center">
          <div className="flex items-center justify-center gap-1 mt-6 text-primary">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-md line-clamp-1 font-semibold mt-4 bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
              {item.title.replace("-", " ")}
            </h2>
            <p className="text-md mt-2 text-text dark:text-white font-bold tracking-wider">
              ${item.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProducts;
