import { useState } from 'react'
import beachSpiderLily from '../../assets/BeachSpiderLily.png'
import blushingBromeliad from '../../assets/BlushingBromeliad.svg'
import aluminumPlant from '../../assets/AluminumPlant.svg'
import birdsNestFern from '../../assets/BirdsNestFern.svg'
import chineseEvergreen from '../../assets/ChineseEvergreen.svg'

const products = [
  { name: 'Beach Spider Lily', price: 129, image: beachSpiderLily },
  { name: 'Blushing Bromeliad', price: 139, image: blushingBromeliad },
  { name: 'Aluminum Plant', price: 179, image: aluminumPlant },
  { name: "Bird's Nest Fern", price: 99, image: birdsNestFern },
  { name: 'Chinese Evergreen', price: 39, image: chineseEvergreen },
]

function RelatedProducts({ title = 'Releted Products' }) {
  const [activeDot, setActiveDot] = useState(1)

  return (
    <div className="mt-[80px]">
      <h2 className="text-[17px] font-bold text-[#46A358] leading-[16px]">{title}</h2>
      <div className="mt-[18px] border-t border-[#46A358]/50" />

      <div className="mt-[44px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div key={product.name}>
            <div className="w-full aspect-[219/255] bg-[#FBFBFB] flex items-center justify-center overflow-hidden">
              <img src={product.image} alt={product.name} className="w-[70%] h-[70%] object-contain mix-blend-multiply" />
            </div>
            <p className="mt-[16px] text-[15px] text-[#3D3D3D]">{product.name}</p>
            <p className="mt-[5px] text-[16px] font-bold text-[#46A358]">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-[33px] flex items-center justify-center gap-[10px]">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            aria-label={`Slide ${dot + 1}`}
            onClick={() => setActiveDot(dot)}
            className={
              dot === activeDot
                ? 'w-[12px] h-[12px] rounded-full bg-[#46A358]'
                : 'w-[12px] h-[12px] rounded-full border-[1.3px] border-[#46A358]'
            }
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
