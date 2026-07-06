import SuperSaleBanner from '../SuperSaleBanner/SuperSaleBanner'

const categories = [
  { name: 'House Plants', count: 33 },
  { name: 'Potter Plants', count: 12 },
  { name: 'Seeds', count: 65 },
  { name: 'Small Plants', count: 39 },
  { name: 'Big Plants', count: 23 },
  { name: 'Succulents', count: 17 },
  { name: 'Terrariums', count: 19 },
  { name: 'Gardening', count: 13 },
  { name: 'Accessories', count: 18 },
]

const sizes = [
  { name: 'Small', count: 119 },
  { name: 'Medium', count: 86 },
  { name: 'Large', count: 78 },
]

function Sidebar() {
  return (
    <aside className="w-[310px] bg-[#FBFBFB] shrink-0">
      <div className="pt-[14px] pl-[18px] pr-[24px] pb-[19px]">
        <div className="w-[268px]">
          <h3 className="text-[#3D3D3D] font-bold text-[18px] leading-[16px]">Categories</h3>
          <ul className="mt-[7px]">
            {categories.map(({ name, count }, index) => (
              <li key={name} className="group flex items-center justify-between h-[40px] pl-[12px]">
                <a
                  href="#"
                  className={
                    index === 0
                      ? 'text-[#46A358] font-bold text-[15px]'
                      : 'text-[#3D3D3D] font-normal text-[15px] group-hover:text-[#46A358]'
                  }
                >
                  {name}
                </a>
                <span
                  className={
                    index === 0
                      ? 'text-[#46A358] text-[15px]'
                      : 'text-[#3D3D3D] text-[15px] group-hover:text-[#46A358]'
                  }
                >
                  ({count})
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[226px] mt-[36px]">
          <h3 className="text-[#3D3D3D] font-bold text-[18px] leading-[16px]">Price Range</h3>

          <div className="relative h-[4px] w-[209px] mt-[29px] ml-[17px]">
            <div className="absolute inset-0 rounded-full bg-[#46A358]/25" />
            <div className="absolute left-0 top-0 h-full w-[161px] rounded-full bg-[#46A358]" />
            <span className="absolute top-1/2 -left-[10px] -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-[#46A358] shadow" />
            <span className="absolute top-1/2 left-[151px] -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-[#46A358] shadow" />
          </div>

          <p className="text-[15px] leading-[16px] mt-[17px] pl-[12px]">
            <span className="text-[#3D3D3D] font-normal">Price: </span>
            <span className="text-[#3D3D3D] font-bold">$39 - $1230</span>
          </p>

          <button className="mt-[16px] ml-[12px] bg-[#46A358] text-white w-[90px] h-[35px] rounded-[6px] text-[16px] font-bold leading-none flex items-center justify-center">
            Filter
          </button>
        </div>

        <div className="w-[268px] mt-[46px]">
          <h3 className="text-[#3D3D3D] font-bold text-[18px] leading-[16px]">Size</h3>
          <ul className="mt-[7px]">
            {sizes.map(({ name, count }) => (
              <li key={name} className="group flex items-center justify-between h-[40px] pl-[12px]">
                <a href="#" className="text-[#3D3D3D] font-normal text-[15px] group-hover:text-[#46A358]">
                  {name}
                </a>
                <span className="text-[#3D3D3D] text-[15px] group-hover:text-[#46A358]">({count})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SuperSaleBanner />
    </aside>
  )
}

export default Sidebar
