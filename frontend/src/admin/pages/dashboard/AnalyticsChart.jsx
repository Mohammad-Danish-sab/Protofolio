import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", projects: 2 },
  { month: "Feb", projects: 4 },
  { month: "Mar", projects: 6 },
  { month: "Apr", projects: 8 },
  { month: "May", projects: 10 },
  { month: "Jun", projects: 12 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-slate-900/70 rounded-3xl border border-white/10 p-6">
      <h2 className="text-xl font-bold mb-6">Portfolio Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="projects"
            stroke="#06b6d4"
            fill="#06b6d4"
            fillOpacity={0.25}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
