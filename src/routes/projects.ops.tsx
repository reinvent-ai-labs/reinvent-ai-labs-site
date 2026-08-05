import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/projects/ops")({
  head: () => ({
    meta: [
      { title: "ReInvent Ops — Open-source AI workflow intelligence" },
      {
        name: "description",
        content:
          "ReInvent Ops is a reference architecture for turning documents, spreadsheets, and recurring reports into searchable, automated workflows.",
      },
      { property: "og:title", content: "ReInvent Ops — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "Open-source AI workflow intelligence for small teams.",
      },
    ],
  }),
  component: OpsPage,
});

const modules = [
  { title: "Document ingestion", body: "PDF, DOCX, and text pipelines with chunking + metadata." },
  { title: "Spreadsheet ingestion", body: "Tabular data parsing with type-safe schemas." },
  { title: "RAG search", body: "Hybrid retrieval with reranking and grounded answers." },
  { title: "Workflow templates", body: "Reusable graphs for recurring operational tasks." },
  { title: "Report generation", body: "Scheduled, parameterized report builds." },
  { title: "Analytics dashboard", body: "Lightweight UI for workflow runs and metrics." },
  { title: "Evaluation suite", body: "Golden-set evals for retrieval and answer quality." },
  { title: "Deployment kit", body: "Docker, env templates, and cloud deployment guides." },
];

function OpsPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Project · Workflow intelligence</Eyebrow>
        <h1 className="mt-6 font-display text-5xl text-foreground md:text-6xl">
          ReInvent <span className="text-gradient-tiffany">Ops</span>
        </h1>
        <p className="mt-4 text-lg text-primary">
          Open-source AI workflow intelligence for small teams.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Block title="Problem">
            <p className="text-muted-foreground">
              Small teams often rely on scattered documents, spreadsheets, and
              recurring manual reports. AI tools are common, but deployable
              workflow systems are still difficult.
            </p>
          </Block>
          <Block title="Solution">
            <p className="text-muted-foreground">
              ReInvent Ops is a reference architecture for turning operational
              knowledge into searchable, automated, and reportable workflows.
            </p>
          </Block>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/reinvent-ai-labs/reinvent-ops"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            GitHub
          </a>
          <a
            href="https://github.com/reinvent-ai-labs/reinvent-ops#docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary"
          >
            Docs
          </a>
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>Modules</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => (
            <div key={m.title} className="card-surface card-hover p-5">
              <div className="font-mono text-xs text-primary">M/0{i + 1}</div>
              <div className="mt-3 font-display text-base text-foreground">{m.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-surface p-10 text-center">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            See the rest of the system library
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary">All projects</Link>
            <Link to="/projects/voice" className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary">ReInvent Voice</Link>
            <Link to="/projects/docs" className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary">ReInvent Docs</Link>
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
