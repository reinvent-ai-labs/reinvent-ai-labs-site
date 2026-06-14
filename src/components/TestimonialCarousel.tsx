// PRIVATE MOCKUP ONLY: replace fake testimonials before public launch.
// Do not publish this section with fake testimonials.
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setPerView(w < 720 ? 1 : w < 1100 ? 2 : 3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, items.length - perView);
  const clamped = Math.min(index, maxIndex);

  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex],
  );
  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex],
  );

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(clamped * 100) / perView}%)`,
          }}
        >
          {items.map((t, i) => (
            <div
              key={i}
              className="shrink-0 px-3"
              style={{ width: `${100 / perView}%` }}
            >
              <figure className="card-surface card-hover relative h-full p-7">
                <div
                  className="absolute left-0 top-7 h-10 w-[2px] rounded-r"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--primary) 0%, #fa8072 100%)",
                  }}
                />
                <Quote
                  className={`h-5 w-5 ${i % 2 === 1 ? "text-[color:var(--accent-salmon)]/80" : "text-primary/70"}`}
                />
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === clamped
                  ? "w-8 bg-primary"
                  : "w-4 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={prev}
            className="rounded-full border border-border p-2 text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="rounded-full border border-border p-2 text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
