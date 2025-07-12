import React, { useState } from 'react'

const UpdateVideo = ({cancelUpdateVideo,setectedVideo}) => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [thumbnail,setThumbnail]=useState('');
    return (
    <div className='w-full h-full  bg-[rgb(0,0,0,0.7)] fixed top-0 text-white flex justify-center items-center'>
        <div className='flex flex-col bg-gray-800 px-4 py-3 h-[70%] w-[50%] p-[60px]  items-center rounded-xl'>
            <h2 className='mt-10 font-bold text-2xl'>Update Video</h2>
            <div className='flex flex-col gap-4 w-full items-center mt-5 '>
                <input className='w-[80%] h-10 rounded-xl bg-gray-600 px-4 py-2' 
                type="text" placeholder='Title' 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea className='w-[80%]  rounded-xl bg-gray-600 px-4 py-2 h-[150px]' 
                type="text" placeholder='decription'
                value={decription}
                />
                <label htmlFor="thumbnailFile"
                    className='mt-3 cursor-pointer border-b-1 border-b-gray-300'
                >{"Choose new Thumbnail"}</label>
                <input type="file" name="thumbnailFile" id="thumbnailFile" accept='image/*'
                    className=' hidden '  onChange={(e)=>setThumbnail(e.target.files[0])}
                />
            </div>
            <div className='flex mt-15 justify-evenly w-[60%] '>
                <button onClick={videoUpdateHandler}
                className='bg-emerald-400 p-2 cursor-pointer rounded-2xl'>Update</button>
                <button onClick={()=>cancelUpdateVideo()}
                className='bg-red-400 p-2 cursor-pointer rounded-2xl'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateVideo
