import { useState } from 'react'
import { Link } from 'react-router-dom'
import barbertonDaisy from '../../assets/BarbertonDaisy.svg'
import blushingBromeliad from '../../assets/BlushingBromeliad.svg'
import aluminumPlant from '../../assets/AluminumPlant.svg'
import CartItem from '../../components/CartItem/CartItem'
import CartTotals from '../../components/CartTotals/CartTotals'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'

const initialItems = [
  { id: 1, image: barbertonDaisy, name: 'Barberton Daisy', sku: '1995751877966', price: 119, quantity: 2 },
  { id: 2, image: blushingBromeliad, name: 'Blushing Bromeliad', sku: '19957518757065', price: 139, quantity: 6 },
  { id: 3, image: aluminumPlant, name: 'Aluminum Plant', sku: '1995751877786', price: 179, quantity: 9 },
]

function ProductCart() {
  const [items, setItems] = useState(initialItems)

  const increase = (id) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)))
  const decrease = (id) => setItems((prev) => prev.map((i) => (i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i)))
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="pt-[26px]">
      <p className="text-[15px] leading-[16px]">
        <Link to="/" className="font-bold text-[#3D3D3D] hover:opacity-70">Home</Link>
        <span className="text-[#3D3D3D]"> / </span>
        <Link to="/shop" className="text-[#3D3D3D] hover:opacity-70">Shop</Link>
        <span className="text-[#3D3D3D]"> / Shopping Cart</span>
      </p>

      <div className="mt-[35px] flex flex-col lg:flex-row gap-x-[68px] gap-y-10">
        <div className="flex-1 min-w-0">
          <div className="hidden md:flex items-center text-[16px] font-medium text-[#3D3D3D]">
            <span className="w-[312px]">Products</span>
            <span className="w-[146px]">Price</span>
            <span className="w-[163px]">Quantity</span>
            <span className="flex-1 text-right">Total</span>
            <span className="w-[24px] ml-[24px]" />
          </div>
          <div className="mt-[17px] border-t border-[#46A358]/50" />

          {items.map((item) => (
            <CartItem key={item.id} item={item} onIncrease={increase} onDecrease={decrease} onRemove={remove} />
          ))}
        </div>

        <CartTotals subtotal={subtotal} />
      </div>

      <RelatedProducts title="You may be interested in" />
    </main>
  )
}

export default ProductCart
