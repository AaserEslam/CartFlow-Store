import React, { useContext } from "react";
import { CartContext } from "../Components/CartProvider/CartContext";
import { FaTrash } from "react-icons/fa";
import { IoPricetagOutline, IoPricetagsOutline } from "react-icons/io5";

const CartPage = () => {
  const { cartItems, addToCart , removeFromCart , increaseQuantity , decreaseQuantity} = useContext(CartContext);

  const total = cartItems?.reduce((acc , item) => +acc + +item.price * +item.quantity , 0)


  return (
    <div className="pb-5 container-center">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-widest mb-8 mx-auto italia w-fit bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
        Your Cart
      </h1>
      <div className="md:grid grid-cols-3 gap-6">
        {cartItems?.length === 0 ? (
          <h1 className="col-span-2 text-2xl font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent w-fit max-md:my-10">Your Cart Is Empty</h1>
        ) : (
          <div className="bg-transparent col-span-2 p-4 rounded-lg border border-gray-300">
            {cartItems?.map((item, key) => (
              <div
                key={key}
                className="py-3 flex items-center gap-6 border-b border-gray-300"
              >
                {/* Image */}
                <div className="w-30 h-30 bg-gray-200/90 rounded-lg">
                  <img src={item.images[0]} alt="" />
                </div>
                {/* text */}
                <div className="flex-1">
                  <div className="flex items-centergrow justify-between">
                    <h1 className="text-lg md:text-2xl bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent font-semibold">
                      {item.title}
                    </h1>
                    <div onClick={() => removeFromCart(item.id)}>
                      <FaTrash className="text-red-600 cursor-pointer transition-all duration-300 hover:scale-120 text-lg" />
                    </div>
                  </div>
                  <p className="dark:text-gray-300 mt-2 flex items-center gap-3">
                    Quantity :{" "}
                    <span className="font-semibold text-secondry  md:text-[22px]">
                      {item.quantity}
                    </span>
                  </p>
                  <div>
                    <div className="flex items-center mt-6 justify-between">
                      <p className="text-lg md:text-2xl font-semibold  dark:text-gray-100">
                        $ {item.price*item.quantity}
                      </p>

                      <div className="flex items-center gap-4">
                        <button onClick={() => decreaseQuantity(item.id)} className="h-6 w-6 text-white flex justify-center items-center bg-linear-to-r from-primary to bg-secondry border border-white/60 rounded-full text-2xl cursor-pointer hover:scale-120 active:scale-90 transition-all duration-300">
                          -
                        </button>
                        <span className="font-semibold dark:text-white">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="h-6 w-6 text-white flex justify-center items-center bg-linear-to-r from-primary to bg-secondry border border-white/60 rounded-full text-2xl cursor-pointer hover:scale-120 active:scale-90 transition-all duration-300">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Icons */}
              </div>
            ))}
          </div>
        )}
        {/* Order Summary */}
        <div className="bg-transparent border h-fit border-gray-300 p-4 rounded-lg">
          <div>
            <h1 className="w-fit bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent  font-semibold text-2xl">
              Order Summary
            </h1>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-between text-lg ">
              <p className="text-gray-500 dark:text-gray-300">Subtotal :-</p>
              <span className="font-semibold text-text dark:text-white">
                $ {total.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between text-lg ">
              <p className="text-gray-500 dark:text-gray-300">Discount :-</p>
              <span className="font-semibold text-red-600">-$ 0</span>
            </div>
            <div className="flex items-center justify-between text-lg pb-10 border-b border-gray-300">
              <p className="text-gray-500 dark:text-gray-300">Delivery :-</p>
              <span className="font-semibold text-text dark:text-white">
                $ 0 
              </span>
            </div>
            <div className="flex items-center justify-between text-lg mt-6">
              <p className="text-gray-500 dark:text-gray-300">Total :-</p>
              <span className="font-semibold text-text dark:text-white">
                $ {total.toFixed(2)}
              </span>
            </div>
            <div>
              <form action="" className="flex items-center mt-5 relative">
                <IoPricetagsOutline className="absolute text-lg text-gray-500 left-4 dark:text-gray-300" />
                <input
                  type="text"
                  placeholder="Add Promo Code"
                  className="w-full pr-4 pl-10 py-2 border dark:text-white border-gray-300 rounded-bl-full rounded-tl-full outline-0 dark:placeholder:text-gray-300"
                />
                <button
                  type="submit"
                  className="bg-linear-to-r from-primary to-secondry px-4 py-2 rounded-br-full rounded-tr-full  text-white hover:tracking-widest w-28 transition-all duration-300 cursor-pointer border border-gray-300"
                >
                  Apply
                </button>
              </form>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-linear-to-r from-primary to-secondry px-4 py-2 rounded-full text-white hover:tracking-widest  w-full transition-all duration-300 cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
