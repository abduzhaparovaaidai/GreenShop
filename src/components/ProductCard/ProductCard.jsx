import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'

function ProductCard({ image, name, price, oldPrice, discount }) {
  return (
    <div className="group">
      <div className="relative bg-[#FBFBFB] w-full aspect-[258/300] lg:w-[258px] lg:h-[300px] flex items-center justify-center overflow-hidden">
        {discount && (
          <span className="absolute top-3 left-3 bg-[#46A358] text-white text-[12px] font-bold px-2 py-1 rounded-[4px]">
            {discount}
          </span>
        )}

        <img src={image} alt={name} className="w-[70%] h-[70%] object-contain mix-blend-multiply" />

        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button aria-label="Add to cart" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#3D3D3D] hover:bg-[#46A358] hover:text-white transition-colors">
            <CiShoppingCart size={18} />
          </button>
          <button aria-label="Add to wishlist" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#3D3D3D] hover:bg-[#46A358] hover:text-white transition-colors">
            <CiHeart size={18} />
          </button>
          <button aria-label="Quick view" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#3D3D3D] hover:bg-[#46A358] hover:text-white transition-colors">
            <CiSearch size={18} />
          </button>
        </div>
      </div>

      <p className="mt-[12px] text-[#3D3D3D] font-normal text-[16px] leading-[16px]">{name}</p>
      <p className="mt-[6px] leading-[16px]">
        <span className="text-[#46A358] font-bold text-[18px]">${price.toFixed(2)}</span>
        {oldPrice && <span className="ml-2 text-[#9C9C9C] text-[15px] line-through">${oldPrice.toFixed(2)}</span>}
      </p>
    </div>
  )
}

export default ProductCard
