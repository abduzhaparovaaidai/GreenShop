import { CiHeart, CiShoppingCart, CiUser } from 'react-icons/ci'
import { PiScanLight, PiHouseBold } from 'react-icons/pi'

function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-[125.95px]">
      <div
        className="absolute bottom-0 left-0 right-0 h-[94.95px] bg-white rounded-[36px]"
        style={{
          boxShadow: '0 -10px 30px 0 rgba(184,184,184,0.2)',
          WebkitMaskImage: 'radial-gradient(circle 40px at 50% 0px, transparent 99%, black 100%)',
          maskImage: 'radial-gradient(circle 40px at 50% 0px, transparent 99%, black 100%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-[94.95px] flex items-center justify-between px-10">
        <button aria-label="Home" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#46A358] text-white">
          <PiHouseBold size={20} />
        </button>

        <button aria-label="Wishlist" className="text-[#C4C4C4] hover:text-[#46A358] transition-colors">
          <CiHeart size={20} />
        </button>

        <button aria-label="Cart" className="text-[#C4C4C4] hover:text-[#46A358] transition-colors">
          <CiShoppingCart size={20} />
        </button>

        <button aria-label="Profile" className="text-[#C4C4C4] hover:text-[#46A358] transition-colors">
          <CiUser size={20} />
        </button>
      </div>

      <button
        aria-label="Scan"
        className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#46A358] text-white shadow-lg"
      >
        <PiScanLight size={26} />
      </button>
    </nav>
  )
}

export default MobileBottomNav
