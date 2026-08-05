import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MoveUpRight } from "lucide-react";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";
import { NeuralBackground } from "@/components/NeuralBackground";
import { ReinventStudio } from "@/components/ReinventStudio";
import { VoiceOrb } from "@/components/VoiceOrb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ReInvent AI Labs — Operational intelligence, responsibly engineered",
      },
      {
        name: "description",
        content:
          "ReInvent AI Labs is a productized AI boutique consulting firm that turns operational inefficiencies into intelligent, measurable systems.",
      },
      {
        property: "og:title",
        content: "ReInvent AI Labs — Intelligent systems that create more value with less waste",
      },
      {
        property: "og:description",
        content:
          "Discovery-led AI consulting, tailored implementation, and reusable products for measurable operations.",
      },
    ],
  }),
  component: Home,
});

const outcomes = [
  {
    title: "Recover missed demand",
    body: "Capture the calls, inquiries, orders, reservations, and appointments that manual workflows let slip away.",
  },
  {
    title: "Reduce repetitive work",
    body: "Move routine intake, follow-up, reporting, and information retrieval out of employees’ critical path.",
  },
  {
    title: "Create operational clarity",
    body: "Transform conversations, documents, and customer behavior into structured records and useful decisions.",
  },
  {
    title: "Measure what changed",
    body: "Tie every implementation to outcomes such as time saved, actions completed, errors prevented, and revenue recovered.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    body: "Interview the people doing the work and map the workflow as it actually operates.",
  },
  {
    number: "02",
    title: "Define",
    body: "Identify the most painful repeated inefficiency and the evidence that would prove it is worth solving.",
  },
  {
    number: "03",
    title: "Implement",
    body: "Build the smallest reliable system that fits the existing operation, then validate it with real users.",
  },
  {
    number: "04",
    title: "Productize",
    body: "Turn repeated, validated solutions into reusable products with stronger economics and faster deployment.",
  },
];

const products = [
  {
    name: "Rowan",
    status: "In development",
    category: "Conversational operations",
    description:
      "A voice-agent platform designed to turn business calls into completed actions, structured records, and operational intelligence.",
    href: "/projects/voice",
  },
  {
    name: "ReInvent Studio",
    status: "Discovery",
    category: "Creative workflow intelligence",
    description:
      "An AI-native workflow system for photographers and studios, designed to accelerate culling, search, organization, and delivery while preserving human taste.",
    href: "#studio",
  },
  {
    name: "Atlas",
    status: "Prototype",
    category: "Customer intelligence",
    description:
      "A product analytics and retention system for event tracking, cohorts, funnels, churn diagnosis, and behavior intelligence.",
    href: "/projects/atlas",
  },
  {
    name: "Clingy AI",
    status: "Exploration",
    category: "Authorized media workflows",
    description:
      "An agentic system for turning owned or explicitly licensed long-form video into platform-ready short-form content.",
  },
];

const resourcePrinciples = [
  "Use the least resource-intensive system that can complete the task safely.",
  "Treat infrastructure cost, model calls, storage, and idle capacity as engineering decisions.",
  "Measure environmental performance before making environmental claims.",
];

