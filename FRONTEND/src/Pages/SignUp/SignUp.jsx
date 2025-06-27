import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex w-full mt-[60px] justify-center items-center box-border h-[92vh] text-white bg-black '>
        <div className='w-[50%] bg-[#212121] p-[25px] items-center flex flex-col gap-4 rounded-2xl shadow-[0_0_12px_rgba(0,123,255,0.5),_0_0_18px_rgba(255,255,255,0.3)] transition-shadow duration-500 ease-in-out hover:shadow-[0_0_18px_rgba(0,123,255,0.7),_0_0_28px_rgba(255,255,255,0.5)]'>
            <div className='w-full flex justify-center text-2xl font-bold'>
                Sign Up
            </div>
            <div className='mt-5 flex flex-col gap-8 w-full items-center'>
                <input type="text" placeholder='Full-name'
                    className='w-[60%] focus:outline-none bg-zinc-500 px-2 py-1 h-[34px] rounded-xl '
                />
                <input type="text" placeholder='Username'
                    className='w-[60%] focus:outline-none bg-zinc-500 px-2 py-1 h-[34px] rounded-xl '
                />
                <input type="text" placeholder='email'
                    className='w-[60%] focus:outline-none bg-zinc-500 px-2 py-1 h-[34px] rounded-xl '
                />
                <input type="password" name="" id="" placeholder='password'
                    className='w-[60%] focus:outline-none bg-zinc-500 px-2 py-1 h-[34px] rounded-xl '
                />
                <input type="password" name="" id="" placeholder='Confirm password'
                    className='w-[60%] focus:outline-none bg-zinc-500 px-2 py-1 h-[34px] rounded-xl '
                />
                
            </div>
            <div className='mt-5 flex w-full justify-center gap-4 text-[#b9cbcb]  '>
                        <label htmlFor="avatarFile" className='cursor-pointer border-b-1 border-b-gray-300'>Choose Avatar</label>
                        <input type="file" name="avatarFile" id="avatarFile" accept='images'
                            className='hidden '
                        />

                        <label htmlFor="coverImageFile"
                            className='cursor-pointer border-b-1 border-b-gray-300'
                        >Choose Coverimage</label>
                        <input type="file" name="coverImageFile" id="coverImageFile" accept='images'
                            className=' hidden '
                        />
            </div>
            <div className='mt-5 w-full flex justify-center'>
                <Link className='border-b-2 border-b-gray-400' 
                to={"/login"}>Already have an account?Sign In</Link>
            </div>

        </div>
    </div>
  )
}

export default SignUp;
