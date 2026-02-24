import React from "react";

type BadgeVariant = "primary" | "dark" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary/20 text-primary border border-primary/30",
  dark: "bg-dark-deeper/80 text-light/60 border border-light/10",
  outline: "bg-transparent text-light/50 border border-light/20",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};