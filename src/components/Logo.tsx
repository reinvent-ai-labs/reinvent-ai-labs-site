export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-base font-semibold tracking-tight ${className}`}
      style={{ letterSpacing: "-0.01em" }}
    >
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden
          className="inline-block h-5 w-5 rounded-[6px] border border-primary/50 bg-primary/15"
          style={{
            boxShadow: "inset 0 0 8px oklch(0.82 0.13 195 / 0.4)",
          }}
        />
        <span>
          Re<span className="text-primary">|</span>Invent
          <span className="ml-1 text-muted-foreground">AI Labs</span>
        </span>
      </span>
    </span>
  );
}
