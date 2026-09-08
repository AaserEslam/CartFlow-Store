import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ProductPage from './Pages/ProductPage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CategoryPage from './Pages/CategoryPage'
import axios from 'axios'

const App = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
  



      useEffect(() => {
    const fetchCategories = async () => {
      try {
        axios.get("https://dummyjson.com/products/category-list")
          .then((res) => {
          setCategories(res.data);
          setLoading(false);          
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  } , []);
  

  const {id} = useParams()
  const {category} = useParams()


  return (
    <div className="min-h-screen w-full dark:bg-gray-800 transition-all duration-300">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/products/:id`} element={<ProductPage />} />
        
           
            <Route path={`/products/category/:category`} element={<CategoryPage />} />
          
          <Route path={`/about`} element={<About />} />
          <Route path={`/contact`} element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App