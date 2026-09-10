import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../Components/Hero/ProductSlider";
import Heading from "../Shared/Heading";
import { CartContext } from "../Components/CartProvider/CartContext";
import toast from "react-hot-toast";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);
  const { id } = useParams();

        const { cartItems, addToCart } = useContext(CartContext);
          const isInCart = cartItems?.some((i) => i.id === product.id);

  

            const handleAddToCart = () => {
              addToCart(product)
          
              toast.success(
                <div className="flex justify-center items-center gap-4 ">
                  <div className="h-20 w-20">
                    <img src={product.images[0]} alt="" className="w-full h-full"/>
                  </div>
                  <div>
                            <div>
                    <h1 className="text-md font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">{product.title}</h1>
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





  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        const product = await res.data;
        setProduct(product);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);


  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product) return;

      try {
        const res =
          await axios.get(`https://dummyjson.com/products/category/${product.category}
`);
        const newProduct = res.data;

        setRelatedProducts(newProduct);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingRelatedProducts(false);
      }
    };
    fetchRelatedProducts();
  }, [product.category]);

  return (
    <div className="min-h-screen">
      <div className="container-center md:grid grid-cols-2 pt-4 pb-8 items-center">
        {/* Images Section */}
        <div className="w-100 h-130 max-md:mx-auto items-center relative">
          <img id="big"
            className="w-full h-100 object-cover"
            src={
              product?.images?.length > 0 ? product?.images[0] : product?.images
            }
            alt={product?.title}
          />
          <div className="w-80 h-18 flex items-center absolute z-50 left-[50%] translate-x-[-50%] bottom-12">
            {product?.images?.length > 1 ? product?.images?.map((img , key) => (
              <img key={key}
              onClick={() => document.getElementById("big").src = img}
                src={img}
                alt=""
                className="w-50 h-full hover:scale-110 transition-all duration-300 cursor-pointer object-cover"
              />
            )) : ''}
          </div>
        </div>
        {/* Hero Section */}
        <div>
          <div className="flex flex-col max-md:items-center justify-center gap-4">
            <h1 className="text-2xl md:text-3xl max-md:mt-6 font-semibold w-fit max-md:mx-auto bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
              {product?.title}
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                Price :{" "}
              </p>
              <span className="tracking-widest font-semibold text-text dark:text-gray-200">
                ${product?.price}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                Availablity :{" "}
              </p>
              <span className="tracking-widest font-semibold text-text dark:text-gray-200">
                {product.availabilityStatus}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent">
                Hurry Up ! :{" "}
              </p>
              <span className="tracking-widest font-semibold text-text dark:text-gray-200">
                Only {product.stock} Available
              </span>
            </div>
            <div className="max-md:flex flex-col items-center justify-center">
              <p className="text-lg font-semibold bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent w-fit">
                Description :{" "}
              </p>
              <span className="tracking-wider font-semibold text-text dark:text-gray-200">
                {product?.description}
              </span>
            </div>
            <div>
              <button
                className={`mt-3  py-2 px-4 rounded-full scale-110 cursor-pointer transition-all duration-300 hover:scale-120 ${isInCart ? ' border-2 border-primary bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent font-semibold pointer-events-none' : 'bg-linear-to-r from-primary to-secondry text-white'}`}
                type="submit"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Heading title={"You Also May Like 💜"} />
        <ProductSlider data={relatedProducts.products} />
      </div>
    </div>
  );
};

export default ProductPage;
