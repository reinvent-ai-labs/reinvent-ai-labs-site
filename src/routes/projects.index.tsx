import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "ReInvent AI Labs product directions across conversational operations, creative workflows, analytics, and responsible automation.",
      },
      { property: "og:title", content: "Projects — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "Explore the ReInvent AI Labs product portfolio.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? projects.filter((p) => p.categories.includes(active)) : projects;

  return (
    <PageShell>
      <Section>
        <Eyebrow>Product portfolio</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
          Systems organized by the problem—not by the{" "}
          <span className="text-gradient-tiffany">novelty.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
          ReInvent turns repeated, validated operational problems into reusable products. Every
          direction is labeled honestly by stage; capability claims grow only when the evidence
          does.
        </p>

        <div className="mt-12 flex flex-wrap gap-2">
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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
