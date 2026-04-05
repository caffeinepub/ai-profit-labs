import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const revealElements = el.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    for (const revealEl of revealElements) {
      observer.observe(revealEl);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useElementReveal<T extends Element = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
