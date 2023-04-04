import React from "react";
import navLogoImage from "../../assets/image/learningportal.svg";
import CustomLink from "../ui/CustomLink";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../../feature/auth/authSlice";
import { useCheckRole } from "../../hooks/useCheckRole";
import { selectAuthUser } from "../../feature/auth/authSelector";
import { Link } from "react-router-dom";
import defaultPlayerRouteId from "../../utils/defaultPlayerRouteId";

export default function Navbar() {
  const { name } = useSelector(selectAuthUser) || {};
  const videoId = defaultPlayerRouteId();
  const isAdmin = useCheckRole("admin");
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    dispatch(loggedOut());
  };
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
        <Link
          to={
            isAdmin ? "/admin/dashboard" : `/student/course-player/${videoId}`
          }
        >
          <img className="h-10" src={navLogoImage} />
        </Link>
        <div>
          <ul className="flex gap-x-4 justify-center items-center">
            {!isAdmin && (
              <>
                <li>
                  <CustomLink to={`/student/course-player/${videoId}`}>
                    Course
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/student/leaderboard">Leaderboard</CustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="font-medium">{name}</h2>
          <button
            onClick={handleLogout}
            className="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
