import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
const VideoPage = ({showSideNavbar}) => {
  return (
    <>
    <div className={`flex w-full bg-black box-border py-12 pl-4 justify-center ${showSideNavbar ? 'ml-[280px]' : ''}`}>

        <div className='flex flex-col max-w-[875px] w-[100%]'>
        <div className='w-full'>
            <video controls autoPlay width={400}
                className='w-full rounded-lg'
            > 
                
                <source 
                    type='video/mp4'
                    src='https://res.cloudinary.com/deeccmrzc/video/upload/v1750143715/ahf71bc181nkg2gbxu5k.mp4'/>
                <source type='video/webm'
                    src='https://res.cloudinary.com/deeccmrzc/video/upload/v1750143715/ahf71bc181nkg2gbxu5k.mp4'/>
                Your Browser does not support the video tag
            </video>
        </div>
        <div className='flex flex-col text-white px-2 font-bold text-2xl '>
            <div>
                Rainy Day Video Animation Lesson 1
            </div>

        </div>
        <div className='flex justify-between mt-4 text-white'>
                <div className='flex gap-4'>
                    <div className='w-[45px] h-[45px] cursor-pointer'>
                        <img className='rounded-full w-full h-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1749487214/gh5gpj14rqpugcvsgnu3.jpg" alt="" />
                    </div>
                    <div className='flex flex-col  '>
                        <h3 className='font-bold text-ls cursor-pointer'>Bumblebee</h3>
                        <div className='text-gray-400'>
                            14 Subscribers
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button
                            className='rounded-full  bg-red-600 px-4 py-2  text-lg cursor-pointer hover:bg-red-400'
                        >Subscribe</button>
                    </div>
                </div>
                <div className='flex gap-2   '>
                    <div className='flex hover:bg-gray-500 cursor-pointer gap-2 justify-center items-center px-[10px] py-[10px] box-border rounded-2xl bg-[#212121]'>
                        <div className=''>
                            <ThumbUpOffAltIcon/>
                        </div>
                        <div className='text-white'>
                            10 Likes
                        </div>
                    </div>
                    <div className='justify-center hover:bg-gray-500 items-center px-[10px] py-[10px] box-border rounded-2xl bg-[#212121]'>
                        <div className='cursor-pointer'>
                                <ThumbDownOffAltIcon/>
                        </div>
                    </div>
                    <div className='justify-center hover:bg-gray-500 items-center px-[10px] py-[10px] box-border rounded-2xl bg-[#212121]'>
                        <div className='cursor-pointer'>
                                <FavoriteBorderIcon/>
                        </div>
                    </div>
                    <div className='justify-center hover:bg-gray-500 items-center px-[10px] py-[10px] box-border rounded-2xl bg-[#212121]'>
                        <div className='cursor-pointer'>
                                <ShareIcon/>
                        </div>
                    </div>
                </div>

                
        </div>

        <div className='flex flex-col mt-4 w-full rounded-2xl bg-[#313131] px-4 py-2 text-white'>
            <div className='flex gap-4'>
                 <div>
                    40 Views
                 </div>
                 <div>
                    2 days ago
                 </div>
            </div>
            <div className='mt-2'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aut ad autem eaque vero quas vitae quasi assumenda facere? Iure beatae aspernatur quisquam ullam architecto?</p>
            </div>
        </div>
        <div className='flex flex-col text-white mt-4 w-full'>
            <h1 className='text-2xl font-medium'>5 Comments</h1>
            <div className='flex gap-2 mt-[10px]'>
                <img className='h-[42px] w-[42px] rounded-full' 
                src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
            <div className='w-[80%] flex border-b-2  border-b-gray-300'>
                    <input  className='bg-black h-[42px] focus:outline-none w-full
                    border-none text-white text-[18px]' type="text" name="" id="" placeholder='Add a comment'/>
                    
            </div>
            <button className='h-[42px] w-[20%] text-white bg-[#212121] text-lg hover:bg-[#6b737a] rounded-3xl px-4 py-2'>Add</button>
            </div>
            <div className='mt-10 flex justify-between text-white w-full'>
                <div className='flex  gap-4'>
                    <div className='flex gap-2 justify-center items-center cursor-pointer'>
                        <img className='h-[42px] w-[42px] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
                    </div> 
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='font-bold cursor-pointer'>
                                Risi Mondal
                            </div>
                            <div className='text-gray-400 font-light '>
                                1 day ago
                            </div>
                        </div>
                         <div>
                        Wondefull video...!!!
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <ThumbUpOffAltIcon/>
                    <div>3 Likes</div>
                </div>
            </div>
            <div className='mt-10 flex justify-between text-white w-full'>
                <div className='flex  gap-4'>
                    <div className='flex gap-2 justify-center items-center cursor-pointer'>
                        <img className='h-[42px] w-[42px] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
                    </div> 
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='font-bold cursor-pointer'>
                                Risi Mondal
                            </div>
                            <div className='text-gray-400 font-light '>
                                1 day ago
                            </div>
                        </div>
                         <div>
                        Wondefull video...!!!
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <ThumbUpOffAltIcon/>
                    <div>3 Likes</div>
                </div>
            </div>
            <div className='mt-10 flex justify-between text-white w-full'>
                <div className='flex  gap-4'>
                    <div className='flex gap-2 justify-center items-center cursor-pointer'>
                        <img className='h-[42px] w-[42px] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
                    </div> 
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='font-bold cursor-pointer'>
                                Risi Mondal
                            </div>
                            <div className='text-gray-400 font-light '>
                                1 day ago
                            </div>
                        </div>
                         <div>
                        Wondefull video...!!!
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <ThumbUpOffAltIcon/>
                    <div>3 Likes</div>
                </div>
            </div>
            <div className='mt-10 flex justify-between text-white w-full'>
                <div className='flex  gap-4'>
                    <div className='flex gap-2 justify-center items-center cursor-pointer'>
                        <img className='h-[42px] w-[42px] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
                    </div> 
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='font-bold cursor-pointer'>
                                Risi Mondal
                            </div>
                            <div className='text-gray-400 font-light '>
                                1 day ago
                            </div>
                        </div>
                         <div>
                        Wondefull video...!!!
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <ThumbUpOffAltIcon/>
                    <div>3 Likes</div>
                </div>
            </div>
            <div className='mt-10 flex justify-between text-white w-full'>
                <div className='flex  gap-4'>
                    <div className='flex gap-2 justify-center items-center cursor-pointer'>
                        <img className='h-[42px] w-[42px] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144010/j3pjds8ewozwhtczqnve.jpg" alt="" />
                    </div> 
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='font-bold cursor-pointer'>
                                Risi Mondal
                            </div>
                            <div className='text-gray-400 font-light '>
                                1 day ago
                            </div>
                        </div>
                         <div>
                        Wondefull video...!!!
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <ThumbUpOffAltIcon/>
                    <div>3 Likes</div>
                </div>
            </div>
        </div>
      </div>

            <div className='w-[100%] max-w-[420px] py-[10px] px-[15px] flex flex-col gap-5 text-white'>
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
                <div className='flex cursor-pointer gap-2 justify-center items-center'>
                    <div className='w-[168px] h-[94px]'>
                        <img className='w-full h-full rounded-xl'
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143922/o0wkwjkggs0ywsk0iund.jpg" alt="" />
                    </div>
                    <div className='flex flex-col text-white gap-[3px]'>
                        <div className='mb-[5px] font-bold '>
                            Suggestion Video Example
                        </div>
                        <div className='text-gray-400'>
                            Tangerine
                        </div>
                        <div className='text-gray-400 font-light'>30 Views ~ 1 day ago</div>
                    </div>
                </div>  
            </div>  
        </div>
    </>

      
  )
}

export default VideoPage
