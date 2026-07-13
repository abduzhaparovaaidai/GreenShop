import { CiSearch , CiLogin } from 'react-icons/ci'
import { PiShoppingCartLight } from 'react-icons/pi'
import { NavLink, Link, useLocation } from 'react-router-dom'

const shopPaths = ['/shop', '/cart', '/checkout']

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'text-[#46A358] text-sm lg:text-base font-bold border-b-2 border-[#46A358] pb-1 whitespace-nowrap'
    : 'text-[#3D3D3D] text-sm lg:text-base hover:opacity-70 whitespace-nowrap'

function Navbar() {
  const { pathname } = useLocation()
  const isShopActive = shopPaths.includes(pathname)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[0.3px] border-[#46A358]/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex items-center justify-between py-4 gap-3">
        <div className="text-[#46A358] font-bold text-base md:text-xl shrink-0">🌿 GREENSHOP</div>

        <nav className="hidden md:flex gap-4 lg:gap-8 shrink-0">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" className={() => navLinkClass({ isActive: isShopActive })}>Shop</NavLink>
          <NavLink to="/plant-care" className={navLinkClass}>Plant Care</NavLink>
          <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
        </nav>

        <div className="flex items-center gap-3 lg:gap-[30px] shrink-0">
          <CiSearch size={20} color="#3D3D3D" />
          <Link to="/cart" className="relative">
            <PiShoppingCartLight size={20} color="#3D3D3D" />
            <span className="absolute -top-2 -right-2 bg-[#46A358] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Link>
          <button className="hidden md:flex items-center gap-2 bg-[#46A358] text-white w-[90px] lg:w-[100px] h-[35px] rounded-[6px] justify-center shrink-0 text-sm lg:text-base">
            <CiLogin size={20} />
            Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
