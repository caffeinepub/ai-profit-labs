import { Hammer, Rocket, Search } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: Search,
    label: "Discover",
    description:
      "We audit your current workflows, identify AI opportunities, and map a custom strategy tailored to your business goals.",
  },
  {
    number: "02",
    icon: Hammer,
    label: "Build",
    description:
      "Our team designs and develops AI systems, automations, and tools — deployed fast, built to last, and fully integrated.",
  },
  {
    number: "03",
    icon: Rocket,
    label: "Scale",
    description:
      "With systems live, we optimize, iterate, and expand — turning your AI investment into compounding, measurable returns.",
  },
];

export function HowItWorksSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 relative" ref={sectionRef}>
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0, 80, 200, 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-kicker mb-3">The Process</div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            How It Works
          </h2>
          <p className="text-white/50 text-[15px] max-w-md mx-auto">
            Three focused phases to transform your business with AI
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[16.5%] right-[16.5%] h-px step-line" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className={`flex flex-col items-center text-center reveal reveal-delay-${i + 1}`}
                >
                  {/* Node */}
                  <div className="step-node w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-7 h-7 icon-blue" strokeWidth={1.5} />
                    {/* Number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{
                        background: "oklch(0.08 0.015 240)",
                        border: "1px solid oklch(0.4 0.15 215)",
                        color: "oklch(0.75 0.22 210)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-[18px] uppercase tracking-wide mb-3">
                    {step.label}
                  </h3>
                  <p className="text-white/45 text-[14px] leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
