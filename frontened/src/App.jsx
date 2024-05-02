import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './layouts/Layout'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import NewPost from './pages/NewPost.jsx'
import AddNewPost from './pages/AddNewPost.jsx'
import { Routes , Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/newPost/:id' element={<NewPost/>}></Route>
      <Route path='/createNewPost' element={<AddNewPost/>}></Route>
    </Routes>
  )
}

export default App