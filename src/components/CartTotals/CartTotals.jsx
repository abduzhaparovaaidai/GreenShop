import { Link } from 'react-router-dom'

const SHIPPING = 16

const formatPrice = (value) => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

function CartTotals({ subtotal }) {
  const total = subtotal + SHIPPING

  return (
    <div className="w-full lg:w-[332px] shrink-0">
      <h3 className="text-[18px] font-bold text-[#3D3D3D] leading-[16px]">Cart Totals</h3>

      <p className="mt-[22px] text-[14px] text-[#3D3D3D] leading-[16px]">Coupon Apply</p>
      <div className="relative mt-[8px] h-[40px]">
        <input
          type="text"
          placeholder="Enter coupon code here..."
          className="w-full h-full rounded-[3px] border border-[#46A358] pl-[9px] pr-[110px] text-[14px] text-[#A5A5A5] outline-none"
        />
        <button className="absolute right-0 top-0 h-[40px] w-[102px] bg-[#46A358] text-white font-bold text-[15px] rounded-tr-[3px] rounded-br-[3px]">
          Apply
        </button>
      </div>

      <div className="mt-[30px] flex items-center justify-between">
        <span className="text-[15px] text-[#3D3D3D] leading-[16px]">Subtotal</span>
        <span className="text-[18px] font-medium text-[#3D3D3D] leading-[16px]">${formatPrice(subtotal)}</span>
      </div>

      <div className="mt-[15px] flex items-center justify-between">
        <span className="text-[15px] text-[#3D3D3D] leading-[16px]">Coupon Discount</span>
        <span className="text-[15px] text-[#3D3D3D] leading-[16px]">(-) 00.00</span>
      </div>

      <div className="mt-[21px]">
        <div className="flex items-center justify-between">
          <span className="text-[15px] text-[#3D3D3D] leading-[16px]">Shiping</span>
          <span className="text-[18px] font-medium text-[#3D3D3D] leading-[16px]">${SHIPPING.toFixed(2)}</span>
        </div>
        <p className="mt-[8px] text-right text-[12px] text-[#46A358] leading-[16px]">View shipping charge</p>
      </div>

      <div className="mt-[26px] flex items-center justify-between">
        <span className="text-[16px] font-bold text-[#3D3D3D] leading-[16px]">Total</span>
        <span className="text-[18px] font-bold text-[#46A358] leading-[16px]">${formatPrice(total)}</span>
      </div>

      <Link
        to="/checkout"
        className="mt-[29px] flex items-center justify-center w-full h-[40px] rounded-[3px] bg-[#46A358] text-white font-bold text-[15px]"
      >
        Proceed To Checkout
      </Link>

      <p className="mt-[14px] text-center text-[15px] text-[#46A358]">Continue Shopping</p>
    </div>
  )
}

export default CartTotals
