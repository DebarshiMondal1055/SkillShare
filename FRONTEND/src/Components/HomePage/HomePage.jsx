import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const HomePage = ({showSideNavbar}) => {
  const options = [
  "JavaScript",
  "React",
  "Node.js",
  "Public Speaking",
  "Time Management",
  "Team Collaboration",
  "Problem Solving",
  "Git & GitHub",
  "UI/UX Design",
  "Critical Thinking",
  "Agile Methodology",
  "SQL",
  "Emotional Intelligence",
  "Project Management",
  "Python"
];

  return (
    <div className={`flex flex-col ${showSideNavbar ? 'ml-[280px]' : 'ml-0'} bg-black top-[64px] min-h-[92vh] w-full overflow-x-hidden`}>
        <div id='homePage-options' className='flex items-center gap-2 overflow-x-auto whitespace-nowrap
                z-[5] fixed box-border px-3 py-3 w-full bg-black '>
            <div className='text-white flex  h-[30px] bg-[#4c4c4c] text-lg hover:bg-[#4e535b]
                          justify-center items-center px-2 py-1.5 rounded-xl cursor-pointer border-2 border-white'>
                All
            </div>
            {options.map((skill,index)=>{
                return(
                <div key={index} className='text-white flex  h-[30px] bg-[#4c4c4c] text-md hover:bg-[#4e535b] 
                          justify-center items-center px-2 py-1.5 rounded-xl cursor-pointer border-2 border-white'>
                   {skill}
                </div>
                )
            })}

        </div>
        <div className='grid box-border  
                    gap-[10px] grid-cols-[repeat(auto-fit,_minmax(375px,_1fr))] pt-[70px]'>
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
            
            <Link to="/watch/326" className='flex flex-col box-border h-[316px] cursor-pointer px-4 py-2'> 
                  <div className='w-[100%] relative box-border h-[215px] ' >
                    <img className='w-[100%] h-[100%] rounded-lg'
                    src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750144692/yqzs4efwnmccz6yapsvq.jpg" alt="" />
                    <div className='backdrop-blur-md right-[4px] w-auto bottom-[2px] absolute py-[1px] px-[2px] bg-white/10 text-white rounded-sm '>
                      10:12
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='w-[48px] h-[48px] flex justify-center items-center'>
                        <img className='w-[80%] rounded-full' 
                        src="https://res.cloudinary.com/deeccmrzc/image/upload/v1750143917/iidwovezs1kavffx6mle.jpg" alt="" />
                    </div>
                    <div className='flex flex-col pl-2'>
                        <div className='text-amber-50 font-bold text-md'>
                            Welcome the FullStack Web Development
                        </div>
                        <div className='text-gray-400 text-[15px] font-medium'>
                          Rishi Codes
                        </div>
                        <div className='flex gap-3 text-gray-400'>
                              <div>
                                55 views
                              </div>
                              <div>
                                ~ 2 months ago
                              </div>
                        </div>
                    </div>
                  </div>
            </Link>
 
        </div>
    </div>
  )
}

export default HomePage
