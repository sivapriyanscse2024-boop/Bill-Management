// Employee dashboard — overview of recent bills and claim status.
import useAuth from "../../hooks/useAuth.js";
import Card from "../../components/common/Card.jsx";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">Welcome back, {user?.name}</h1>
        <p className="text-sm text-slate-500">Here's an overview of your bills and claims.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Bills uploaded</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Pending claims</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Approved claims</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">0</p>
        </Card>
      </div>

      <Card>
        <p className="text-sm font-medium text-slate-700">Recent bills</p>
        <p className="mt-2 text-sm text-slate-400">No bills uploaded yet.</p>
      </Card>
    </div>
  );
}

export default Dashboard;
