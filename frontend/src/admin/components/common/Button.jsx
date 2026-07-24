import clsx from "clsx";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:opacity-90",

    secondary: "bg-slate-800 text-white hover:bg-slate-700",

    danger: "bg-red-500 text-white hover:bg-red-600",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "px-5 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        styles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}
