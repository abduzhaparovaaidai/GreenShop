import { useState } from 'react'

function ProductTabs({ reviewCount, paragraphs, rooms }) {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="mt-[70px]">
      <div className="relative flex gap-[30px] border-b border-[#46A358]/50">
        <button
          onClick={() => setActiveTab('description')}
          className={`pb-[16px] text-[17px] ${activeTab === 'description' ? 'font-bold text-[#46A358]' : 'font-normal text-[#3D3D3D]'}`}
        >
          Product Description
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-[16px] text-[17px] ${activeTab === 'reviews' ? 'font-bold text-[#46A358]' : 'font-normal text-[#3D3D3D]'}`}
        >
          Reviews ({reviewCount})
        </button>

        <span
          className={`absolute bottom-0 h-[3px] bg-[#46A358] transition-all ${
            activeTab === 'description' ? 'left-0 w-[161px]' : 'left-[191px] w-[97px]'
          }`}
        />
      </div>

      {activeTab === 'description' ? (
        <div className="mt-[18px]">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[14px] leading-[24px] text-[#727272] mb-[24px] last:mb-0">
              {p}
            </p>
          ))}

          {rooms.map((room) => (
            <div key={room.title} className="mt-[24px]">
              <h4 className="text-[14px] font-bold leading-[24px] text-[#3D3D3D]">{room.title}</h4>
              <p className="text-[14px] leading-[24px] text-[#727272]">{room.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-[18px] text-[14px] leading-[24px] text-[#727272]">No reviews yet.</p>
      )}
    </div>
  )
}

export default ProductTabs
