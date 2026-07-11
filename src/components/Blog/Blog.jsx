import BlogCard from './BlogCard'
import post1 from '../../assets/01.svg'
import post2 from '../../assets/02.svg'
import post3 from '../../assets/03.svg'
import post4 from '../../assets/04.svg'

const posts = [
  {
    image: post1,
    date: 'September 12',
    readTime: '6 minutes',
    title: 'Cactus & Succulent Care Tips',
    excerpt: 'Cacti are succulents are easy care plants for any home or patio.',
  },
  {
    image: post2,
    date: 'September 13',
    readTime: '2 minutes',
    title: 'Top 10 Succulents for Your Home',
    excerpt: 'Best in hanging baskets. Prefers medium to high light.',
  },
  {
    image: post3,
    date: 'September 15',
    readTime: '3 minutes',
    title: 'Cacti & Succulent Care Tips',
    excerpt: 'Cacti and succulents thrive in containers and because most are..',
  },
  {
    image: post4,
    date: 'September 15',
    readTime: '2 minutes',
    title: 'Best Houseplants Room By Room',
    excerpt: 'The benefits of houseplants are endless. In addition to..',
  },
]

function Blog() {
  return (
    <section className="mt-[70px]">
      <h2 className="text-center text-[#3D3D3D] font-bold text-[30px]">Our Blog Posts</h2>
      <p className="mt-[15px] text-center text-[#727272] text-[14px] leading-[24px] max-w-[557px] mx-auto">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>

      <div className="mt-[41px] flex flex-col md:flex-row md:justify-between gap-y-10 gap-x-6">
        {posts.map((post) => (
          <BlogCard key={post.title + post.date} {...post} />
        ))}
      </div>
    </section>
  )
}

export default Blog
