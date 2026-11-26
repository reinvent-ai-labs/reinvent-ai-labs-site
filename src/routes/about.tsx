import { pageMetadata } from "@/lib/metadata";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMetadata(
      "About the laboratory",
      "Research principles and long-term direction of an independent robotics and computational systems laboratory.",
    ),
  }),
  component: AboutPage,
});

const sections = [
  {
    title: "Open research and experimentation",
    body: "Pose a falsifiable question, choose a baseline and describe the conditions under which another lab could repeat the experiment.",
  },
  {
    title: "Original technology and architectures",
    body: "Use experimental findings to guide work on robot policies, spatial representations and hardware-aware inference.",
  },
  {
    title: "Academic and industry collaboration",
    body: "Seek collaborators for replication, shared testbeds and independent evaluation. Credit each contributor and identify the institution responsible for the work.",
  },
  {
    title: "Future commercialization",
    body: "Consider commercialization only where a technology has been validated and a practical use is established.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-4xl text-foreground md:text-6xl">
          Research in the <span className="text-gradient-tiffany">physical world.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          ReInvent AI Laboratories (RAL) is an independent, open-source research and engineering
          laboratory investigating intelligent systems that perceive, reason, learn, and act in
          physical environments. Its long-term direction follows four stages.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <div key={section.title} className="card-surface card-hover p-7">
              <div className="font-mono text-xs text-primary">0{index + 1}</div>
              <h2 className="mt-3 font-display text-2xl text-foreground">{section.title}</h2>
              <p className="mt-3 text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              From hypothesis to hardware
            </h2>
            <p className="mt-6 text-muted-foreground">
              We use robots and simulators to investigate the algorithms behind a behavior. A
              release should explain what changed, how it was measured and where the result stops
              generalizing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/team"
                className="rounded-md border border-border px-5 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Discuss an experiment
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
