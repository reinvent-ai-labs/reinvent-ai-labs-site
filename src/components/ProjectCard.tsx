import { Link } from "@tanstack/react-router";
import { statusColor, type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-surface card-hover group flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-xl text-foreground">{project.name}</div>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wider ${statusColor[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-3 text-sm">
        <div className="flex gap-3">
          <dt className="w-24 shrink-0 text-xs uppercase tracking-wider text-muted-foreground">Problem</dt>
          <dd className="text-foreground/90">{project.problem}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-24 shrink-0 text-xs uppercase tracking-wider text-muted-foreground">System</dt>
          <dd className="text-foreground/90">{project.systemType}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-24 shrink-0 text-xs uppercase tracking-wider text-muted-foreground">Tech</dt>
          <dd className="font-mono text-xs text-foreground/80">{project.techFocus}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.categories.map((c) => (
          <span
            key={c}
            className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 text-sm">
        {project.href ? (
          <Link
            to={project.href}
            className="text-primary transition-colors hover:text-foreground"
          >
            View project →
          </Link>
        ) : null}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href={project.docs}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Docs
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}
