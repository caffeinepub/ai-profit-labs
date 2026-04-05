import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
  { label: "Benefits", href: "#benefits" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur" : "bg-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.22_215)] to-[oklch(0.5_0.18_230)] flex items-center justify-center glow-blue-sm">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-[15px] tracking-tight text-white">
            <span className="text-gold">AI</span> Profit Labs
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/60 hover:text-white transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="px-5 py-2 rounded-full btn-secondary text-[12px] font-semibold uppercase tracking-[0.08em]"
            data-ocid="nav.primary_button"
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden navbar-blur border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[13px] font-medium uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 rounded-full btn-secondary text-[12px] font-semibold uppercase tracking-[0.08em] text-center"
              data-ocid="nav.primary_button"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
