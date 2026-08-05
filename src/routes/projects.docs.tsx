import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/projects/docs")({
  head: () => ({
    meta: [
      { title: "ReInvent Docs — Document intelligence infrastructure" },
      {
        name: "description",
        content:
          "ReInvent Docs provides open-source document intelligence patterns for ingestion, chunking, retrieval, grounded Q&A, evaluation, and deployment.",
      },
      { property: "og:title", content: "ReInvent Docs — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "Document intelligence infrastructure for searchable knowledge workflows.",
      },
    ],
  }),
  component: DocsPage,
});

const pipeline = [
  { title: "Ingestion", body: "Connectors for PDFs, manuals, policies, and internal notes." },
  { title: "Chunking", body: "Semantic + structural chunking with metadata propagation." },
  { title: "Retrieval", body: "Hybrid vector + keyword retrieval with reranking." },
  { title: "Grounded Q&A", body: "Citations, source previews, and answer attribution." },
  { title: "Evaluation", body: "Golden-set eval for retrieval recall and answer quality." },
  { title: "Deployment", body: "Self-hostable services with Docker and cloud guides." },
];

function DocsPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Project · Document AI</Eyebrow>
        <h1 className="mt-6 font-display text-5xl text-foreground md:text-6xl">
          ReInvent <span className="text-gradient-tiffany">Docs</span>
        </h1>
        <p className="mt-4 text-lg text-primary">
          Document intelligence infrastructure for searchable knowledge workflows.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Block title="Problem">
            <p className="text-muted-foreground">
              Teams have useful knowledge trapped in PDFs, docs, manuals, policies,
              and internal notes.
            </p>
          </Block>
          <Block title="Solution">
            <p className="text-muted-foreground">
              ReInvent Docs provides open-source document intelligence patterns
              for ingestion, chunking, retrieval, grounded Q&amp;A, evaluation,
              and deployment.
            </p>
          </Block>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/reinvent-ai-labs/reinvent-docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            GitHub
          </a>
          <a
            href="https://github.com/reinvent-ai-labs/reinvent-docs#docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary"
          >
            Docs
          </a>
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>Pipeline</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pipeline.map((m, i) => (
            <div key={m.title} className="card-surface card-hover p-5">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <div className="mt-3 font-display text-base text-foreground">{m.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-surface p-10 text-center">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">More from the lab</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary">All projects</Link>
            <Link to="/projects/voice" className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary">ReInvent Voice</Link>
            <Link to="/projects/ops" className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary">ReInvent Ops</Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-surface p-6">
      <div className="text-xs uppercase tracking-[0.25em] text-primary">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
