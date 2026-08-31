import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen max-h-full w-full dark:bg-gray-800 transition-all duration-300">
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App