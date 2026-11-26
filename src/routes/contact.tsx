import { pageMetadata } from "@/lib/metadata";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMetadata(
      "Research collaboration",
      "Discuss replication, robotics research and open-source contributions with ReInvent AI Laboratories.",
    ),
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
              For open-source feedback, research discussions, demo opportunities, academic or
              industry collaboration, prepare a public discussion topic below.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <a
                href="https://github.com/reinvent-ai-labs"
                target="_blank"
                rel="noreferrer"
                className="card-surface card-hover block p-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  GitHub
                </div>
                <div className="mt-1 text-foreground">github.com/reinvent-ai-labs</div>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fields = new FormData(e.currentTarget);
              const url = new URL(
                "https://github.com/reinvent-ai-labs/reinvent-ai-labs-site/issues/new",
              );
              url.searchParams.set("title", String(fields.get("subject")));
              url.searchParams.set(
                "body",
                [fields.get("topic"), fields.get("message"), fields.get("reference")]
                  .filter(Boolean)
                  .join("\n\n"),
              );
              window.location.assign(url.toString());
            }}
            className="card-surface space-y-5 p-7 md:p-10"
          >
            <Field label="Subject">
              <input
                required
                type="text"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                name="subject"
                placeholder="Research question"
              />
            </Field>
            <Field label="Related paper or repository (optional)">
              <input
                type="url"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                name="reference"
                placeholder="https://"
              />
            </Field>
            <Field label="Topic">
              <select
                name="topic"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                defaultValue={topics[0]}
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Message">
              <textarea
                name="message"
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
              Review on GitHub
            </button>
            <p className="text-xs text-muted-foreground">
              This opens a draft GitHub issue for review. Posting it makes the discussion public.
              Leave out private or confidential information.
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
