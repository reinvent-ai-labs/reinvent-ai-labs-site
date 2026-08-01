type NeuralBackgroundProps = {
  className?: string;
};

export function NeuralBackground({
  className = "",
}: NeuralBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-black ${className}`}
    />
  );
}
