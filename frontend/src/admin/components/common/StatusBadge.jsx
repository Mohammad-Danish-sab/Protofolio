export default function StatusBadge({ status }) {
  const colors = {
    Published: "bg-green-500/20 text-green-400",

    Draft: "bg-yellow-500/20 text-yellow-400",

    Active: "bg-cyan-500/20 text-cyan-400",

    Inactive: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-semibold
      ${colors[status] || "bg-slate-700 text-white"}
      `}
    >
      {status}
    </span>
  );
}
