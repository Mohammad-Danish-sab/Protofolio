import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, size = "lg" }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!open) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/60
      backdrop-blur-sm
      p-4
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative
          w-full
          ${sizes[size]}
          rounded-3xl
          bg-slate-900
          border
          border-white/10
          shadow-2xl
          animate-in
          fade-in
          zoom-in-95
          duration-200
          overflow-hidden
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{title}</h2>

          <button
            onClick={onClose}
            className="
            w-10
            h-10
            rounded-xl
            bg-white/5
            hover:bg-red-500
            transition
            flex
            items-center
            justify-center
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="p-8 max-h-[75vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
