import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Approach — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "How ReInvent AI Labs discovers operational friction, implements intelligent systems, and turns repeated solutions into products.",
      },
      { property: "og:title", content: "Approach — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "Operational intelligence, responsibly engineered.",
      },
    ],
  }),
  component: AboutPage,
});

const beliefs = [
  "Solve a clearly identified operational problem.",
  "Create a measurable business outcome.",
  "Improve the customer and employee experience.",
  "Use the simplest architecture that meets the requirement.",
  "Remain accountable for financial and environmental cost.",
  "Keep humans in control where judgment or uncertainty demands it.",
];

const model = [
  {
    title: "Consulting creates understanding",
    body: "Direct work with organizations reveals the workflow details, edge cases, integrations, and human constraints that generic software misses.",
  },
  {
    title: "Implementation creates evidence",
    body: "A small, reliable system proves whether the idea saves time, completes more actions, prevents errors, or recovers value.",
  },
  {
    title: "Products create leverage",
    body: "When the same problem repeats, the validated solution becomes a reusable product with faster deployment and stronger economics.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Our approach</Eyebrow>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
          Start with the operation. Earn the right to add{" "}
          <span className="text-gradient-warm">intelligence.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
          ReInvent AI Labs is a productized AI boutique consulting firm. We help organizations
          identify operational inefficiencies, design and implement intelligent solutions, and
          measure whether the work created meaningful value.
        </p>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Eyebrow tone="salmon">What we believe</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Technology is a means. The outcome is the{" "}
              <span className="text-gradient-tiffany">standard.</span>
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <div key={belief} className="premium-panel flex gap-4 p-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-foreground/80">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>The business model</Eyebrow>
        <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-foreground md:text-5xl">
          One learning loop. Two connected <span className="text-gradient-warm">engines.</span>
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {model.map((item, index) => (
            <article key={item.title} className="card-surface p-7 md:p-9">
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              <h3 className="mt-8 font-display text-2xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <Eyebrow tone="salmon">Responsible engineering</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
                Intelligence should create more value than the resources it consumes.
              </h2>
            </div>
            <div className="space-y-6 text-sm leading-7 text-muted-foreground">
              <p>
                ReInvent does not use sustainability as a decorative claim. We are working toward
                infrastructure decisions and future measurements that account for compute, cost,
                storage, model calls, energy, water, and emissions.
              </p>
              <p>
                Until those measurements exist, the promise is precise: systems are designed for
                resource efficiency, unnecessary complexity is rejected, and environmental claims
                will follow verified evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="premium-panel p-8 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>Current stage</Eyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-4xl text-foreground md:text-5xl">
                Narrow proof before broad ambition.
              </h2>
              <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
                The immediate priority is to validate painful local workflows, build small reliable
                solutions, earn measurable customer evidence, and turn repeated wins into products.
                The larger vision matters—but proof comes first.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
            >
              Bring us a workflow <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
