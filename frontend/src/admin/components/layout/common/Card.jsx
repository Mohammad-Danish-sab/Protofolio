export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-900/60
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}