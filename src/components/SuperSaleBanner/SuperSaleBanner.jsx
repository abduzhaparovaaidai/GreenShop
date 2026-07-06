import superSalePlant from '../../assets/SuperSalePlantImg.svg'

function SuperSaleBanner() {
  return (
    <div
      className="relative w-[310px] h-[470px]"
      style={{ background: 'linear-gradient(180deg, rgba(70,163,88,0.10) 0%, rgba(70,163,88,0.03) 100%)' }}
    >
      <p className="absolute -top-[5px] left-[22px] w-[266px] font-['Hanging_Letters'] text-[#46A358] text-[65px] leading-[110px]">
        Super Sale
      </p>
      <p className="absolute top-[92px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[#3D3D3D] font-bold text-[23px] leading-[16px]">
        UP TO 75% OFF
      </p>
      <img
        src={superSalePlant}
        alt="Super Sale plant"
        className="absolute top-[100px] -left-[29px] w-[370px] h-[370px] max-w-none object-contain mix-blend-multiply"
      />
    </div>
  )
}

export default SuperSaleBanner
