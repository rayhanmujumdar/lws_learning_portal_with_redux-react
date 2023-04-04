import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
import CoursePlayer from "./pages/studentPage/CoursePlayer";
import Quiz from "./pages/studentPage/Quiz";
import LeaderBoard from "./pages/studentPage/LeaderBoard";
import Dashboard from "./pages/adminPage/Dashboard";
import Videos from "./pages/adminPage/Videos";
import Assignment from "./pages/adminPage/Assignment";
import Quizzes from "./pages/adminPage/Quizzes";
import AssignmentMark from "./pages/adminPage/AssignmentMark";
import Navbar from "./components/navbar/Navbar";
import { useMatchPathName } from "./hooks/useMatchPathName";
import NotFound from "./components/notFound/NotFound";
import useAuthCheck from "./hooks/useAuthCheck";
import LoggedRoute from "./components/LoggedRoute";
import AdminRoute from "./components/adminRoute/AdminRoute";
import StudentRoute from "./components/studentRoute/StudentRoute";
import Description from "./components/studentCourseVideos/Description";

function App() {
  const match = useMatchPathName(["/student/register", "/", "/admin/login"]);
  const [authCheck] = useAuthCheck();
  return (
    <>
      {!match && <Navbar></Navbar>}
      {authCheck && (
        <Routes>
          <Route path="/" element={<Login>Student Account</Login>}></Route>
          <Route
            path="/admin/login"
            element={<Login>Admin Account</Login>}
          ></Route>
          <Route
            path="/student/register"
            element={<Register></Register>}
          ></Route>
          <Route
            path="/student/course-player"
            element={
              <LoggedRoute>
                <StudentRoute>
                  <CoursePlayer></CoursePlayer>
                </StudentRoute>
              </LoggedRoute>
            }
          >
            <Route
              path="/student/course-player/:videoId"
              element={<Description></Description>}
            ></Route>
          </Route>
          <Route
            path="/student/quiz/:quizId"
            element={
              <LoggedRoute>
                <StudentRoute>
                  <Quiz></Quiz>
                </StudentRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route
            path="/student/leaderboard"
            element={
              <LoggedRoute>
                <StudentRoute>
                  <LeaderBoard></LeaderBoard>
                </StudentRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard"
            element={
              <LoggedRoute>
                <AdminRoute>
                  <Dashboard></Dashboard>
                </AdminRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard/videos"
            element={
              <LoggedRoute>
                <AdminRoute>
                  <Videos></Videos>
                </AdminRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard/assignment"
            element={
              <LoggedRoute>
                <AdminRoute>
                  <Assignment></Assignment>
                </AdminRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard/quizzes"
            element={
              <LoggedRoute>
                <AdminRoute>
                  <Quizzes></Quizzes>
                </AdminRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard/assignment-mark"
            element={
              <LoggedRoute>
                <AdminRoute>
                  <AssignmentMark></AssignmentMark>
                </AdminRoute>
              </LoggedRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
