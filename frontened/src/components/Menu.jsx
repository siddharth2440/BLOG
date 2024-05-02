import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPost } from '../Redux/Slices/post.slice';

const Menu = ({id}) => {
    const {posts} = useSelector((state)=>state.post);
    // const posts = [
    //     {
    //       id: 1,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 2,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 3,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 4,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //   ];
    const dispatch = useDispatch();
    const dispatcher =async ({id}) =>{
      // console.log("dispatch hone jaa rha hai");
      await dispatch(getPost({id}))
      return
    }

    useEffect(()=>{
      dispatcher({id})
    },[]);
    return (
    <div className='py-3 px-2 m-auto flex flex-col items-center justify-center'>
        <h1 className='text-[1rem] mb-3 tracking-wider'>Other posts you may like</h1>
        {
            posts.map((el,idx)=>{
                return (
                    <Link to={`/newPost/${el.id}`} key={idx} className='flex flex-col items-center w-[100%] justify-center my-3 gap-2'>
                        <img src={el?.img} alt="" className=''/>
                        <span>{el?.title}</span>
                        <button onClick={()=>dispatcher({id:el.id})} className='mt-4 border border-black px-3 rounded-sm'>Read More</button>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Menu