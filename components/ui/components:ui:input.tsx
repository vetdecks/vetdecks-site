import * as React from "react";
import { clsx } from "clsx";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={clsx("w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0",
                      "focus:border-sky-500 focus:ring-2 focus:ring-sky-100", props.className)}
    />
  );
}
