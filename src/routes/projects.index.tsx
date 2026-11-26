import { pageMetadata } from "@/lib/metadata";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: pageMetadata(
      "System Library",
      "Browse RAL’s chronological record of software designs, prototypes and planned systems.",
    ),
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? projects.filter((p) => p.categories.includes(active)) : projects;

  return (
    <PageShell>
      <Section>
        <Eyebrow>System library</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-foreground md:text-6xl">
          Research and software,{" "}
          <span className="text-gradient-tiffany">in chronological order.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Earlier software records appear newest first, dated by their first entry in the site
          source. Badges show the status at the time of documentation. Robotics releases will appear
          here as evidence becomes available.
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
