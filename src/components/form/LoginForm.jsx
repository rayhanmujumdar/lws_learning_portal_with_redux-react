import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../feature/auth/authApi";
import { selectAuth } from "../../feature/auth/authSelector";
import { useCheckRole } from "../../hooks/useCheckRole";
import validateEmail from "../../utils/validEmail";
import Error from "../ui/error/Error";

export default function LoginForm() {
  const isAdmin = useCheckRole("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isSuccess, isError, isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState(null);
  const { accessToken } = useSelector(selectAuth) || {};
  const from = isAdmin ? "/admin/dashboard" : `/student/course-player/1`;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      login({
        email,
        password,
      });
    } else {
      setLogInError("Email is not valid");
    }
  };
  useEffect(() => {
    if (isSuccess || accessToken) {
      navigate(from, { replace: true });
    } else if (isError) {
      setLogInError(error?.data);
    }
  }, [isSuccess, isError, accessToken]);
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
