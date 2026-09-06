import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'



import { NavLink, Outlet } from 'react-router-dom'
import Layout from '../src/common/Layout'
import TaskList from './tasks/taskList'
import AddTask from './tasks/AddTask'
import PostList from './posts/PostList'
import AddPost from './posts/AddPost'
import PhotoList from './photos/PhotoList'
import AddPhoto from './photos/AddPhoto'
import UserList from './users/UserList'
import AddUser from './users/AddUser'
function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home page </h1>} />
          <Route path='/tasks' element={<TaskList />} />
          <Route path='/tasks/add' element={<AddTask />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/posts/add' element={<AddPost />} />
          <Route path='/photos' element={<PhotoList />} />
          <Route path='/photos/add' element={<AddPhoto />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/users/add' element={<AddUser />} />

        </Route>
      </Routes>
    </Router>
  </>
  )
}

export default App
