import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            ReInvent AI Labs is the open-source AI/data systems lab of Mahidhar Vuppu.
            Let&apos;s ReInvent the Future.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Lab</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/projects" className="text-foreground hover:text-primary">Projects</Link></li>
            <li><Link to="/writing" className="text-foreground hover:text-primary">Lab Notes</Link></li>
            <li><Link to="/about" className="text-foreground hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://github.com/reinvent-ai-labs" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">GitHub</a></li>
            <li><a href="https://medium.com/@YOUR_HANDLE" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">Medium</a></li>
            <li><a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} ReInvent AI Labs · Built by Mahidhar Vuppu</div>
          <div className="max-w-3xl leading-relaxed">
            ReInvent AI Labs is an independent open-source software lab by Mahidhar Vuppu.
            It is not affiliated with, endorsed by, or sponsored by Amazon, Amazon Web Services,
            AWS, or AWS re:Invent.
          </div>
        </div>
      </div>
    </footer>
  );
}
