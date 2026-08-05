// Admin Dashboard page — company-wide expense overview.
import useAuth from "../../hooks/useAuth.js";
import Card from "../../components/common/Card.jsx";
import StatsCard from "../../components/admin/StatsCard.jsx";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">Welcome back, {user?.name}</h1>
        <p className="text-sm text-slate-500">Company-wide expense overview.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatsCard label="Employees" value="0" />
        <StatsCard label="Pending claims" value="0" />
        <StatsCard label="Reimbursed this month" value="$0" />
      </div>

      <Card>
        <p className="text-sm font-medium text-slate-700">Recent claims</p>
        <p className="mt-2 text-sm text-slate-400">No claims submitted yet.</p>
      </Card>
    </div>
  );
}

export default AdminDashboard;
