import React from 'react'

const profile = () => {
  return (
    <div>
      <div className='h-[30vw] w-[30vw] border-2 border-gray-500 rounded-full object-cover overflow-hidden relative text-white'>
        <img className='h-[90%] w-[90%] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="https://images.unsplash.com/photo-1595685911167-1a3ed67f0e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="01" />
      </div>
      <h1 className='text-7xl text-white text-center'>NOMANIA</h1>
    </div>
  )
}

export default profile