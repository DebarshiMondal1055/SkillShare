import React from 'react'
import { Link } from 'react-router-dom'
const UserProfilePage = ({showSideNavbar}) => {
  return (
    <div className={`flex flex-col gap-4 ${showSideNavbar ? 'ml-[280px]' : 'ml-0'} bg-black py-4 px-4 text-white min-h-[92vh] w-full overflow-x-hidden `}>
        <div className='w-full flex justify-center h-[300px] mt-2 '>
            <div className='w-[70%] h-full'>
                <img className='w-full h-full object-cover rounded-2xl ' 
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
            </div>
        </div>
        <div className='w-full flex justify-center'>
        <div className='w-[70%] flex px-4 py-6 gap-5 items-center  border-b-gray-300 border-b-2 '>
            <div className='w-[15%]'>
                <img className='w-full h-full rounded-full'
                src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
            </div>
            <div className='flex flex-col gap-2 '>
                <div className='text-2xl font-bold'>
                    Rishi Mondal
                </div>
                <div>
                    @Bumblebee
                </div>
                <div className='flex gap-2 text-gray-400 font-light'>
                    <div>10 videos</div>
                    <div>6 subscribers</div>
                </div>
                <button className='bg-red-500 py-2 px-4 flex justify-center items-center rounded-full'>Subscribe</button>
            </div>
        </div>
        </div>
        <div className='w-full flex justify-center text-white '>
            <div className='w-[70%] flex  justify-between'>
                <div className=' hover:border-b-2 hover:border-b-gray-400 px-4 py-2 w-[300px] text-lg flex justify-center items-center cursor-pointer'>
                    Videos
                </div >
                <div className='hover:border-b-2 hover:border-b-gray-400 px-4 py-2 w-[300px] text-lg flex justify-center items-center cursor-pointer'>
                    Playlists
                </div >
                <div className='hover:border-b-2 hover:border-b-gray-400 cursor-pointer px-4 py-2 w-[300px] text-lg flex justify-center items-center'>
                    Tweets
                </div>
            </div>
        </div>
        <div className=' mt-2 w-full flex justify-center '>
            <div className=' flex flex-wrap gap-[20px]   w-[70%] '>
                <Link to={"/watch/326"} className=' flex flex-col gap-2 w-[240px]  cursor-pointer text-white'>
                    <div className='w-full h-[150px]'>
                        <img className='w-full h-full '
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='font-bold text-lg'>The is the video description</p>
                        <div className='text-gray-400 font-light'>
                            20 views ~ 2 days ago
                        </div>
                    </div>
                </Link>
                <Link to={"/watch/326"} className=' flex flex-col gap-2 w-[240px]  cursor-pointer text-white '>
                    <div className='w-full h-[150px]'>
                        <img className='w-full h-full '
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 w-full2'>
                        <p className='font-bold text-lg'>The is the video description</p>
                        <div className='text-gray-400 font-light'>
                            20 views ~ 2 days ago
                        </div>
                    </div>
                </Link>
                <Link to={"/watch/326"} className=' flex flex-col gap-2 w-[240px]  cursor-pointer text-white'>
                    <div className='w-full h-[150px]'>
                        <img className='w-full h-full '
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='font-bold text-lg'>The is the video description</p>
                        <div className='text-gray-400 font-light'>
                            20 views ~ 2 days ago
                        </div>
                    </div>
                </Link>
                <Link to={"/watch/326"} className=' flex flex-col gap-2 w-[240px]  cursor-pointer text-white'>
                    <div className='w-full h-[150px]'>
                        <img className='w-full h-full '
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='font-bold text-lg'>The is the video description</p>
                        <div className='text-gray-400 font-light'>
                            20 views ~ 2 days ago
                        </div>
                    </div>
                </Link>
                <Link to={"/watch/326"} className=' flex flex-col gap-2 w-[240px]  cursor-pointer text-white'>
                    <div className='w-full h-[150px]'>
                        <img className='w-full h-full '
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='font-bold text-lg'>The is the video description</p>
                        <div className='text-gray-400 font-light'>
                            20 views ~ 2 days ago
                        </div>
                    </div>
                </Link>
                <Link to={"/watch/326"} className=' flex flex-col gap-2 w-[240px]  cursor-pointer text-white'>
                    <div className='w-full h-[150px]'>
                        <img className='w-full h-full '
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='font-bold text-lg'>The is the video description</p>
                        <div className='text-gray-400 font-light'>
                            20 views ~ 2 days ago
                        </div>
                    </div>
                </Link>

        </div>
        </div>
    </div>
  )
}

export default UserProfilePage
