import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-dark font-bold hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(37,244,209,0.3)]",
  outline:
    "border border-primary text-primary hover:bg-primary/10 active:scale-95",
  ghost:
    "text-light/70 hover:text-primary hover:bg-primary/5 active:scale-95",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none";

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};