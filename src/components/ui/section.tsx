"use client";

import type { SectionProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-18 sm:py-24", className)}>
      {children}
    </section>
  );
}
