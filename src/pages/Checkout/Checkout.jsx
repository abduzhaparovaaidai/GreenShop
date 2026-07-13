import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import barbertonDaisy from '../../assets/BarbertonDaisy.svg'
import blushingBromeliad from '../../assets/BlushingBromeliad.svg'
import aluminumPlant from '../../assets/AluminumPlant.svg'
import cardsImg from '../../assets/cardsImg.svg'

const orderItems = [
  { id: 1, image: barbertonDaisy, name: 'Barberton Daisy', sku: '1995751877966', quantity: 2, subtotal: 238 },
  { id: 2, image: blushingBromeliad, name: 'Blushing Bromeliad', sku: '19957518757065', quantity: 6, subtotal: 834 },
  { id: 3, image: aluminumPlant, name: 'Aluminum Plant', sku: '1995751877786', quantity: 9, subtotal: 1611 },
]

const SHIPPING = 16
const subtotal = orderItems.reduce((sum, item) => sum + item.subtotal, 0)
const total = subtotal + SHIPPING

const formatPrice = (value) => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const inputClass =
  'w-full h-[40px] rounded-[3px] border border-[#EAEAEA] px-[9px] text-[15px] text-[#3D3D3D] placeholder:text-[#A5A5A5] outline-none focus:border-[#46A358]'
const selectClass = `${inputClass} appearance-none pr-[30px]`
const labelClass = 'text-[15px] text-[#3D3D3D]'

function Required() {
  return <span className="text-[#F03800] text-[18px] leading-none align-middle"> *</span>
}

