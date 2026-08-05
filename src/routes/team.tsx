import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Eyebrow, PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Meet the team building ReInvent AI Labs through customer discovery, intelligent systems, and disciplined execution.",
      },
      { property: "og:title", content: "Team — ReInvent AI Labs" },
      {
        property: "og:description",
        content: "The people behind ReInvent AI Labs.",
      },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Mahidhar Vuppu",
    role: "Founder · Product & Engineering",
    initials: "MV",
    bio: "Mahidhar leads ReInvent’s customer discovery, product direction, and technical architecture. His work begins with the people performing the workflow: identifying repeated pain, defining the smallest useful solution, and connecting AI, data, and software systems to measurable business outcomes.",
    principle:
      "The job is not to make the technology look impressive. It is to make the operation meaningfully better.",
    focus: ["Customer discovery", "Product strategy", "AI & data systems", "Technical direction"],
  },
  {
    name: "Rajal Nadkar",
    role: "Partner · Operations & Execution",
    initials: "RN",
    bio: "Rajal helps turn company direction into organized execution. Her work supports the coordination, onboarding, and operating discipline required to move from ambitious ideas to clear ownership, consistent communication, and accountable delivery.",
    principle:
      "Strong execution makes ambition credible: clear expectations, honest communication, and ownership all the way through.",
    focus: ["Company operations", "Team coordination", "Onboarding", "Execution systems"],
  },
] as const;

function TeamPage() {
  return (
    <PageShell>
      <Section>
        <div className="max-w-4xl">
          <Eyebrow>Team</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
            Different disciplines. One standard of{" "}
            <span className="text-gradient-warm">ownership.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            ReInvent connects customer discovery, technical depth, and disciplined execution. We
            stay honest about the stage, rigorous about the work, and deeply invested in the people
            doing it.
          </p>
        </div>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-24 md:space-y-12 md:py-32 lg:px-8">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="grid overflow-hidden rounded-[1.4rem] border border-white/15 bg-black lg:grid-cols-[0.78fr_1.22fr]"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Portrait
                  name={member.name}
                  initials={member.initials}
                  image={"image" in member ? member.image : undefined}
                />
              </div>
              <div
                className={`flex flex-col justify-center p-7 md:p-12 lg:p-16 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-primary">
                  {member.role}
                </div>
                <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">
                  {member.name}
                </h2>
                <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">{member.bio}</p>
                <blockquote className="mt-8 max-w-2xl border-l border-white/20 pl-5 text-sm italic leading-7 text-foreground/80">
                  “{member.principle}”
                </blockquote>
                <div className="mt-9 flex flex-wrap gap-2">
                  {member.focus.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <Eyebrow tone="salmon">Culture</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
              Relentlessly demanding about the standard.{" "}
              <span className="text-gradient-tiffany">Deeply invested in the person.</span>
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-muted-foreground">
              We teach before we judge, clarify before we criticize, give direct feedback early,
              expect visible improvement, reward ownership, and do not confuse burnout with
              commitment.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
            >
              Work with ReInvent <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function Portrait({ name, initials, image }: { name: string; initials: string; image?: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;

  return (
    <div className="relative min-h-[390px] overflow-hidden border-b border-white/10 bg-black lg:min-h-[620px] lg:border-b-0 lg:border-r">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px]"
        style={{ background: "linear-gradient(145deg, #36dede, #fa8072)" }}
      />
      {showImage ? (
        <img
          src={image}
          alt={`${name}, ReInvent AI Labs`}
          className="absolute inset-0 h-full w-full object-cover object-center grayscale transition duration-700 hover:grayscale-0"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-44 w-44 place-items-center rounded-full border border-white/15 bg-black/80 font-display text-5xl text-foreground shadow-[0_0_80px_rgba(54,222,222,.08)]">
            {initials}
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] text-white/55">
        ReInvent AI Labs
      </div>
    </div>
  );
}
