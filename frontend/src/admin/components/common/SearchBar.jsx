import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-3.5 text-zinc-500" size={18} />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full
        bg-slate-900
        border
        border-white/10
        rounded-xl
        py-3
        pl-12
        pr-4
        text-white
        outline-none
        focus:border-cyan-500
        "
      />
    </div>
  );
}
