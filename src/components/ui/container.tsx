import type { SectionProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Container({ children, className }: SectionProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}
