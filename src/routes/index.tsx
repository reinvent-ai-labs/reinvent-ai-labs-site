import { pageMetadata } from "@/lib/metadata";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell, Section, Eyebrow } from "@/components/PageShell";
import { NeuralBackground } from "@/components/NeuralBackground";
import { RowanVoiceDemo } from "@/components/RowanVoiceDemo";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { LogoMarquee } from "@/components/LogoMarquee";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMetadata(
      "Robotics and embodied intelligence",
      "Independent open-source research in robotics, embodied intelligence, spatial representations and efficient AI systems.",
    ),
  }),
  component: Home,
});

const earlySignals = [
  {
    value: "Robotics",
    label: "Embodied intelligence",
    sub: "Planning and manipulation",
  },
  {
    value: "Compute",
    label: "Efficient AI",
    sub: "Inference under hardware limits",
  },
  {
    value: "Space",
    label: "Spatial intelligence",
    sub: "Maps shaped by embodiment",
  },
  {
    value: "Field",
    label: "Extreme environments",
    sub: "Control under uncertainty",
  },
];

const researchQuestions = [
  {
    name: "Embodied intelligence and robotics",
    quote:
      "How does a manipulation policy change when the gripper or camera moves? Compare vision-language-action (VLA) architectures, reinforcement learning and imitation learning with kinematics, Jacobians and motion planning.",
    role: "Dexterous and bimanual manipulation · Multi-agent coordination · Aerial and mobile robotics",
  },
  {
    name: "Efficient AI and computational systems",
    quote:
      "Where does inference spend its memory budget? Profile custom CUDA kernels, compare GPU execution paths and test how distillation and quantization change accuracy on embedded hardware.",
    role: "Edge AI · Hardware-aware architectures · Performance benchmarking",
  },
  {
    name: "Spatial intelligence",
    quote:
      "Which parts of a scene need fine detail for a particular robot to navigate or manipulate an object? Study adaptive fidelity in 3D Gaussian Splatting under a fixed reconstruction budget.",
    role: "Embodiment-conditioned representations · Autonomous perception · Interactive maps",
  },
  {
    name: "Extreme-environment robotics",
    quote:
      "How do policies respond to changes in gravity, sensing and available compute? Use reduced-gravity simulation to study environment-conditioned manipulation and fault-tolerant perception and control.",
    role: "Planetary exploration · Resource-constrained autonomy",
  },
];

const adoptionLayer = [
  {
    title: "ROS 2 packages",
    body: "Document topics, frames, message types and launch files so another robot can use a component.",
  },
  {
    title: "Reference libraries",
    body: "Provide a minimal implementation and a versioned environment for each released method.",
  },
  {
    title: "Model weights",
    body: "Identify the checkpoint, training data, upstream license and supported hardware.",
  },
  {
    title: "Experiment runners",
    body: "Include configurations and commands for reproducing a baseline and comparing a variant.",
  },
];

const implementationProof = [
  "Physical or simulated demonstration",
  "Hardware and sensor configuration",
  "Software versions and seeds",
  "Experiment procedure",
  "Baseline implementation",
  "Metrics and trial counts",
  "Ablation results",
  "Failure cases and limitations",
  "Datasets and checkpoints",
  "Versioned code and reproduction commands",
];

const painPoints = [
  {
    title: "Embodiment",
    body: "A grasp that succeeds with one wrist can fail with another. Vary the mechanism and record where the policy breaks.",
  },
  {
    title: "Compute budget",
    body: "Measure latency and peak memory alongside task success on the hardware that executes the policy.",
  },
  {
    title: "Transfer",
    body: "Compare the same controller in MuJoCo or NVIDIA Isaac Sim and on physical hardware. Record changes in sensing, timing and contact.",
  },
  {
    title: "Reliability",
    body: "Report failed trials and recovery behavior alongside successful runs.",
  },
];

const devFirst = [
  "Robot geometry",
  "Sensor placement",
  "Actuator limits",
  "Power budget",
  "Memory footprint",
  "Inference latency",
  "Control frequency",
  "Task success",
];

