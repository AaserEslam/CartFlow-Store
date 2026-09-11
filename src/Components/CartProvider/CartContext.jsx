import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("item")) : [],
  );
  const [favouriteItems, setFavouriteItems] = useState(
    localStorage.length > 0
      ? JSON.parse(localStorage.getItem("favourites"))
      : []
  );

  console.log(favouriteItems);
  

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  const increaseQuantity = (id) => {
    setCartItems((p) =>
      p.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems((p) =>
      p.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const addToCart = (item) => {
    setCartItems((p) => [...p, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems((p) => p.filter((item) => item.id !== id));
  };

  const addToFav = (item) => {
    setFavouriteItems((p) => [...p, item]);
  };
  const removeFromFav = (id) => {
    setFavouriteItems((p) => p.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToFav,
        favouriteItems,
        removeFromFav,
        setFavouriteItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
