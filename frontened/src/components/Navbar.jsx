import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../Redux/Slices/post.slice';
import toast from 'react-hot-toast';
import { logout } from '../Redux/Slices/user.slice';
const Navbar = () => {

    const {isLoggedIn,user} = useSelector((state)=>state.user)
    
    const [nav,setNav] = useState("");
    const dispatch = useDispatch();
    const navLinks = ["art","science","technology","cinema","design","food"];
    const navigate = useNavigate()    
    const clickHandler =async (e,el) => {
        e.preventDefault();
        setNav(el);
        const dispatcher =await dispatch(getPosts({cat:el}))
        if(!dispatcher) {
            toast.error("We couldn't able to fetch the details")
            return
        }
        toast.success("Feteched  successfully") 
        navigate("/"+el);
        return
    }

    const logoutDispatch = async () =>{
        const dis = await dispatch(logout())
        if(!dis){
            toast.error("We couldn't able to fetch the details")
            return;
        }
        toast.success("Logged out successfully")
        return;
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
                        <p className='capitalize text-[1rem] font-[500]'><Link to={"/"+el} onClick={(e)=>clickHandler(e,el)}>{el}</Link></p>
                    )
                })
            }
        </div>
        <div className='flex items-center justify-center gap-3'>
            <Link to={"/createNewPost"}><p className='bg-[#b9e7e7] px-3 py-2 rounded-[40%]'>Write</p></Link>
            {/* <button><p>Logout</p></button> */}
            {/* <Link to={"/login"}>Login</Link> */}
            {
                user && isLoggedIn ? (
                    <button onClick={logoutDispatch}><p>Logout</p></button>
                ):(<Link to={"/login"}>Login</Link>)
            }
        </div>
    </div>
  )
}

export default Navbar