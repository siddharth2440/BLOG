import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
    const {isLoggedIn,user} = useSelector((state)=>state.user)
  return (
    <>
    {
        isLoggedIn && user ? (
            <Outlet/>
        ):(
            <Navigate to={"/login"}/>
        )
    }
    </>
  )
}

export default RequireAuth;