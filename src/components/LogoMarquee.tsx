const logos = [
  "ROS 2",
  "MuJoCo",
  "NVIDIA Isaac Sim",
  "CUDA",
  "Motion planning",
  "Imitation learning",
  "3D Gaussian Splatting",
  "Sim-to-real transfer",
];

export function LogoMarquee() {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-12 py-2">
        {[...logos, ...logos].map((name, i) => {
          // Alternate hover accent between cyan (primary) and salmon
          const salmon = i % 2 === 1;
          return (
            <span
              key={i}
              className={`font-display text-xl font-medium tracking-tight text-foreground/40 transition-all duration-300 md:text-2xl ${
                salmon
                  ? "hover:text-[color:var(--accent-salmon)] hover:[text-shadow:0_0_24px_color-mix(in_oklab,#fa8072_60%,transparent)]"
                  : "hover:text-primary hover:[text-shadow:0_0_24px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
              }`}
            >
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
