import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {

  const [cartItems , setCartItems] = useState(localStorage.length > 0 ? JSON.parse(localStorage.getItem("item")) : [])


  useEffect(() => {
      localStorage.setItem("item" , JSON.stringify(cartItems))
  } , [cartItems])


  const increaseQuantity = (id) => {
    setCartItems(p => p.map((item) => 
    item.id === id ? {...item , quantity:item.quantity  + 1}
  :item))
  }
  const decreaseQuantity = (id) => {
    setCartItems(p => p.map((item) => 
    item.id === id && item.quantity > 1 ? {...item , quantity:item.quantity  - 1}
  :item))
  }
  
    const addToCart = (item) => {
    setCartItems((p) => [...p , {...item , quantity:1}])
  }

  const removeFromCart = (id) => {
    setCartItems(p => p.filter((item) => item.id !== id))
  }


  return (
    <CartContext.Provider value={{cartItems , addToCart , removeFromCart , increaseQuantity , decreaseQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
