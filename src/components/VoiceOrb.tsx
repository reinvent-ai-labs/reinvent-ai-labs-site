import { useState } from "react";

type OrbState = "idle" | "listening" | "processing" | "speaking";

const stateCopy: Record<OrbState, string> = {
  idle: "Faint standby glow — awaiting input",
  listening: "Capturing speech — pulse expanding",
  processing: "Parsing intent — modular bounce",
  speaking: "Synthesizing response — rhythmic waveform",
};

export function VoiceOrb() {
  const [state, setState] = useState<OrbState>("idle");

  const states: OrbState[] = ["idle", "listening", "processing", "speaking"];

  return (
    <div className="card-surface relative flex flex-col items-center gap-8 overflow-hidden p-10">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative flex h-64 w-64 items-center justify-center">
        <div
          className="absolute inset-0 rounded-full bg-primary/10 blur-2xl"
          style={{
            animation:
              state === "idle"
                ? "orb-pulse 4s ease-in-out infinite"
                : state === "listening"
                  ? "orb-pulse 1.4s ease-in-out infinite"
                  : state === "processing"
                    ? "orb-bounce 1.2s ease-in-out infinite"
                    : "orb-pulse 0.7s ease-in-out infinite",
          }}
        />
        <svg viewBox="0 0 200 200" className="relative h-56 w-56">
          <defs>
            <linearGradient id="orb-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.92 0.1 195)" />
              <stop offset="100%" stopColor="oklch(0.6 0.14 200)" />
            </linearGradient>
          </defs>
          <polygon
            points="100,18 168,58 168,142 100,182 32,142 32,58"
            fill="none"
            stroke="url(#orb-stroke)"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <polygon
            points="100,40 148,68 148,132 100,160 52,132 52,68"
            fill="none"
            stroke="url(#orb-stroke)"
            strokeWidth="1"
            opacity="0.5"
            style={{
              transformOrigin: "center",
              animation:
                state === "processing"
                  ? "orb-bounce 1.6s ease-in-out infinite"
                  : "orb-pulse 3s ease-in-out infinite",
            }}
          />
          {state === "speaking" ? (
            <g
              style={{ transformOrigin: "center", animation: "orb-wave 0.6s ease-in-out infinite" }}
            >
              {[-30, -15, 0, 15, 30].map((x, i) => (
                <rect
                  key={i}
                  x={100 + x - 2}
                  y={90}
                  width={4}
                  height={20}
                  rx={2}
                  fill="oklch(0.82 0.13 195)"
                  style={{
                    transformOrigin: `${100 + x}px 100px`,
                    animation: `orb-wave ${0.5 + i * 0.1}s ease-in-out infinite`,
                  }}
                />
              ))}
            </g>
          ) : (
            <circle
              cx="100"
              cy="100"
              r={state === "listening" ? 28 : 22}
              fill="oklch(0.82 0.13 195)"
              opacity="0.85"
              style={{ transition: "r 300ms ease" }}
            />
          )}
        </svg>
      </div>
      <div className="relative text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Voice processing
        </div>
        <div className="mt-1 font-display text-lg text-foreground">
          State: <span className="text-primary">{state}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{stateCopy[state]}</p>
      </div>
      <div className="relative flex flex-wrap justify-center gap-2">
        {states.map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-wider transition ${
              state === s
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
