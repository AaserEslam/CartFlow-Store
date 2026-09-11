import React, { useContext } from "react";
import { CartContext } from "../Components/CartProvider/CartContext";
import CardProducts from "../Components/Hero/CardProducts";

const FavouritePage = () => {
  const { cartItems, addToCart, addToFav, favouriteItems, setFavouriteItems } =
    useContext(CartContext);

  return (
    <div className="pb-5 container-center">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-widest mb-8 mx-auto italia w-fit bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
        Your Favourites
      </h1>
      <div className="flex max-md:flex-col md:flex-wrap gap-4 item-center justify-between">
        {favouriteItems?.map((item, key) => (
          <CardProducts key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
