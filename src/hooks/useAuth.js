import { useSelector } from "react-redux";
import { selectAuth } from "../feature/auth/authSelector";

export const useAuth = () => {
  const { accessToken, user } = useSelector(selectAuth);
  if (accessToken && user) {
    return true;
  }
  return false;
};
