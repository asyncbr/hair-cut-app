import Link from "next/link";

import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--color-accent)] text-[#1b120d] shadow-[0_16px_40px_rgba(217,162,95,0.22)] hover:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-border)] bg-white/5 text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:bg-white/8",
  ghost: "text-[var(--color-foreground)] hover:text-[var(--color-accent)]",
};

export function LinkButton({ href, label, variant = "primary", className }: LinkButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
        variants[variant],
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}
