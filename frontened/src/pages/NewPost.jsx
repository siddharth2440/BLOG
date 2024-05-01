import React from 'react'
import Layout from "../layouts/Layout"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import Menu from '../components/Menu'
const NewPost = () => {
  return (
    <Layout>
      <div className='grid grid-cols-[65%,20%] min-h-[70vh]'>
        <div className='flex flex-col justify-start items-start gap-4 mx-auto px-4 py-2 my-5 '>

            <img src="https://images.pexels.com/photos/22717472/pexels-photo-22717472/free-photo-of-salt-lake-aerial-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
              className='rounded-md h-[30rem]'
            />
          
            <div className='flex items-start justify-start gap-2 px-4 py-3'>
            
              <img src="https://images.pexels.com/photos/20359976/pexels-photo-20359976/free-photo-of-portrait-of-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt=""
              className='h-[2.5rem] rounded-lg w-auto inline' />
            
              <div className='flex items-start text-[0.8rem] justify-start flex-col'>
                <span className='font-[500]'>John</span>
                <span>Posted 2 days ago</span>
              </div>
            
              <div className='flex items-center text-[0.8rem] gap-3 justify-start'>
                <span><AiFillEdit className='text-green-800 text-[1.2rem]'/></span>
                <span><AiFillDelete className='text-red-800 text-[1.2rem]'/></span>
              </div>
          
            </div>

            <div className='flex flex-col items-start justify-normal gap-2'>
        
              <h1 className='text-[1.4rem] font-[700]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, possimus aliquid praesentium veniam</h1>
            
              <p className='text-[0.9rem] opacity-90 tracking-wider mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea tenetur commodi molestiae, mollitia nisi! Veniam a ipsa possimus animi et quas! Minima deleniti repudiandae amet veritatis impedit at, minus tempora alias iste voluptatum autem. Quisquam temporibus repudiandae numquam, minima architecto corrupti consequuntur molestias rerum praesentium fuga doloribus magnam optio ut tempora deleniti eveniet maiores? Magni similique vitae distinctio possimus, delectus odio impedit est nulla ex quam, corrupti nisi veniam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto illo nulla officiis. Dolores amet dolorum vitae voluptatem reprehenderit, eligendi aliquid iure illo maiores. Libero similique non architecto voluptatum eveniet quas ut sed aut exercitationem natus atque, quasi, quod at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem sunt dolorem asperiores libero ex accusantium a inventore? Similique hic nam deleniti expedita perferendis dolorem aperiam cumque, quos voluptas cum. 
              </p>
            </div>
        </div>

        <div className=''>
          <Menu/>
        </div>

      </div>
    </Layout>
  )
}

export default NewPost