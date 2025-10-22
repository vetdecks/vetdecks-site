import React from "react";

type Variant = "default" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: Variant;
    size?: Size;
    href?: string; // if present, we render <a>
    className?: string;
  };

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none";
const variants: Record<Variant, string> = {
  default: "bg-sky-600 text-white hover:bg-sky-700",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  ghost: "bg-transparent hover:bg-slate-100 text-slate-900",
};
const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ variant = "default", size = "md", className = "", href, ...props }, ref) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
      return <a ref={ref as any} href={href} className={classes} {...(props as any)} />;
    }
    return <button ref={ref as any} className={classes} {...(props as any)} />;
  }
);

Button.displayName = "Button";
export default Button;
