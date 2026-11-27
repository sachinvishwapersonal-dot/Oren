"use client";

import Link from "next/link";
import type { Product } from "@/data/products";

export function AddToCart({ product }: { product: Product }) {
  return (
    <div className="mt-8 rounded-[6px] border border-[var(--color-line)] bg-[var(--color-mist)] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-signal)]">
            Coming soon
          </p>
          <p className="mt-1 text-sm text-[var(--color-graphite)]">
            {product.title} ({product.servings} chewable tablets) is currently in pre-launch preparation.
          </p>
        </div>
        <Link
          href="/pages/contact"
          className="button-shape inline-flex h-12 shrink-0 items-center justify-center bg-[var(--color-ink)] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-signal)]"
        >
          Enquire / Notify me
        </Link>
      </div>
    </div>
  );
}
