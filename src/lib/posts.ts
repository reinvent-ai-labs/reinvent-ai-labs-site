export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
};

export const postCategories = [
  "Build Logs",
  "Architecture Notes",
  "Field Notes",
  "Release Notes",
  "Design Philosophy",
];

export const posts: Post[] = [
  {
    slug: "why-im-building-reinvent-ai-labs",
    title: "Why I’m Building ReInvent AI Labs",
    category: "Field Notes",
    date: "Coming soon",
    description:
      "The mission behind building open-source AI/data systems before monetization.",
  },
  {
    slug: "rag-is-not-enough",
    title: "RAG Is Not Enough",
    category: "Architecture Notes",
    date: "Coming soon",
    description:
      "Why small teams need workflow intelligence, not another generic chatbot.",
  },
  {
    slug: "designing-geometric-voice-interfaces",
    title: "Designing Geometric Voice Interfaces",
    category: "Design Philosophy",
    date: "Coming soon",
    description:
      "How motion, shapes, and state-based UI can communicate voice-agent processing.",
  },
  {
    slug: "building-developer-first-ai-infrastructure",
    title: "Building Developer-First AI Infrastructure",
    category: "Build Logs",
    date: "Coming soon",
    description:
      "Lessons from API-first systems, open-source adoption, and workflow design.",
  },
  {
    slug: "voice-prototype-v0",
    title: "ReInvent Voice v0 — Prototype Build Log",
    category: "Release Notes",
    date: "Coming soon",
    description:
      "Initial prototype scope, architecture decisions, and what’s shipping in v0.",
  },
  {
    slug: "release-standard",
    title: "The Release Standard: Every Build Ships With Proof",
    category: "Design Philosophy",
    date: "Coming soon",
    description:
      "Demo, repo, docs, article, evals, adoption — the bar for every ReInvent release.",
  },
];
