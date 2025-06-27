import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='flex w-full mt-[60px] justify-center items-center box-border h-[92vh] text-white bg-black '>
        <div style={{ boxShadow: '0.5px -0.5px 8px blue, 0.5px 0.5px 8px white' }}
        className='flex flex-col gap-4 w-[40%] p-[25px] bg-[#212121] rounded-2xl'>
            <div  
            className='text-white font-bold text-3xl flex justify-center'>
                Login
            </div>
            <div className='mt-[25px] flex flex-col gap-[35px] items-center text-zinc-800'>
                <input type="text" className='bg-white w-[70%] h-[36px] placeholder:text-gray-400 rounded-2xl px-6 py-4 focus:outline-none'
                placeholder='Username'/>
                <input type="text" className='bg-white w-[70%] h-[36px] rounded-2xl px-6 py-4  placeholder:text-gray-400 focus:outline-none' 
                placeholder='email' />
                <input type="password" className='bg-white w-[70%] h-[36px] rounded-2xl px-6 py-4 focus:outline-none  placeholder:text-gray-400' 
                name="" id="" placeholder='password'/>
            </div>
            <div className='flex flex-col gap-[15px] items-center mt-[15px] '>
                <button className='p-[10px] rounded-3xl bg-emerald-500 w-[30%] cursor-pointer'>Sign In</button>
                <Link to={"/register"} className='flex justify-center border-b-2 border-b-gray-400'>Don't have an account?Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Login;