function FieldSelect({ placeholder, options }) {
  return (
    <div className="relative">
      <select defaultValue="" className={selectClass}>
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <IoIosArrowDown className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2 text-[#A5A5A5]" size={16} />
    </div>
  )
}

function PaymentOption({ selected, onSelect, children }) {
  return (
    <label className="flex items-center gap-[26px] w-full h-[45px] px-[11px] rounded-[3px] border border-[#EAEAEA] cursor-pointer">
      <span className="relative w-[16px] h-[16px] rounded-full border-[1.2px] border-[#46A358] flex items-center justify-center shrink-0">
        {selected && <span className="w-[10px] h-[10px] rounded-full bg-[#46A358]" />}
      </span>
      {children}
      <input type="radio" checked={selected} onChange={onSelect} className="hidden" />
    </label>
  )
}

function Checkout() {
  const [shipDifferent, setShipDifferent] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('cod')

  return (
    <main className="pt-[26px] pb-[60px]">
      <p className="text-[15px] leading-[16px]">
        <Link to="/" className="font-bold text-[#3D3D3D] hover:opacity-70">Home</Link>
        <span className="text-[#3D3D3D]"> / </span>
        <Link to="/shop" className="text-[#3D3D3D] hover:opacity-70">Shop</Link>
        <span className="text-[#3D3D3D]"> / Checkout</span>
      </p>

      <div className="mt-[35px] flex flex-col lg:flex-row gap-x-[68px] gap-y-10">
        <div className="flex-1 min-w-0 max-w-[915px]">
          <h2 className="text-[17px] font-bold text-[#3D3D3D] leading-[16px]">Billing Address</h2>

          <div className="mt-[35px] grid grid-cols-1 sm:grid-cols-2 gap-x-[42px] gap-y-[27px]">
            <div>
              <label className={labelClass}>First Name<Required /></label>
              <input type="text" className={`${inputClass} mt-[13px]`} />
            </div>
            <div>
              <label className={labelClass}>Last Name<Required /></label>
              <input type="text" className={`${inputClass} mt-[13px]`} />
            </div>

            <div>
              <label className={labelClass}>Country / Region<Required /></label>
              <div className="mt-[13px]">
                <FieldSelect placeholder="Select a country / region" options={['Kyrgyzstan', 'United States', 'Germany']} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Town / City<Required /></label>
              <input type="text" className={`${inputClass} mt-[13px]`} />
            </div>

            <div>
              <label className={labelClass}>Street Address<Required /></label>
              <input type="text" placeholder="House number and street name" className={`${inputClass} mt-[13px]`} />
            </div>
            <div>
              <label className={`${labelClass} invisible`}>Apartment</label>
              <input type="text" placeholder="Appartment, suite, unit, etc. (optional)" className={`${inputClass} mt-[13px]`} />
            </div>

            <div>
              <label className={labelClass}>State<Required /></label>
              <div className="mt-[13px]">
                <FieldSelect placeholder="Select a state" options={['Bishkek', 'Osh', 'Chuy']} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Zip<Required /></label>
              <input type="text" className={`${inputClass} mt-[13px]`} />
            </div>

            <div>
              <label className={labelClass}>Email address<Required /></label>
              <input type="email" className={`${inputClass} mt-[13px]`} />
            </div>
            <div>
              <label className={labelClass}>Phone Number<Required /></label>
              <div className="mt-[13px] flex items-center h-[40px] rounded-[3px] border border-[#EAEAEA] pl-[9px] pr-[9px] gap-[8px]">
                <span className="flex items-center gap-[4px] text-[15px] text-[#3D3D3D] shrink-0">
                  +966 <IoIosArrowDown size={14} className="text-[#A5A5A5]" />
                </span>
                <span className="w-px h-[20px] bg-[#EAEAEA]" />
                <input type="tel" className="flex-1 min-w-0 text-[15px] text-[#3D3D3D] outline-none" />
              </div>
            </div>
          </div>

          <label className="mt-[36px] flex items-center gap-[12px] cursor-pointer w-fit">
            <span className="relative w-[15px] h-[15px] rounded-full border-2 border-[#46A358] flex items-center justify-center shrink-0">
              {shipDifferent && <span className="w-[7px] h-[7px] rounded-full bg-[#46A358]" />}
            </span>
            <span className="text-[15px] font-medium text-[#3D3D3D]">Ship to a different address?</span>
            <input
              type="checkbox"
              checked={shipDifferent}
              onChange={() => setShipDifferent((v) => !v)}
              className="hidden"
            />
          </label>

          <div className="mt-[41px]">
            <label className={labelClass}>Order notes (optional)</label>
            <textarea
              rows={5}
              className="mt-[13px] block w-[350px] h-[152px] rounded-[3px] border border-[#EAEAEA] p-[9px] text-[15px] text-[#3D3D3D] outline-none focus:border-[#46A358] resize"
            />
          </div>
        </div>

        <div className="w-full lg:w-[380px] shrink-0">
          <h2 className="text-[17px] font-bold text-[#3D3D3D] leading-[16px]">Your Order</h2>

          <div className="mt-[24px] flex items-center justify-between text-[16px] font-medium text-[#3D3D3D]">
            <span>Products</span>
            <span>Subtotal</span>
          </div>
          <div className="mt-[15px] border-t border-[#46A358]/20" />

          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center gap-[14px] py-[16px] border-b border-[#46A358]/10">
              <img
                src={item.image}
                alt={item.name}
                className="w-[70px] h-[70px] object-contain bg-[#FBFBFB] rounded-[6px] mix-blend-multiply shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[16px] font-medium text-[#3D3D3D] truncate">{item.name}</p>
                <p className="mt-[4px] text-[14px] text-[#727272] truncate">SKU: {item.sku}</p>
              </div>
              <span className="text-[14px] text-[#727272] shrink-0">(x {item.quantity})</span>
              <span className="text-[18px] font-bold text-[#46A358] shrink-0">${formatPrice(item.subtotal)}</span>
            </div>
          ))}

          <p className="mt-[18px] text-right text-[14px] text-[#3D3D3D]">
            Have a coupon code? <span className="font-medium text-[#46A358] cursor-pointer">Click here</span>
          </p>

          <div className="mt-[19px] flex items-center justify-between">
            <span className="text-[15px] text-[#3D3D3D]">Subtotal</span>
            <span className="text-[18px] font-medium text-[#3D3D3D]">${formatPrice(subtotal)}</span>
          </div>

          <div className="mt-[17px] flex items-center justify-between">
            <span className="text-[15px] text-[#3D3D3D]">Coupon Discount</span>
            <span className="text-[15px] text-[#3D3D3D]">(-) 00.00</span>
          </div>

          <div className="mt-[17px]">
            <div className="flex items-center justify-between">
              <span className="text-[15px] text-[#3D3D3D]">Shiping</span>
              <span className="text-[18px] font-medium text-[#3D3D3D]">${SHIPPING.toFixed(2)}</span>
            </div>
            <p className="mt-[8px] text-right text-[12px] text-[#46A358]">View shipping charge</p>
          </div>

          <div className="mt-[24px] flex items-center justify-between">
            <span className="text-[16px] font-bold text-[#3D3D3D]">Total</span>
            <span className="text-[18px] font-bold text-[#46A358]">${formatPrice(total)}</span>
          </div>

          <h3 className="mt-[32px] text-[17px] font-bold text-[#3D3D3D] leading-[16px]">Payment Method</h3>

          <div className="mt-[24px] flex flex-col gap-[15px]">
            <PaymentOption selected={paymentMethod === 'card'} onSelect={() => setPaymentMethod('card')}>
              <img src={cardsImg} alt="PayPal, Mastercard, Visa, American Express" className="h-[26px] w-[224px] object-contain mix-blend-multiply" />
            </PaymentOption>
            <PaymentOption selected={paymentMethod === 'bank'} onSelect={() => setPaymentMethod('bank')}>
              <span className="text-[15px] text-[#3D3D3D]">Direct bank transfer</span>
            </PaymentOption>
            <PaymentOption selected={paymentMethod === 'cod'} onSelect={() => setPaymentMethod('cod')}>
              <span className="text-[15px] text-[#3D3D3D]">Cash on delivery</span>
            </PaymentOption>
          </div>

          <button className="mt-[36px] w-full h-[40px] rounded-[3px] bg-[#46A358] text-white font-bold text-[15px]">
            Place Order
          </button>
        </div>
      </div>
    </main>
  )
}

export default Checkout
