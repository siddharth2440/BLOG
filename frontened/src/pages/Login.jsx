import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Slices/user.slice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (e) =>{
    e.preventDefault();
    const dispatching = await dispatch(login({email,password}))
    // console.log(email,password);
    if(!dispatching){
      toast.error("Unable to dispatch login request");
      return;
    }
    toast.success("Logged in successfully");  
    navigate(-1);
    return;
  }
  return (
    <div className='h-screen w-full border border-red-900 flex flex-col items-center justify-center gap-6 bg-[#b9e7e7]'>
        <h1 className='text-2xl font-[700] text-[#3f8e8e]'>Login</h1>
        <form onSubmit={loginHandler} className='flex flex-col items-center gap-4 justify-center bg-[white] py-3 px-2 rounded-sm h-[35%] w-[20%]'>

            <input type="text" placeholder='Username' className='border-b-2 w-[90%] outline-none px-3' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Placeholder' className='mt-2 border-b-2 w-[90%] px-3' onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit' className='bg-[#3f8e8e] text-white rounded-sm mt-6 px-3 '>Login</button>

            <span className='text-[0.8rem]'>Don't you have an account? <Link className='text-blue-700 underline text-center' to="/register">Register</Link> </span>


        </form>
    </div>
  )
}

export default Login