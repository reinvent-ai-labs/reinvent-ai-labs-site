export function NeuralBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-black ${className}`}
    />
  );
}
