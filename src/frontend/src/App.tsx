import { BenefitsSection } from "./components/BenefitsSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { SocialProofSection } from "./components/SocialProofSection";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "oklch(0.08 0.015 240)" }}
    >
      {/* Header */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Social Proof / Trust */}
        <SocialProofSection />

        {/* 3. Services */}
        <ServicesSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Featured Work */}
        <ShowcaseSection />

        {/* 6. Benefits */}
        <BenefitsSection />

        {/* 7. CTA */}
        <CTASection />

        {/* 8. Contact form (lead capture) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
