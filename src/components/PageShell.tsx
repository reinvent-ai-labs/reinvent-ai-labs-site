import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "salmon";
}) {
  const isSalmon = tone === "salmon";
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] ${
        isSalmon ? "text-[color:var(--accent-salmon)]" : "text-primary"
      }`}
    >
      <span
        className={`h-px w-6 ${isSalmon ? "bg-[color:var(--accent-salmon)]/70" : "bg-primary/60"}`}
      />
      {children}
    </div>
  );
}
