"use client";

import React from "react";

type Variant = "primary" | "secondary" | "ghost";

export function FYButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";

  const style =
    variant === "primary"
      ? {
          background: "var(--fy-primary)",
          color: "white",
          boxShadow: "0 6px 18px rgba(43,176,166,0.22)",
        }
      : variant === "secondary"
      ? {
          background: "var(--fy-primary-soft)",
          color: "var(--fy-text)",
          border: "1px solid var(--fy-border)",
        }
      : {
          background: "transparent",
          color: "var(--fy-primary)",
        };

  return (
    <button
      className={`${base} ${className}`}
      style={style as React.CSSProperties}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          (e.currentTarget as HTMLButtonElement).style.background =
            "var(--fy-primary-hover)";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          (e.currentTarget as HTMLButtonElement).style.background =
            "var(--fy-primary)";
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
