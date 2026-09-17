import React, { useContext } from "react";
import { FaCartPlus, FaCheck, FaHeart, FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartProvider/CartContext";
import toast from "react-hot-toast";

const CardProducts = ({ item }) => {
  const { cartItems, addToCart, addToFav, favouriteItems, removeFromFav } =
    useContext(CartContext);
  const isInCart = cartItems?.some((i) => i.id === item.id);

  const isInFav = favouriteItems?.some((i) => i.id === item.id);

  const handleAddToCart = () => {
    addToCart(item);

    toast.success(
      <div className="flex justify-center items-center gap-4 ">
        <div className="h-20 w-20">
          <img src={item.images[0]} alt="" className="w-full h-full" />
        </div>
        <div>
          <div>
            <h1 className="text-md font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
              {item.title}
            </h1>
            <p className="mt-4 font-semibold text-sm dark:text-gray-300">
              Added To Cart
            </p>
          </div>
          <div>
            <Link to="/cart">
              <button className="mt-4 scale-90 hover:scale-100 cursor-pointer text-md rounded-full bg-linear-to-r from-primary to-secondry text-white px-4 py-2 transition-all duration-300">
                View In Cart
              </button>
            </Link>
          </div>
        </div>
      </div>,
      { duration: 2500 },
    );
  };
  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFav(item.id);
      toast.error(
        <div className="flex justify-center items-center gap-4 ">
          <div className="h-20 w-20">
            <img src={item.images[0]} alt="" className="w-full h-full" />
          </div>
          <div>
            <div>
              <h1 className="text-md font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                {item.title}
              </h1>
              <p className="mt-4 font-semibold text-sm dark:text-gray-300">
                Removed From Favourites
              </p>
            </div>
          </div>
        </div>,
        { duration: 2500 },
      );
    } else {
      addToFav(item);
      toast.success(
        <div className="flex justify-center items-center gap-4 ">
          <div className="h-20 w-20">
            <img src={item.images[0]} alt="" className="w-full h-full" />
          </div>
          <div>
            <div>
              <h1 className="text-md font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                {item.title}
              </h1>
              <p className="mt-4 font-semibold text-sm dark:text-gray-300">
                Added To Favourites
              </p>
            </div>
            <div>
              <Link to="/favourite">
                <button className="mt-4 scale-90 hover:scale-100 cursor-pointer text-md rounded-full bg-linear-to-r from-primary to-secondry text-white px-4 py-2 transition-all duration-300">
                  View In Favourites
                </button>
              </Link>
            </div>
          </div>
        </div>,
        { duration: 2500 },
      );
    }
  };

  return (
    <div className="container-center px-2 relative border-2 border-primary hover:shadow-[0px_0px_6px_5px_#ed40b1] w-50 h-70 rounded-lg dark:bg-gray-500/20 flex flex-col items-center transition-all duration-300 group overflow-hidden cursor-auto">


    
      <div onClick={() => handleAddToFav()} className="absolute right-4 top-3 text-lg text-secondry cursor-pointer ">
        {isInFav ? (<FaHeart className="transition-all duration-300 hover:scale-120"/>) :(<FaRegHeart className="transition-all duration-300 hover:scale-120"/>) }
      </div>
      <Link
        to={`/products/${item.id}`}
        className="w-full h-full flex flex-col items-center cursor-pointer"
      >
        <div className="h-30 w-30">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-full w-full rounded-lg scale-70"
          />
        </div>

        <div className="flex-col flex items-center">
          <div className="flex items-center justify-center gap-1  text-primary">
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
            <h2 className="text-md line-clamp-1 mt-4 font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
              {item.title.replace("-", " ")}
            </h2>
            <p className="text-md text-text mt-2 dark:text-white font-bold tracking-wider">
              ${item.price}
            </p>
          </div>
        </div>
      </Link>
          <div>
            <button onClick={() => handleAddToCart()} className={`-translate-y-3 font-semibold py-2 px-4 rounded-full text-sm mt-5 transition-all duration-300 hover:scale-110 cursor-pointer ${isInCart ? "pointer-events-none bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent border-2 border-primary" : "bg-linear-to-r from-primary to-secondry text-white"} `}>{isInCart ? 'Added To Cart' : 'Add To Cart' }</button>
          </div>
    </div>
  );
};

export default CardProducts;
