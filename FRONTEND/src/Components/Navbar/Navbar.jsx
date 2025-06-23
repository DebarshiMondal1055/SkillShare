import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PublishIcon from '@mui/icons-material/Publish';
const Navbar = ({toggleSideNavbar}) => {

    const toggle=()=>{
        toggleSideNavbar()
    }
  return (
    <div className='h-16 w-full bg-black 
                    flex justify-between items-center px-3.5 fixed top-0 z-10'>
        <div className='gap-4 flex justify-center items-center w-fit '>
            <div className='h-[40px] w-[40px] flex justify-center items-center cursor-pointer'
                    onClick={toggle}
                >
                <MenuIcon sx={{color:'white', fontSize:"26.5px"}}/>
            </div>
            <div className=' flex justify-center items-center cursor-pointer '>
                <YouTubeIcon sx={{color:'white',fontSize:"34px"}}/>
                <h1 className='text-white font-bold text-xl '>YouTube</h1>
            </div>
        </div>
        {/* navbar-left-part end */}
        <div className='flex gap-2 w-[50%]'>
            <div className='flex w-[80%] '>
                <input type="text" placeholder="Search" 
                className='bg-[#6c6c6c] h-[38px] w-full rounded-l-3xl pl-4 border-[1px]
                 border-white focus:outline-none placeholder-white placeholder:text-lg '/>
                <div className='flex justify-center items-center w-[15%] bg-[#383838] rounded-r-3xl cursor-pointer'>
                    <SearchIcon sx={{color:"white",fontSize:"28px"}}/>
                </div>
            </div>
            <div className='flex justify-center items-center bg-[#313131] rounded-full w-10 cursor-pointer'>
                <MicNoneIcon sx={{color:"white"}}/>
            </div>
        </div>
        {/* nabar-middle ends */}
        <div className='flex gap-6 justify-center items-center'>
            <div>
                <PublishIcon sx={{color:"white",fontSize:"28px"}}/>
            </div>
            <div>
                <button className='h-[38px] px-4 bg-emerald-600 rounded-xl'>Login</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar
