import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Open-source AI/data system projects: voice agents, workflow intelligence, document AI, analytics, and evaluation tooling.",
      },
      { property: "og:title", content: "Projects — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "The ReInvent AI Labs system library: voice, ops, docs, metrics, and evals.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active
    ? projects.filter((p) => p.categories.includes(active))
    : projects;

  return (
    <PageShell>
      <Section>
        <Eyebrow>System library</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-foreground md:text-6xl">
          Open-source AI/data systems, <span className="text-gradient-tiffany">organized by problem.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Each project ships with a problem statement, system type, tech focus,
          GitHub repository, docs, and (where available) a demo.
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
          {projectCategories.map((c) => (
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

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