const architecture = [
  "ROS 2 interfaces",
  "Explicit coordinate frames",
  "Hardware abstraction",
  "Bounded memory",
  "State estimation",
  "Motion planning",
  "Fault detection",
  "Replayable sensor traces",
];

const releaseStandard = [
  {
    title: "Research record",
    body: "Give the title, status, publication date and last revision. Identify RAL contributions and credit external or university-affiliated work.",
  },
  {
    title: "Question and hypothesis",
    body: "State the problem, prediction and observation that would count against it.",
  },
  {
    title: "Foundations",
    body: "Describe the mathematical model, architecture and original contribution. Cite upstream models, hardware and implementations.",
  },
  {
    title: "Experiment",
    body: "Document the hardware, software, datasets, protocol and physical or simulated conditions.",
  },
  {
    title: "Comparisons",
    body: "Report baselines, quantitative results, ablations, failure cases and known limitations where applicable.",
  },
  {
    title: "Artifacts",
    body: "Link available GitHub repositories, papers, datasets, model checkpoints and demonstrations to the release.",
  },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <NeuralBackground />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          {/* Main hero layout */}
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16 xl:gap-24">
            {/* Left: hero copy */}
            <div className="min-w-0">
              <Eyebrow>Independent research laboratory</Eyebrow>

              <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl xl:text-7xl">
                Open-source research in robotics,{" "}
                <span className="text-gradient-warm">
                  embodied intelligence, and computational systems.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Developing intelligent systems that perceive, reason, and act efficiently in the
                physical world through reproducible research, rigorous experimentation, and open
                engineering.
              </p>

              <p className="mt-6 font-display text-lg">
                <span className="text-primary">Perception, planning</span>{" "}
                <span className="text-[color:var(--accent-salmon)]">and control.</span>
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Explore Projects
                </Link>

                <Link
                  to="/writing"
                  className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  Read Lab Notes
                </Link>

                <a
                  href="https://github.com/reinvent-ai-labs"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  View GitHub
                </a>
              </div>
            </div>

            {/* Right: official ReInvent AI Labs logo */}
            <div className="relative hidden min-h-[460px] items-center justify-center lg:flex">
              {/* Subtle cyan/salmon glow */}
              <div
                aria-hidden="true"
                className="absolute h-[380px] w-[380px] rounded-full blur-[110px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(54, 222, 222, 0.13) 0%, rgba(250, 128, 114, 0.07) 46%, transparent 72%)",
                }}
              />

              <img
                src="/reinvent-ai-labs-logo.png"
                alt="ReInvent AI Labs neural-network tree logo"
                className="relative z-10 h-auto w-full max-w-[430px] select-none object-contain mix-blend-screen xl:max-w-[490px]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Research areas stays below both columns */}
          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Research areas
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {earlySignals.map((s) => (
                <div key={s.label} className="card-surface card-hover p-5">
                  <div className="font-display text-2xl text-foreground">{s.value}</div>

                  <div className="mt-1 text-sm text-foreground/90">{s.label}</div>

                  <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Historical software demonstration */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>From the software archive</Eyebrow>

              <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                Scripted demonstration
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl text-foreground md:text-6xl">
              Inside <span className="text-gradient-tiffany">Rowan.</span>
            </h2>

            <p className="mt-4 text-lg text-[color:var(--accent-salmon)]">
              From spoken requests to structured records.
            </p>

            <p className="mt-6 max-w-2xl text-muted-foreground">
              This animation traces a sample order through Rowan, an earlier RAL voice-interface
              design. Watch how each turn changes the order state before the final handoff.
            </p>

            <ul className="mt-8 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
              {[
                "Structured workflow state",
                "Validated business actions",
                "Integration-ready outputs",
                "Human escalation paths",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/projects/voice"
              className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Explore Rowan
            </Link>
          </div>

          {/* Scripted conversation and order trace */}
          <div className="relative flex w-full items-center justify-center">
            <div className="relative w-full max-w-[500px] overflow-hidden bg-black">
              <RowanVoiceDemo />
            </div>
          </div>
        </div>
      </Section>

      {/* Orgs / Logo wall */}
      <Section className="!py-20">
        <div className="flex flex-col gap-3 text-center">
          <div className="mx-auto">
            <Eyebrow tone="salmon">Research methods</Eyebrow>
          </div>

          <h2 className="mx-auto max-w-3xl font-display text-3xl text-foreground md:text-4xl">
            Tools for studying <span className="text-gradient-warm">physical intelligence.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            The agenda spans robot control, simulation, spatial representations and inference on
            embedded hardware.
          </p>
        </div>

        <div className="mt-14">
          <LogoMarquee />
        </div>
      </Section>

      {/* Research questions */}
      <Section>
        <Eyebrow>Research directions</Eyebrow>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-3xl text-foreground md:text-4xl">
            Questions guiding the lab
          </h2>

          <p className="max-w-xl text-sm text-muted-foreground">
            These four directions describe the research agenda. Published experiments and their
            evidence belong in the archive.
          </p>
        </div>

        <div className="mt-10">
          <TestimonialCarousel items={researchQuestions} />
        </div>
      </Section>

      {/* Future adoption layer */}
      <Section>
        <Eyebrow tone="salmon">Adoption layer</Eyebrow>

        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          Sharing code, models and{" "}
          <span className="text-gradient-warm">experiment configurations.</span>
        </h2>

        <p className="mt-6 max-w-3xl text-muted-foreground">
          The artifact depends on the experiment. These are the forms a research release can take.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {adoptionLayer.map((a, i) => (
            <div key={a.title} className="card-surface card-hover p-6">
              <div
                className={`font-mono text-xs ${
                  i % 2 === 1 ? "text-[color:var(--accent-salmon)]" : "text-primary"
                }`}
              >
                A/0{i + 1}
              </div>

              <div className="mt-3 font-display text-lg text-foreground">{a.title}</div>

              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Implementation proof */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative">
            <Eyebrow>Implementation proof</Eyebrow>

            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
              What makes an experiment <span className="text-gradient-warm">reproducible?</span>
            </h2>

            <p className="mt-6 max-w-3xl text-muted-foreground">
              A demonstration records what happened. The accompanying release should let a reader
              repeat the trial and examine why it succeeded or failed.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {implementationProof.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground/90 transition hover:border-primary/50"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Thesis */}
      <Section>
        <Eyebrow tone="salmon">The thesis</Eyebrow>

        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          AI demos are easy.{" "}
          <span className="text-gradient-warm">Deployable systems are hard.</span>
        </h2>

        <p className="mt-6 max-w-3xl text-muted-foreground">
          Physical robots and simulators give us a way to test algorithms. Changing one condition at
          a time helps isolate which assumptions a policy, controller or map depends on.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p, i) => (
            <div key={p.title} className="card-surface card-hover p-6">
              <div
                className={`font-mono text-xs ${
                  i % 2 === 1 ? "text-[color:var(--accent-salmon)]" : "text-primary"
                }`}
              >
                0{i + 1}
              </div>

              <div className="mt-3 font-display text-lg text-foreground">{p.title}</div>

              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* System Library */}
      <Section>
        <Eyebrow tone="salmon">System library</Eyebrow>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-3xl text-foreground md:text-4xl">
            System Library · historical software
          </h2>

          <Link to="/projects" className="text-sm text-primary hover:text-foreground">
            View all projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* Developer-first */}
      <Section>
        <Eyebrow>Hardware–software integration</Eyebrow>

        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          What changes when a policy{" "}
          <span className="text-gradient-tiffany">moves to hardware?</span>
        </h2>

        <p className="mt-6 max-w-3xl text-muted-foreground">
          Describe the robot and its operating limits alongside the model. These variables help
          explain differences between simulated and physical trials.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {devFirst.map((f) => (
            <div key={f} className="card-surface card-hover flex items-center gap-3 p-4">
              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-sm text-foreground/90">{f}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture philosophy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow tone="salmon">Architecture philosophy</Eyebrow>

            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              From sensor input to <span className="text-gradient-warm">robot action.</span>
            </h2>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {architecture.map((a) => (
                <li key={a} className="card-surface flex items-center gap-3 p-3 text-sm">
                  <span className="font-mono text-xs text-primary">→</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <SystemDiagram />
        </div>
      </Section>

      {/* Release Standard */}
      <Section>
        <Eyebrow>Release standard</Eyebrow>

        <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
          What belongs in a <span className="text-gradient-tiffany">research release?</span>
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {releaseStandard.map((r, i) => (
            <div key={r.title} className="card-surface card-hover p-6">
              <div
                className={`font-mono text-xs ${
                  i % 2 === 1 ? "text-[color:var(--accent-salmon)]" : "text-primary"
                }`}
              >
                R/0{i + 1}
              </div>

              <div className="mt-3 font-display text-lg text-foreground">{r.title}</div>

              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lab Notes */}
      <Section>
        <Eyebrow tone="salmon">Lab notes</Eyebrow>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Lab Notes in preparation
            </h2>

            <p className="mt-3 text-muted-foreground">
              Planned entries from the editorial archive. Publication dates appear when notes are
              released.
            </p>
          </div>

          <Link
            to="/writing"
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-primary/50 hover:text-primary"
          >
            All Lab Notes
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.slice(0, 4).map((p) => (
            <article key={p.slug} className="card-surface card-hover p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-[color:var(--accent-salmon)]/40 bg-[color:var(--accent-salmon)]/10 px-2.5 py-1 uppercase tracking-wider text-[color:var(--accent-salmon)]">
                  {p.category}
                </span>

                <span className="text-muted-foreground">{p.date}</span>
              </div>

              <h3 className="mt-4 font-display text-xl text-foreground">{p.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

              <Link
                to="/writing"
                className="mt-5 inline-block text-sm text-primary hover:text-foreground"
              >
                View planned notes →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Team preview */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative max-w-3xl">
            <Eyebrow>Our Team</Eyebrow>

            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Research and engineering at RAL
            </h2>

            <p className="mt-6 text-muted-foreground">
              The lab connects experiment design, robotics software and hardware evaluation.
            </p>

            <Link
              to="/team"
              className="mt-8 inline-flex rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
            >
              Meet our team →
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <div className="card-surface relative overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative">
            <Eyebrow tone="salmon">Contact</Eyebrow>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl text-foreground md:text-5xl">
              Feedback, collaboration, and{" "}
              <span className="text-gradient-warm">open-source discussion.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              RAL welcomes academic and industry discussion of shared experiments, baseline
              implementations and independent replication.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Discuss research
              </Link>

              <a
                href="https://github.com/reinvent-ai-labs"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function SystemDiagram() {
  const stages = [
    { label: "Inputs", detail: "Cameras · Encoders · IMUs" },
    { label: "Intelligence", detail: "Pose · Scene · Uncertainty" },
    { label: "Controls", detail: "Plan · Policy · Feedback" },
    { label: "Outcomes", detail: "Motion · Contact · Recovery" },
  ];

  return (
    <div className="card-surface relative overflow-hidden p-7 md:p-9">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            System architecture
          </span>

          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
        </div>

        <div className="mt-6 space-y-3">
          {stages.map((stage, index) => (
            <div key={stage.label} className="grid grid-cols-[auto_1fr] gap-5">
              <div className="flex flex-col items-center">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-primary/35 bg-background font-mono text-[10px] text-primary">
                  0{index + 1}
                </span>

                {index < stages.length - 1 ? <span className="h-full w-px bg-border" /> : null}
              </div>

              <div className="mb-2 rounded-md border border-border bg-background/70 p-4">
                <div className="font-display text-sm text-foreground">{stage.label}</div>

                <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {stage.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
