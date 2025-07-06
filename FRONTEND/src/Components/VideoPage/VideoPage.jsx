import React, { useState,useEffect } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useParams } from 'react-router-dom';
import { useCustomGetRequest } from '../../Hooks/customGetReactQuery';
import axios from 'axios';
const VideoPage = ({showSideNavbar}) => {
    const [commentDescription,setcommentDescription]=useState("")
    
    const {videoId}=useParams();
    
    const [data,error,loading]=useCustomGetRequest(`/api/v1/videos/v/${videoId}`);
    
    const [commentsData,commentError,commentsLoading]=useCustomGetRequest(`/api/v1/comments/v/${videoId}`);
    
    const [comments,setComments]=useState([]);

    const [addLoading,setAddLoading]=useState(false);
    
    useEffect(() => {
        if (commentsData?.comments) {
            setComments(commentsData.comments);
        }
    }, [commentsData]);
    
    if (loading) {
            return (
                <div className="w-full h-screen flex justify-center items-center bg-black text-white text-2xl">
                Loading video...
                </div>
            );
        }
    if(commentsLoading){
            return (
                <div className="w-full h-screen flex justify-center items-center bg-black text-white text-2xl">
                Comments Loading ...
                </div>
            );     
    }
    const addCommentHandler=async()=>{
        try {
            setAddLoading(true)
            const response=await axios.post(`/api/v1/comments/${videoId}`,
                {content:commentDescription})
            const addedComment=response.data.data;
            setComments((prev)=>([addedComment,...prev]))
            setAddLoading(false);
            setcommentDescription("");
        } catch (error) {
            setAddLoading(false)
            console.error(error);
        }

    }
    
    
    const days=Math.floor((Date.now()-new Date(data?.createdAt).getTime())/86400000);
    const years=Math.floor(days/365);
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
                    src={data?.videoFile}/>
                <source type='video/webm'
                    src={data?.videoFile}/>
                Your Browser does not support the video tag
            </video>
        </div>
        <div className='flex flex-col text-white px-2 font-bold text-2xl '>
            <div>
                {data?.title}
            </div>

        </div>
        <div className='flex justify-between mt-4 text-white'>
                <div className='flex gap-4'>
                    <div className='w-[45px] h-[45px] cursor-pointer'>
                        <img className='rounded-full w-full h-full' 
                        src={data?.owner.avatar} alt="" />
                    </div>
                    <div className='flex flex-col  '>
                        <h3 className='font-bold text-ls cursor-pointer'>{data?.owner.username}</h3>
                        <div className='text-gray-400'>
                            {data?.subcribersCount} Subscribers
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
                            {data?.likesCount} Likes
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
                    {data?.views} Views
                 </div>
                 <div>
                    {years>0?years:days} {years>0?"years":"days"} ago
                 </div>
            </div>
            <div className='mt-2'>
                <p>{data?.description}</p>
            </div>
        </div>
        <div className='flex flex-col text-white mt-4 w-full'>
            <h1 className='text-2xl font-medium'>{comments?.length} Comments</h1>
            <div className='flex gap-2 mt-[10px]'>
                <img className='h-[42px] w-[42px] rounded-full' 
                src={data?.owner.avatar} alt="" />
            <div className='w-[80%] flex border-b-2  border-b-gray-300'>
                    <input  className='bg-black h-[42px] focus:outline-none w-full
                    border-none text-white text-[18px]'
                    value={commentDescription} 
                    onChange={(e)=>setcommentDescription(e.target.value)}
                    type="text" name="" id="" placeholder='Add a comment'/>
                    
            </div>
            <button onClick={addCommentHandler}  disabled={addLoading || commentDescription===""}
            className='h-[42px] cursor-pointer w-[20%] text-white bg-[#212121] text-lg hover:bg-[#6b737a] rounded-3xl px-4 py-2'>Add</button>
            </div>
            
            {comments?.map((comment,index)=>{
                const days=Math.floor((Date.now()-new Date(comment.createdAt).getTime())/86400000);
                const years=Math.floor(days/365);
                return  <div key={index} className='mt-10 flex justify-between text-white w-full'>
                            <div className='flex  gap-4'>
                                <div className='flex gap-2 justify-center items-center cursor-pointer'>
                                    <img className='h-[42px] w-[42px] rounded-full' 
                                    src={comment.owner.avatar} alt="" />
                                </div> 
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-2'>
                                        <div className='font-bold cursor-pointer'>
                                            {comment.owner.username}
                                        </div>
                                        <div className='text-gray-400 font-light '>
                                            {years>0?years:days} {years>0?"years":"days"} ago
                                        </div>
                                    </div>
                                    <div>
                                    {comment.content}
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2 cursor-pointer'>
                                <ThumbUpOffAltIcon/>
                                <div>{comment.likeCount} Likes</div>
                            </div>
                </div> 
            })}
            
               

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
