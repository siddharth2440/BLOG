import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-full border border-red-900 flex flex-col items-center justify-center gap-6 bg-[#b9e7e7]'>
        <h1 className='text-2xl font-[700] text-[#3f8e8e]'>Login</h1>
        <form className='flex flex-col items-center gap-4 justify-center bg-[white] py-3 px-2 rounded-sm h-[35%] w-[20%]'>

            <input type="text" placeholder='Username' className='border-b-2 w-[90%] outline-none px-3'/>
            <input type="password" placeholder='Placeholder' className='mt-2 border-b-2 w-[90%] px-3'/>

            <button className='bg-[#3f8e8e] text-white rounded-sm mt-6 px-3 '>Login</button>

            <span className='text-[0.8rem]'>Don't you have an account? Register</span>


        </form>
    </div>
  )
}

export default Login