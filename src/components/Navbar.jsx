import {Link} from "react-router-dom"
//import {BsSearch} from "react-icons/bs" 
import {useLocation } from "react-router-dom"


  const Navbar = () => {
    
    const path=useLocation().pathname
    const {user}=false

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h1 className="text-extrabold md:text-xl font-extrabold"><Link to="/">Pokemon</Link></h1>
    {path==="/" && <div className="flex justify-center items-center space-x-0">
   {/* <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p> */}
    {/* <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/> */}
    </div>}
    <div className="flex items-center justify-ccenter space-x-2 md:space-x-4 ">
    {user? <h3 className=""><Link to="/write">Create</Link></h3>:<h3 className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></h3>}
    {user? <h3 className=""><Link to="/profile">Profile</Link></h3>:<h3 className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></h3>}
    </div>  
    </div>
  )
}
export default Navbar
