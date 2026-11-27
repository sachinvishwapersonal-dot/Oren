"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice, products } from "@/data/products";
import { useCart } from "@/components/cart/cart-provider";
import { ProductArt } from "@/components/product/product-art";
import { MinusIcon, PlusIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/primitives";

export function CartView() {
  const {
    items,
    count,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const [checkoutStatus, setCheckoutStatus] = useState<"idle" | "ready">("idle");

  const missingProducts = products.filter(
    (product) => !items.some((item) => item.productId === product.id),
  );

  if (!items.length) {
    return (
      <Container>
        <div className="rounded-[6px] border border-[var(--color-line)] bg-white px-6 py-20 text-center">
          <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-graphite)]">
            YOUR CART IS EMPTY
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
            Start with your day.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--color-graphite)]">
            Choose Night Recovery Capsule for evening recovery or Active Recovery for post-training sessions.
          </p>
          <Link
            href="/collections/all-products"
            className="button-shape mt-8 inline-flex bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white"
          >
            Shop all products
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
        <div>
          <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
            <p className="text-sm text-[var(--color-graphite)]">
              {count} {count === 1 ? "item" : "items"}
            </p>
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-[var(--color-graphite)] underline underline-offset-4 hover:text-[var(--color-ink)]"
            >
              Clear cart
            </button>
          </div>
          {items.map((item) => (
            <article
              key={`${item.productId}-${item.purchaseType}`}
              className="grid grid-cols-[100px_1fr] gap-5 border-b border-[var(--color-line)] py-6 sm:grid-cols-[140px_1fr]"
            >
              <Link
                href={`/products/${item.product.handle}`}
                aria-label={`View ${item.product.title}`}
                className="overflow-hidden rounded-[3px]"
              >
                <ProductArt product={item.product} />
              </Link>
              <div className="flex min-w-0 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold tracking-[-0.025em]">
                      {item.product.title}
                    </h2>
                    <p className="mt-1 text-xs text-[var(--color-graphite)]">
                      {item.purchaseType === "once"
                        ? "Single pack"
                        : "Monthly repeat"}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-semibold">{formatPrice(item.lineTotal)}</p>
                    {item.originalLineTotal > item.lineTotal ? (
                      <p className="text-xs text-[var(--color-graphite)] line-through">
                        {formatPrice(item.originalLineTotal)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center rounded-[3px] border border-[var(--color-line)] bg-white">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.purchaseType,
                          item.quantity - 1,
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center hover:bg-[var(--color-mist)]"
                      aria-label={`Decrease ${item.product.title} quantity`}
                    >
                      <MinusIcon size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.purchaseType,
                          item.quantity + 1,
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center hover:bg-[var(--color-mist)]"
                      aria-label={`Increase ${item.product.title} quantity`}
                    >
                      <PlusIcon size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId, item.purchaseType)}
                    className="text-xs text-[var(--color-graphite)] underline underline-offset-4 hover:text-[var(--color-ink)]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}

          {missingProducts.length > 0 ? (
            <div className="mt-8 rounded-[6px] border border-[var(--color-line)] bg-[var(--color-mist)] p-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-graphite)]">
                Complete the daily routine
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {missingProducts.map((companion) => (
                  <div
                    key={companion.id}
                    className="flex items-center justify-between gap-4 rounded-[3px] border border-[var(--color-line)] bg-white p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-ink)]">
                        {companion.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--color-graphite)]">
                        {companion.subtitle} · {formatPrice(companion.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => addItem(companion.id, 1, "once")}
                      className="button-shape shrink-0 bg-[var(--color-ink)] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-signal)]"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="h-fit rounded-[6px] border border-[var(--color-line)] bg-white p-6 lg:sticky lg:top-28">
          <h2 className="text-xl font-semibold tracking-[-0.03em]">Order summary</h2>

          <div className="mt-6 space-y-3 border-b border-[var(--color-line)] pb-5 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--color-graphite)]">Availability</span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-signal)]">
                Coming soon
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-graphite)]">Launch status</span>
              <span>Pre-launch showcase</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-5">
            <span className="text-sm">Ordering</span>
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-signal)]">
              Coming soon
            </span>
          </div>
          <button
            type="button"
            onClick={() => setCheckoutStatus("ready")}
            className="button-shape mt-6 h-12 w-full bg-[var(--color-signal)] text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-ink)]"
          >
            Continue to checkout
          </button>
          {checkoutStatus === "ready" ? (
            <p
              className="mt-4 rounded-[3px] bg-[var(--color-mist)] p-3 text-xs leading-5 text-[var(--color-graphite)]"
              role="status"
            >
              Checkout will open at launch.
            </p>
          ) : null}
          <Link
            href="/collections/all-products"
            className="mt-4 block text-center text-xs text-[var(--color-graphite)] underline underline-offset-4 hover:text-[var(--color-ink)]"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </Container>
  );
}
