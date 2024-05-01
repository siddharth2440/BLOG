import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
    const navLinks = ["art","science","technology","cinema","design","food"];
  return (
    <div className='flex items-center justify-between w-[100%] py-2 px-6 m-auto '>
        <div className='logo'>
            <img src={logo} alt=""  className='h-[5rem] w-auto'/>
        </div>
        <div className='flex items-between justify-center gap-3 px-4 py-4'>
            {
                navLinks.map(el=>{
                    return(
                        <p className='capitalize text-[1rem] font-[500]'>{el}</p>
                    )
                })
            }
        </div>
        <div className='flex items-center justify-center gap-3'>
            <p className='bg-[#b9e7e7] px-3 py-2 rounded-[40%]'>Write</p>
            <p>Logout</p>
        </div>
    </div>
  )
}

export default Navbar