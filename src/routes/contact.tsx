import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ReInvent AI Labs" },
      {
        name: "description",
        content:
          "Reach out for open-source feedback, research discussions, demo opportunities, technical collaboration, or speaking inquiries.",
      },
      { property: "og:title", content: "Contact — ReInvent AI Labs" },
      {
        property: "og:description",
        content:
          "Feedback, collaboration, and open-source discussion with ReInvent AI Labs.",
      },
    ],
  }),
  component: ContactPage,
});

const topics = [
  "Feedback",
  "Open-source collaboration",
  "Research discussion",
  "Speaking/demo inquiry",
  "Other",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              Start a <span className="text-gradient-tiffany">conversation.</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              For open-source feedback, research discussions, demo opportunities,
              technical collaboration, or speaking inquiries, reach out below.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <a
                href="https://github.com/reinvent-ai-labs"
                target="_blank"
                rel="noreferrer"
                className="card-surface card-hover block p-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">GitHub</div>
                <div className="mt-1 text-foreground">github.com/reinvent-ai-labs</div>
              </a>
              <a
                href="https://medium.com/@YOUR_HANDLE"
                target="_blank"
                rel="noreferrer"
                className="card-surface card-hover block p-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Medium</div>
                <div className="mt-1 text-foreground">medium.com/@YOUR_HANDLE</div>
              </a>
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="card-surface card-hover block p-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</div>
                <div className="mt-1 text-foreground">linkedin.com/in/YOUR_LINKEDIN</div>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="card-surface space-y-5 p-7 md:p-10"
          >
            <Field label="Name">
              <input
                required
                type="text"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                placeholder="you@domain.com"
              />
            </Field>
            <Field label="Topic">
              <select
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                defaultValue={topics[0]}
              >
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={6}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                placeholder="What would you like to discuss?"
              />
            </Field>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              {sent ? "Message captured — thank you" : "Send Message"}
            </button>
            <p className="text-xs text-muted-foreground">
              ReInvent AI Labs is currently focused on public open-source systems,
              technical writing, and developer feedback.
            </p>
          </form>
        </div>
      </Section>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
