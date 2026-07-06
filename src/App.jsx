import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[120px]">
      <Navbar />
      <Home />
    </div>
  )
}

export default App