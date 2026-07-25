import React from "react";

const Input = React.forwardRef(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-slate-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          {...props}
          className={`
            w-full
            px-4
            py-3
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
            focus:border-cyan-500
            transition
            ${className}
          `}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
