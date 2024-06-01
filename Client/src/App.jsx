import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Admin from './Components/Admin/Admin'
import Courses from './Components/Courses/Courses'
import Jobs from './Components/Jobs/Jobs'
import Login from './Components/Login/Login'
import MakePost from './Components/MakePost/MakePost'
import SignUp from './Components/SignUp/SignUp'

function App() {
  return (
      <Routes>
        <Route path="/" element = {<HomePage />}></Route>
        <Route path="/signup" element = {<SignUp />}></Route>
        <Route path="/signin" element = {<Login />}></Route>
        <Route path="/makepost" element = {<MakePost />}></Route>
        <Route path="/jobs" element = {<Jobs />}></Route>
        <Route path="/courses" element = {<Courses />}></Route>
        <Route path="/admin" element = {<Admin />}></Route>
      </Routes>
  )
}

export default App
