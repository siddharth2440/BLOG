import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './layouts/Layout'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import NewPost from './pages/NewPost.jsx'
import AddNewPost from './pages/AddNewPost.jsx'
function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <NewPost/> */}
      <AddNewPost/>
    </>
  )
}

export default App