import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import gardenCarePot from '../../assets/GardenCare1.svg'
import gardenCareLeaves from '../../assets/GardenCare2.svg'
import plantRenovationIcon from '../../assets/PlantRenovation.svg'
import wateringGardenIcon from '../../assets/WateringGraden.svg'
import cardsImg from '../../assets/cardsImg.svg'

const linkColumns = [
  { title: 'My Account', links: ['My Account', 'Our stores', 'Contact us', 'Career', 'Specials'] },
  { title: 'Help & Guide', links: ['Help Center', 'How to Buy', 'Shipping & Delivery', 'Product Policy', 'How to Return'] },
  { title: 'Categories', links: ['House Plants', 'Potter Plants', 'Seeds', 'Small Plants', 'Accessories'] },
]

const socialIcons = [FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube]

const cards = [
  {
    icon: gardenCarePot,
    iconTop: gardenCareLeaves,
    title: 'Garden Care',
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
  },
  {
    icon: plantRenovationIcon,
    title: 'Plant Renovation',
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
  },
  {
    icon: wateringGardenIcon,
    title: 'Watering Graden',
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants.',
  },
]

function Footer() {
  return (
    <footer className="mt-[100px]">
      <div className="h-[250px] flex items-center bg-[#FBFBFB]">
        <div className="relative max-w-[1152px] mx-auto flex gap-[62px]">
          <span className="absolute left-[238px] top-1/2 -translate-y-1/2 w-px h-[187px] bg-[#46A358]/10" />
          <span className="absolute left-[501px] top-1/2 -translate-y-1/2 w-px h-[187px] bg-[#46A358]/10" />

          {cards.map((card) => (
            <div key={card.title} className="w-[204px]">
              <div className="relative w-[68px] h-[87px]">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[74px] h-[74px] rounded-full bg-[#46A358]/[0.13]" />
                {card.iconTop ? (
                  <>
                    <img src={card.icon} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55px] object-contain" />
                    <img src={card.iconTop} alt={card.title} className="absolute top-0 left-1/2 -translate-x-1/2 w-[61px] object-contain" />
                  </>
                ) : (
                  <img src={card.icon} alt={card.title} className="relative w-[68px] h-[87px] object-contain" />
                )}
              </div>
              <h3 className="mt-[18px] text-[#3D3D3D] font-bold text-[17px] leading-[16px]">{card.title}</h3>
              <p className="mt-[9px] text-[#727272] text-[14px] leading-[22px]">{card.description}</p>
            </div>
          ))}

          <div className="w-[354px]">
            <h3 className="text-[#3D3D3D] font-bold text-[16px] leading-[16px]">Would you like to join newsletters?</h3>
            <div className="relative w-[354px] h-[40px] mt-[18px]">
              <input
                type="email"
                placeholder="enter your email address..."
                className="w-full h-full rounded-[6px] bg-white border border-black/[0.06] pl-[11px] pr-[95px] text-[14px] text-[#ACACAC] placeholder:text-[#ACACAC] outline-none"
              />
              <button className="absolute right-0 top-0 h-[40px] w-[85px] bg-[#46A358] text-white font-bold text-[14px] rounded-tr-[6px] rounded-br-[6px]">
                Join
              </button>
            </div>
            <p className="mt-[31px] text-[#727272] text-[13px] leading-[22px]">
              We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
            </p>
          </div>
        </div>
      </div>

      <div className="h-[88px] flex items-center justify-between px-[23px] bg-[#46A358]/10 border-t border-b border-[#46A358]/20">
        <div className="flex items-center gap-2 text-[#46A358] font-bold text-2xl">
          🌿 GREENSHOP
        </div>

        <div className="flex items-center gap-[9px]">
          <CiLocationOn size={20} color="#46A358" />
          <p className="text-[#3D3D3D] text-[14px] leading-[22px]">
            70 West Buckingham Ave.<br />Farmingdale, NY 11735
          </p>
        </div>

        <div className="flex items-center gap-[9px]">
          <CiMail size={20} color="#46A358" />
          <p className="text-[#3D3D3D] text-[14px] leading-[22px]">contact@greenshop.com</p>
        </div>

        <div className="flex items-center gap-[9px]">
          <CiPhone size={20} color="#46A358" />
          <p className="text-[#3D3D3D] text-[14px] leading-[22px]">+88 01911 717 490</p>
        </div>
      </div>

      <div className="bg-[#FBFBFB] py-[33px]">
        <div className="max-w-[1152px] mx-auto flex">
          {linkColumns.map((column) => (
            <div key={column.title} className="w-[266px]">
              <h4 className="font-bold text-[18px] leading-[16px] text-[#3D3D3D]">{column.title}</h4>
              <ul className="mt-[8px] text-[14px] leading-[30px] text-[#3D3D3D]">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-[266px]">
            <h4 className="font-bold text-[18px] leading-[16px] text-[#3D3D3D]">Social Media</h4>
            <div className="mt-[20px] flex gap-[10px]">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-[30px] h-[30px] rounded-[4px] border border-[#46A358]/20 flex items-center justify-center text-[#46A358]/60 hover:bg-[#46A358]/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <h4 className="mt-[33px] font-bold text-[18px] leading-[16px] text-[#3D3D3D]">We accept</h4>
            <img src={cardsImg} alt="We accept: Visa, Mastercard, PayPal, American Express" className="mt-[13px] w-[224px] h-[26px] mix-blend-multiply" />
          </div>
        </div>

      </div>

      <div className="border-t border-[#46A358]/20" />

      <p className="py-[8px] text-center text-[#3D3D3D] text-[14px] leading-[30px]">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
