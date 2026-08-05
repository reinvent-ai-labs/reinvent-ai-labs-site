import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mahidhar Vuppu × ReInvent AI Labs" },
      {
        name: "description",
        content:
          "ReInvent AI Labs is the open-source software identity and technical portfolio of Mahidhar Vuppu — AI/data systems, infrastructure, and applied ML research.",
      },
      { property: "og:title", content: "About — ReInvent AI Labs" },
      {
        property: "og:description",
        content:
          "The open-source AI/data systems lab of Mahidhar Vuppu — mission, design philosophy, and future vision.",
      },
    ],
  }),
  component: AboutPage,
});

const sections = [
  {
    title: "Mission",
    body: "Build useful, open-source AI/data systems that developers can integrate into real operational workflows.",
  },
  {
    title: "Technical Focus",
    body: "APIs, RAG systems, voice agents, data science workflows, product analytics, evaluation tooling, and applied machine learning infrastructure.",
  },
  {
    title: "Design Philosophy",
    body: "ReInvent AI Labs uses geometric systems to represent engineered tools and organic forms to represent adaptive intelligence. Motion communicates computation, voice processing, retrieval, and reasoning.",
  },
  {
    title: "Open-Source Philosophy",
    body: "Every project ships as open-source infrastructure first — APIs, documentation, deployment guides, and evaluation harnesses — not as another closed dashboard.",
  },
  {
    title: "Future Vision",
    body: "The current phase is open-source, educational, and portfolio-focused. Long-term, ReInvent AI Labs may evolve into a data science and AI systems consultancy after proper authorization and commercial readiness.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-4xl text-foreground md:text-6xl">
          Mahidhar Vuppu <span className="text-primary">×</span>{" "}
          <span className="text-gradient-tiffany">ReInvent AI Labs</span>
        </h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          ReInvent AI Labs is the open-source software identity and technical
          portfolio of Mahidhar Vuppu. It is designed to collect public AI/data
          systems, developer-first infrastructure, technical essays, demos, and
          reference architectures under one coherent lab identity.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((s, i) => (
            <div key={s.title} className="card-surface card-hover p-7">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <h2 className="mt-3 font-display text-2xl text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl">
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Built by Mahidhar Vuppu
            </h2>
            <p className="mt-6 text-muted-foreground">
              Mahidhar Vuppu is a Georgia Tech student building ReInvent AI Labs
              as a public portfolio of open-source AI/data systems, technical
              writing, and production-grade software architectures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/reinvent-ai-labs"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary"
              >
                GitHub
              </a>
              <Link
                to="/contact"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
