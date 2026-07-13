import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ProductView from './pages/ProductView/ProductView'
import ProductCart from './pages/ProductCart/ProductCart'
import Checkout from './pages/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import MobileBottomNav from './components/MobileBottomNav/MobileBottomNav'

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[120px] pb-[100px] md:pb-0">
      <Navbar />
      <div className="h-[57px] md:h-[68px]" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductView />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default App