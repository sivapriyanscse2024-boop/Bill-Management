// Route guard — restricts access based on user role (Employee vs Admin).
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

function RoleBasedRoute({ roles }) {
  const { user } = useAuth();
  return roles.includes(user?.role) ? <Outlet /> : <Navigate to="/" replace />;
}

export default RoleBasedRoute;
