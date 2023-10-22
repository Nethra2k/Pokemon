import HomePosts from "../components/HomeCards"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px]">
     <HomePosts/>
    </div>
    <Footer/>
    </>
  )
}

export default Home