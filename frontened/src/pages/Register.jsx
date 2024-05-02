import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen w-full border border-red-900 flex flex-col items-center justify-center gap-6 bg-[#b9e7e7]'>
        <h1 className='text-2xl font-[700] text-[#3f8e8e]'>Register</h1>
        <form className='flex flex-col items-center gap-4 justify-center bg-[white] py-3 px-2 rounded-sm h-[35%] w-[20%]'>

            <input type="text" placeholder='Username' className='border-b-2 w-[90%] outline-none px-3'/>
            <input type="password" placeholder='Password' className='mt-2 border-b-2 w-[90%] px-3'/>
            <input type="email" placeholder='Email' className='mt-2 border-b-2 w-[90%] px-3'/>


            <button className='bg-[#3f8e8e] text-white rounded-sm mt-6 px-3 py-1'>Register</button>

            <span className='text-[0.8rem]'>Don't you have an account? <Link className='text-blue-700 text-center underline' to="/login">Login</Link></span>

        </form>
    </div>
  )
}

export default Register;