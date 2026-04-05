import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function handleFocus(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) {
  e.currentTarget.style.borderColor = "oklch(0.55 0.2 215)";
}

function handleBlur(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) {
  e.currentTarget.style.borderColor = "oklch(0.22 0.03 240)";
}

const inputStyle = {
  background: "oklch(0.11 0.02 240)",
  border: "1px solid oklch(0.22 0.03 240)",
};

export function ContactSection() {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <div className="section-kicker mb-3">Get In Touch</div>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
            >
              Book Your Free Consultation
            </h2>
            <p className="text-white/50 text-[15px]">
              Tell us about your business and we'll craft a custom AI strategy.
            </p>
          </div>

          {submitted ? (
            <div
              className="text-center py-16 reveal"
              data-ocid="contact.success_state"
            >
              <CheckCircle className="w-16 h-16 icon-blue mx-auto mb-4" />
              <h3 className="font-bold text-white text-[20px] mb-2">
                Message Received!
              </h3>
              <p className="text-white/50 text-[14px]">
                We'll reach out within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 reveal"
              data-ocid="contact.modal"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-white/60 text-[12px] font-medium uppercase tracking-wide mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-[14px] outline-none transition-all"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  data-ocid="contact.input"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-white/60 text-[12px] font-medium uppercase tracking-wide mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-[14px] outline-none transition-all"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  data-ocid="contact.input"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-white/60 text-[12px] font-medium uppercase tracking-wide mb-1.5"
                >
                  Tell Us About Your Business
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Describe your business and what you want to achieve with AI..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-[14px] outline-none transition-all resize-none"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 mt-2"
                data-ocid="contact.submit_button"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
