import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { CiHeart, CiMail } from 'react-icons/ci'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const sizes = ['S', 'M', 'L', 'XL']

function ProductInfo({ name, price, rating, reviewCount, description, sku, category, tags }) {
  const [selectedSize, setSelectedSize] = useState('S')
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="w-full max-w-[574px]">
      <h1 className="text-[28px] font-bold text-[#3D3D3D] leading-[16px]">{name}</h1>

      <div className="mt-[18px] flex items-center justify-between">
        <p className="text-[22px] font-bold text-[#46A358] leading-[16px]">${price.toFixed(2)}</p>
        <div className="flex items-center gap-[8px]">
          <div className="flex text-[#F5A623]">
            {Array.from({ length: 5 }).map((_, i) =>
              i < rating ? <AiFillStar key={i} size={18} /> : <AiOutlineStar key={i} size={18} />
            )}
          </div>
          <span className="text-[15px] text-[#3D3D3D]">{reviewCount} Customer Review</span>
        </div>
      </div>

      <div className="mt-[15px] border-t border-[#46A358]/50" />

      <h3 className="mt-[12px] text-[15px] font-medium text-[#3D3D3D] leading-[16px]">Short Description:</h3>
      <p className="mt-[8px] text-[14px] leading-[24px] text-[#727272]">{description}</p>

      <h3 className="mt-[18px] text-[15px] font-medium text-[#3D3D3D] leading-[16px]">Size:</h3>
      <div className="mt-[9px] flex gap-[10px]">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={
              size === selectedSize
                ? 'w-[28px] h-[28px] rounded-full border border-[#46A358] text-[#46A358] font-bold text-[14px] flex items-center justify-center'
                : 'w-[28px] h-[28px] rounded-full border border-[#E5E5E5] text-[#727272] text-[14px] flex items-center justify-center'
            }
          >
            {size}
          </button>
        ))}
      </div>

      <div className="mt-[17px] flex items-center gap-[10px]">
        <div className="flex items-center w-[119px] h-[38px] rounded-[31px] border border-[#E5E5E5]">
          <button
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-[38px] h-[38px] rounded-full bg-[#46A358] text-white flex items-center justify-center text-[18px] shrink-0"
          >
            −
          </button>
          <span className="flex-1 text-center text-[#3D3D3D] text-[16px]">{quantity}</span>
          <button
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-[38px] h-[38px] rounded-full bg-[#46A358] text-white flex items-center justify-center text-[20px] shrink-0"
          >
            +
          </button>
        </div>

        <button className="w-[130px] h-[40px] rounded-[6px] bg-[#46A358] text-white font-bold text-[14px] uppercase">
          Buy Now
        </button>

        <button className="h-[40px] px-[20px] rounded-[6px] border border-[#46A358] text-[#46A358] font-bold text-[14px] uppercase">
          Add to cart
        </button>

        <button
          aria-label="Add to wishlist"
          className="w-[40px] h-[40px] rounded-[6px] border border-[#46A358] flex items-center justify-center text-[#46A358]"
        >
          <CiHeart size={20} />
        </button>
      </div>

      <p className="mt-[18px] text-[15px] text-[#727272]">SKU: {sku}</p>
      <p className="mt-[10px] text-[15px] text-[#727272]">Categories: {category}</p>
      <p className="mt-[11px] text-[15px] text-[#727272]">Tags: {tags}</p>

      <div className="mt-[12px] flex items-center gap-[15px]">
        <span className="text-[15px] font-medium text-[#3D3D3D]">Share this products:</span>
        <div className="flex items-center gap-[18px] text-[#3D3D3D]">
          <FaFacebookF size={15} />
          <FaTwitter size={15} />
          <FaLinkedinIn size={15} />
          <CiMail size={17} />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
