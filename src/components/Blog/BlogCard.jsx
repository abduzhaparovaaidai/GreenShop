import { PiArrowRightBold } from 'react-icons/pi'

function BlogCard({ image, date, readTime, title, excerpt }) {
  return (
    <div className="w-[268px]">
      <div className="w-[268px] h-[195.17px] bg-[#E5E5E5] overflow-hidden">
        {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
      </div>

      <div className="w-[268px] h-[167px] bg-[#FBFBFB]">
        <div className="pt-[9px] w-[242px] mx-auto">
          <p className="text-[#46A358] font-medium text-[14px] leading-[16px]">
            {date} I Read in {readTime}
          </p>
          <h3 className="mt-[4px] h-[52px] overflow-hidden line-clamp-2 text-[#3D3D3D] font-bold text-[20px] leading-[26px]">
            {title}
          </h3>
          <p className="mt-[4px] h-[44px] overflow-hidden line-clamp-2 text-[#727272] text-[14px] leading-[22px]">
            {excerpt}
          </p>
          <a href="#" className="mt-[9px] flex items-center gap-[3px] text-[#3D3D3D] font-medium text-[14px] leading-[16px] hover:text-[#46A358] transition-colors">
            Read More <PiArrowRightBold size={16} className="relative -top-px" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
