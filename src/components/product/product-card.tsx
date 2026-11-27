"use client";

import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="group flex min-w-0 flex-col">
      <div className="relative overflow-hidden rounded-[3px] bg-[var(--color-mist)]">
        <Link
          href={`/products/${product.handle}`}
          aria-label={`View ${product.title}`}
          className="relative block aspect-[4/5] w-full overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-0"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.hoverImage}
            alt={`${product.title} training view`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-signal)]" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.025em] text-[var(--color-ink)]">
              <Link href={`/products/${product.handle}`}>{product.title}</Link>
            </h3>
            <p className="mt-1 text-sm leading-5 text-[var(--color-graphite)]">
              {product.subtitle}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-signal)]">
              Coming soon
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] text-[var(--color-graphite)]">
          <span>{product.servings} chewable tablets</span>
          <span aria-hidden="true">/</span>
          <span>{product.flavour}</span>
        </div>
      </div>
    </article>
  );
}
