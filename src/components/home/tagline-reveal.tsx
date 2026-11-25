"use client";

import { useEffect, useRef } from "react";

export function TaglineReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const words = Array.from(element.querySelectorAll<HTMLSpanElement>("[data-word]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((word) => (word.dataset.active = "true"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.active = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8, rootMargin: "0px 0px -12% 0px" },
    );
    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="max-w-5xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--color-ink)] md:text-6xl lg:text-7xl"
    >
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          data-word
          className="tagline-word mr-[0.22em] inline-block"
        >
          {word}
        </span>
      ))}
    </p>
  );
}
