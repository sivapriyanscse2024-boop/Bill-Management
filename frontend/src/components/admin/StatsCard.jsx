// Summary statistic tile used on the admin dashboard/analytics pages.
import Card from "../common/Card.jsx";

function StatsCard({ label, value }) {
  return (
    <Card>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </Card>
  );
}

export default StatsCard;