function Home() {
  return (
    <PageShell>
      <div className="relative overflow-hidden border-b border-white/10">
        <NeuralBackground />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32 md:pt-36 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Eyebrow>Productized AI boutique consulting</Eyebrow>
              <h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground md:text-7xl xl:text-[5.4rem]">
                Intelligent systems that create more value with{" "}
                <span className="text-gradient-warm">less waste.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                ReInvent AI Labs finds expensive operational friction, engineers the right
                intelligent system around it, and measures the business result. High-touch
                consulting creates the insight; reusable products make the solution scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition hover:brightness-110"
                >
                  Discuss a workflow
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition hover:border-white/30"
                >
                  Explore our systems
                </Link>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Starting in Alpharetta + Atlanta · Designed to scale beyond it
              </p>
            </div>

            <div className="relative hidden min-h-[500px] items-center justify-center lg:flex">
              <div
                aria-hidden="true"
                className="absolute h-[390px] w-[390px] rounded-full blur-[120px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(54,222,222,.12), rgba(250,128,114,.045) 48%, transparent 72%)",
                }}
              />
              <img
                src="/reinvent-ai-labs-logo.png"
                alt="ReInvent AI Labs neural tree"
                className="relative z-10 w-full max-w-[480px] select-none object-contain mix-blend-screen"
                loading="eager"
              />
            </div>
          </div>

          <div className="mt-20 grid border-y border-white/10 sm:grid-cols-3">
            {[
              ["Start with the workflow", "No model looking for a problem."],
              ["Build the smallest useful system", "Complexity has to earn its place."],
              ["Prove the operational result", "Value is measured after deployment."],
            ].map(([title, body], index) => (
              <div
                key={title}
                className={`py-6 sm:px-7 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
              >
                <div className="text-sm font-medium text-foreground">{title}</div>
                <div className="mt-1 text-xs leading-5 text-muted-foreground">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section id="outcomes">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <Eyebrow>What we solve</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              AI earns its place through the{" "}
              <span className="text-gradient-tiffany">operation.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              The technology is only useful when it resolves a repeated business problem and fits
              the people, systems, and constraints already in the room.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="bg-black p-7 md:p-9">
                <h3 className="font-display text-xl text-foreground">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <Eyebrow tone="salmon">How we work</Eyebrow>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
              From operational pain to a{" "}
              <span className="text-gradient-warm">repeatable system.</span>
            </h2>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Consulting and products are one continuous learning loop—not two disconnected
              businesses.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="border-t border-white/20 pt-6">
                <div className="font-mono text-xs text-primary">{step.number}</div>
                <h3 className="mt-7 font-display text-2xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Flagship product</Eyebrow>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                In development
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl text-foreground md:text-6xl">
              Meet <span className="text-gradient-tiffany">Rowan.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-foreground/85">
              Business calls converted into completed actions and structured operational
              intelligence.
            </p>
            <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
              Rowan is being designed for organizations with repetitive but important phone
              workflows. The value is not a realistic voice; it is reliable session state,
              validation, business integrations, analytics, and a clear path to human escalation.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2">
              {[
                "Actions, not just answers",
                "Structured and validated data",
                "Provider-flexible architecture",
                "Human handoff when needed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/projects/voice"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-foreground"
            >
              Explore Rowan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <VoiceOrb />
        </div>
      </Section>

      <div id="studio">
        <ReinventStudio />
      </div>

      <Section>
        <Eyebrow>Product portfolio</Eyebrow>
        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
            Products emerge from <span className="text-gradient-tiffany">repeated truth.</span>
          </h2>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Each direction begins with a real workflow, remains honest about its stage, and earns
            scale through validation.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="card-surface card-hover flex min-h-[290px] flex-col p-7 md:p-9"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {product.category}
                </span>
                <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-foreground/70">
                  {product.status}
                </span>
              </div>
              <h3 className="mt-10 font-display text-3xl text-foreground">{product.name}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                {product.description}
              </p>
              {product.href ? (
                <a
                  href={product.href}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-primary"
                >
                  View direction <MoveUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="mt-auto pt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Validation in progress
                </span>
              )}
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-8">
          <div>
            <Eyebrow tone="salmon">Responsible infrastructure</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Sustainability is a{" "}
              <span className="text-gradient-warm">measurement discipline.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              ReInvent is designed around a simple belief: AI should eliminate more waste than it
              creates. Verified environmental measurement is still under development, so our public
              language stays as accountable as our engineering.
            </p>
          </div>
          <div className="space-y-3">
            {resourcePrinciples.map((principle, index) => (
              <div key={principle} className="premium-panel flex gap-5 p-6">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <p className="text-sm leading-6 text-foreground/85">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="premium-panel relative overflow-hidden px-7 py-14 md:px-14 md:py-20">
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>The people</Eyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
                Relentless about the standard.{" "}
                <span className="text-gradient-tiffany">Invested in the person.</span>
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                ReInvent is being built by a close, accountable team that connects customer
                discovery, technical depth, and disciplined execution.
              </p>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-foreground"
            >
              Meet the team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="border-t border-white/10 pt-20 text-center md:pt-24">
          <Eyebrow>Let&apos;s ReInvent the Future.</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight text-foreground md:text-6xl">
            What expensive workflow should your organization{" "}
            <span className="text-gradient-warm">stop accepting?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
            Bring us the friction. We&apos;ll determine whether AI belongs in the solution—and what
            outcome would make it worthwhile.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition hover:brightness-110"
          >
            Start the conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
