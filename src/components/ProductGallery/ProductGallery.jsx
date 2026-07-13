import { CiSearch } from 'react-icons/ci'

function ProductGallery({ images, activeIndex, onSelect }) {
  return (
    <div className="relative w-full max-w-[573px] h-[448px] flex items-center gap-[46px]">
      <div className="flex flex-col justify-between h-[448px] shrink-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-[100px] h-[100px] shrink-0 rounded-[6px] flex items-center justify-center bg-[#FBFBFB] ${index === activeIndex ? 'border border-[#46A358]' : ''}`}
          >
            <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
          </button>
        ))}
      </div>

      <div className="relative w-[444px] h-[444px] shrink-0 bg-[#FBFBFB] rounded-[6px]">
        <img src={images[activeIndex]} alt="" className="w-full h-full object-contain mix-blend-multiply" />
        <button
          aria-label="Zoom image"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#3D3D3D]"
        >
          <CiSearch size={18} />
        </button>
      </div>
    </div>
  )
}

export default ProductGallery
