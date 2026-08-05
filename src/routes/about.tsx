import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "ReInvent AI Labs is an AI systems and consulting organization focused on measurable operational outcomes.",
      },
      { property: "og:title", content: "About — ReInvent AI Labs" },
      {
        property: "og:description",
        content:
          "AI consulting, intelligent systems, and product development for real operational workflows.",
      },
    ],
  }),
  component: AboutPage,
});

const sections = [
  {
    title: "Mission",
    body: "Turn expensive operational friction into intelligent, measurable systems that create durable business value.",
  },
  {
    title: "Technical Focus",
    body: "Voice agents, workflow intelligence, data systems, evaluation, integrations, and applied machine learning infrastructure.",
  },
  {
    title: "Design Philosophy",
    body: "Technology should fit the operation. Every system begins with the workflow, earns its complexity, and is measured after deployment.",
  },
  {
    title: "Productized Consulting",
    body: "High-touch discovery reveals repeated problems. Validated solutions become reusable products with faster deployment and stronger economics.",
  },
  {
    title: "Responsible Infrastructure",
    body: "Resource use, model calls, storage, latency, and cost are treated as engineering decisions—not afterthoughts.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-4xl text-foreground md:text-6xl">
          Intelligence built around the <span className="text-gradient-tiffany">operation.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          ReInvent AI Labs is a productized AI consulting organization. We identify costly, repeated
          friction, engineer the smallest reliable system that resolves it, and measure the
          operational result.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <div key={section.title} className="card-surface card-hover p-7">
              <div className="font-mono text-xs text-primary">0{index + 1}</div>
              <h2 className="mt-3 font-display text-2xl text-foreground">{section.title}</h2>
              <p className="mt-3 text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Small team. Senior attention. Clear accountability.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Customer discovery, product direction, technical architecture, and delivery remain
              closely connected throughout every engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/team"
                className="rounded-md border border-border px-5 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Discuss a workflow
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
