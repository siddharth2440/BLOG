import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { getPosts } from '../Redux/Slices/post.slice'
const Layout = ({children}) => {
  const dispatch = useDispatch();
  const clickHandler =async (e,el) => {
    // e.preventDefault();
    const dispatcher =await dispatch(getPosts())
    // console.log(el);
    if(!dispatcher) {
        toast.error("We couldn't able to fetch the details")
        return;
    }
    toast.success("Feteched  successfullty")
    return;
  }
  useEffect(()=>{
    clickHandler({cat:""})
  },[])
  return (
    <div className='w-[80vw] m-auto'>
        <Navbar/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout;