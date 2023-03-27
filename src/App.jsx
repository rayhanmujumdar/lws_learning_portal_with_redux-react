import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from './pages/register'
import CoursePlayer from "./pages/studentPage/CoursePlayer"
import Quiz from "./pages/studentPage/Quiz"
import LeaderBoard from "./pages/studentPage/LeaderBoard"
import Dashboard from "./pages/adminPage/Dashboard"
import Videos from "./pages/adminPage/Videos"
import Assignment from "./pages/adminPage/Assignment"
import Quizzes from './pages/adminPage/Quizzes'
import AssignmentMark from "./pages/adminPage/AssignmentMark"
import Navbar from "./components/navbar/Navbar"
import {useMatchPathName} from "./utils/useMatchPathName"
import NotFound from "./components/notFound/NotFound"

function App() {
  const match = useMatchPathName(["/student/register",'/',"/admin/login"])
  return <>
  { !match && <Navbar></Navbar>}
    <Routes>
      <Route path='/' element={<Login>Student Account</Login>}></Route>
      <Route path='/admin/login' element={<Login>Admin Account</Login>}></Route>
      <Route path='/student/register' element={<Register></Register>}></Route>
      <Route path='/student/course-player' element={<CoursePlayer></CoursePlayer>}></Route>
      <Route path='/student/quiz' element={<Quiz></Quiz>}></Route>
      <Route path='/student/leaderboard' element={<LeaderBoard></LeaderBoard>}></Route>
      <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/admin/dashboard/videos' element={<Videos></Videos>}></Route>
      <Route path='/admin/dashboard/assignment' element={<Assignment></Assignment>}></Route>
      <Route path='/admin/dashboard/quizzes' element={<Quizzes></Quizzes>}></Route>
      <Route path='/admin/dashboard/assignment-mark' element={<AssignmentMark></AssignmentMark>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  </>
}

export default App
