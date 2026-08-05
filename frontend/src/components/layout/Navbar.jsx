// Top navigation bar shown across authenticated layouts.
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <p className="text-sm font-semibold tracking-wide text-blue-600">EXPENSE & BILL MANAGER</p>
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">{user?.name}</span>
        <button
          onClick={handleLogout}
          className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          Log out
        </button>
      </div>
    </header>
  );
}

export default Navbar;
