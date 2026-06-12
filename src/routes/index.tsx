import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { NeuralBackground } from "@/components/NeuralBackground";
import { VoiceOrb } from "@/components/VoiceOrb";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReInvent AI Labs — Open-source AI/data systems" },
      {
        name: "description",
        content:
          "Open-source AI/data systems, developer-first infrastructure, and reference architectures for real operational workflows. Built by Mahidhar Vuppu.",
      },
      { property: "og:title", content: "ReInvent AI Labs — Open-source AI/data systems" },
      {
        property: "og:description",
        content:
          "Open-source AI/data systems for real operational workflows. Let’s ReInvent the Future.",
      },
    ],
  }),
  component: Home,
});

const earlySignals = [
  { value: "03+", label: "Open-source systems", sub: "Voice, Ops, Docs" },
  { value: "06", label: "Technical notes", sub: "Build logs & architecture essays" },
  { value: "API-first", label: "Integration-ready", sub: "Designed for developers" },
  { value: "Private build", label: "Status", sub: "Preparing public release" },
];

// Replace these placeholder testimonials with real reviewer quotes as they come in.
const testimonials = [
  {
    quote:
      "ReInvent AI Labs feels less like a student portfolio and more like the foundation of a serious open-source AI systems practice.",
    name: "Technical Advisor",
    role: "Enterprise Data & AI Leader",
  },
  {
    quote:
      "The developer-first approach is the right instinct. APIs, docs, and integration patterns make adoption much easier than another closed AI dashboard.",
    name: "Startup Founder",
    role: "B2B SaaS Operator",
  },
  {
    quote:
      "The visual system is polished, but the real strength is the focus on reusable infrastructure for recurring business problems.",
    name: "Engineering Reviewer",
    role: "Software Systems Architect",
  },
  {
    quote:
      "The ReInvent Voice concept is memorable because it combines strong technical positioning with a clear interaction design language.",
    name: "Product Reviewer",
    role: "AI Product Strategy",
  },
  {
    quote:
      "The direction is strong: build substance first, then turn the track record into a serious consulting foundation later.",
    name: "Business Advisor",
    role: "Data & Transformation Executive",
  },
];

// Replace these placeholder organization labels with real logos only after permission or public adoption proof.
const orgLabels = [
  "Research Labs",
  "Startup Teams",
  "Student Organizations",
  "Small Operators",
  "Open-source Builders",
  "Data Teams",
  "Product Teams",
  "Workflow Teams",
];

const painPoints = [
  {
    title: "Document Chaos",
    body: "Teams lose time searching PDFs, policies, manuals, notes, and internal docs.",
  },
  {
    title: "Workflow Fragmentation",
    body: "Important processes are scattered across spreadsheets, forms, emails, and human memory.",
  },
  {
    title: "Analytics Blind Spots",
    body: "Teams collect data but lack repeatable systems for diagnosing drops, churn, and bottlenecks.",
  },
  {
    title: "AI Deployment Gap",
    body: "Prototypes work in demos but fail when they need APIs, evals, logging, and real integration.",
  },
];

const devFirst = [
  "API-first systems",
  "Self-hostable infrastructure",
  "Optional UI components",
  "Workflow templates",
  "Developer documentation",
  "Evaluation-ready AI",
  "Modular architecture",
  "Open-source by default",
];

const architecture = [
  "Modular APIs",
  "Reproducible local setup",
  "Clean documentation",
  "Cloud deployment guides",
  "Evaluation harnesses",
  "Workflow templates",
  "Versioned releases",
  "Open-source by default",
];

