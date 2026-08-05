import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Start a conversation with ReInvent AI Labs about an expensive operational workflow, an intelligent system, or a product direction.",
      },
      { property: "og:title", content: "Contact — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "Bring us the workflow your organization should stop accepting.",
      },
    ],
  }),
  component: ContactPage,
});

const firstNote = [
  "What the workflow is and who performs it",
  "How often the problem occurs",
  "What it currently costs in time, revenue, errors, or experience",
  "Which tools or systems the workflow already touches",
  "What measurable outcome would make a solution worthwhile",
];

function ContactPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>Start a conversation</Eyebrow>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
          Bring us the workflow your organization should{" "}
          <span className="text-gradient-warm">stop accepting.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
          The best conversations begin with a concrete operational problem—not a request to “add
          AI.” We will help determine whether the problem is worth solving, where intelligence
          belongs, and what proof should come first.
        </p>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8">
          <div className="premium-panel p-7 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary">
              A useful first note includes
            </div>
            <ul className="mt-8 space-y-5">
              {firstNote.map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-6 text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-[1.25rem] border border-white/15 p-7 md:p-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Best fit right now
              </div>
              <h2 className="mt-5 font-display text-3xl text-foreground md:text-4xl">
                Local and regional operations with visible, repeated friction.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                ReInvent is initially focused on organizations in Alpharetta and the broader Atlanta
                area, especially businesses managing repetitive calls, inquiries, appointments,
                orders, intake, or internal knowledge work.
              </p>
            </div>
            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-xs leading-5 text-muted-foreground">
                The verified public inquiry address is being finalized. No unconfirmed email or
                placeholder social account is published on this site.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://github.com/reinvent-ai-labs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
                >
                  View GitHub <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center">
          <Eyebrow>Let&apos;s ReInvent the Future.</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
            Operational intelligence, responsibly engineered.
          </h2>
        </div>
      </Section>
    </PageShell>
  );
}
