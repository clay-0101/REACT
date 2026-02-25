import React from 'react'
import { RiUbuntuFill,RiGitbookFill,RiGitlabFill, RiDeepseekFill } from '@remixicon/react';



const home = () => {
  return (
    <div className='h-screen w-full object-fill relative'>
      <img className='h-full w-full' src="https://wallpapercave.com/wp/wp2554075.png" alt="02" />
      <div className='absolute h-[10vw] w-[50vw] border-2 border-gray-500 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-evenly items-center'>
        <RiDeepseekFill
          size={64}
          className="text-blue-500 hover:text-red-500 transition-colors duration-300"
        />
        <RiGitlabFill
          size={64}
          className="text-blue-500 hover:text-red-500 transition-colors duration-300" />
          <RiGitbookFill
          size={64}
          className="text-blue-500 hover:text-red-500 transition-colors duration-300"
          />
          <RiUbuntuFill 
          size={64}
          className="text-blue-500 hover:text-red-500 transition-colors duration-300"
          />
      </div>
    </div>
  )
}

export default home