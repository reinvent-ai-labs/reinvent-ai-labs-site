import { useState } from "react";
import {
  Search,
  UploadCloud,
  Film,
  Image as ImageIcon,
  FileText,
  Mic,
  Sparkles,
  Wand2,
  FolderSearch,
  LineChart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type AssetKind = "video" | "image" | "script" | "audio";

const assets: {
  name: string;
  kind: AssetKind;
  tags: string[];
}[] = [
  { name: "product_launch_teaser.mp4", kind: "video", tags: ["video", "b-roll"] },
  { name: "founder_interview_clip.mov", kind: "video", tags: ["interview"] },
  { name: "summer_campaign_broll.mp4", kind: "video", tags: ["b-roll"] },
  { name: "logo_animation_v2.mp4", kind: "video", tags: ["motion"] },
  { name: "matcha_product_shot.png", kind: "image", tags: ["product shot"] },
  { name: "campaign_script.pdf", kind: "script", tags: ["script"] },
];

const indexingSteps = [
  "Embeddings created",
  "Scenes detected",
  "Objects tagged",
  "Campaign moments found",
];

const results = [
  {
    title: "summer_campaign_broll.mp4",
    match: 94,
    reason:
      "Bright outdoor visuals, high-energy pacing, product-friendly background.",
    tone: "cyan" as const,
  },
  {
    title: "matcha_product_shot.png",
    match: 89,
    reason: "Clean product framing, strong color match with campaign theme.",
    tone: "salmon" as const,
  },
  {
    title: "founder_interview_clip.mov",
    match: 82,
    reason: "Useful for authenticity-driven campaign variant.",
    tone: "violet" as const,
  },
];

const suggestions = [
  "Use b-roll as the opening 2 seconds of a Reel.",
  "Pair the product shot with a playful caption variant.",
  "Cut founder interview into a trust-building story post.",
  "Create A/B test: lifestyle montage vs founder-led message.",
];

const generatedTags = [
  "#summer",
  "#product-launch",
  "#student-audience",
  "#b-roll",
  "#founder-story",
  "#high-energy",
  "#short-form-video",
];

const features = [
  {
    icon: FolderSearch,
    title: "Search by Meaning",
    body: "Find clips and images using natural language instead of digging through file names.",
  },
  {
    icon: Film,
    title: "Reuse Existing Media",
    body: "Surface forgotten b-roll, old campaign clips, interviews, and product shots that still have value.",
  },
  {
    icon: LineChart,
    title: "Campaign Suggestions",
    body: "Turn found assets into social posts, reels, launch concepts, and A/B testing ideas.",
  },
];

const pipeline = [
  "Upload",
  "Extract metadata",
  "Generate embeddings",
  "Search assets",
  "Recommend campaign uses",
  "Track performance",
];

function kindIcon(kind: AssetKind) {
  if (kind === "video") return Film;
  if (kind === "image") return ImageIcon;
  if (kind === "audio") return Mic;
  return FileText;
}

function toneClasses(tone: "cyan" | "salmon" | "violet") {
  if (tone === "salmon")
    return "border-[color:var(--accent-salmon)]/30 bg-[color:var(--accent-salmon)]/8";
  if (tone === "violet") return "border-violet-400/30 bg-violet-400/8";
  return "border-primary/30 bg-primary/8";
}

function matchColor(tone: "cyan" | "salmon" | "violet") {
  if (tone === "salmon") return "text-[color:var(--accent-salmon)]";
  if (tone === "violet") return "text-violet-300";
  return "text-primary";
}

export function VideoAssetFinder() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-20 right-1/3 h-[480px] w-[760px] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #fa807255, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[420px] w-[640px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-[6%] h-[300px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #7c83ff55, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:pb-32">
        {/* Heading */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-salmon)]/40 bg-[color:var(--accent-salmon)]/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[color:var(--accent-salmon)]">
            <Sparkles className="h-3.5 w-3.5" />
            Creative Asset Intelligence
          </div>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            Find the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #fa8072 0%, #ffffff 45%, #6ee7d8 100%)",
              }}
            >
              perfect asset
            </span>{" "}
            instantly.
          </h2>
          <p className="mt-5 max-w-3xl text-base text-foreground/85 md:text-lg">
            Upload your creative library and let AI search, organize, tag, and
            recommend the best clips, scenes, visuals, and campaign assets.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">
            Video Asset Finder is an experimental ReInvent Studio demo for
            creators and production teams. It turns scattered footage, images,
            and media files into a searchable AI asset brain — helping teams
            find what they already have, reuse strong content, and generate
            smarter campaign suggestions.
          </p>
        </div>

        {/* Demo card */}
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute -inset-px rounded-[22px] opacity-80"
            style={{
              background:
                "linear-gradient(130deg, #fa8072 0%, #6ee7d8 55%, #a78bfa 100%)",
              filter: "blur(0.5px)",
            }}
          />
          <div className="relative rounded-[21px] border border-white/10 bg-background/70 p-1 backdrop-blur-xl">
            <div className="rounded-[18px] bg-[oklch(0.15_0.008_240)/0.7] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Left: Upload */}
                <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm uppercase tracking-[0.18em] text-foreground/80">
                      Upload Assets
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      mock library
                    </span>
                  </div>

                  {/* Drop area */}
                  <div
                    className="mt-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[color:var(--accent-salmon)]/40 bg-[color:var(--accent-salmon)]/[0.04] p-6 text-center"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.02) 12px 13px)",
                    }}
                  >
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                      style={{
                        background:
                          "linear-gradient(135deg, #fa807233, color-mix(in oklab, var(--primary) 22%, transparent))",
                      }}
                    >
                      <UploadCloud className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="text-sm text-foreground/90">
                      Drop videos, images, scripts, thumbnails, or audio files
                      here
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                      mp4 · mov · png · jpg · pdf · wav
                    </div>
                  </div>

                  {/* Asset chips */}
                  <div className="mt-4 flex flex-col gap-2">
                    {assets.map((a) => {
                      const Icon = kindIcon(a.kind);
                      return (
                        <div
                          key={a.name}
                          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-background/50 px-3 py-2.5"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-foreground/85">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span className="truncate font-mono text-[12.5px] text-foreground/90">
                              {a.name}
                            </span>
                          </div>
                          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                            {a.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Indexing status */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-background/40 p-4">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-primary">
                      <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      AI indexing assets…
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {indexingSteps.map((s) => (
                        <div
                          key={s}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[12px] text-foreground/85"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Search + Suggestions */}
                <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm uppercase tracking-[0.18em] text-foreground/80">
                      AI Search + Suggestions
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[color:var(--accent-salmon)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-salmon)]" />
                      {revealed ? "results" : "ready"}
                    </span>
                  </div>

                  {/* Search bar */}
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-background/60 px-3 py-2.5 focus-within:border-primary/50">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      readOnly
                      defaultValue="Find upbeat clips for a summer product launch"
                      className="w-full bg-transparent font-mono text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    onClick={() => setRevealed(true)}
                    className="group mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.01]"
                    style={{
                      background:
                        "linear-gradient(120deg, #fa8072 0%, #ffffff 55%, #6ee7d8 100%)",
                      boxShadow:
                        "0 10px 40px -12px #fa807288, 0 0 0 1px rgba(255,255,255,0.12) inset",
                    }}
                  >
                    <Wand2 className="h-4 w-4" />
                    Search Assets
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>

                  {/* Results */}
                  <div className="mt-5 flex flex-col gap-3">
                    {results.map((r, i) => (
                      <div
                        key={r.title}
                        className={`rounded-xl border p-4 transition ${toneClasses(r.tone)} ${
                          revealed ? "animate-fade-in opacity-100" : "opacity-70"
                        }`}
                        style={{
                          animationDelay: revealed ? `${i * 90}ms` : undefined,
                          animationFillMode: "both",
                        }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="truncate font-mono text-[13px] text-foreground">
                            {r.title}
                          </div>
                          <div
                            className={`shrink-0 font-mono text-[11px] uppercase tracking-widest ${matchColor(r.tone)}`}
                          >
                            {r.match}% match
                          </div>
                        </div>
                        <div className="mt-1.5 text-[13px] leading-relaxed text-foreground/85">
                          {r.reason}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Suggestions */}
                  <div
                    className={`mt-5 rounded-xl border border-white/10 bg-background/50 p-4 transition ${
                      revealed ? "animate-fade-in opacity-100" : "opacity-70"
                    }`}
                    style={{
                      animationDelay: revealed ? "360ms" : undefined,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                      Suggested Campaign Uses
                    </div>
                    <ul className="mt-2.5 flex flex-col gap-1.5 text-[13px] text-foreground/90">
                      {suggestions.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent-salmon)]" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Generated tags */}
                  <div className="mt-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      Generated Tags
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {generatedTags.map((t, i) => (
                        <span
                          key={t}
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-mono ${
                            i % 2 === 0
                              ? "border-primary/30 bg-primary/8 text-primary"
                              : "border-[color:var(--accent-salmon)]/30 bg-[color:var(--accent-salmon)]/8 text-[color:var(--accent-salmon)]"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture strip */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-max items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
            {pipeline.map((p, i) => (
              <div key={p} className="flex items-center gap-2">
                <span
                  className="rounded-full border px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest"
                  style={{
                    borderColor:
                      i % 2 === 0
                        ? "color-mix(in oklab, var(--primary) 45%, transparent)"
                        : "color-mix(in oklab, #fa8072 45%, transparent)",
                    background:
                      i % 2 === 0
                        ? "color-mix(in oklab, var(--primary) 10%, transparent)"
                        : "color-mix(in oklab, #fa8072 10%, transparent)",
                    color: i % 2 === 0 ? "var(--primary)" : "#fa8072",
                    boxShadow:
                      i % 2 === 0
                        ? "0 0 18px -6px color-mix(in oklab, var(--primary) 60%, transparent)"
                        : "0 0 18px -6px #fa807288",
                  }}
                >
                  {p}
                </span>
                {i < pipeline.length - 1 && (
                  <span className="h-px w-6 bg-gradient-to-r from-primary/40 to-[color:var(--accent-salmon)]/40" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
            Why it matters
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--accent-salmon)]/40 hover:bg-white/[0.05]"
                >
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, #fa807233, color-mix(in oklab, var(--primary) 25%, transparent))",
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
        <div className="mt-12 flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setRevealed(true)}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(120deg, #fa8072 0%, #ffffff 60%, #6ee7d8 100%)",
                boxShadow: "0 10px 40px -12px #fa807288",
              }}
            >
              <Sparkles className="h-4 w-4" />
              Try Asset Search Demo
            </button>
            <a
              href="https://github.com/reinvent-ai-labs"
              target="_blank"
              rel="noreferrer"
              aria-disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              Open Source Coming Soon
            </a>
          </div>
          <p className="max-w-2xl text-xs text-muted-foreground md:text-sm">
            Built for creators, studios, agencies, and production teams that
            need searchable creative memory — not another messy folder.
          </p>
        </div>
      </div>
    </section>
  );
}
