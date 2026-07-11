import { useState } from 'react'
import { PiCaretRightBold } from 'react-icons/pi'

const pages = [1, 2, 3, 4]

function Pagination() {
  const [active, setActive] = useState(1)

  return (
    <div className="flex justify-end gap-[10px] mt-[70px] lg:w-[840px]">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setActive(page)}
          className={
            page === active
              ? 'w-[35px] h-[35px] rounded-[4px] bg-[#46A358] text-white font-bold text-[18px] flex items-center justify-center'
              : 'w-[35px] h-[35px] rounded-[4px] border border-[#E5E5E5] text-[#3D3D3D] font-light text-[18px] flex items-center justify-center'
          }
        >
          {page}
        </button>
      ))}

      <button
        aria-label="Next page"
        className="w-[35px] h-[35px] rounded-[4px] border border-[#E5E5E5] text-[#3D3D3D] flex items-center justify-center"
      >
        <PiCaretRightBold size={14} />
      </button>
    </div>
  )
}

export default Pagination
