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
    slug: "why-reinvent-ai-labs-exists",
    title: "Why ReInvent AI Labs Exists",
    category: "Field Notes",
    date: "Planned · unpublished",
    description:
      "The original editorial outline on the purpose of the lab and the systems it set out to study.",
  },
  {
    slug: "rag-is-not-enough",
    title: "RAG Is Not Enough",
    category: "Architecture Notes",
    date: "Planned · unpublished",
    description:
      "Proposed discussion of how retrieval interacts with workflow state and evaluation.",
  },
  {
    slug: "designing-geometric-voice-interfaces",
    title: "Designing Geometric Voice Interfaces",
    category: "Design Philosophy",
    date: "Planned · unpublished",
    description: "How motion, shapes, and state-based UI can communicate voice-agent processing.",
  },
  {
    slug: "building-developer-first-ai-infrastructure",
    title: "Building Developer-First AI Infrastructure",
    category: "Build Logs",
    date: "Planned · unpublished",
    description: "Lessons from API-first systems, open-source adoption, and workflow design.",
  },
  {
    slug: "voice-prototype-v0",
    title: "Rowan v0 — Prototype Build Log",
    category: "Release Notes",
    date: "Planned · unpublished",
    description: "Proposed account of the voice-interface prototype and its design decisions.",
  },
  {
    slug: "release-standard",
    title: "The Release Standard: Every Build Ships With Proof",
    category: "Design Philosophy",
    date: "Planned · unpublished",
    description: "Outline for documenting methods, baselines, artifacts and limitations.",
  },
];
