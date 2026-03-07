import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const product = () => {
  return (
    <div className='flex text-white justify-center gap-5'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
        <Link to='/product/kids'>Kids</Link>

        <Outlet/>
    </div>
  )
}

export default product