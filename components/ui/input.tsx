import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
