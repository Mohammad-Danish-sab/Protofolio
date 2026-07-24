export default function Input({
  label,
  ...props
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="text-sm text-zinc-300">
          {label}
        </label>
      )}

      <input
        {...props}
        className="
        w-full
        bg-slate-900
        border
        border-white/10
        rounded-xl
        px-4
        py-3
        text-white
        outline-none
        focus:border-cyan-500
        "
      />

    </div>
  );
}