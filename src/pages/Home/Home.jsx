import Banner from '../../components/Banner/Banner'
import Sidebar from '../../components/Sidebar/Sidebar'
import Products from '../../components/Products/Products'
import Blog from '../../components/Blog/Blog'

function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-[50px] mt-8">
        <Sidebar />
        <div className="flex-1">
          <Products />
        </div>
      </div>
      <Blog />
    </main>
  )
}

export default Home
