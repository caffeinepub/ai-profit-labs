import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "5K+", label: "Leads Generated" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Average ROI" },
];

const logos = [
  "TechVenture",
  "GrowthHQ",
  "ScaleForce",
  "ProximaAI",
  "NexusFlow",
];

export function SocialProofSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-16 relative" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-card p-6 text-center reveal reveal-delay-${i + 1}`}
            >
              <div
                className="font-extrabold text-white mb-1"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  background:
                    "linear-gradient(135deg, #fff 30%, oklch(0.75 0.22 210) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-[13px] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-glow mb-10" />

        {/* Logo band */}
        <div className="reveal">
          <p className="text-center text-white/30 text-[11px] uppercase tracking-[0.15em] mb-6">
            Trusted by leading businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((name) => (
              <div
                key={name}
                className="px-5 py-2 rounded-lg text-white/25 font-semibold text-[13px] tracking-wide"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
