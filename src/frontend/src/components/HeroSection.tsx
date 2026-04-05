import { ArrowRight, Calendar } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 hero-radial pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.08 0.015 240))",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 text-center">
        {/* Kicker badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(0, 191, 255, 0.08)",
            border: "1px solid rgba(0, 191, 255, 0.2)",
            animation: "fade-in 0.8s ease-out forwards",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.22_210)] animate-pulse" />
          <span className="section-kicker" style={{ fontSize: "10px" }}>
            AI-Powered Business Solutions
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(48px, 7vw, 80px)",
            animation: "fade-in-up 0.9s ease-out 0.1s both",
          }}
        >
          Turn <span className="gradient-text">AI</span> Into Profit
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/55 mx-auto mb-10 leading-relaxed"
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            maxWidth: "600px",
            animation: "fade-in-up 0.9s ease-out 0.25s both",
          }}
        >
          Automate your business, generate leads, and scale faster with
          AI-powered systems built for modern companies.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ animation: "fade-in-up 0.9s ease-out 0.4s both" }}
        >
          <button
            type="button"
            className="btn-primary px-8 py-3.5 rounded-full font-semibold text-[15px] flex items-center gap-2"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.primary_button"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="btn-secondary px-8 py-3.5 rounded-full font-semibold text-[15px] flex items-center gap-2"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.secondary_button"
          >
            <Calendar className="w-4 h-4" />
            Book Free Consultation
          </button>
        </div>

        {/* Trust micro-line */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/35"
          style={{ animation: "fade-in-up 0.9s ease-out 0.55s both" }}
        >
          {[
            "No credit card required",
            "14-day free trial",
            "Cancel anytime",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-white/30" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
