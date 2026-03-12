import React, { useContext } from 'react'
import { ThemeDataContext } from '../CONTEXT/themeContextApi'

const nav2 = () => {
  const data = useContext(ThemeDataContext)
  
  return (
    <div className='flex items-center gap-7'>
        <h2>Home</h2>
        <h2>Contact</h2>
        <h2>About</h2>
        <h2>{data}</h2>
    </div>
  )
}

export default nav2