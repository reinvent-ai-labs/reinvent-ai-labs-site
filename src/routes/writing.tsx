import { pageMetadata } from "@/lib/metadata";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { posts, postCategories } from "@/lib/posts";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: pageMetadata(
      "Lab Notes",
      "Research findings, experiment reports, literature reviews and mathematical investigations from ReInvent AI Laboratories.",
    ),
  }),
  component: WritingPage,
});

function WritingPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <PageShell>
      <Section>
        <Eyebrow>Lab notes</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-foreground md:text-6xl">
          Build logs, architecture notes,{" "}
          <span className="text-gradient-tiffany">and research.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Lab Notes is the archive for experiment reports, literature reviews and mathematical
          investigations. The entries below are unpublished outlines from the earlier software
          program.
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
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
