export type ProjectStatus = "Prototype" | "Planned" | "Building" | "Researching";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  systemType: string;
  techFocus: string;
  status: ProjectStatus;
  categories: string[];
  github: string;
  docs: string;
  demo?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "reinvent-signals-atlas",
    name: "ReInvent Signals — Atlas",
    tagline:
      "AI-powered event discovery for churn-ready product analytics.",
    description:
      "Atlas scans permitted SaaS product surfaces, discovers user actions, and generates a churn-ready event taxonomy with tracking plans and Postgres-ready schemas.",
    problem: "Teams don't know what behaviors to track before modeling churn",
    systemType: "Event discovery & taxonomy generation",
    techFocus: "Python · LLM · Postgres · Event schema",
    status: "Prototype",
    categories: ["Analytics", "Infrastructure"],
    github: "https://github.com/reinvent-ai-labs/reinvent-signals-atlas",
    docs: "https://github.com/reinvent-ai-labs/reinvent-signals-atlas#docs",
    href: "/projects/atlas",
  },
  {
    slug: "reinvent-voice",
    name: "ReInvent Voice",
    tagline:
      "Open-source voice-agent infrastructure for restaurant ordering workflows.",
    description:
      "Developer-first voice agent engine with API-first design, workflow states, menu/order understanding, and optional UI components.",
    problem: "Manual phone/order workflows",
    systemType: "Voice-agent infrastructure",
    techFocus: "FastAPI · WebRTC · Workflow states",
    status: "Prototype",
    categories: ["Voice Agents", "Infrastructure"],
    github: "https://github.com/reinvent-ai-labs/reinvent-voice",
    docs: "https://github.com/reinvent-ai-labs/reinvent-voice#docs",
    demo: "https://github.com/reinvent-ai-labs/reinvent-voice#demo",
    href: "/projects/voice",
  },
  {
    slug: "reinvent-ops",
    name: "ReInvent Ops",
    tagline: "Open-source AI workflow intelligence for small teams.",
    description:
      "Reference architecture for turning documents, spreadsheets, and recurring reports into searchable, automated workflows.",
    problem: "Scattered documents and recurring manual reports",
    systemType: "Workflow intelligence reference architecture",
    techFocus: "Python · LangGraph · Postgres · RAG",
    status: "Building",
    categories: ["Workflow Intelligence", "Infrastructure"],
    github: "https://github.com/reinvent-ai-labs/reinvent-ops",
    docs: "https://github.com/reinvent-ai-labs/reinvent-ops#docs",
    href: "/projects/ops",
  },
  {
    slug: "reinvent-docs",
    name: "ReInvent Docs",
    tagline: "Document intelligence infrastructure for searchable knowledge workflows.",
    description:
      "Open-source document intelligence patterns for ingestion, chunking, retrieval, grounded Q&A, evaluation, and deployment.",
    problem: "Knowledge trapped in PDFs, manuals, and internal notes",
    systemType: "RAG / document intelligence",
    techFocus: "Python · Vector DB · Chunking · Evals",
    status: "Planned",
    categories: ["Document AI", "Infrastructure"],
    github: "https://github.com/reinvent-ai-labs/reinvent-docs",
    docs: "https://github.com/reinvent-ai-labs/reinvent-docs#docs",
    href: "/projects/docs",
  },
  {
    slug: "reinvent-metrics",
    name: "ReInvent Metrics",
    tagline:
      "Open-source product analytics and churn diagnosis framework.",
    description:
      "Diagnosis framework for investigating engagement drops, retention issues, churn, cohort behavior, and funnel problems.",
    problem: "Churn and retention blind spots",
    systemType: "Analytics diagnosis framework",
    techFocus: "Python · SQL · Dashboards · Cohorts",
    status: "Planned",
    categories: ["Analytics"],
    github: "https://github.com/reinvent-ai-labs/reinvent-metrics",
    docs: "https://github.com/reinvent-ai-labs/reinvent-metrics#docs",
  },
  {
    slug: "reinvent-evalkit",
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
    github: "https://github.com/reinvent-ai-labs/reinvent-evalkit",
    docs: "https://github.com/reinvent-ai-labs/reinvent-evalkit#docs",
  },
];

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
