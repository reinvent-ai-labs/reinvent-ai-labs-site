import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { posts, postCategories } from "@/lib/posts";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Insights — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Technical essays, build logs, architecture breakdowns, and research notes from ReInvent AI Labs.",
      },
      { property: "og:title", content: "Insights — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "Build logs, architecture notes, field notes, and release notes from the lab.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <PageShell>
      <Section>
        <Eyebrow>Insights</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
          What we learn becomes part of the <span className="text-gradient-tiffany">system.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
          Field notes, architecture decisions, product research, and responsible-AI measurement from
          building ReInvent’s consulting practice and product portfolio.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-wider transition ${
              active === null
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            All
          </button>
          {postCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-wider transition ${
                active === c
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.slug} className="card-surface card-hover flex h-full flex-col p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <span className="mt-auto pt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Editorial pipeline
              </span>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-6 text-muted-foreground">
          Publication links will be added only when the official ReInvent channel is verified.
        </p>
      </Section>
    </PageShell>
  );
}
