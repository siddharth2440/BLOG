import React, { useEffect, useReducer } from 'react'
import Layout from "../layouts/Layout"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import Menu from '../components/Menu'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../Redux/Slices/post.slice.js'
const NewPost = () => {
  const {id} = useParams();
  console.log(id);
  const dispatch=useDispatch();
  const {singlePost} = useSelector((state)=>state.post);
  console.log(singlePost);
  // const madePost = <post className="flat"></post>
  const dispatcher = async () => {
    const dis = await dispatch(getPost({id}));
    if(!dis){
      toast.error("We couldn't able to fetch the details")
      return;
    }

    // console.log(singlePost);
    return
  }
  useEffect(()=>{
    dispatcher()
  },[]);
  return (
    <Layout>
      <div className='grid grid-cols-[65%,20%] min-h-[70vh]'>
        <div className='flex flex-col justify-start items-start gap-4 mx-auto px-4 py-2 my-5 '>

            <img src={  singlePost[0]?.img || "https://images.pexels.com/photos/22717472/pexels-photo-22717472/free-photo-of-salt-lake-aerial-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" } alt=""
              className='rounded-md h-[30rem]'
            />
          
            <div className='flex items-start justify-start gap-2 px-4 py-3'>
            
              <img src="https://images.pexels.com/photos/20359976/pexels-photo-20359976/free-photo-of-portrait-of-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt=""
              className='h-[2.5rem] rounded-lg w-auto inline' />
              <div className='flex items-start text-[0.8rem] justify-start flex-col'>
                <span className='font-[500]'>John</span>
                <span>Posted on {"" ?? singlePost[0]?.date.split("T")[0]}</span>
              </div>
            
              <div className='flex items-center text-[0.8rem] gap-3 justify-start'>
                <span><AiFillEdit className='text-green-800 text-[1.2rem]'/></span>
                <span><AiFillDelete className='text-red-800 text-[1.2rem]'/></span>
              </div>
            </div>

            <div className='flex flex-col items-start justify-normal gap-2'>
        
              <h1 className='text-[1.4rem] font-[700]'>{singlePost[0]?.title ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, possimus aliquid praesentium veniam"}</h1>
            
              <p className='text-[0.9rem] opacity-90 tracking-wider mt-4'>
                {singlePost[0]?.desc}
              </p>
            </div>
        </div>

        <div className=''>
          <Menu id={id}/>
        </div>

      </div>
    </Layout>
  )
}

export default NewPost