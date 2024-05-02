import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../Redux/Slices/post.slice';
import toast from 'react-hot-toast';
const Navbar = () => {
    
    const [nav,setNav] = useState("");
    const dispatch = useDispatch();
    const navLinks = ["art","science","technology","cinema","design","food"];
    
    const clickHandler =async (e,el) => {
        e.preventDefault();
        setNav(el);
        const dispatcher =await dispatch(getPosts({cat:el}))
        if(!dispatcher) {
            toast.error("We couldn't able to fetch the details")
            return
        }
        toast.success("Feteched  successfully") 
        return
    }

    useEffect(()=>{},[nav])
  return (
    <div className='flex items-center justify-between w-[100%] py-2 px-6 m-auto '>
        <div className='logo'>
            <Link to={"/"}><img src={logo} onClick={(e)=>clickHandler(e,"")} alt=""  className='h-[5rem] w-auto'/></Link>
        </div>
        <div className='flex items-between justify-center gap-3 px-4 py-4'>
            {
                navLinks.map(el=>{
                    return(
                        <Link to={"/?cat="+el} onClick={(e)=>clickHandler(e,el)}><p className='capitalize text-[1rem] font-[500]'>{el}</p></Link>
                    )
                })
            }
        </div>
        <div className='flex items-center justify-center gap-3'>
            <Link to={"/createNewPost"}><p className='bg-[#b9e7e7] px-3 py-2 rounded-[40%]'>Write</p></Link>
            <button><p>Logout</p></button>
        </div>
    </div>
  )
}

export default Navbar