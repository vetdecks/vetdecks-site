import * as React from "react";
import { clsx } from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
};

export function Button({ asChild, variant = "default", size = "md", className, href, children, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors shadow-sm";
  const variants = { default: "bg-sky-600 text-white hover:bg-sky-700", ghost: "bg-transparent hover:bg-slate-100", outline: "border border-slate-200 hover:bg-white" } as const;
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-sm", lg: "px-5 py-2.5 text-base" } as const;
  const classes = clsx(base, variants[variant], sizes[size], className);
  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
