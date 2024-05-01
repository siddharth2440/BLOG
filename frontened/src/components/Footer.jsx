import React from 'react'
import logo from "../assets/logo.png"
import {AiFillHeart} from "react-icons/ai"
const Footer = () => {
  return (
    <div className='py-3 px-5 flex items-center justify-between h-[13vh] bg-[#b9e7e7] rounded-[3px]'>
        <img src={logo} alt="" className=' h-[100%] w-[20%] '/>
        <p className='flex items-start justify-start'>Made with <AiFillHeart className='mx-2 text-[2rem] text-red-700'/> and React.js </p>
    </div>
  )
}

export default Footer