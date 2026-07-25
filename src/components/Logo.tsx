type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export function Logo({
  className = "",
  imageClassName = "",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap font-display font-semibold tracking-tight ${className}`}
      style={{ letterSpacing: "-0.025em" }}
    >
      <img
        src="/reinvent-ai-labs-logo.png"
        alt=""
        aria-hidden="true"
        className={`h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 ${imageClassName}`}
      />

      <span className="inline-flex items-baseline leading-none">
        <span className="text-gradient-brand">ReInvent</span>

        <span className="ml-1.5 text-white">
          AI Labs
        </span>
      </span>
    </span>
  );
}
