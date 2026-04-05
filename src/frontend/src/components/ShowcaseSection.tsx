import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    category: "AI Automation",
    description:
      "Real-time analytics platform with AI insights and automated reporting for a B2B SaaS company.",
    image: "/assets/generated/project-dashboard-1.dim_800x500.jpg",
    tags: ["AI Analytics", "Automation"],
  },
  {
    title: "High-Converting Landing Page",
    category: "Website Development",
    description:
      "Premium landing page generating 40% higher conversions for a tech startup, with dynamic social proof.",
    image: "/assets/generated/project-landing-2.dim_800x500.jpg",
    tags: ["Design", "Conversion"],
  },
  {
    title: "Lead Gen Automation Pipeline",
    category: "Lead Generation",
    description:
      "End-to-end AI pipeline delivering 5,000+ qualified leads per month with 95% automation rate.",
    image: "/assets/generated/project-automation-3.dim_800x500.jpg",
    tags: ["Lead Gen", "Scale"],
  },
];

export function ShowcaseSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="showcase" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-kicker mb-3">Our Work</div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Featured Success Stories
          </h2>
          <p className="text-white/50 text-[15px] max-w-md mx-auto">
            Real projects, real results — built for growth-focused businesses
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card bg-[oklch(0.11_0.02_240)] cursor-pointer group reveal reveal-delay-${i + 1}`}
              data-ocid={`showcase.item.${i + 1}`}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.11_0.02_240)] via-transparent to-transparent opacity-70" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{
                      background: "rgba(0, 191, 255, 0.15)",
                      border: "1px solid rgba(0, 191, 255, 0.3)",
                      color: "oklch(0.75 0.22 210)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                {/* Hover icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0, 191, 255, 0.2)",
                      border: "1px solid rgba(0, 191, 255, 0.4)",
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-electric" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-white text-[15px] mb-1.5">
                  {project.title}
                </h3>
                <p className="text-white/45 text-[13px] leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium text-white/35"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
