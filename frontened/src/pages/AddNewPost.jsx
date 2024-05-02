import React from 'react'
import Layout from '../layouts/Layout'
import { useState } from 'react'

const AddNewPost = () => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [image,setImage] = useState("");
    const [cat,setCat] = useState("");      

  return (
    <Layout>
        <form className='grid grid-cols-[50%,30%] my-4'>

            <div className='flex items-center justify-center flex-col gap-2 w-[100%] h-[60vh]'>
                <input type="text" className='py-1 px-3 rounded-sm border border-blue-300 h-[10%] w-[95%] outline-none' placeholder='Title' />
                <textarea name="" id="" cols="30" rows="10" className='py-1 px-3 rounded-sm border border-blue-300 h-[80%] w-[95%] outline-none' placeholder='Description'></textarea>
            </div>
            
            <div className='flex flex-col items-center justify-start mt-5 gap-2'>
                
                <div className='border border-blue-300 rounded-md gap-4 w-[100%] py-3 px-2'>
                    <h1 className='text-[1.5rem] font-[500] my-2 opacity-90'>Publish</h1>
                    <h2 className='opacity-90 text-[0.8rem]'><span className='text-[1.1rem] opacity-100'>Status</span> : Draft</h2>
                    <h2 className='opacity-90 text-[0.8rem]'><span className='text-[1.1rem] opacity-100'>Visibility</span> : Public</h2>
                    <span className='text-[0.8rem] underline'>Upload Image</span>
                    <div className='flex items-start justify-start gap-3 my-2'>
                        <button className='border px-2 py-1 rounded-md bg-blue-500 text-[0.9rem] text-white'>Save as Draft</button>
                        <button className='border px-2 py-1 rounded-md bg-blue-500 text-[0.9rem] text-white'>Upload</button>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-center rounded-md border border-blue-300 gap-1 w-[100%] py-3 px-2'>
                    <h1 className='text-[1.5rem] font-[500] opacity-90'>Category</h1>
                    
                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" id="" />
                        <label htmlFor="art">Art</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" id="" />
                        <label htmlFor="science">Science</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" id="" />
                        <label htmlFor="tech">Technology</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" id="" />
                        <label htmlFor="cinema">Cinema</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" id="" />
                        <label htmlFor="design">Design</label>
                    </div>

                    <div className='text-[0.9rem]'>
                        <input type="radio" name="select" id="" />
                        <label htmlFor="food">Food</label>
                    </div>

                </div>

            </div>


        </form>
    </Layout>
  )
}

export default AddNewPost