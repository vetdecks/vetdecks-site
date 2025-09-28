import * as React from "react";
import { clsx } from "clsx";
export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("rounded-2xl border border-slate-200 bg-white", className)}>{children}</div>;
}
export function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("px-5 pt-5", className)}>{children}</div>;
}
export function CardTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={clsx("text-lg font-semibold", className)}>{children}</h3>;
}
export function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("px-5 pb-5", className)}>{children}</div>;
}
