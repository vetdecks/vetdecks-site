import React, {
  ButtonHTMLAttributes,
  ReactNode,
  isValidElement,
  cloneElement,
} from "react";

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
} as const;

const variants = {
  default: "bg-gray-900 text-white hover:bg-gray-800",
  outline: "border border-gray-300 hover:bg-gray-50",
  ghost: "bg-transparent hover:bg-gray-100",
} as const;

type Size = keyof typeof sizes;
type Variant = keyof typeof variants;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
  /** allow href to avoid TS error if someone passes it */
  href?: string;
}

export default function Button({
  size = "md",
  variant = "default",
  asChild = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  // Support: <Button asChild><a href="...">Link</a></Button>
  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement, {
      className: `${classes} ${(children as any).props?.className || ""}`.trim(),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
