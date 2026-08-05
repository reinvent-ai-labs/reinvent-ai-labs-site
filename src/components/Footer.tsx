import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Productized AI consulting for organizations ready to turn operational friction into
            measurable, responsibly engineered systems.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/projects" className="text-foreground hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-foreground hover:text-primary">
                Approach
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-foreground hover:text-primary">
                Team
              </Link>
            </li>
            <li>
              <Link to="/writing" className="text-foreground hover:text-primary">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Principle</div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/80">
            Intelligence should create more value than the resources it consumes.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/reinvent-ai-labs"
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors hover:text-[color:var(--accent-salmon)]"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} ReInvent AI Labs</div>
          <div>Operational intelligence, responsibly engineered.</div>
        </div>
      </div>
    </footer>
  );
}
