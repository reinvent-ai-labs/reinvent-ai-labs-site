export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-base font-semibold tracking-tight ${className}`}
      style={{ letterSpacing: "-0.01em" }}
    >
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden
          className="relative inline-block h-5 w-5 rounded-[6px] border border-primary/50 bg-primary/15"
          style={{
            boxShadow:
              "inset 0 0 8px oklch(0.82 0.13 195 / 0.4), 0 0 12px -4px #fa8072aa",
          }}
        >
          <span
            aria-hidden
            className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full"
            style={{ background: "#fa8072", boxShadow: "0 0 8px #fa8072cc" }}
          />
        </span>
        <span>
          Re<span className="text-[color:var(--accent-salmon)]">|</span>Invent
          <span className="ml-1 text-muted-foreground">AI Labs</span>
        </span>
      </span>
    </span>
  );
}
