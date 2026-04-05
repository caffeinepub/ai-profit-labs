import { ArrowRight } from "lucide-react";
import { useElementReveal } from "../hooks/useScrollReveal";

export function CTASection() {
  const titleRef = useElementReveal<HTMLDivElement>();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="cta-radial absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 hero-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <div ref={titleRef} className="reveal">
          <div className="section-kicker mb-4">Ready to Transform?</div>
          <h2
            className="font-extrabold text-white mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.1" }}
          >
            Start Your AI Journey
            <br />
            <span className="gradient-text">Today</span>
          </h2>
          <p className="text-white/50 text-[16px] max-w-lg mx-auto mb-10">
            Join 100+ businesses already leveraging AI to automate operations,
            generate leads, and scale profitably.
          </p>

          {/* Pulse CTA button */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              className="btn-primary btn-pulse px-10 py-4 rounded-full font-bold text-[16px] flex items-center gap-2"
              onClick={scrollToContact}
              data-ocid="cta.primary_button"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Micro trust */}
          <p className="mt-6 text-white/25 text-[13px]">
            Free consultation • No commitment required • Results in 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
