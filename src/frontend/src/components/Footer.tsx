import { Zap } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export function Footer() {
  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { Icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: SiX, href: "https://x.com", label: "Twitter/X" },
    { Icon: SiGithub, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="relative">
      <div className="divider-glow" />
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand + copyright */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.22 215), oklch(0.5 0.18 230))",
              }}
            >
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <div className="text-white/30 text-[13px] leading-relaxed">
              <span className="text-white/60 font-semibold">
                AI Profit Labs
              </span>{" "}
              •{" "}
              <span className="text-white/50">
                © 2026 Shubham Butola. All Rights Reserved.
              </span>
            </div>
          </div>

          {/* Links */}
          <nav
            className="flex items-center gap-6"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-white/70 transition-colors text-[12px]"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-white/70 transition-colors"
                data-ocid="nav.link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
