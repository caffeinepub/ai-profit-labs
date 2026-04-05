import { Bot, Globe, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Eliminate repetitive tasks with intelligent automation pipelines. From email workflows to complex business logic — we automate it all.",
    featured: true,
    iconClass: "icon-blue",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-converting landing pages and full-stack web apps built with modern frameworks, optimized for speed and SEO performance.",
    featured: false,
    iconClass: "icon-gold",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    description:
      "Precision-targeted lead funnels powered by AI scoring, nurture sequences, and real-time analytics that fill your pipeline on autopilot.",
    featured: false,
    iconClass: "icon-blue",
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description:
      "AI-driven content strategy, scheduling, and engagement tools that build your brand authority and grow your audience consistently.",
    featured: false,
    iconClass: "icon-gold",
  },
];

export function ServicesSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-kicker mb-3">What We Do</div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Our Solutions
          </h2>
          <p className="text-white/50 text-[15px] max-w-md mx-auto">
            Four pillars of AI-powered growth to transform your business
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`service-card p-6 flex flex-col gap-4 cursor-default reveal reveal-delay-${i + 1} ${
                  svc.featured ? "featured" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: svc.featured
                      ? "rgba(0, 191, 255, 0.1)"
                      : "rgba(214, 178, 94, 0.1)",
                    border: svc.featured
                      ? "1px solid rgba(0, 191, 255, 0.2)"
                      : "1px solid rgba(214, 178, 94, 0.2)",
                  }}
                >
                  <Icon
                    className={`w-6 h-6 ${svc.iconClass}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-white text-[16px] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-white/45 text-[13px] leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Indicator */}
                {svc.featured && (
                  <div className="mt-auto">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-electric"
                      style={{
                        background: "rgba(0, 191, 255, 0.1)",
                        border: "1px solid rgba(0, 191, 255, 0.2)",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
