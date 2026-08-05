// Central route definitions mapping URLs to pages.
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { ROLES } from "../utils/constants.js";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import NotFound from "../pages/NotFound.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import RoleBasedRoute from "./RoleBasedRoute.jsx";
import EmployeeLayout from "../layouts/EmployeeLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import Dashboard from "../pages/employee/Dashboard.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";

function RootRedirect() {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === ROLES.ADMIN ? "/admin/dashboard" : "/employee/dashboard"} replace />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<PrivateRoute />}>
          <Route element={<RoleBasedRoute roles={[ROLES.EMPLOYEE]} />}>
            <Route element={<EmployeeLayout />}>
              <Route path="/employee/dashboard" element={<Dashboard />} />
            </Route>
          </Route>

          <Route element={<RoleBasedRoute roles={[ROLES.ADMIN]} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
