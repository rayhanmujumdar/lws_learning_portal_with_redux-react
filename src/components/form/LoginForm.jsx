import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../feature/auth/authApi";
import { selectAuth } from "../../feature/auth/authSelector";
import { useCheckRole } from "../../hooks/useCheckRole";
import validateEmail from "../../utils/validEmail";
import Error from "../ui/error/Error";
import defaultPlayerRouteId from "../../utils/defaultPlayerRouteId";
import { usersApi } from "../../feature/users/usersApi";
import debounce from "../../utils/debounce";

export default function LoginForm({ roleName }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAdmin = useCheckRole("admin");
  const videoId = defaultPlayerRouteId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isSuccess, isError, isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState(null);
  const { accessToken } = useSelector(selectAuth) || {};
  const from = isAdmin
    ? "/admin/dashboard"
    : videoId
    ? `/student/course-player/${videoId}`
    : `/student/course-player`;
  useEffect(() => {
    if (isSuccess || accessToken) {
      navigate(from, { replace: true });
    } else if (isError) {
      setLogInError(error?.data);
    }
  }, [isSuccess, isError, accessToken]);
  const doSearch = async (e) => {
    const email = e.target.value;
    const { data: user } = await dispatch(
      usersApi.endpoints.getUser.initiate(email)
    );
    if (
      location.pathname === "/admin/login" &&
      user[0]?.role === roleName.toLowerCase()
    ) {
      setLogInError("");
      setEmail(email);
    } else if (
      location.pathname === "/" &&
      user[0]?.role === roleName.toLowerCase()
    ) {
      setLogInError("");
      setEmail(email);
    } else {
      setEmail("")
      setLogInError(`This mail user is not ${roleName}`);
    }
  };
  const handleUserRole = debounce(doSearch, 500);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log({email,password})
      login({
        data: {
          email,
          password,
        },
      });
    } else {
      setLogInError("Email is not valid");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            onChange={handleUserRole}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="login-input rounded-t-md"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="login-input rounded-b-md"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="text-sm">
          <Link
            to="/student/register"
            className="font-medium text-violet-600 hover:text-violet-500"
          >
            Create New Account
          </Link>
        </div>
      </div>

      <div>
        <button
          disabled={isLoading}
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Sign in
        </button>
      </div>
      {logInError && <Error message={logInError}></Error>}
    </form>
  );
}
