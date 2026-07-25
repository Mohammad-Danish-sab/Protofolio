import { Pencil, Trash2 } from "lucide-react";

export default function TableActions({ onEdit, onDelete }) {
  return (
    <div className="flex gap-3 justify-center">
      <button
        onClick={onEdit}
        className="w-10 h-10 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 flex items-center justify-center"
      >
        <Pencil size={18} />
      </button>

      <button
        onClick={onDelete}
        className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500 flex items-center justify-center"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
