import plant from '../../assets/BeachSpiderLily.png'

function Banner() {
  return (
    <section className="bg-[#F5F5F5] min-h-[320px] lg:h-[450px] overflow-hidden mt-3 flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 gap-6 lg:gap-0">
      <div className="px-4 lg:pl-[40px] lg:pr-0 text-center lg:text-left min-w-0">
        <p className="text-[#3D3D3D] text-[12px] lg:text-[14px] font-medium tracking-[0.1em] uppercase">
          Welcome to GreenShop
        </p>
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[70px] font-black leading-[1.1] lg:leading-[70px] uppercase mt-2">
          LET'S MAKE A <br className="hidden lg:block" /> BETTER <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="text-[#727272] text-[14px] leading-[24px] mt-4 max-w-[557px] mx-auto lg:mx-0">
          We are an online plant shop offering a wide range of cheap and trendy plants.
          Use our plants to create an unique Urban Jungle. Order your favorite plants!
        </p>
        <button className="mt-[40px] bg-[#46A358] text-white w-[140px] h-[40px] rounded-[6px] text-[16px] font-bold uppercase">
          SHOP NOW
        </button>
      </div>

      <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[518px] lg:h-[518px] shrink-0 mx-auto lg:mx-0">
        <img src={plant} alt="plant" className="w-full h-full object-contain" />
        <img src={plant} alt="plant" className="absolute bottom-[7%] left-[10%] w-[26%] h-[26%] object-contain" />
      </div>
    </section>
  )
}

export default Banner
