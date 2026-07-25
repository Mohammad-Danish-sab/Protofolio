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
  { month: "Jan", visitors: 400, blogs: 10 },
  { month: "Feb", visitors: 650, blogs: 18 },
  { month: "Mar", visitors: 820, blogs: 25 },
  { month: "Apr", visitors: 980, blogs: 28 },
  { month: "May", visitors: 1200, blogs: 35 },
  { month: "Jun", visitors: 1500, blogs: 42 },
  { month: "Jul", visitors: 1800, blogs: 50 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Website Analytics</h2>

        <p className="text-sm text-slate-400 mt-1">Visitors & Blogs Overview</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="visitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="blogs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

            <XAxis dataKey="month" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#06b6d4"
              fill="url(#visitors)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="blogs"
              stroke="#8b5cf6"
              fill="url(#blogs)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
