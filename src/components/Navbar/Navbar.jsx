import { CiSearch , CiLogin } from 'react-icons/ci'
import { PiShoppingCartLight } from 'react-icons/pi'

function Navbar() {
  return (
    <header className="flex items-center justify-between border-b-[0.3px] border-[#46A358]/50 py-4">
      <div className="text-[#46A358] font-bold text-xl">🌿 GREENSHOP</div>

      <nav className="flex gap-8">
        <a href="/" className="text-[#3D3D3D] font-bold border-b-2 border-[#46A358] pb-1">Home</a>
        <a href="/shop" className="text-[#3D3D3D] hover:opacity-70">Shop</a>
        <a href="/plant-care" className="text-[#3D3D3D] hover:opacity-70">Plant Care</a>
        <a href="/blogs" className="text-[#3D3D3D] hover:opacity-70">Blogs</a>
      </nav>

      <div className="flex items-center gap-[30px]">
        <CiSearch size={20} color="#3D3D3D" />
        <div className="relative">
          <PiShoppingCartLight size={20} color="#3D3D3D" />
          <span className="absolute -top-2 -right-2 bg-[#46A358] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </div>
        <button className="flex items-center gap-2 bg-[#46A358] text-white w-[100px] h-[35px] rounded-[6px] justify-center">
          <CiLogin size={20} />
          Login
        </button>
      </div>
    </header>
  )
}

export default Navbar
