import { PlusCircle } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-slate-900/70 rounded-3xl border border-white/10 p-6">
      <h2 className="text-xl font-bold mb-6">Quick Actions</h2>

      <div className="grid gap-4">
        <button className="flex items-center gap-3 p-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition">
          <PlusCircle />
          Add Project
        </button>

        <button className="flex items-center gap-3 p-4 rounded-xl bg-teal-500 hover:bg-teal-600 transition">
          <PlusCircle />
          Write Blog
        </button>

        <button className="flex items-center gap-3 p-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition">
          <PlusCircle />
          Add Skill
        </button>
      </div>
    </div>
  );
}
