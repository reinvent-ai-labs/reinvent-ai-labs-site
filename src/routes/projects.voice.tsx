import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { VoiceOrb } from "@/components/VoiceOrb";

export const Route = createFileRoute("/projects/voice")({
  head: () => ({
    meta: [
      { title: "Rowan — Conversational operations by ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Rowan turns business calls into validated actions, structured records, and operational intelligence.",
      },
      { property: "og:title", content: "Rowan — ReInvent AI Labs" },
      {
        property: "og:description",
        content:
          "Conversational operations for ordering, scheduling, intake, and service workflows.",
      },
    ],
  }),
  component: VoicePage,
});

const endpoints = [
  { method: "POST", path: "/v1/conversations", desc: "Create a new voice conversation" },
  { method: "POST", path: "/v1/conversations/{id}/message", desc: "Append a user turn" },
  { method: "POST", path: "/v1/orders/parse", desc: "Parse spoken order into structured items" },
  { method: "GET", path: "/v1/orders/{id}", desc: "Retrieve an order state" },
  { method: "POST", path: "/v1/webhooks/order.created", desc: "Webhook fired on order creation" },
];

const roadmap = [
  { phase: "v0", item: "Prototype voice loop + workflow states" },
  { phase: "v0.1", item: "Order parsing + structured menu schema" },
  { phase: "v0.2", item: "Webhook integrations + reference UI" },
  { phase: "v1", item: "Evaluation harness + deployment kit" },
];

function VoicePage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Primary product · Voice AI</Eyebrow>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <h1 className="font-display text-5xl text-foreground md:text-6xl">
              <span className="text-gradient-tiffany">Rowan</span>
            </h1>
            <p className="mt-4 text-lg text-primary">
              Business calls converted into validated actions and operational intelligence.
            </p>
            <p className="mt-6 text-muted-foreground">
              Rowan is designed for organizations with repetitive but important phone workflows. It
              combines structured state, validation, integrations, analytics, and dependable human
              escalation in one conversational operations layer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-voice"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                GitHub
              </a>
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-voice#docs"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
              >
                Docs
              </a>
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-voice#demo"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
              >
                Demo
              </a>
            </div>
          </div>
          <VoiceOrb />
        </div>
      </Section>

      <Section className="!py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Block title="Problem">
            <p className="text-muted-foreground">
              Restaurants and small service businesses need voice automation that fits into existing
              workflows without forcing them into a closed platform or generic chatbot interface.
            </p>
          </Block>
          <Block title="Solution">
            <p className="text-muted-foreground">
              Rowan provides a voice-agent engine with API-first design, workflow state management,
              menu/order understanding, optional UI components, and integration-ready architecture.
            </p>
          </Block>
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>System overview</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Voice ingest",
              body: "Real-time audio capture via WebRTC and streaming ASR.",
            },
            {
              title: "Workflow engine",
              body: "Stateful conversation graph with menu/order intents.",
            },
            { title: "Integration layer", body: "Webhooks, REST APIs, and SDK-friendly outputs." },
          ].map((b) => (
            <div key={b.title} className="card-surface card-hover p-6">
              <div className="font-display text-lg text-foreground">{b.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>API concepts</Eyebrow>
        <div className="mt-6 card-surface overflow-hidden">
          <div className="divide-y divide-border font-mono text-sm">
            {endpoints.map((e) => (
              <div
                key={e.path}
                className="flex flex-col gap-2 p-4 md:flex-row md:items-center md:gap-6"
              >
                <span className="inline-flex w-fit rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                  {e.method}
                </span>
                <span className="text-foreground">{e.path}</span>
                <span className="ml-auto text-xs text-muted-foreground md:text-sm">{e.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>Operational workflow</Eyebrow>
        <div className="mt-6 overflow-hidden rounded-lg border border-border bg-background/50">
          <div className="grid md:grid-cols-4">
            {[
              ["Receive", "Voice or phone input"],
              ["Understand", "Intent + business context"],
              ["Validate", "Structured action + confirmation"],
              ["Execute", "Integration + analytics"],
            ].map((step, i) => (
              <div
                key={step[0]}
                className={`relative p-6 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    0{i + 1}
                  </div>
                  {i < 3 ? (
                    <span className="hidden font-mono text-xs text-muted-foreground md:block">
                      →
                    </span>
                  ) : null}
                </div>
                <div className="mt-8 font-display text-lg text-foreground">{step[0]}</div>
                <div className="mt-2 text-xs leading-5 text-muted-foreground">{step[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>Developer integration</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card-surface p-6">
            <div className="font-display text-lg text-foreground">Drop-in API</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Plug Rowan into your existing backend through REST and webhook surfaces — no UI
              lock-in.
            </p>
          </div>
          <div className="card-surface p-6">
            <div className="font-display text-lg text-foreground">Optional UI kit</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Geometric voice-state components you can render in your own admin dashboard or
              customer interface.
            </p>
          </div>
        </div>
      </Section>

      <Section className="!py-12">
        <Eyebrow>Roadmap</Eyebrow>
        <div className="mt-6 card-surface divide-y divide-border">
          {roadmap.map((r) => (
            <div key={r.phase} className="flex items-center gap-6 p-5">
              <span className="font-mono text-sm text-primary">{r.phase}</span>
              <span className="text-foreground">{r.item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-surface p-10 text-center">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            Explore the other ReInvent systems
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary"
            >
              All projects
            </Link>
            <Link
              to="/projects/ops"
              className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary"
            >
              ReInvent Ops
            </Link>
            <Link
              to="/projects/docs"
              className="rounded-md border border-border px-5 py-3 text-sm hover:border-primary/50 hover:text-primary"
            >
              ReInvent Docs
            </Link>
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
