export function NeuralBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nb-glow" cx="50%" cy="0%" r="60%">
            <stop offset="0%" stopColor="oklch(0.82 0.13 195)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <pattern id="nb-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nb-dots)" />
        <rect width="100%" height="100%" fill="url(#nb-glow)" />
      </svg>
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}
