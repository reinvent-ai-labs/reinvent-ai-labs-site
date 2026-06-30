import { useState } from "react";
import { Sparkles, Wand2, Palette, LineChart, ArrowRight } from "lucide-react";

const exampleBrief = `Coffee shop launching a summer matcha drink.
Audience: college students.
Vibe: playful, premium, Instagram/TikTok.
Offer: Buy one, get one Friday.`;

const outputCards = [
  {
    label: "Campaign Angle",
    body: "Your Friday Matcha Ritual",
    tone: "cyan",
  },
  {
    label: "Visual Direction",
    body: "Bright green matcha swirl, soft coral background, playful student lifestyle energy.",
    tone: "salmon",
  },
  {
    label: "Reel Script",
    body: "POV: You survived the week and your matcha bestie is waiting.",
    tone: "violet",
  },
  {
    label: "Caption",
    body: "Friday tastes better in green. Bring a friend — BOGO Matcha all day.",
    tone: "cyan",
  },
  {
    label: "A/B Test",
    body: "Variant A: lifestyle reel. Variant B: static discount post. Track CTR, saves, shares, and redemptions.",
    tone: "salmon",
  },
] as const;

const features = [
  {
    icon: Wand2,
    title: "Creative Direction",
    body: "Generate campaign angles, captions, scripts, and visual concepts from one plain-language brief.",
  },
  {
    icon: Palette,
    title: "Media-Ready Outputs",
    body: "Move beyond static infographics with social posts, short-form video ideas, and animated ad directions.",
  },
  {
    icon: LineChart,
    title: "Built for Measurement",
    body: "Every campaign includes A/B test ideas, target metrics, and experiment hypotheses.",
  },
];

function toneClasses(tone: "cyan" | "salmon" | "violet") {
  if (tone === "salmon")
    return "border-[color:var(--accent-salmon)]/30 bg-[color:var(--accent-salmon)]/8 text-[color:var(--accent-salmon)]";
  if (tone === "violet")
    return "border-violet-400/30 bg-violet-400/8 text-violet-300";
  return "border-primary/30 bg-primary/8 text-primary";
}

export function ReinventStudio() {
  const [brief, setBrief] = useState(exampleBrief);
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Bright gradient backdrop — keeps dark base, layers studio glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute right-[8%] top-1/3 h-[380px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #fa807255, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 left-[6%] h-[360px] w-[480px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #7c83ff55, transparent 70%)",
          }}
        />
      </div>

      {/* Floating geometric accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[6%] top-24 h-2 w-2 rounded-full bg-primary/70 animate-pulse" />
        <div className="absolute right-[12%] top-40 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-salmon)] animate-pulse" />
        <div
          className="absolute left-[18%] bottom-24 h-3 w-3 rotate-45 border border-primary/40"
          style={{ animation: "orb-bounce 6s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[20%] bottom-32 h-2.5 w-2.5 rounded-full border border-[color:var(--accent-salmon)]/60"
          style={{ animation: "orb-pulse 4s ease-in-out infinite" }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
        {/* Heading */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            New Demo
          </div>
          <div className="relative mt-5 flex items-start gap-4">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
              ReInvent{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #6ee7d8 0%, #ffffff 45%, #fa8072 100%)",
                }}
              >
                Studio
              </span>
            </h2>
            {/* sparkle orb near heading */}
            <span
              aria-hidden
              className="relative mt-3 hidden h-10 w-10 md:inline-block"
            >
              <span
                className="absolute inset-0 rounded-full blur-md"
                style={{
                  background:
                    "conic-gradient(from 0deg, #6ee7d8, #fa8072, #a78bfa, #6ee7d8)",
                  animation: "orb-pulse 3s ease-in-out infinite",
                }}
              />
              <span className="absolute inset-1 rounded-full bg-background/70 backdrop-blur" />
              <Sparkles className="absolute inset-0 m-auto h-4 w-4 text-foreground" />
            </span>
          </div>
          <p className="mt-5 max-w-3xl text-base text-foreground/85 md:text-lg">
            Turn a plain marketing brief into a full AI-powered campaign concept —
            visuals, captions, scripts, and measurable A/B tests.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">
            ReInvent Studio is an experimental open-source creative AI tool from
            ReInvent AI Labs. It helps creators, small businesses, and studios
            transform rough ideas into polished campaign directions with strategy,
            media concepts, and analytics built in.
          </p>
        </div>

        {/* Demo card with gradient border */}
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute -inset-px rounded-[22px] opacity-80"
            style={{
              background:
                "linear-gradient(130deg, #6ee7d8 0%, #fa8072 50%, #a78bfa 100%)",
              filter: "blur(0.5px)",
            }}
          />
          <div className="relative rounded-[21px] border border-white/10 bg-background/70 p-1 backdrop-blur-xl">
            <div className="rounded-[18px] bg-[oklch(0.15_0.008_240)/0.7] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Input panel */}
                <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm uppercase tracking-[0.18em] text-foreground/80">
                      Input Brief
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      editable
                    </span>
                  </div>
                  <textarea
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    className="mt-4 min-h-[180px] w-full resize-none rounded-xl border border-white/10 bg-background/60 p-4 font-mono text-[13px] leading-relaxed text-foreground outline-none transition focus:border-primary/50 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
                  />
                  <button
                    onClick={() => setRevealed(true)}
                    className="group mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.01]"
                    style={{
                      background:
                        "linear-gradient(120deg, #6ee7d8 0%, #ffffff 55%, #fa8072 100%)",
                      boxShadow:
                        "0 10px 40px -12px color-mix(in oklab, var(--primary) 50%, transparent), 0 0 0 1px rgba(255,255,255,0.12) inset",
                    }}
                  >
                    <Wand2 className="h-4 w-4" />
                    Generate Campaign
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </div>

                {/* Output panel */}
                <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm uppercase tracking-[0.18em] text-foreground/80">
                      AI Campaign Output
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[color:var(--accent-salmon)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-salmon)]" />
                      {revealed ? "generated" : "preview"}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    {outputCards.map((c, i) => (
                      <div
                        key={c.label}
                        className={`rounded-xl border p-4 transition ${toneClasses(
                          c.tone,
                        )} ${
                          revealed
                            ? "animate-fade-in opacity-100"
                            : "opacity-70"
                        }`}
                        style={{
                          animationDelay: revealed ? `${i * 90}ms` : undefined,
                          animationFillMode: "both",
                        }}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-[0.18em] opacity-80">
                          {c.label}
                        </div>
                        <div className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/95">
                          {c.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[color:var(--accent-salmon)]">
            Why it matters
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.05]"
                >
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--primary) 25%, transparent), #fa807233)",
                    }}
                  >
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h4 className="mt-4 font-display text-lg text-foreground">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setRevealed(true)}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(120deg, #6ee7d8 0%, #ffffff 60%, #fa8072 100%)",
                boxShadow:
                  "0 10px 40px -12px color-mix(in oklab, var(--primary) 55%, transparent)",
              }}
            >
              <Sparkles className="h-4 w-4" />
              View Demo
            </button>
            <a
              href="https://github.com/reinvent-ai-labs"
              target="_blank"
              rel="noreferrer"
              aria-disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-muted-foreground transition hover:border-[color:var(--accent-salmon)]/40 hover:text-foreground"
            >
              Open Source Coming Soon
            </a>
          </div>
          <p className="max-w-2xl text-xs text-muted-foreground md:text-sm">
            ReInvent Studio is part of ReInvent AI Labs&apos; broader mission to
            build human-facing AI infrastructure for creators, businesses, and
            intelligent media systems.
          </p>
        </div>
      </div>
    </section>
  );
}
