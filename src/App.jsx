import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import MobileBottomNav from './components/MobileBottomNav/MobileBottomNav'

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[120px] pb-[100px] md:pb-0">
      <Navbar />
      <div className="h-[57px] md:h-[68px]" />
      <Home />
      <MobileBottomNav />
    </div>
  )
}

export default App