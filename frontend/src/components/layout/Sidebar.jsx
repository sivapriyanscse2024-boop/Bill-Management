// Role-aware side navigation menu (links differ for Employee vs Admin).
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { ROLES } from "../../utils/constants.js";

function Sidebar() {
  const { user } = useAuth();
  const dashboardPath = user?.role === ROLES.ADMIN ? "/admin/dashboard" : "/employee/dashboard";

  return (
    <nav className="w-56 shrink-0 border-r border-slate-200 bg-white px-3 py-4">
      <NavLink
        to={dashboardPath}
        className={({ isActive }) =>
          `block rounded-md px-3 py-2 text-sm font-medium transition ${
            isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
          }`
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Sidebar;
