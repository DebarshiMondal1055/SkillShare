import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { useAuthContext } from '../../Context/AuthenticationContext';

const UpdateUser = ({cancelUpdateUser}) => {
    const {user}=useAuthContext();
    const queryClient=useQueryClient();
    const [newFullname,setNewFullName]=useState(user.fullname);
    const [newUsername,setNewUsername]=useState(user.username);
    const [newEmail,setNewEmail]=useState(user.email);
    const [isLoading,setIsLoading]=useState(false);

    const userUpdateHandler=async()=>{
        try {
            setIsLoading(true);
            const response=await axios.patch("http://localhost:8000/api/v1/users/change-account-details",
                {fullname:newFullname,username:newUsername,email:newEmail},
                {withCredentials:true});
            if(response.status===201){
                queryClient.setQueryData(['currentUser'],response.data.data);
                setIsLoading(false);
                cancelUpdateUser();
            }
            
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            return null;
        }
    }
    if (isLoading) {
            return (
                <div className="w-full h-screen flex justify-center items-center bg-black text-white text-2xl">
                    Updating User...
                </div>
            );
        }
  return (
    <div className='w-full h-full  bg-[rgb(0,0,0,0.7)] fixed top-0 text-white flex justify-center items-center'>
        <div className='flex flex-col bg-gray-800 px-4 py-3 h-[60%] w-[40%] p-[60px]  items-center rounded-xl'>
            <h2 className='mt-10 font-bold text-2xl'>Update Profile</h2>
            <div className='flex flex-col gap-4 w-full items-center mt-5 '>
                <input className='w-[60%] h-10 rounded-xl bg-gray-600 px-4 py-2' 
                type="text" placeholder='Full Name' 
                onChange={(e)=>setNewFullName(e.target.value)}
                value={newFullname}/>
                <input className='w-[60%] h-10 rounded-xl bg-gray-600 px-4 py-2' 
                type="text" placeholder='Username'
                value={newUsername}
                onChange={(e)=>setNewUsername(e.target.value)}
                />
                <input className='w-[60%] h-10 rounded-xl bg-gray-600 px-4 py-2'
                type="text" placeholder='email'
                value={newEmail}
                onChange={(e)=>setNewEmail(e.target.value)}
                />
            </div>
            <div className='flex mt-15 justify-evenly w-[60%] '>
                <button onClick={userUpdateHandler} 
                className='bg-emerald-400 p-2 cursor-pointer rounded-2xl'>Update</button>
                <button onClick={()=>cancelUpdateUser()} 
                className='bg-red-400 p-2 cursor-pointer rounded-2xl'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateUser
    