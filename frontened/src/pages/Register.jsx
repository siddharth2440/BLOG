import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { register } from '../Redux/Slices/user.slice'
import toast from 'react-hot-toast'
const Register = () => {
  //username,email,password
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const registerHandler = async (e) =>{
    e.preventDefault();
    console.log(username,email,password);
    const registeration = await dispatch(register({username,email,password}))
    if(!registeration){
      toast.error("Register action is not dispatch");
      return
    }
    toast.success("Registered successfully");
    toast.success("Login to get Started");
    navigate("/login");
    return;
  }
  return (
    <div className='h-screen w-full border border-red-900 flex flex-col items-center justify-center gap-6 bg-[#b9e7e7]'>
        <h1 className='text-2xl font-[700] text-[#3f8e8e]'>Register</h1>
        <form onSubmit={registerHandler} className='flex flex-col items-center gap-4 justify-center bg-[white] py-3 px-2 rounded-sm h-[35%] w-[20%]'>

            <input type="text" placeholder='Username' className='border-b-2 w-[90%] outline-none px-3' onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' className='mt-2 border-b-2 w-[90%] px-3' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="email" placeholder='Email' className='mt-2 border-b-2 w-[90%] px-3' onChange={(e)=>setEmail(e.target.value)}/>


            <button className='bg-[#3f8e8e] text-white rounded-sm mt-6 px-3 py-1' type='submit'>Register</button>

            <span className='text-[0.8rem]'>Don't you have an account? <Link className='text-blue-700 text-center underline' to="/login">Login</Link></span>

        </form>
    </div>
  )
}

export default Register;