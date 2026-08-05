import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Meet the multidisciplinary team behind ReInvent AI Labs' consulting and intelligent systems work.",
      },
    ],
  }),
  component: TeamPage,
});

const teamFunctions = [
  {
    number: "01",
    title: "Product & Engineering",
    role: "Discovery · Architecture · Applied AI",
    body: "Connects customer workflows to product direction and technical delivery—from system boundaries and data contracts to evaluation and deployment.",
    focus: ["Customer discovery", "Product strategy", "AI systems", "Technical delivery"],
  },
  {
    number: "02",
    title: "Operations & Growth",
    role: "Research · Coordination · Market Development",
    body: "Keeps customer insight, research, partnerships, and execution aligned so every product direction is grounded in a real operational need.",
    focus: ["Market research", "Operations", "Partnerships", "Execution systems"],
  },
];

function TeamPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Our Team</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-4xl text-foreground md:text-6xl">
          Built across disciplines.{" "}
          <span className="text-gradient-tiffany">Aligned on outcomes.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          ReInvent brings product thinking, applied AI, customer discovery, and disciplined
          execution into one close operating team.
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
