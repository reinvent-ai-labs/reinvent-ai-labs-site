// PRIVATE MOCKUP ONLY: replace company logos before public launch.
// Do not publish this section with these company names — no real affiliation implied.
// These are text-logo style marks used for internal design visualization only.

const logos = [
  "Deloitte",
  "Accenture",
  "AWS",
  "Google Cloud",
  "Microsoft",
  "Stripe",
  "Snowflake",
  "Databricks",
  "Palantir",
  "NVIDIA",
  "OpenAI",
  "Anthropic",
  "ServiceNow",
  "Salesforce",
  "JPMorgan",
  "Truist",
];

export function LogoMarquee() {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-12 py-2">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={i}
            className="font-display text-xl font-medium tracking-tight text-foreground/40 transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_24px_color-mix(in_oklab,var(--primary)_60%,transparent)] md:text-2xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
