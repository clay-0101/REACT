import React from 'react'
import { useNavigate } from 'react-router-dom'

const navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className='px-2 py-6 bg-cyan-800'>
        <button 
        onClick={()=>{
            navigate('/')
        }}
        className='bg-amber-400 py-2 px-4 rounded active:scale-95 m-2'
        >Back To Home</button>
        <button 
        onClick={()=>{
            navigate(-1)
        }}
        className='bg-amber-400 py-2 px-4 rounded active:scale-95 m-2'
        >Back</button>
        <button 
        onClick={()=>{
            navigate(+1)
        }}
        className='bg-amber-400 py-2 px-4 rounded active:scale-95 m-2'
        >Next</button>
    </div>
  )
}

export default navbar2