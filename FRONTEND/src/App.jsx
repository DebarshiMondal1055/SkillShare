import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Video from './Pages/Video/Video.jsx';
import { Outlet } from "react-router";
import UserProfile from './Pages/UserProfile/UserProfile.jsx';
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx';



function App() {
  const [showSideNavbar,setShowSideNavbar]=useState(true);
  
  const toggleSideNavbar=()=>{
    setShowSideNavbar((prev)=>!prev);
  }

  return (
    <>
      <Navbar toggleSideNavbar={toggleSideNavbar}/>
      <Outlet context={{showSideNavbar}}/>
    </>
  )
}

export default App
