export type ProjectStatus = "Prototype" | "Planned" | "In development" | "Discovery";

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
  github?: string;
  docs?: string;
  demo?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "rowan",
    name: "Rowan",
    tagline: "Business calls converted into actions and operational intelligence.",
    description:
      "A conversational AI and voice-agent platform designed around structured state, validation, integrations, analytics, and human escalation.",
    problem: "Missed calls and repetitive phone workflows",
    systemType: "Conversational operations platform",
    techFocus: "FastAPI · LangGraph · Pydantic · PostgreSQL",
    status: "In development",
    categories: ["Conversational AI", "Automation"],
    href: "/projects/voice",
  },
  {
    slug: "reinvent-studio",
    name: "ReInvent Studio",
    tagline: "Creative workflow intelligence that preserves human taste.",
    description:
      "A planned AI-native workflow for photographers and studios working through high-volume culling, search, organization, and delivery.",
    problem: "High-volume image review and organization",
    systemType: "Creative workflow intelligence",
    techFocus: "CLIP · Vector search · Preference learning",
    status: "Discovery",
    categories: ["Creative AI", "Workflow Intelligence"],
  },
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "Product analytics and customer-retention intelligence.",
    description:
      "A system direction for event tracking, customer cohorts, retention, funnels, churn diagnosis, and future predictive models.",
    problem: "Retention and customer-behavior blind spots",
    systemType: "Customer intelligence platform",
    techFocus: "Python · PostgreSQL · Analytics · ML",
    status: "Prototype",
    categories: ["Analytics", "Customer Intelligence"],
    href: "/projects/atlas",
  },
  {
    slug: "clingy-ai",
    name: "Clingy AI",
    tagline: "Authorized long-form media transformed into short-form content.",
    description:
      "An explored agentic workflow for discovery, transcription, scene detection, clip extraction, vertical rendering, and performance learning.",
    problem: "Labor-intensive multi-platform content repurposing",
    systemType: "Agentic media pipeline",
    techFocus: "LangGraph · Video processing · Analytics",
    status: "Planned",
    categories: ["Creative AI", "Automation"],
  },
];

export const statusColor: Record<ProjectStatus, string> = {
  Prototype: "border-white/15 text-foreground/75",
  "In development": "border-primary/35 text-primary",
  Planned: "border-white/15 text-muted-foreground",
  Discovery: "border-[color:var(--accent-salmon)]/35 text-[color:var(--accent-salmon)]",
};

export const projectCategories = [
  "Conversational AI",
  "Automation",
  "Creative AI",
  "Workflow Intelligence",
  "Analytics",
  "Customer Intelligence",
];
