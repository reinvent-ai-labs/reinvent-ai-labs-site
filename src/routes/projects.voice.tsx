import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";
import { VoiceOrb } from "@/components/VoiceOrb";

export const Route = createFileRoute("/projects/voice")({
  head: () => ({
    meta: [
      { title: "Rowan — Conversational operations by ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Rowan is ReInvent AI Labs’ conversational AI and voice-agent platform, currently in development and validation.",
      },
      { property: "og:title", content: "Rowan — ReInvent AI Labs" },
      {
        property: "og:description",
        content:
          "Every conversation completed. Every insight captured. Every resource accounted for.",
      },
    ],
  }),
  component: RowanPage,
});

const capabilities = [
  "Answer repetitive operational questions",
  "Collect customer and request information",
  "Schedule, reserve, or capture an order workflow",
  "Transfer complex or uncertain calls to a human",
  "Transcribe, summarize, and classify conversations",
  "Convert conversations into structured analytics",
];

const flow = [
  "Customer conversation",
  "Session state",
  "Structured extraction",
  "Schema validation",
  "Clarification",
  "Customer confirmation",
  "Business action",
];

function RowanPage() {
  return (
    <PageShell>
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Flagship product</Eyebrow>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                In development + validation
              </span>
            </div>
            <h1 className="mt-7 font-display text-6xl font-semibold leading-none text-foreground md:text-8xl">
              <span className="text-gradient-tiffany">Rowan.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-foreground/85 md:text-2xl md:leading-9">
              Business calls converted into completed actions and structured operational
              intelligence.
            </p>
            <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
              Rowan is ReInvent AI Labs’ first conversational AI and voice-agent product direction,
              designed for organizations handling repetitive but operationally important phone
              conversations.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black"
            >
              Discuss a Rowan workflow <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <VoiceOrb />
        </div>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <Eyebrow tone="salmon">The problem</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              A missed call is often a missed action.
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Restaurants, clinics, pharmacies, service businesses, and appointment-based
              organizations repeatedly interrupt employees to answer the same questions, collect the
              same details, and complete the same requests. When the line is not answered, the
              opportunity can disappear.
            </p>
          </div>
          <div>
            <Eyebrow>The product thesis</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              The voice is infrastructure. The workflow is the value.
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Rowan’s durable value is designed to come from workflow understanding, structured
              state, validation, business integrations, analytics, reliability, and measurable
              outcomes—not dependence on a single model provider.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>Potential capabilities</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-4xl text-foreground md:text-5xl">
          From conversation to operational completion.
        </h2>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability} className="premium-panel flex items-center gap-4 p-5">
              <Check className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-foreground/85">{capability}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          These are planned capabilities that depend on the business and implementation stage; they
          are not a claim of full production maturity.
        </p>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <Eyebrow tone="salmon">Validated action flow</Eyebrow>
          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-foreground md:text-5xl">
            Raw conversation never becomes a transaction by accident.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step, index) => (
              <div key={step} className="bg-black p-6">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <div className="mt-8 font-display text-lg text-foreground">{step}</div>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-7 text-muted-foreground">
            The intended architecture extracts structured information, validates it against explicit
            schemas, requests clarification when required, and asks the customer to confirm before a
            transaction is submitted.
          </p>
        </div>
      </section>

      <Section>
        <div className="premium-panel p-8 md:p-14">
          <Eyebrow>Current focus</Eyebrow>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-display text-4xl text-foreground md:text-5xl">
                Prove one workflow. Measure one result. Expand with evidence.
              </h2>
              <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
                Rowan is currently in development and validation. The immediate goal is a narrow,
                supervised workflow with reliable state, clear failure handling, measurable value,
                and human accountability.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
