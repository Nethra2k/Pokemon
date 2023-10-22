import "./App.css";
import { Card } from "./components/Card";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CreateCards from "./pages/CreateCards"
import {  UserContextProvider } from './context/UserContext'


const App = () => {
  return (
    <UserContextProvider>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path="/create" element={<CreateCards/>}/> 
        <Route exact path="/register" element={<Register/>}/> 
      </Routes>
       
     </UserContextProvider>
  )
}

export default App
