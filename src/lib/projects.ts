export type ProjectStatus = "Prototype" | "Planned" | "Building" | "Researching";

export type Project = {
  recorded: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  systemType: string;
  techFocus: string;
  status: ProjectStatus;
  categories: string[];
  href?: string;
  artifacts?: { label: string; url: string }[];
};

const records: Project[] = [
  {
    slug: "rowan",
    recorded: "2026-08-05",
    name: "Rowan",
    tagline: "A scripted voice-interface study of order state and handoff.",
    description: "Historical design for mapping voice input to structured order records.",
    problem: "Missed calls and repetitive phone workflows",
    systemType: "Conversational operations platform",
    techFocus: "FastAPI · WebRTC · Workflow states",
    status: "Building",
    categories: ["Voice Agents", "Infrastructure"],
    href: "/projects/voice",
  },
  {
    slug: "reinvent-signals-atlas",
    recorded: "2026-06-13",
    name: "ReInvent Signals — Atlas",
    tagline: "An event-taxonomy prototype for product analytics.",
    description:
      "Atlas scans permitted SaaS product surfaces, discovers user actions, and generates a churn-ready event taxonomy with tracking plans and Postgres-ready schemas.",
    problem: "Teams don't know what behaviors to track before modeling churn",
    systemType: "Event discovery & taxonomy generation",
    techFocus: "Python · LLM · Postgres · Event schema",
    status: "Prototype",
    categories: ["Analytics", "Infrastructure"],
    href: "/projects/atlas",
  },
  {
    slug: "reinvent-ops",
    recorded: "2026-06-12",
    name: "ReInvent Ops",
    tagline: "Reference design for repeatable document and reporting workflows.",
    description:
      "Reference architecture for turning documents, spreadsheets, and recurring reports into searchable, automated workflows.",
    problem: "Scattered documents and recurring manual reports",
    systemType: "Workflow intelligence reference architecture",
    techFocus: "Python · LangGraph · Postgres · RAG",
    status: "Building",
    categories: ["Workflow Intelligence", "Infrastructure"],
    href: "/projects/ops",
  },
  {
    slug: "reinvent-docs",
    recorded: "2026-06-12",
    name: "ReInvent Docs",
    tagline: "Document intelligence infrastructure for searchable knowledge workflows.",
    description:
      "Open-source document intelligence patterns for ingestion, chunking, retrieval, grounded Q&A, evaluation, and deployment.",
    problem: "Knowledge trapped in PDFs, manuals, and internal notes",
    systemType: "RAG / document intelligence",
    techFocus: "Python · Vector DB · Chunking · Evals",
    status: "Planned",
    categories: ["Document AI", "Infrastructure"],
    href: "/projects/docs",
  },
  {
    slug: "reinvent-metrics",
    recorded: "2026-06-12",
    name: "ReInvent Metrics",
    tagline: "Planned framework for cohort analysis and churn diagnosis.",
    description:
      "Diagnosis framework for investigating engagement drops, retention issues, churn, cohort behavior, and funnel problems.",
    problem: "Churn and retention blind spots",
    systemType: "Analytics diagnosis framework",
    techFocus: "Python · SQL · Dashboards · Cohorts",
    status: "Planned",
    categories: ["Analytics"],
  },
  {
    slug: "reinvent-evalkit",
    recorded: "2026-06-12",
    name: "ReInvent EvalKit",
    tagline:
      "Evaluation tools for AI workflow systems, RAG quality, latency, and hallucination risk.",
    description:
      "Test harnesses, golden sets, and reporting tooling for evaluating production AI workflow systems.",
    problem: "AI prototypes that fail in production",
    systemType: "Evaluation tooling",
    techFocus: "Python · Pytest · Trace logging",
    status: "Researching",
    categories: ["Evaluation"],
  },
];

export const projects = records.sort((a, b) => b.recorded.localeCompare(a.recorded));

export const statusColor: Record<ProjectStatus, string> = {
  Prototype: "border-primary/40 bg-primary/10 text-primary",
  Building:
    "border-[color:var(--accent-salmon)]/50 bg-[color:var(--accent-salmon)]/10 text-[color:var(--accent-salmon)]",
  Planned: "border-border bg-surface text-muted-foreground",
  Researching: "border-violet-400/30 bg-violet-400/10 text-violet-300",
};

export const projectCategories = [
  "Voice Agents",
  "Workflow Intelligence",
  "Document AI",
  "Analytics",
  "Evaluation",
  "Infrastructure",
];
