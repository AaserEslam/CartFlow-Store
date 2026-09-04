import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/Hero/HeroSlider";
import ProductSlider from "../Components/Hero/ProductSlider";
import CardProducts from "../Components/Hero/CardProducts";
import Heading from "../Shared/Heading";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "clothes",
    "electronics",
    "furniture",
    "shoes",
    "miscellaneous"
  ];

  const paragraphes = [
    "Clothes keep us warm, stylish, comfortable, and confident every day.",
    "Electronics power modern devices, simplify life, and connect people worldwide.",
    "Furniture brings comfort, functionality, and timeless elegance to every room.",
    "Shoes protect your feet while adding style to every step.",
    "Miscellaneous items offer endless variety, useful everyday features, and surprises.",
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await axios.get(
              `https://api.escuelajs.co/api/v1/products/?categorySlug=${category}`,
            );

            const cleanProducts = res.data.filter((item) => {
              const hasValidTitle = item?.title && typeof item.title === "string";
              const isJunkTitle = hasValidTitle && item.title.toLowerCase().startsWith("title");
              
              const firstImg = item?.images?.[0] || "";
              const isPlaceholderImg = typeof firstImg === "string" && firstImg.includes("600x400");
              
              return hasValidTitle && !isJunkTitle && !isPlaceholderImg
            })
            return { [category]: cleanProducts };
          }),
                      
        );

        const productData = Object.assign({}, ...results);
        setProducts(productData);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false)
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen max-h-full">
      <HeroSlider />

      {loading ? (
          <p>Loading...</p>
      ) : (
              categories.map((category , key , index) => (
        <div key={key}>
        <Heading key={index}  title={category} description={paragraphes[key]}/>
        <ProductSlider key={key} data={products[category]}/>
        </div>
      ))
      )}

      

    </div>
  );
};

export default Home;
