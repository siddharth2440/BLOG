import React from 'react'
import Layout from '../layouts/Layout'
import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import axiosInstance from '../helpers/axiosInstance';
import { useDispatch } from 'react-redux';
import { createPost } from '../Redux/Slices/post.slice';
import { useNavigate } from 'react-router-dom';

const AddNewPost = () => {
    const navigate = useNavigate()
    //title,description,img,cat
    const dispatch = useDispatch();
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState("");
    const [cat,setCat] = useState("");

    const submitHandler =async (e) => {
        e.preventDefault();

        //  Using cloudinary to upload image in Cloudinary
        // https://api.cloudinary.com/v1_1/demo/image/upload
        const data =new FormData();
        data.append("file",file);
        data.append("upload_preset", "upload");
        const uploadImageinCloudinary = await axios.post(`https://api.cloudinary.com/v1_1/dutqi3eqg/image/upload`,data);
        const {url} = uploadImageinCloudinary.data
        if(!uploadImageinCloudinary){
            toast.error("unable to upload image");
            return
        }
        const callNewPostDispatch = await dispatch(createPost({title,description:desc,img:url,cat}));
        if(!callNewPostDispatch){
            toast.error("We couldn't able to create the post")
            return;
        }
        toast.success("Succesfully created post");
        navigate("/");
        return;
    }
  return (
    <Layout>
        <form onSubmit={submitHandler} className='grid grid-cols-[50%,30%] my-4'>

            <div className='flex items-center justify-center flex-col gap-2 w-[100%] h-[60vh]'>
                <input type="text" className='py-1 px-3 rounded-sm border border-blue-300 h-[10%] w-[95%] outline-none' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
                <textarea name="" id="" cols="30" rows="10" className='py-1 px-3 rounded-sm border border-blue-300 h-[80%] w-[95%] outline-none' placeholder='Description' onChange={(e)=>setDesc(e.target.value)}></textarea>
            </div>
            
            <div className='flex flex-col items-center justify-start mt-5 gap-2'>
                
                <div className='border border-blue-300 rounded-md gap-4 w-[100%] py-3 px-2'>
                    <h1 className='text-[1.5rem] font-[500] my-2 opacity-90'>Publish</h1>
                    <h2 className='opacity-90 text-[0.8rem]'><span className='text-[1.1rem] opacity-100'>Status</span> : Draft</h2>
                    <h2 className='opacity-90 text-[0.8rem]'><span className='text-[1.1rem] opacity-100'>Visibility</span> : Public</h2>
                    <input type="file" className='text-[0.8rem] underline' onChange={(e)=>setFile(e.target.files[0])}/>
                    {/* <span className='text-[0.8rem] underline'>Upload Image</span> */}
                    <div className='flex items-start justify-start gap-3 my-2'>
                        <button className='border px-2 py-1 rounded-md bg-blue-500 text-[0.9rem] text-white'>Save as Draft</button>
                        <button type='submit' className='border px-2 py-1 rounded-md bg-blue-500 text-[0.9rem] text-white'>Upload</button>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-center rounded-md border border-blue-300 gap-1 w-[100%] py-3 px-2'>
                    <h1 className='text-[1.5rem] font-[500] opacity-90'>Category</h1>
                    
                    <div className='text-[0.9rem]'>
                        <input type="radio" value="art" name="select" id="" onChange={(e)=>setCat(e.target.value)} />
                        <label htmlFor="art">Art</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" value="science" name="select" id="" onChange={(e)=>setCat(e.target.value)}/>
                        <label htmlFor="science">Science</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" value="technology" name="select" id="" onChange={(e)=>setCat(e.target.value)}/>
                        <label htmlFor="tech">Technology</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" value="cinema" id="" onChange={(e)=>setCat(e.target.value)}/>
                        <label htmlFor="cinema">Cinema</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" value="design" name="select" id="" onChange={(e)=>setCat(e.target.value)}/>
                        <label htmlFor="design">Design</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" value="food" name="select" id="" onChange={(e)=>setCat(e.target.value)}/>
                        <label htmlFor="food">Food</label>
                    </div>

                </div>

            </div>


        </form>
    </Layout>
  )
}

export default AddNewPost