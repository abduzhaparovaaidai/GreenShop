import { CiTrash } from 'react-icons/ci'

const formatPrice = (value) => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const total = item.price * item.quantity

  return (
    <div className="flex items-center py-[15px] border-b border-[#46A358]/10">
      <div className="flex items-center gap-[16px] w-[312px]">
        <img src={item.image} alt={item.name} className="w-[70px] h-[70px] object-contain bg-[#FBFBFB] rounded-[6px] mix-blend-multiply" />
        <div>
          <p className="text-[16px] font-medium text-[#3D3D3D]">{item.name}</p>
          <p className="mt-[4px] text-[14px] text-[#727272]">SKU: {item.sku}</p>
        </div>
      </div>

      <p className="w-[146px] text-[16px] font-medium text-[#727272]">${item.price.toFixed(2)}</p>

      <div className="w-[163px] flex items-center gap-[10px]">
        <button
          aria-label="Decrease quantity"
          onClick={() => onDecrease(item.id)}
          className="w-[25px] h-[25px] rounded-full bg-[#46A358] text-white flex items-center justify-center text-[14px] shrink-0"
        >
          −
        </button>
        <span className="text-[16px] text-[#3D3D3D]">{item.quantity}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => onIncrease(item.id)}
          className="w-[25px] h-[25px] rounded-full bg-[#46A358] text-white flex items-center justify-center text-[16px] shrink-0"
        >
          +
        </button>
      </div>

      <p className="flex-1 text-right text-[16px] font-bold text-[#46A358]">${formatPrice(total)}</p>

      <button
        aria-label="Remove item"
        onClick={() => onRemove(item.id)}
        className="ml-[24px] text-[#3D3D3D] hover:text-[#46A358] transition-colors"
      >
        <CiTrash size={24} />
      </button>
    </div>
  )
}

export default CartItem
