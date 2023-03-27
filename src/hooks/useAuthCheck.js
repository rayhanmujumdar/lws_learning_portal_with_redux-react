import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedUser } from "../feature/auth/authSlice";
const useAuthCheck = () => {
  const [authCheck, setAuthCheck] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(loggedUser({ accessToken, user }));
        setAuthCheck(true);
  }, [dispatch]);
  return [authCheck, setAuthCheck];
};

export default useAuthCheck;
