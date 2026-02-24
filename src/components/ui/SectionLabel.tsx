import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary/80 ${className}`}
    >
      <span className="w-4 h-px bg-primary/60" />
      {children}
      <span className="w-4 h-px bg-primary/60" />
    </span>
  );
};