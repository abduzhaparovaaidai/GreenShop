import plant from '../../assets/plant.png'

function Banner() {
  return (
    <section className="bg-[#F5F5F5] h-[450px] overflow-visible mt-3 flex items-center justify-between">
      <div className="pl-[40px]">
        <p className="text-[#3D3D3D] text-[14px] font-medium tracking-[0.1em] uppercase">
          Welcome to GreenShop
        </p>
        <h1 className="text-[70px] font-black leading-[70px] uppercase mt-2">
          LET'S MAKE A <br /> BETTER <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="text-[#727272] text-[14px] leading-[24px] mt-4 max-w-[557px]">
          We are an online plant shop offering a wide range of cheap and trendy plants.
          Use our plants to create an unique Urban Jungle. Order your favorite plants!
        </p>
        <button className="mt-[40px] bg-[#46A358] text-white w-[140px] h-[40px] rounded-[6px] text-[16px] font-bold uppercase">
          SHOP NOW
        </button>
      </div>

      <div className="relative w-[518px] h-[518px]">
        <img src={plant} alt="plant" className="w-[518px] h-[518px] object-contain" />
        <img src={plant} alt="plant" className="absolute bottom-[37px] left-[55px] w-[135px] h-[135px] object-contain" />
      </div>
    </section>
  )
}

export default Banner
