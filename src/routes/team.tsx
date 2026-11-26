import { pageMetadata } from "@/lib/metadata";
import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: pageMetadata(
      "Research and engineering",
      "How RAL approaches algorithm design, hardware integration and reproducible experiments.",
    ),
  }),
  component: TeamPage,
});

const teamFunctions = [
  {
    number: "01",
    title: "Robotics and algorithms",
    role: "Perception · Planning · Control",
    body: "The research question determines the experiment. Isolate the effect of a controller, policy or scene representation by changing one variable and comparing against a baseline.",
    focus: ["Robot embodiment", "Motion planning", "Policy learning", "Spatial representations"],
  },
  {
    number: "02",
    title: "Systems and evaluation",
    role: "Hardware · Software · Measurement",
    body: "A result depends on the machine that produced it. Record the sensor layout, compute budget, software versions and trial conditions so others can repeat the comparison.",
    focus: [
      "Embedded inference",
      "Hardware integration",
      "Benchmark design",
      "Open implementations",
    ],
  },
];

function TeamPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Our Team</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-4xl text-foreground md:text-6xl">
          How the lab approaches{" "}
          <span className="text-gradient-tiffany">research and engineering.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          RAL brings algorithm design and systems evaluation into the same experiment. These are the
          responsibilities that connect the two.
        </p>

        <div className="mt-14 space-y-6">
          {teamFunctions.map((area, index) => (
            <article
              key={area.title}
              className="card-surface grid overflow-hidden lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div
                className={`relative min-h-64 border-border p-8 lg:min-h-[360px] ${
                  index % 2 === 0
                    ? "border-b lg:border-b-0 lg:border-r"
                    : "border-b lg:order-2 lg:border-b-0 lg:border-l"
                }`}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="font-mono text-xs text-primary">TEAM / {area.number}</span>
                  <div>
                    <div className="h-px w-16 bg-gradient-to-r from-primary to-[color:var(--accent-salmon)]" />
                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      ReInvent AI Labs
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{area.role}</p>
                <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                  {area.title}
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{area.body}</p>
                <ul className="mt-8 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
                  {area.focus.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-t border-border pt-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
