import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import barbertonDaisy from '../../assets/BarbertonDaisy.svg'
import angelWingBegonia from '../../assets/AngelWingBegonia.svg'
import africanViolet from '../../assets/AfricanViolet.svg'
import birdsNestFern from '../../assets/BirdsNestFern.svg'
import blushingBromeliad from '../../assets/BlushingBromeliad.svg'
import aluminumPlant from '../../assets/AluminumPlant.svg'
import broadleafLadyPalm from '../../assets/BroadleafLadyPalm.svg'
import chineseEvergreen from '../../assets/ChineseEvergreen.svg'
import beachSpiderLily from '../../assets/BeachSpiderLily.png'

const tabs = ['All Plants', 'New Arrivals', 'Sale']

const products = [
  { name: 'Barberton Daisy', price: 119, image: barbertonDaisy },
  { name: 'Angel Wing Begonia', price: 169, image: angelWingBegonia },
  { name: 'African Violet', price: 199, oldPrice: 229, discount: '13% OFF', image: africanViolet },
  { name: 'Beach Spider Lily', price: 129, image: beachSpiderLily },
  { name: 'Blushing Bromeliad', price: 139, image: blushingBromeliad },
  { name: 'Aluminum Plant', price: 179, image: aluminumPlant },
  { name: 'Broadleaf Lady Palm', price: 149, image: broadleafLadyPalm },
  { name: 'Chinese Evergreen', price: 159, image: chineseEvergreen },
  { name: 'Birds Nest Fern', price: 109, image: birdsNestFern },
]

function Products() {
  const [activeTab, setActiveTab] = useState('All Plants')

  return (
    <div>
      <div className="flex items-center justify-between border-b border-[#E7E7E7] pb-3">
        <div className="flex gap-[37px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                tab === activeTab
                  ? 'text-[#46A358] font-bold text-[15px] leading-[16px]'
                  : 'text-[#3D3D3D] font-normal text-[15px] leading-[16px] hover:opacity-70'
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-[#3D3D3D] font-normal text-[15px] leading-[16px]">
          Short by: Default sorting
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-[33px] gap-y-10 lg:gap-y-[70px] mt-8 lg:w-[840px]">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <Pagination />
    </div>
  )
}

export default Products
