export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
};

export const postCategories = ["Field Notes", "Architecture", "Product", "Responsible AI"];

export const posts: Post[] = [
  {
    slug: "intelligence-value-resources",
    title: "Intelligence Should Create More Value Than It Consumes",
    category: "Responsible AI",
    date: "In development",
    description:
      "The operating thesis behind resource-aware AI systems and measurable operational value.",
  },
  {
    slug: "start-with-workflow",
    title: "Start With the Workflow, Not the Model",
    category: "Field Notes",
    date: "In development",
    description:
      "Why customer interviews and process mapping should happen before architecture selection.",
  },
  {
    slug: "rowan-structured-actions",
    title: "Rowan: From Conversation to Validated Action",
    category: "Architecture",
    date: "In development",
    description:
      "A look at session state, structured extraction, schema validation, clarification, and confirmation.",
  },
  {
    slug: "preserving-human-taste",
    title: "Preserving Human Taste in AI-Assisted Culling",
    category: "Product",
    date: "Research direction",
    description:
      "The product and research questions behind ReInvent Studio’s human-led creative workflow.",
  },
];
