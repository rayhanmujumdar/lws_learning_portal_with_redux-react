import { Navigate } from "react-router-dom";
import { useCheckRole } from "../../hooks/useCheckRole";

export default function AdminRoute({ children }) {
  const isRole = useCheckRole("admin");
  console.log(isRole)
  if (isRole) return children;
  return <Navigate to='/not-found' replace={true}></Navigate>
}
