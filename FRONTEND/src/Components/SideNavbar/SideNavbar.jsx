import React from 'react'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import PersonIcon from '@mui/icons-material/Person';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthenticationContext';
const SideNavbar = () => {
  const {user}=useAuthContext();
  return (
    <div className='flex flex-col gap-2 px-[14px] fixed overflow-y-auto box-border 
                w-[280px] bg-black py-4 top-[64px] h-[92vh] '>
      <div className='flex flex-col gap-2.5 border-b-3 border-gray-600 pb-3'>
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                         hover:bg-[#404040] border-white border-2 rounded-[10px]'>
            <HomeFilledIcon sx={{color:"white"}}/>
            <div className='text-white'>Home</div>
        </div>
        <Link to={`/users/${user?.username}`} className='flex gap-4 px-4 py-2 items-center cursor-pointer
                         hover:bg-[#404040] rounded-[10px] border-white border-2'>
            <PersonIcon sx={{color:"white"}}/>
            <div className='text-white'>My Profile</div>
        </Link>
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                         hover:bg-[#404040] rounded-[10px] border-white border-2'>
            <BrowseGalleryIcon sx={{color:"white"}}/>
            <Link to={'/history'} className='text-white'>Watch History</Link>
        </div>
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                         hover:bg-[#404040] rounded-[10px] border-white border-2'>
            <ThumbUpIcon sx={{color:"white"}}/>
            <div className='text-white'>Liked Videos</div>
        </div>
        
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                         hover:bg-[#404040] rounded-[10px] border-white border-2'>
            <SupervisorAccountIcon sx={{color:"white"}}/>
            <div className='text-white'>Subscribers</div>
        </div>
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                         hover:bg-[#404040] rounded-[10px] border-white border-2'>
            <PermMediaIcon sx={{color:"white"}}/>
            <div className='text-white'>My Collections</div>
        </div>


      </div>
        
        {/* top-sidebar-part ends */}
      
      <div className='flex flex-col gap-2.5 border-b-3'>
        <div className='flex gap-4 px-4 py-2 items-center'>
            <div className='text-white font-bold'>Subsriptions</div>
        </div>
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                        bg-[#60637c] hover:bg-[#2b3434] rounded-[10px] border-white border-2'>
            <img src="https://res.cloudinary.com/deeccmrzc/image/upload/v1749487214/gh5gpj14rqpugcvsgnu3.jpg" 
            alt="" className='w-[25px] h-[25px] rounded-full' 

            />
            <div className='text-white'>Martin Garrix</div>
        </div>        
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                        bg-[#60637c] hover:bg-[#2b3434] rounded-[10px] border-white border-2'>
            <img src="https://res.cloudinary.com/deeccmrzc/image/upload/v1749487214/gh5gpj14rqpugcvsgnu3.jpg" 
            alt="" className='w-[25px] h-[25px] rounded-full' 

            />
            <div className='text-white'>Martin Garrix</div>
        </div>        
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                        bg-[#60637c] hover:bg-[#2b3434] rounded-[10px] border-white border-2'>
            <img src="https://res.cloudinary.com/deeccmrzc/image/upload/v1749487214/gh5gpj14rqpugcvsgnu3.jpg" 
            alt="" className='w-[25px] h-[25px] rounded-full' 

            />
            <div className='text-white'>Martin Garrix</div>
        </div>        
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                        bg-[#60637c] hover:bg-[#2b3434] rounded-[10px] border-white border-2'>
            <img src="https://res.cloudinary.com/deeccmrzc/image/upload/v1749487214/gh5gpj14rqpugcvsgnu3.jpg" 
            alt="" className='w-[25px] h-[25px] rounded-full' 

            />
            <div className='text-white'>Martin Garrix</div>
        </div>        
        <div className='flex gap-4 px-4 py-2 items-center cursor-pointer
                        bg-[#60637c] hover:bg-[#2b3434] rounded-[10px] border-white border-2'>
            <img src="https://res.cloudinary.com/deeccmrzc/image/upload/v1749487214/gh5gpj14rqpugcvsgnu3.jpg" 
            alt="" className='w-[25px] h-[25px] rounded-full' 

            />
            <div className='text-white'>Martin Garrix</div>
        </div>        

      </div>

    </div>
  )
}

export default SideNavbar
