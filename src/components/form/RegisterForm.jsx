import React, { useState, useEffect } from "react";
import { useRegisterMutation } from "../../feature/auth/authApi";
import { useNavigate } from "react-router-dom";
import Error from "../ui/error/Error";
import { selectAuth } from "../../feature/auth/authSelector";
import { useSelector } from "react-redux";
import defaultPlayerRouteId from "../../utils/defaultPlayerRouteId";

export default function RegisterForm() {
  const videoId = defaultPlayerRouteId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const { accessToken } = useSelector(selectAuth) || {};
  const [register, { isSuccess, isError, error, isLoading }] =
    useRegisterMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      register({
        name,
        email,
        password,
        role: "student",
      });
    }
  };
  useEffect(() => {
    if (isSuccess || accessToken) {
      const redirect = videoId
        ? `/student/course-player/${videoId}`
        : `/student/course-player`;
      navigate(redirect);
    } else if (isError) {
      setRegisterError(error?.data);
    }
  }, [isSuccess, isError]);
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
      action="#"
      method="POST"
    >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            required
            className="login-input rounded-t-md"
            placeholder="Student Name"
          />
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="login-input "
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
            className="login-input"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirm Password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="confirm-password"
            required
            className="login-input rounded-b-md"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      <div>
        <button
          disabled={isLoading}
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Create Account
        </button>
      </div>
      {registerError && <Error message={registerError}></Error>}
    </form>
  );
}
