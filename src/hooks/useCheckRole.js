import { useSelector } from "react-redux";
import { selectAuthUser } from "../feature/auth/authSelector";

export const useCheckRole = (userRole) => {
  const {role} = useSelector(selectAuthUser) || {};
  if (userRole === role) {
    return true;
  }
  return false
};
