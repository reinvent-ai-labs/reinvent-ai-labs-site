import { ArrowRight, Images, Search, SlidersHorizontal, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";

const workflow = [
  {
    icon: SlidersHorizontal,
    title: "Human-led culling",
    body: "Keep, reject, maybe, and rating decisions stay in the photographer’s hands.",
  },
  {
    icon: Search,
    title: "Semantic retrieval",
    body: "Find people, moments, and visual context without manually reopening every folder.",
  },
  {
    icon: Users,
    title: "Preference learning",
    body: "Learn from accepted decisions to accelerate future sessions without flattening taste.",
  },
];

const sessionRows = [
  ["1,312", "images ingested"],
  ["468", "selection target"],
  ["3", "context groups"],
  ["Human", "final authority"],
];

export function ReinventStudio() {
  return (
    <section className="border-y border-white/10 bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-6 bg-primary/60" />
              Creative workflow intelligence
            </div>
            <div className="mt-6 flex items-start gap-5">
              <h2 className="font-display text-5xl font-semibold leading-none text-foreground md:text-6xl">
                ReInvent <span className="text-gradient-warm">Studio</span>
              </h2>
              <div aria-hidden="true" className="relative mt-1 hidden h-12 w-12 shrink-0 md:block">
                <span
                  className="absolute -inset-4 rounded-full opacity-40 blur-xl"
                  style={{
                    background: "conic-gradient(from 210deg, #36dede, #fa8072, #36dede)",
                  }}
                />
                <span
                  className="absolute inset-0 rounded-full p-px"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(54,222,222,.9), rgba(250,128,114,.75))",
                  }}
                >
                  <span className="block h-full w-full rounded-full bg-black" />
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-xl leading-8 text-foreground/85">
              Faster creative operations without surrendering creative judgment.
            </p>
          </div>
          <p className="max-w-2xl leading-7 text-muted-foreground lg:pb-1">
            ReInvent Studio is a planned AI-native workflow for photographers and creative studios
            managing high-volume event libraries. It is being designed around customer-discovered
            pain in culling, search, organization, grouping, and delivery—with human taste preserved
            as the system’s final authority.
          </p>
        </div>

        <div className="premium-panel mt-14 overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-foreground/75">
                Event workspace
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Discovery interface · concept preview
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Human review active
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Session intelligence
              </div>
              <dl className="mt-7 space-y-0">
                {sessionRows.map(([value, label]) => (
                  <div
                    key={label}
                    className="flex items-end justify-between gap-4 border-t border-white/10 py-5 first:border-t-0 first:pt-0"
                  >
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="font-display text-2xl text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 rounded-xl border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <Images className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">Context groups</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Family", "Ceremony", "Candids"].map((group) => (
                    <span
                      key={group}
                      className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Assisted review
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    One decision at a time.
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">184 / 1,312</span>
              </div>

              <div className="relative mt-8 min-h-[280px] overflow-hidden rounded-2xl border border-white/12 bg-black p-6 md:min-h-[340px] md:p-8">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
                  style={{ background: "linear-gradient(135deg, #36dede, #fa8072)" }}
                />
                <div className="relative flex h-full min-h-[230px] flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>Frame 0184</span>
                    <span>High-confidence grouping</span>
                  </div>
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-white/15 bg-black/80 font-display text-3xl text-foreground shadow-[0_0_50px_rgba(54,222,222,.08)]">
                    01
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      ["Reject", "←"],
                      ["Maybe", "↓"],
                      ["Keep", "→"],
                    ].map(([label, key]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 px-3 py-3 text-center"
                      >
                        <div className="text-xs text-foreground/80">{label}</div>
                        <div className="mt-1 font-mono text-[10px] text-muted-foreground">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {workflow.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t border-white/15 pt-6">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-5 font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Current stage: customer discovery and workflow validation. Capabilities shown are
            product direction, not production claims.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
          >
            Discuss a studio workflow <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
