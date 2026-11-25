"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = product.gallery;
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <div>
      <div
        id={`product-gallery-stage-${product.id}`}
        role="region"
        aria-label={`${product.title} — ${activeItem.label}`}
        className="relative isolate aspect-[4/5] overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-ink)]"
      >
        <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[var(--color-signal)]" />

        {activeItem.type === "reel" ? (
          <video
            key={activeItem.src}
            src={activeItem.src}
            poster={activeItem.poster}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt={activeItem.alt}
            className="h-full w-full object-cover transition-transform duration-700"
          />
        )}
      </div>

      <div
        className="mt-3 grid grid-cols-4 gap-2.5"
        role="tablist"
        aria-label={`${product.title} media gallery`}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const thumbSrc = item.type === "reel" ? item.poster ?? product.image : item.src;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`product-gallery-stage-${product.id}`}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-[4px] border text-left transition-all ${
                isActive
                  ? "border-[var(--color-signal)] ring-2 ring-[var(--color-signal)]/30"
                  : "border-[var(--color-line)] opacity-80 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-mist)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbSrc}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.type === "reel" ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-[#0F1E20]/45">
                    <span className="rounded-full bg-[var(--color-signal)] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
                      Reel ▶
                    </span>
                  </span>
                ) : null}
              </div>
              <div className="bg-white px-2 py-1.5">
                <p className="truncate font-mono text-[10px] font-medium tracking-[0.04em] text-[var(--color-ink)]">
                  {item.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
