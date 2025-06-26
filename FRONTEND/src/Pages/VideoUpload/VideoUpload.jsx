import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const VideoUpload = () => {
    const navigate=useNavigate()
  return (
    <div className='flex w-full mt-[60px] justify-center items-center box-border h-[92vh] text-white bg-black '>
        <div style={{ boxShadow: '0.5px 0.5px 8px white' }} 
        className='w-[50%] p-[25px] bg-[#212121]  rounded-2xl z-10 shadow-amber-100 '>
            <div className='py-4 px-6 text-2xl font-bold flex justify-center w-full'>
                Upload
            </div>
            <div className='flex flex-col gap-6 mt-[25px] items-center'>
                <input type="text" placeholder='Video title' 
                    className='w-[70%] h-[42px] px-4 py-2 placeholder:text-gray-200 placeholder:font-medium bg-gray-400 rounded-2xl focus:outline-none box-border '
                />
            <textarea className='bg-gray-400 focus:outine-none px-4 py-2 placeholder:text-gray-200 placeholder:font-medium box-border w-[70%] h-35 rounded-2xl text-gray-200'
            name="" id=""  placeholder='Description' ></textarea>
                <input type="text" 
                className='w-[70%] h-[42px] px-4 py-2 focus:outine-none placeholder:text-gray-200 placeholder:font-medium bg-gray-400 rounded-2xl focus:outline-none box-border '              
                placeholder='Category'/>    
                <div className='flex w-full justify-center gap-4 text-[#b9cbcb]  '>
                        <label htmlFor="videoFile" className='cursor-pointer border-b-1 border-b-gray-300'>Choose Video</label>
                        <input type="file" name="videoFile" id="videoFile" accept='video/mp4,video/webm,video/*'
                            className='hidden '
                        />

                        <label htmlFor="thumbnailFile"
                            className='cursor-pointer border-b-1 border-b-gray-300'
                        >Choose Thumbnail</label>
                        <input type="file" name="thumbnailFile" id="thumbnailFile" accept='images'
                            className=' hidden '
                        />
                </div>
            </div>
                    <div className='w-full justify-center mt-8 flex gap-20 text-white'>
                        <button className='bg-emerald-400 px-4 py-2 rounded-3xl font-medium hover:bg-emerald-700 cursor-pointer '>
                            Upload
                        </button>
                        <button
                        onClick={()=>{navigate(-1)}} 
                        className='bg-red-400  cursor-pointer px-4 py-2 rounded-3xl font-medium hover:bg-red-700 '>
                            Cancel
                        </button>
                    </div> 
        </div>

    </div>
  )
}

export default VideoUpload;
