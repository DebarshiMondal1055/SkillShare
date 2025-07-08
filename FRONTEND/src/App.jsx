import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Video from './Pages/Video/Video.jsx';
import { Outlet, useNavigate } from "react-router";
import UserProfile from './Pages/UserProfile/UserProfile.jsx';
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import WatchHistory from './Pages/WatchHistory/WatchHistory.jsx';
import { AuthenticationContextProvider } from './Context/AuthenticationContext.js';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';



function App() {
  const navigate=useNavigate();
  const queryClient=useQueryClient()
  const [showSideNavbar,setShowSideNavbar]=useState(true);
  const toggleSideNavbar=()=>{
    setShowSideNavbar((prev)=>!prev);
  }
 const {data,isLoading}=useQuery({
      queryKey:['currentUser'],
      queryFn:async()=>{
        try {
          const response=await axios.get("/api/v1/users/get-user",{withCredentials:true})
          return (response.status>=200 && response.status<300)?response.data.data:null;
        } catch (error) {
          console.error(error);
          return null;
        }
        
      },
      staleTime:Infinity,
      cacheTime:Infinity,
      refetchOnWindowFocus:false
 })
  useEffect(() => {
    if (!isLoading && !data) {
      navigate("/login");
    }
  }, [isLoading, data, navigate]);
  
  return (
    <AuthenticationContextProvider value={{user:data}}>
      <Navbar toggleSideNavbar={toggleSideNavbar}/>
      <Outlet context={{showSideNavbar}}/>
    </AuthenticationContextProvider>
  )
}

export default App
