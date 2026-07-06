import Banner from '../../components/Banner/Banner'
import Sidebar from '../../components/Sidebar/Sidebar'

function Home() {
  return (
    <main>
      <Banner />
      <div className="flex gap-8 mt-8">
        <Sidebar />
        <div className="flex-1">
          <p>Products will be here</p>
        </div>
      </div>
    </main>
  )
}

export default Home
