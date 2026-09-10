import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { Route, Routes, useParams } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CategoryPage from "./Pages/CategoryPage";
import axios from "axios";
import CartPage from "./Pages/CartPage";
import { Toaster } from "react-hot-toast";
import FavouritePage from "./Pages/FavouritePage";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        axios
          .get("https://dummyjson.com/products/category-list")
          .then((res) => {
            setCategories(res.data);
            setLoading(false);
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const { id } = useParams();
  const { category } = useParams();

  return (
    <div className="min-h-screen w-full dark:bg-gray-800 transition-all duration-300">
      <Header />
      <Toaster
      toastOptions={{
        className:'!bg-white dark:!bg-gray-500',
        iconTheme:{
          primary:'#8b40ed'
        }
      }}
  position="bottom-right" 
  reverseOrder={false}
/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/products/:id`} element={<ProductPage />} />

        <Route
          path={`/products/category/:category`}
          element={<CategoryPage />}
        />
        <Route path={`/cart`} element={<CartPage />} />
        <Route path={`/favourite`} element={<FavouritePage />} />

        <Route path={`/about`} element={<About />} />
        <Route path={`/contact`} element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