const releaseStandard = [
  { title: "Working demo", body: "A usable implementation, not just a concept." },
  { title: "GitHub repository", body: "Clean code, commits, issues, and versioned releases." },
  { title: "Documentation", body: "Setup guides, architecture notes, and integration examples." },
  { title: "Technical article", body: "Lab Notes explaining the problem, system design, and lessons." },
  { title: "Evaluation path", body: "Clear metrics for reliability, latency, quality, and workflow usefulness." },
  { title: "Adoption trail", body: "Space for testimonials, integrations, forks, stars, and external usage." },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <NeuralBackground />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <Eyebrow>Open-source AI/data systems lab</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl">
            Open-source AI/data systems for{" "}
            <span className="text-gradient-tiffany">real operational workflows.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            ReInvent AI Labs builds developer-first software, APIs, reference
            architectures, and technical documentation for workflow intelligence,
            document automation, voice agents, and applied machine learning systems.
          </p>
          <p className="mt-6 font-display text-lg text-primary">Let&apos;s ReInvent the Future.</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Explore Projects
            </Link>
            <Link
              to="/writing"
              className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              Read Lab Notes
            </Link>
            <a
              href="https://github.com/reinvent-ai-labs"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              View GitHub
            </a>
          </div>

          {/* Early Signals */}
          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Early Signals
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {earlySignals.map((s) => (
                <div key={s.label} className="card-surface card-hover p-5">
                  <div className="font-display text-2xl text-foreground">{s.value}</div>
                  <div className="mt-1 text-sm text-foreground/90">{s.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Section>
        <Eyebrow>Early reviewers</Eyebrow>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-3xl text-foreground md:text-4xl">
            What early reviewers are saying
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Feedback from engineers, founders, advisors, and operators reviewing the
            ReInvent AI Labs direction. Placeholder quotes — will be replaced as
            real reviews come in.
          </p>
        </div>
        <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
          <div className="flex gap-5">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="card-surface card-hover relative w-[340px] shrink-0 p-7 md:w-[420px]"
              >
                <div className="absolute left-0 top-7 h-8 w-1 rounded-r bg-primary" />
                <div className="font-display text-5xl leading-none text-primary/40">“</div>
                <blockquote className="mt-2 text-foreground/90">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Orgs marquee */}
      <Section className="!py-16">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            Built for teams that need AI/data systems, not demos.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            As ReInvent AI Labs grows, this section will highlight organizations,
            teams, and open-source projects using or reviewing the systems.
          </p>
        </div>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max gap-3">
            {[...orgLabels, ...orgLabels].map((l, i) => (
              <div
                key={i}
                className="rounded-full border border-border bg-surface px-5 py-2 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Thesis */}
      <Section>
        <Eyebrow>The thesis</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          AI demos are easy. <span className="text-gradient-tiffany">Deployable systems are hard.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Most teams do not need another generic chatbot. They need reliable systems
          that connect documents, data, workflows, APIs, evaluation, and deployment.
          ReInvent AI Labs exists to build open-source infrastructure that developers
          can integrate, adapt, and extend.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p, i) => (
            <div key={p.title} className="card-surface card-hover p-6">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <div className="mt-3 font-display text-lg text-foreground">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured: Voice */}
      <Section>
        <Eyebrow>Featured build</Eyebrow>
        <div className="mt-4 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              ReInvent Voice
            </h2>
            <p className="mt-2 text-primary">
              Open-source voice-agent infrastructure for restaurant ordering workflows.
            </p>
            <p className="mt-6 text-muted-foreground">
              ReInvent Voice is a developer-first voice agent system designed as
              open-source infrastructure, not a closed SaaS. It provides APIs, SDK
              concepts, workflow states, and optional UI components that developers
              can integrate into their own restaurant, ordering, or customer-service
              systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects/voice"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                View Project
              </Link>
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-voice"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                GitHub Repo
              </a>
              <a
                href="https://github.com/reinvent-ai-labs/reinvent-voice#demo"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                Demo
              </a>
            </div>
          </div>
          <VoiceOrb />
        </div>
      </Section>

      {/* System Library */}
      <Section>
        <Eyebrow>System library</Eyebrow>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-3xl text-foreground md:text-4xl">
            The ReInvent AI Labs System Library
          </h2>
          <Link to="/projects" className="text-sm text-primary hover:text-foreground">
            View all projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* Developer-first */}
      <Section>
        <Eyebrow>Developer-first</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          Built for integration, <span className="text-gradient-tiffany">not lock-in.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          ReInvent AI Labs is not designed as another closed dashboard. Each system
          is built as open-source infrastructure: APIs, SDK concepts, workflow
          engines, optional UI components, documentation, and deployment guides
          that developers can adapt into their own environments.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {devFirst.map((f) => (
            <div
              key={f}
              className="card-surface card-hover flex items-center gap-3 p-4"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-foreground/90">{f}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture philosophy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Architecture philosophy</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Built like software, <span className="text-gradient-tiffany">not demos.</span>
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {architecture.map((a) => (
                <li key={a} className="card-surface flex items-center gap-3 p-3 text-sm">
                  <span className="font-mono text-xs text-primary">→</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <SystemDiagram />
        </div>
      </Section>

      {/* Release Standard */}
      <Section>
        <Eyebrow>Release standard</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          Every release ships with <span className="text-gradient-tiffany">proof.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {releaseStandard.map((r, i) => (
            <div key={r.title} className="card-surface card-hover p-6">
              <div className="font-mono text-xs text-primary">R/0{i + 1}</div>
              <div className="mt-3 font-display text-lg text-foreground">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lab Notes */}
      <Section>
        <Eyebrow>Lab notes</Eyebrow>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Technical essays & build logs
            </h2>
            <p className="mt-3 text-muted-foreground">
              Architecture breakdowns, build logs, and research notes from
              ReInvent AI Labs.
            </p>
          </div>
          <a
            href="https://medium.com/@YOUR_HANDLE"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-primary/50 hover:text-primary"
          >
            Read on Medium
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.slice(0, 4).map((p) => (
            <article key={p.slug} className="card-surface card-hover p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <Link to="/writing" className="mt-5 inline-block text-sm text-primary hover:text-foreground">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* About preview */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Built by Mahidhar Vuppu
            </h2>
            <p className="mt-6 text-muted-foreground">
              Mahidhar Vuppu is a Georgia Tech student building ReInvent AI Labs as a
              public portfolio of open-source AI/data systems, technical writing, and
              production-grade software architectures. His work focuses on APIs, RAG
              systems, voice agents, data science workflows, product analytics, and
              applied machine learning infrastructure.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
            >
              About Mahidhar →
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
              Feedback, collaboration, and <span className="text-gradient-tiffany">open-source discussion.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              ReInvent AI Labs is currently focused on public open-source systems,
              technical writing, research exploration, and developer feedback.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Link>
              <a
                href="https://github.com/reinvent-ai-labs"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
              >
                GitHub
              </a>
            </div>
            <p className="mt-10 text-xs text-muted-foreground">
              ReInvent AI Labs is the open-source AI/data systems lab of Mahidhar Vuppu.
            </p>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function SystemDiagram() {
  return (
    <div className="card-surface relative overflow-hidden p-6">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <svg viewBox="0 0 480 320" className="relative h-full w-full">
        <defs>
          <linearGradient id="sd-stroke" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.13 195)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.6 0.14 200)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {[
          { x: 40, y: 60, w: 120, h: 50, label: "Docs / Data" },
          { x: 40, y: 140, w: 120, h: 50, label: "Workflows" },
          { x: 40, y: 220, w: 120, h: 50, label: "Voice / UI" },
          { x: 320, y: 60, w: 120, h: 50, label: "APIs" },
          { x: 320, y: 140, w: 120, h: 50, label: "Evals" },
          { x: 320, y: 220, w: 120, h: 50, label: "Deploy" },
        ].map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx={8}
              fill="oklch(0.17 0.008 240)"
              stroke="url(#sd-stroke)"
              strokeWidth="1"
            />
            <text
              x={b.x + b.w / 2}
              y={b.y + b.h / 2 + 4}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontFamily="Inter, sans-serif"
            >
              {b.label}
            </text>
          </g>
        ))}
        <g>
          <circle cx="240" cy="160" r="44" fill="oklch(0.13 0.005 240)" stroke="url(#sd-stroke)" />
          <text x="240" y="158" textAnchor="middle" fill="white" fontSize="11" fontFamily="Space Grotesk">
            ReInvent
          </text>
          <text x="240" y="173" textAnchor="middle" fill="oklch(0.82 0.13 195)" fontSize="10" fontFamily="Space Grotesk">
            Core
          </text>
        </g>
        {[
          [160, 85, 196, 152],
          [160, 165, 196, 160],
          [160, 245, 196, 168],
          [320, 85, 284, 152],
          [320, 165, 284, 160],
          [320, 245, 284, 168],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#sd-stroke)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}
      </svg>
    </div>
  );
}
