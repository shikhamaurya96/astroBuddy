import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <ul className='flex justify-between w-full  px-6 py-2 fixed top-0  bg-white shadow-lg'>
   <Link to="/home"><li className=' flex gap-2 '>
      <img src='./image/astro-logo.jpg' className='w-12'/>
      <span className='mt-3 text-2xl font-bold text-gray-800'>AstroBuddy</span>
     </li></Link> 
    <li>user</li>
    </ul>
  )
}

export default Header