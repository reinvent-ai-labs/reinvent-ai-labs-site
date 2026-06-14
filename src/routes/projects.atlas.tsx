import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Scan,
  MousePointerClick,
  Table2,
  Tags,
  CheckCircle2,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/projects/atlas")({
  head: () => ({
    meta: [
      { title: "Atlas — ReInvent Signals v0.1 · ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Atlas is AI-powered event discovery for churn-ready product analytics. It scans permitted SaaS surfaces, generates event taxonomies, and maps churn and retention signals.",
      },
      { property: "og:title", content: "Atlas — ReInvent Signals v0.1" },
      {
        property: "og:description",
        content:
          "AI-powered event discovery for churn-ready product analytics.",
      },
    ],
  }),
  component: AtlasPage,
});

type Step = {
  n: number;
  title: string;
  summary: string;
  expanded: string;
  icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    n: 1,
    title: "Scan product surfaces",
    summary:
      "Atlas begins by scanning permitted SaaS product surfaces, routes, and pages.",
    expanded:
      "The system inspects approved pages, screens, and flows to understand the product layout and identify where meaningful user actions happen.",
    icon: Scan,
  },
  {
    n: 2,
    title: "Discover user actions",
    summary:
      "Atlas identifies buttons, forms, workflows, and other triggerable actions.",
    expanded:
      "Atlas detects the interactive elements users engage with, such as Upload Document, Create Workflow, Export Report, Invite Teammate, and View Billing.",
    icon: MousePointerClick,
  },
  {
    n: 3,
    title: "Generate event taxonomy",
    summary:
      "Atlas uses AI to convert discovered actions into structured event definitions.",
    expanded:
      "Each discovered action is translated into a clean event taxonomy with event names, categories, and business meaning. Example event names include document_uploaded, workflow_created, and billing_page_viewed.",
    icon: Table2,
  },
  {
    n: 4,
    title: "Map churn and retention signals",
    summary:
      "Atlas maps events to activation, engagement, retention, value realization, and churn-intent signals.",
    expanded:
      "The platform classifies product behavior into signals that help teams understand which actions are tied to healthy usage, weak engagement, or churn risk.",
    icon: Tags,
  },
  {
    n: 5,
    title: "Review and approve tracking",
    summary:
      "Teams can review, approve, and refine the suggested event schema.",
    expanded:
      "Instead of forcing a product team to manually invent the full event plan, Atlas provides an AI-generated draft that developers, product teams, or AI coding agents can validate and refine.",
    icon: CheckCircle2,
  },
  {
    n: 6,
    title: "Export implementation-ready outputs",
    summary:
      "Atlas exports a tracking plan, Postgres-backed event schema, and dashboard-ready documentation.",
    expanded:
      "The final output includes an implementation-ready event taxonomy, churn signal map, developer documentation, and agent-readable instructions that make instrumentation easier to deploy.",
    icon: Download,
  },
];

const outputs = [
  {
    title: "Event Taxonomy",
    body: "Structured event definitions for product behaviors.",
  },
  {
    title: "Churn Signal Map",
    body: "Maps actions to activation, engagement, retention, and churn-intent signals.",
  },
  {
    title: "Tracking Plan",
    body: "A practical implementation guide for what to instrument.",
  },
  {
    title: "Postgres-Ready Data Structure",
    body: "A clean structure for storing events and signal logic.",
  },
  {
    title: "Developer + Agent Documentation",
    body: "Implementation guidance for both human developers and AI coding agents.",
  },
];

