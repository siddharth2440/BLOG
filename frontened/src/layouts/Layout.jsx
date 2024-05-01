import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Layout = ({children}) => {
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