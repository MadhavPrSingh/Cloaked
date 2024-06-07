import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Admin from './Components/Admin/Admin'
import Courses from './Components/Courses/Courses'
import MyUni from './Components/MyUni/MyUni'
import Login from './Components/Login/Login'
import MakePost from './Components/MakePost/MakePost'
import SignUp from './Components/SignUp/SignUp'
import Comments from './Constants/Comments/Comments'

function App() {
  return (
      <Routes>
        <Route exact path="/" element = {<HomePage />}></Route>
        <Route path="/signup" element = {<SignUp />}></Route>
        <Route path="/signin" element = {<Login />}></Route>
        <Route path="/makepost" element = {<MakePost />}></Route>
        <Route path="/myuni/:collegeId" element = {<MyUni />}></Route>
        <Route path="/courses" element = {<Courses />}></Route>
        <Route path="/admin" element = {<Admin />}></Route>
        <Route path="/comm" element = {<Comments />}></Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
  )
}

export default App