function AtlasPage() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      setActive((a) => {
        if (a >= steps.length - 1) {
          setPlaying(false);
          return a;
        }
        return a + 1;
      });
    }, 3200);
    return () => clearTimeout(t);
  }, [playing, active]);

  return (
    <PageShell>
      {/* HERO */}
      <Section>
        <div className="flex flex-wrap items-center gap-2">
          <Eyebrow>ReInvent Signals v0.1</Eyebrow>
          <span className="badge-salmon">Alpha · v0.1</span>
        </div>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <h1 className="font-display text-6xl text-foreground md:text-7xl">
              <span className="text-gradient-tiffany">Atlas</span>
            </h1>
            <p className="mt-5 text-xl text-foreground/90 md:text-2xl">
              AI-powered event discovery for churn-ready product analytics.
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Atlas helps SaaS teams understand what product behaviors they
              should track before churn prediction, retention analytics, and
              product intelligence become useful.
            </p>
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-foreground/90">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Thesis ·{" "}
              </span>
              Before teams can predict churn, they need to know what behaviors
              matter.
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-signals-atlas"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                View GitHub
              </a>
              <Link
                to="/writing"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
              >
                Read Lab Notes
              </Link>
            </div>
          </div>

          {/* hero diagram */}
          <div className="card-surface relative overflow-hidden p-6">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Signal pipeline
              </div>
              <div className="mt-5 space-y-3">
                {["Product surfaces", "Discovered actions", "Event taxonomy", "Churn signals"].map(
                  (label, i) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-md border border-border bg-surface/60 p-3"
                    >
                      <span className="font-mono text-xs text-primary">
                        0{i + 1}
                      </span>
                      <span className="text-sm text-foreground">{label}</span>
                      <span className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-border/50">
                        <span
                          className="block h-full bg-primary"
                          style={{ width: `${(i + 1) * 24}%` }}
                        />
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section className="!py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Why Atlas exists
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Most small SaaS teams do not have the time or dedicated analytics
            infrastructure to manually define every product event, map those
            actions to churn and retention signals, and build the instrumentation
            plan from scratch. Atlas is designed to automate that first layer.
          </p>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Eyebrow>Walkthrough</Eyebrow>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl text-foreground md:text-5xl">
              How <span className="text-gradient-tiffany">Atlas</span> Works
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A step-by-step walkthrough of how Atlas turns a SaaS product
              surface into a churn-ready event taxonomy.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs text-foreground transition hover:border-primary/50 hover:text-primary disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/50 bg-primary/10 px-3 py-2 text-xs text-primary transition hover:bg-primary/20"
            >
              {playing ? (
                <>
                  <Pause className="h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" /> Play walkthrough
                </>
              )}
            </button>
            <button
              onClick={() =>
                setActive((a) => Math.min(steps.length - 1, a + 1))
              }
              disabled={active === steps.length - 1}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs text-foreground transition hover:border-primary/50 hover:text-primary disabled:opacity-40"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* progress bar */}
        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-border/40">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Timeline */}
          <ol className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
            <div
              className="absolute left-[19px] top-2 w-px bg-primary transition-all duration-700"
              style={{ height: `${(active / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <li key={s.n} className="relative pl-14 pb-6">
                  <button
                    onClick={() => setActive(i)}
                    className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border text-sm font-mono transition ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
                        : isDone
                          ? "border-primary/60 bg-primary/15 text-primary"
                          : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                    aria-label={`Step ${s.n}: ${s.title}`}
                  >
                    {s.n}
                  </button>
                  <button
                    onClick={() => setActive(i)}
                    className={`block w-full text-left transition ${
                      isActive
                        ? "card-surface p-5"
                        : "rounded-lg border border-transparent p-5 hover:border-border"
                    }`}
                  >
                    <div
                      className={`font-display text-lg ${isActive ? "text-foreground" : "text-foreground/80"}`}
                    >
                      {s.title}
                    </div>
                    <p
                      className={`mt-1 text-sm ${isActive ? "text-foreground/80" : "text-muted-foreground"}`}
                    >
                      {s.summary}
                    </p>
                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-muted-foreground">
                          {s.expanded}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Demo preview */}
          <div className="card-surface relative min-h-[480px] overflow-hidden p-6 lg:sticky lg:top-24 lg:self-start">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  Step {active + 1} of {steps.length} · Demo preview
                </div>
                <div className="font-mono text-[11px] text-muted-foreground">
                  atlas.preview
                </div>
              </div>
              <div className="mt-6">
                <StepPreview index={active} />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Later releases build on Atlas by using approved event logs for
          rule-based churn scoring and machine learning prediction.
        </p>
      </Section>

      {/* OUTPUTS */}
      <Section className="!py-16">
        <Eyebrow>Outputs</Eyebrow>
        <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
          What Atlas produces
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outputs.map((o, i) => (
            <div key={o.title} className="card-surface card-hover p-6">
              <div className="font-mono text-xs text-primary">
                0{i + 1} / OUTPUT
              </div>
              <div className="mt-3 font-display text-lg text-foreground">
                {o.title}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="relative">
            <h2 className="font-display text-3xl text-foreground md:text-5xl">
              Map what matters{" "}
              <span className="text-gradient-tiffany">before you model churn</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Atlas is the first layer of ReInvent Signals — turning product
              surfaces into usable behavioral intelligence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-signals-atlas"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                View GitHub
              </a>
              <Link
                to="/writing"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
              >
                Read Lab Notes
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

/* ============================================================
   Step-specific demo previews — minimal UI mockups (no art)
============================================================ */

function StepPreview({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <PreviewScan />;
    case 1:
      return <PreviewActions />;
    case 2:
      return <PreviewTaxonomy />;
    case 3:
      return <PreviewSignals />;
    case 4:
      return <PreviewReview />;
    case 5:
      return <PreviewExport />;
    default:
      return null;
  }
}

const routes = [
  "Dashboard",
  "Documents",
  "Workflows",
  "Billing",
  "Team Settings",
];

function PreviewScan() {
  return (
    <div className="space-y-2">
      <div className="text-xs text-muted-foreground">
        Scanning permitted product surfaces…
      </div>
      <div className="space-y-2">
        {routes.map((r, i) => (
          <div
            key={r}
            className="relative overflow-hidden rounded-md border border-border bg-surface/60 p-3"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-mono text-xs text-muted-foreground">
                /{r.toLowerCase().replace(" ", "-")}
              </span>
              <span className="text-foreground">{r}</span>
            </div>
            <div
              className="absolute inset-y-0 left-0 w-full bg-primary/10"
              style={{
                animation: `scanline 2.4s ease-in-out ${i * 0.25}s infinite`,
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          60% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

const actions = [
  "Upload Document",
  "Create Workflow",
  "Export Report",
  "Invite Teammate",
  "View Billing",
  "Run Automation",
];

function PreviewActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {actions.map((a, i) => (
        <div
          key={a}
          className="rounded-md border border-primary/30 bg-primary/5 p-3 text-sm text-foreground"
          style={{ animation: `fadeUp 0.4s ease both ${i * 0.08}s` }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Action detected
          </div>
          <div className="mt-1">{a}</div>
        </div>
      ))}
      <style>{`@keyframes fadeUp { from {opacity:0; transform:translateY(6px)} to {opacity:1; transform:none} }`}</style>
    </div>
  );
}

const taxonomy = [
  { name: "document_uploaded", cat: "Content", conf: 0.94 },
  { name: "workflow_created", cat: "Core Usage", conf: 0.91 },
  { name: "report_exported", cat: "Value", conf: 0.88 },
  { name: "teammate_invited", cat: "Collab", conf: 0.86 },
  { name: "billing_page_viewed", cat: "Billing Intent", conf: 0.79 },
];

function PreviewTaxonomy() {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div className="grid grid-cols-[1.4fr_1fr_0.6fr] gap-2 border-b border-border bg-surface/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>Event</span>
        <span>Category</span>
        <span className="text-right">Conf</span>
      </div>
      {taxonomy.map((t) => (
        <div
          key={t.name}
          className="grid grid-cols-[1.4fr_1fr_0.6fr] gap-2 border-b border-border/60 px-3 py-2 text-sm last:border-0"
        >
          <span className="font-mono text-foreground">{t.name}</span>
          <span className="text-muted-foreground">{t.cat}</span>
          <span className="text-right text-primary">{t.conf.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

const signals = [
  { label: "Activation", color: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30" },
  { label: "Core Usage", color: "bg-primary/15 text-primary border-primary/40" },
  { label: "Collaboration", color: "bg-sky-400/15 text-sky-300 border-sky-400/30" },
  { label: "Value Realization", color: "bg-violet-400/15 text-violet-300 border-violet-400/30" },
  { label: "Billing Intent", color: "bg-amber-400/15 text-amber-300 border-amber-400/30" },
  { label: "Friction", color: "bg-rose-400/15 text-rose-300 border-rose-400/30" },
];

function PreviewSignals() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {signals.map((s) => (
          <span
            key={s.label}
            className={`rounded-full border px-3 py-1 text-xs ${s.color}`}
          >
            {s.label}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {[
          ["document_uploaded", "Activation"],
          ["workflow_created", "Core Usage"],
          ["teammate_invited", "Collaboration"],
          ["billing_page_viewed", "Billing Intent"],
        ].map(([ev, sig]) => (
          <div
            key={ev}
            className="flex items-center justify-between rounded-md border border-border bg-surface/60 px-3 py-2 text-sm"
          >
            <span className="font-mono text-foreground">{ev}</span>
            <span className="font-mono text-xs text-primary">→ {sig}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewReview() {
  const items = [
    { name: "document_uploaded", conf: 0.94, ok: true },
    { name: "workflow_created", conf: 0.91, ok: true },
    { name: "report_exported", conf: 0.88, ok: true },
    { name: "billing_page_viewed", conf: 0.79, ok: false },
  ];
  return (
    <div className="space-y-2">
      <div className="text-xs text-muted-foreground">
        Review draft schema — approve, edit, or refine.
      </div>
      {items.map((it) => (
        <div
          key={it.name}
          className="flex items-center justify-between rounded-md border border-border bg-surface/60 p-3"
        >
          <div>
            <div className="font-mono text-sm text-foreground">{it.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Confidence {it.conf.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`rounded-md border px-2.5 py-1 text-xs ${
                it.ok
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground"
              }`}
            >
              Approve
            </button>
            <button className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const exports_ = [
  "Event Taxonomy",
  "Tracking Plan",
  "Postgres Schema",
  "Dashboard Template",
  "AGENTS.md",
  "Developer Snippets",
];

function PreviewExport() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {exports_.map((e, i) => (
        <div
          key={e}
          className="rounded-md border border-border bg-surface/60 p-3"
          style={{ animation: `fadeUp 0.35s ease both ${i * 0.07}s` }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Export · ready
          </div>
          <div className="mt-1 text-sm text-foreground">{e}</div>
        </div>
      ))}
    </div>
  );
}
