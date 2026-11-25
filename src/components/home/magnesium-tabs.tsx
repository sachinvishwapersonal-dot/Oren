"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { magnesiumForms } from "@/data/site";
import { Container, SectionHeading } from "@/components/ui/primitives";

export function MagnesiumTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const form = magnesiumForms[active];

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % magnesiumForms.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + magnesiumForms.length) % magnesiumForms.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = magnesiumForms.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="magnesium" className="bg-[var(--color-mist)] py-20 md:py-28">
      <Container>
        <SectionHeading
          title="One mineral. Three forms."
          copy="120 mg of elemental magnesium, split across a measured three-form blend."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div role="tablist" aria-label="Magnesium forms" className="flex flex-col border-t border-[var(--color-line)]">
              {magnesiumForms.map((item, index) => (
                <button
                  key={item.id}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  id={`magnesium-tab-${item.id}`}
                  role="tab"
                  aria-selected={active === index}
                  aria-controls={`magnesium-panel-${item.id}`}
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`flex items-center justify-between border-b border-[var(--color-line)] py-6 text-left transition-colors duration-200 ${
                    active === index ? "text-[var(--color-ink)]" : "text-[var(--color-graphite)] hover:text-[var(--color-graphite)]"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[10px] tracking-[0.12em]">0{index + 1}</span>
                    <span className="text-lg font-semibold tracking-[-0.025em] md:text-xl">{item.name}</span>
                  </span>
                  <span className="font-mono text-sm">{item.amount}</span>
                </button>
              ))}
            </div>
          </div>
          <div
            id={`magnesium-panel-${form.id}`}
            role="tabpanel"
            aria-labelledby={`magnesium-tab-${form.id}`}
            className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[6px] bg-[var(--color-ink)] p-7 text-white md:p-10"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="relative">
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/65">Elemental magnesium</p>
              <p className="mt-6 text-7xl font-semibold tracking-[-0.07em] md:text-8xl">{form.amount}</p>
              <p className="mt-4 text-lg font-medium text-white">{form.role}</p>
            </div>
            <p className="relative mt-12 max-w-md text-sm leading-6 text-white/60 md:text-base md:leading-7">{form.copy}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
