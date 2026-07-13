import { useState } from 'react'
import { Link } from 'react-router-dom'
import barbertonDaisy from '../../assets/BarbertonDaisy.svg'
import angelWingBegonia from '../../assets/AngelWingBegonia.svg'
import africanViolet from '../../assets/AfricanViolet.svg'
import broadleafLadyPalm from '../../assets/BroadleafLadyPalm.svg'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import ProductTabs from '../../components/ProductTabs/ProductTabs'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'

const products = [
  {
    image: barbertonDaisy,
    name: 'Barberton Daisy',
    price: 119,
    rating: 4,
    reviewCount: 19,
    sku: '1995751877966',
    category: 'Potter Plants',
    tags: 'Home, Garden, Plants',
    description: 'Barberton Daisy (Gerbera jamesonii) is a cheerful, compact flowering plant known for its bold, colorful blooms and glossy green foliage. Easy to care for, it makes a bright addition to any sunny windowsill or patio.',
    paragraphs: [
      'The Barberton Daisy is one of the most popular flowering houseplants thanks to its vivid, long-lasting blooms in shades of pink, orange, yellow, and red. Native to South Africa, this compact plant thrives in bright, indirect light and adds a cheerful pop of color to any room.',
      'With proper care, Barberton Daisies can bloom for months at a time. Water when the top inch of soil feels dry, and deadhead spent flowers to encourage new growth. This plant pairs beautifully with modern or bohemian interiors alike, and stays compact enough for tabletops, shelves, and windowsills.',
    ],
    rooms: [
      { title: 'Living Room:', text: 'Place your Barberton Daisy near a bright window to keep its blooms vibrant. It brings a natural pop of color to any living space and pairs well with neutral, modern decor.' },
      { title: 'Dining Room:', text: 'A Barberton Daisy makes a lovely centerpiece for your dining table, adding a cheerful and welcoming touch to mealtimes with family and guests.' },
      { title: 'Office:', text: 'Brighten up your workspace with a Barberton Daisy — its bold colors are known to lift mood and boost productivity throughout the day.' },
    ],
  },
  {
    image: angelWingBegonia,
    name: 'Angel Wing Begonia',
    price: 169,
    rating: 5,
    reviewCount: 12,
    sku: '1995751877967',
    category: 'House Plants',
    tags: 'Home, Foliage, Flowering',
    description: "Angel Wing Begonia is prized for its striking silver-spotted leaves shaped like angel wings and clusters of delicate pink flowers. It thrives in bright, indirect light and adds an elegant touch to any indoor space.",
    paragraphs: [
      "Angel Wing Begonia gets its name from its distinctive wing-shaped leaves, often speckled with silver and tinged with red underneath. Clusters of drooping pink or white flowers bloom throughout the warmer months, adding delicate color to its bold foliage.",
      "This begonia prefers bright, indirect light and slightly moist, well-draining soil. Avoid overwatering, as it's prone to root rot. With regular care, it can grow into an impressive, full plant that becomes a real centerpiece.",
    ],
    rooms: [
      { title: 'Living Room:', text: "The Angel Wing Begonia's dramatic foliage makes a striking statement plant for a living room corner or console table." },
      { title: 'Dining Room:', text: 'Its cascading blooms add a soft, romantic touch to a dining room, especially where afternoon light can catch its leaves.' },
      { title: 'Office:', text: 'A begonia on your desk brings texture and color without demanding much upkeep, perfect for a busy workspace.' },
    ],
  },
  {
    image: africanViolet,
    name: 'African Violet',
    price: 199,
    rating: 4,
    reviewCount: 27,
    sku: '1995751877968',
    category: 'House Plants',
    tags: 'Home, Flowering, Compact',
    description: 'African Violet is a compact, ever-blooming houseplant with velvety leaves and clusters of purple, pink, or white flowers. It prefers bright, indirect light and consistently moist soil.',
    paragraphs: [
      "African Violets are beloved for their fuzzy, deep green leaves and near-constant clusters of colorful blooms. Native to Tanzania, they're one of the most popular flowering houseplants for their compact size and long bloom cycles.",
      'Keep soil evenly moist but not soggy, and water from below to avoid spotting the leaves. Bright, indirect light and warm, stable temperatures will keep this classic bloomer flowering nearly year-round.',
    ],
    rooms: [
      { title: 'Living Room:', text: 'A cluster of African Violets on a coffee table or shelf brings soft color to any living room without taking up much space.' },
      { title: 'Dining Room:', text: 'Their compact size makes African Violets a charming, low-maintenance centerpiece for everyday dining.' },
      { title: 'Office:', text: 'African Violets tolerate typical indoor lighting well, making them an easy, cheerful addition to any office windowsill.' },
    ],
  },
  {
    image: broadleafLadyPalm,
    name: 'Broadleaf Lady Palm',
    price: 149,
    rating: 5,
    reviewCount: 8,
    sku: '1995751877969',
    category: 'Big Plants',
    tags: 'Home, Palm, Low Light',
    description: "Broadleaf Lady Palm is a lush, easy-care palm with fan-shaped, glossy dark green leaves. Tolerant of low light, it's a durable statement plant that brings a tropical feel to any room.",
    paragraphs: [
      "The Broadleaf Lady Palm is a slow-growing, clumping palm prized for its fan-shaped, deep green fronds. It's remarkably tolerant of low light and indoor conditions, making it one of the most forgiving palms for home or office.",
      'Water when the top inch of soil dries out, and keep away from direct, harsh sunlight. With minimal care, this palm can live for decades and steadily grow into a lush, full specimen.',
    ],
    rooms: [
      { title: 'Living Room:', text: 'A Broadleaf Lady Palm in the corner of a living room instantly adds height, texture, and a relaxed tropical feel.' },
      { title: 'Dining Room:', text: 'Its lush fronds make a great backdrop for a dining area, softening the space without overwhelming it.' },
      { title: 'Office:', text: 'This palm thrives in the low light common in offices, making it a near-maintenance-free way to bring greenery to work.' },
    ],
  },
]

function ProductView() {
  const [activeIndex, setActiveIndex] = useState(0)
  const product = products[activeIndex]

  return (
    <main className="pt-[26px]">
      <p className="text-[15px] leading-[16px]">
        <Link to="/" className="font-bold text-[#3D3D3D] hover:opacity-70">Home</Link>
        <span className="text-[#3D3D3D]"> / Shop</span>
      </p>

      <div className="mt-[32px] flex flex-col lg:flex-row gap-[52px] min-w-0">
        <ProductGallery
          images={products.map((p) => p.image)}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
        <ProductInfo
          name={product.name}
          price={product.price}
          rating={product.rating}
          reviewCount={product.reviewCount}
          description={product.description}
          sku={product.sku}
          category={product.category}
          tags={product.tags}
        />
      </div>

      <ProductTabs reviewCount={product.reviewCount} paragraphs={product.paragraphs} rooms={product.rooms} />
      <RelatedProducts />
    </main>
  )
}

export default ProductView
