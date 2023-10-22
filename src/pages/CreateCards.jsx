import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const CreateCards = () => {
  return (
    <div>
     <Navbar/>
     <div className="px-6 md:px-[200px] mt-8">
      <h1 className="font-bold md:text-2xl text-xl">Create Cards</h1>
      <form className="w-full flex-col space-y-4 md:space-y-8 mt-4">
      <input type="text" placeholder="Enter card title" className="px-4 py-2 outline-none"/>
      <input type="file" className="px-4"/>
      </form>
     </div>
     <Footer/>
    </div>
  )
}

export default CreateCards