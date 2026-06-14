import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { NeuralBackground } from "@/components/NeuralBackground";
import { VoiceOrb } from "@/components/VoiceOrb";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { LogoMarquee } from "@/components/LogoMarquee";
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

// PRIVATE MOCKUP CONTENT — replace all logos and testimonials before public launch.
// Realistic but fake reviewer identities; no real individuals referenced.
const testimonials = [
  {
    quote:
      "ReInvent AI Labs has the structure of a serious developer infrastructure practice: clean APIs, strong documentation, and a clear understanding of operational AI.",
    name: "Managing Director",
    role: "Data & AI Transformation",
  },
  {
    quote:
      "The strongest part is the developer-first model. Self-hostable systems, example repos, and deployment guides make this much easier to evaluate than another closed AI dashboard.",
    name: "Principal Engineer",
    role: "Enterprise Platforms",
  },
  {
    quote:
      "This feels like the right bridge between open-source software and practical business workflows. The churn, document intelligence, and voice-agent directions are all commercially relevant.",
    name: "Startup Advisor",
    role: "B2B SaaS & Analytics",
  },
  {
    quote:
      "The ReInvent Voice concept is memorable because it combines infrastructure thinking with a polished interaction language. It feels technical and product-aware.",
    name: "Product Leader",
    role: "AI Workflow Systems",
  },
  {
    quote:
      "Most AI projects stop at the demo. This approach focuses on deployment, integration, observability, and repeatable implementation patterns.",
    name: "Cloud Architect",
    role: "Enterprise Systems",
  },
  {
    quote:
      "ReInvent Metrics could become extremely useful for teams that need modular churn, retention, funnel, and cohort analysis without starting from scratch.",
    name: "Analytics Director",
    role: "Customer Intelligence",
  },
  {
    quote:
      "The visual brand is premium, but the important part is the release standard: repo, docs, Docker, example implementation, video, and technical article.",
    name: "Open-source Reviewer",
    role: "Developer Experience",
  },
  {
    quote:
      "This is the kind of public technical track record that can compound for years into a serious consulting and systems practice.",
    name: "Business Advisor",
    role: "Technology Strategy",
  },
];

const adoptionLayer = [
  {
    title: "Self-hostable",
    body: "Runs in the organization's own cloud or server environment.",
  },
  {
    title: "Registry-ready",
    body: "Docker images and packages can be pulled directly into existing infrastructure.",
  },
  {
    title: "Developer-first",
    body: "APIs, SDKs, docs, webhooks, and example repos make integration easier.",
  },
  {
    title: "Evidence-generating",
    body: "Optional anonymous telemetry, GitHub activity, downloads, and adoption links create a public proof trail.",
  },
];

const implementationProof = [
  "Main GitHub repo",
  "Example implementation repo",
  "Docker image / registry package",
  "README quickstart",
  "Cloud deployment guide",
  "Loom walkthrough",
  "Medium article",
  "ReInvent website article",
  "Architecture diagram",
  "Release notes",
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
            <span className="text-gradient-warm">real operational workflows.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            ReInvent AI Labs builds developer-first software, APIs, reference
            architectures, and technical documentation for workflow intelligence,
            document automation, voice agents, and applied machine learning systems.
          </p>
          <p className="mt-6 font-display text-lg">
            <span className="text-primary">Let&apos;s ReInvent</span>{" "}
            <span className="text-[color:var(--accent-salmon)]">the Future.</span>
          </p>

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

      {/* Orgs / Logo wall */}
      {/* PRIVATE MOCKUP ONLY: replace company logos and fake testimonials before public launch. */}
      {/* Do not publish this section with fake logos or testimonials. */}
      <Section className="!py-20">
        <div className="flex flex-col gap-3 text-center">
          <div className="mx-auto">
            <Eyebrow tone="salmon">Designed for</Eyebrow>
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl text-foreground md:text-4xl">
            Built for organizations turning AI into{" "}
            <span className="text-gradient-warm">operational systems.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            ReInvent AI Labs is designed for teams that need self-hostable AI/data
            infrastructure, workflow intelligence, and developer-first integration patterns.
          </p>
        </div>
        <div className="mt-14">
          <LogoMarquee />
        </div>
      </Section>

      {/* Testimonials */}
      {/* PRIVATE MOCKUP ONLY: replace fake testimonials before public launch. */}
      <Section>
        <Eyebrow>Early reviewers</Eyebrow>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-3xl text-foreground md:text-4xl">
            What reviewers are saying
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Feedback from engineers, founders, advisors, and operators reviewing
            the ReInvent AI Labs direction.
          </p>
        </div>
        <div className="mt-10">
          <TestimonialCarousel items={testimonials} />
        </div>
      </Section>

      {/* Future adoption layer */}
      <Section>
        <Eyebrow tone="salmon">Adoption layer</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          Designed for adoption, <span className="text-gradient-warm">not dependency.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          ReInvent systems are built to run in the user&apos;s own environment through
          Docker images, registries, SDKs, APIs, example repos, and cloud-native
          deployment guides.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {adoptionLayer.map((a, i) => (
            <div key={a.title} className="card-surface card-hover p-6">
              <div
                className={`font-mono text-xs ${i % 2 === 1 ? "text-[color:var(--accent-salmon)]" : "text-primary"}`}
              >
                A/0{i + 1}
              </div>
              <div className="mt-3 font-display text-lg text-foreground">{a.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Implementation proof */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <Eyebrow>Implementation proof</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
              Every system ships with{" "}
              <span className="text-gradient-warm">implementation proof.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-muted-foreground">
              Each ReInvent release is designed to include code, documentation,
              examples, video walkthroughs, and technical writing.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {implementationProof.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground/90 transition hover:border-primary/50"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>


      {/* Thesis */}
      <Section>
        <Eyebrow tone="salmon">The thesis</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          AI demos are easy. <span className="text-gradient-warm">Deployable systems are hard.</span>
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
              <div
                className={`font-mono text-xs ${i % 2 === 1 ? "text-[color:var(--accent-salmon)]" : "text-primary"}`}
              >
                0{i + 1}
              </div>
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
            <p className="mt-2 text-[color:var(--accent-salmon)]">
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
        <Eyebrow tone="salmon">System library</Eyebrow>
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
            <Eyebrow tone="salmon">Architecture philosophy</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Built like software, <span className="text-gradient-warm">not demos.</span>
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
              <div className={`font-mono text-xs ${i % 2 === 1 ? "text-[color:var(--accent-salmon)]" : "text-primary"}`}>R/0{i + 1}</div>
              <div className="mt-3 font-display text-lg text-foreground">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lab Notes */}
      <Section>
        <Eyebrow tone="salmon">Lab notes</Eyebrow>
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
                <span className="rounded-full border border-[color:var(--accent-salmon)]/40 bg-[color:var(--accent-salmon)]/10 px-2.5 py-1 uppercase tracking-wider text-[color:var(--accent-salmon)]">
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
            <Eyebrow tone="salmon">Contact</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
              Feedback, collaboration, and <span className="text-gradient-warm">open-source discussion.</span>
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
