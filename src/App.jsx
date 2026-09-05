import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ProductPage from './Pages/ProductPage'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  

  const {id} = useParams()

  return (
    <div className="min-h-screen max-h-full w-full dark:bg-gray-800 transition-all duration-300">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/products/:${id}`} element={<ProductPage />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/contact`} element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App