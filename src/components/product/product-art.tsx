import type { Product } from "@/data/products";

export type ProductArtView = "front" | "formula" | "format";

export function ProductArt({
  product,
  className = "",
  priority = false,
  view = "front",
}: {
  product: Product;
  className?: string;
  priority?: boolean;
  view?: ProductArtView;
}) {
  const viewIndex = view === "front" ? 0 : view === "formula" ? 1 : 2;
  const mediaItem = product.gallery[viewIndex] ?? product.gallery[0];
  const primarySrc = mediaItem?.src ?? product.image;

  return (
    <div
      className={`group/art relative isolate aspect-[4/5] overflow-hidden bg-[var(--color-mist)] ${className}`}
      data-priority={priority}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={primarySrc}
        alt={mediaItem?.alt ?? product.title}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover/art:scale-105"
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-signal)]" />
    </div>
  );
}
