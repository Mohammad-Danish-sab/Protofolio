import React from "react";

const TextArea = React.forwardRef(
  ({ label, error, rows = 5, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-300">{label}</label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500 ${className}`}
          {...props}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
