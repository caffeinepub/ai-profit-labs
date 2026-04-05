import {
  BarChart2,
  Clock,
  Cpu,
  Database,
  DollarSign,
  Headphones,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const benefits = [
  {
    icon: DollarSign,
    label: "Increase Revenue",
    description: "AI-optimized funnels drive more conversions and higher LTV.",
    iconClass: "icon-gold",
  },
  {
    icon: Clock,
    label: "Save Time",
    description:
      "Automate 80% of repetitive tasks, freeing your team to focus.",
    iconClass: "icon-blue",
  },
  {
    icon: Cpu,
    label: "Automate Tasks",
    description:
      "Intelligent systems that run 24/7 without human intervention.",
    iconClass: "icon-gold",
  },
  {
    icon: BarChart2,
    label: "Scale Faster",
    description:
      "AI infrastructure that grows with you from startup to enterprise.",
    iconClass: "icon-blue",
  },
  {
    icon: Headphones,
    label: "Expert Support",
    description:
      "Dedicated AI specialists available every step of the journey.",
    iconClass: "icon-gold",
  },
  {
    icon: Database,
    label: "Data-Driven",
    description:
      "Every decision backed by real-time AI insights and analytics.",
    iconClass: "icon-blue",
  },
];

export function BenefitsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="benefits" className="py-24 relative" ref={sectionRef}>
      {/* Subtle bg tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0, 50, 150, 0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-kicker mb-3">Why Choose Us</div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Built for Results
          </h2>
          <p className="text-white/50 text-[15px] max-w-md mx-auto">
            Everything you need to grow, scale, and dominate your market with AI
          </p>
        </div>

        {/* Benefit tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.label}
                className={`benefit-tile p-5 flex flex-col items-center text-center gap-3 reveal reveal-delay-${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      i % 2 === 0
                        ? "rgba(214, 178, 94, 0.08)"
                        : "rgba(0, 191, 255, 0.08)",
                    border:
                      i % 2 === 0
                        ? "1px solid rgba(214, 178, 94, 0.15)"
                        : "1px solid rgba(0, 191, 255, 0.15)",
                  }}
                >
                  <Icon
                    className={`w-5 h-5 ${benefit.iconClass}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="font-semibold text-white text-[13px] mb-1">
                    {benefit.label}
                  </div>
                  <div className="text-white/35 text-[11px] leading-relaxed">
                    {benefit.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
