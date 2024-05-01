import React, { useEffect, useState } from 'react'
import Layout from "../layouts/Layout.jsx"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  const {posts} = useSelector((state)=>state.post);


  return (
    <Layout>
      <div className='flex flex-col items-start justify-between gap-3 my-4 py-2 px-1'>
      {posts ? posts?.map((el,idx)=>{
        return (
          <Link to={`/newPost`}>
            <div className='grid grid-cols-[25%,70%] overflow-hidden py-1 px-3 gap-5 h-[40vh] my-3'>
              <img src={el.img ?? "https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className=" h-[75%] w-full rounded-md" />
              <div className='flex flex-col gap-3 items-start justify-start'>
                <h1 className='text-[1.8rem] font-[600]'>{el.title ?? "Title 1"}</h1>
                <p className='text-[1rem] opacity-90'>{el.desc ?? "desc"}</p>
                <button className="mt-4 border border-green-800 text-green-800 p-1">Read More</button>
              </div>
            </div>
          </Link>
        )
      })
      :(<h1>No Posts Found</h1>)
      }
      </div>

    </Layout>
    
  )
}

export default Navbar;