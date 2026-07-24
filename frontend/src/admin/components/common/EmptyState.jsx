import { Inbox } from "lucide-react";

export default function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display.",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center">
        <Inbox size={40} className="text-cyan-400" />
      </div>

      <h2 className="text-2xl font-bold text-white mt-6">{title}</h2>

      <p className="text-zinc-400 mt-2">{description}</p>
    </div>
  );
}
