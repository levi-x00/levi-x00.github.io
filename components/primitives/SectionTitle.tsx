import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "mb-12 font-mono text-[clamp(24px,3.8vw,46px)] font-bold leading-[0.9] text-terminal-text",
        className,
      )}
    >
      {children}
    </h2>
  );
}
