import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { posts, postCategories } from "@/lib/posts";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Lab Notes — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Technical essays, build logs, architecture breakdowns, and research notes from ReInvent AI Labs.",
      },
      { property: "og:title", content: "Lab Notes — ReInvent AI Labs" },
      {
        property: "og:description",
        content:
          "Build logs, architecture notes, field notes, and release notes from the lab.",
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
        <Eyebrow>Lab notes</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-foreground md:text-6xl">
          Build logs, architecture notes, <span className="text-gradient-tiffany">and research.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Technical essays and notes from building open-source AI/data systems.
          Posts are published on Medium and mirrored here.
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
              <a
                href="https://medium.com/@YOUR_HANDLE"
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6 text-sm text-primary hover:text-foreground"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@YOUR_HANDLE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Read on Medium
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
