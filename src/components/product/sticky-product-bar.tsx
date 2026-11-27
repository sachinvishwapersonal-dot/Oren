"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { Container } from "@/components/ui/primitives";

export function StickyProductBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 620);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--color-line)] bg-white/95 py-3 shadow-[0_-8px_24px_rgba(15,30,32,0.08)] backdrop-blur-md"
      role="region"
      aria-label={`Launch status bar for ${product.title}`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <p className="truncate text-sm font-bold text-[var(--color-ink)] md:text-base">
                {product.title}
              </p>
              <span className="hidden rounded-full bg-[var(--color-mist)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--color-graphite)] sm:inline-block">
                {product.servings} chewable tablets · Coming soon
              </span>
            </div>
            <p className="truncate text-xs text-[var(--color-graphite)]">
              {product.subtitle}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-signal)] sm:inline">
              Coming soon
            </span>
            <Link
              href="/pages/contact"
              className="button-shape flex h-11 items-center justify-center bg-[var(--color-signal)] px-5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-ink)]"
            >
              Notify me
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
