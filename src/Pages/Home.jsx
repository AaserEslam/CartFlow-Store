import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/Hero/HeroSlider";
import ProductSlider from "../Components/Hero/ProductSlider";
import CardProducts from "../Components/Hero/CardProducts";
import Heading from "../Shared/Heading";
import axios from "axios";
import ProductSliderloading from "../Components/Hero/ProductSliderloading";
import ScrollTop from "../Shared/ScrollTop";
import Advertisment from "../Components/Hero/Advertisment";
import Advices from "../Components/Hero/Advices";
import BrandBanner from "../Components/Hero/BrandBanner";
import Footer from "../Components/Hero/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "sports-accessories",
    "laptops",
    "furniture",
    "mens-shoes",
    "womens-bags",
  ];

  const paragraphes = [
    "Sports accessories like gloves, bands, and tracking devices enhance performance.",
    "Laptops offer portable computing power for productivity, gaming, and development.",
    "Furniture brings comfort, functionality, and timeless elegance to every room.",
    "Men's shoes blend comfort, durability, and style for daily wear.",
    "Women's bags offer stylish, convenient storage for everyday personal essentials.",
  ];

  const titles = [
        "sport's-accessories",
    "laptops",
    "furniture",
    "men's-shoes",
    "women's-bags",
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await axios.get(
              `https://dummyjson.com/products/category/${category}`,
            );

            return { [category]: res.data.products };
          }),
        );

        const productData = Object.assign({}, ...results);
        setProducts(productData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen max-h-full relative">
      <HeroSlider />

      {loading ? (
        <ProductSliderloading/>
      ) : (
        categories.map((category, key, index) => (
          <div key={key}>
            <Heading
              key={index}
              title={titles[key]}
              description={paragraphes[key]}
            />
            <ProductSlider key={key} data={products[category]} />
          </div>
        ))
        
      )}

      <Advertisment/>
      <Advices/>
      <BrandBanner/>
      <Footer/>

      <ScrollTop/>
    </div>
  );
};

export default Home;
