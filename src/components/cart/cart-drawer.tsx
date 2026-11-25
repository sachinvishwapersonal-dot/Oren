"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { formatPrice, products } from "@/data/products";
import { useCart } from "@/components/cart/cart-provider";
import { CloseIcon, MinusIcon, PlusIcon } from "@/components/ui/icons";
import { ProductArt } from "@/components/product/product-art";

export function CartDrawer() {
  const {
    items,
    count,
    subtotal,
    subscriptionSavings,
    isOpen,
    closeCart,
    addItem,
    updateQuantity,
    removeItem,
  } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const missingProducts = products.filter(
    (product) => !items.some((item) => item.productId === product.id),
  );

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      closeRef.current?.focus();
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeCart();
        return;
      }
      if (event.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120]" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[var(--color-ink)]/55 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart"
        tabIndex={-1}
      />
      <aside
        ref={drawerRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-[517px] flex-col bg-[var(--color-paper)] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-5 md:px-6">
          <div>
            <h2
              id="cart-title"
              className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
            >
              Your cart
            </h2>
            <p className="mt-1 text-xs text-[var(--color-graphite)]">
              {count} {count === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] transition-colors hover:bg-[var(--color-mist)]"
            aria-label="Close cart"
          >
            <CloseIcon />
          </button>
        </div>

        {items.length ? (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-2 md:px-6">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.purchaseType}`}
                  className="flex gap-4 border-b border-[var(--color-line)] py-5"
                >
                  <Link
                    href={`/products/${item.product.handle}`}
                    aria-label={`View ${item.product.title}`}
                    onClick={() => {
                      if (pathname !== "/cart") closeCart();
                    }}
                    className="w-24 shrink-0 overflow-hidden rounded-[3px]"
                  >
                    <ProductArt product={item.product} />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                          {item.product.title}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--color-graphite)]">
                          {item.purchaseType === "once"
                            ? "Single box"
                            : "Monthly repeat"}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-semibold text-[var(--color-ink)]">
                          {formatPrice(item.lineTotal)}
                        </p>
                        {item.originalLineTotal > item.lineTotal ? (
                          <p className="text-xs text-[var(--color-graphite)] line-through">
                            {formatPrice(item.originalLineTotal)}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
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
                          className="flex h-8 w-8 items-center justify-center hover:bg-[var(--color-mist)]"
                          aria-label={`Decrease ${item.product.title} quantity`}
                        >
                          <MinusIcon size={13} />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold">
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
                          className="flex h-8 w-8 items-center justify-center hover:bg-[var(--color-mist)]"
                          aria-label={`Increase ${item.product.title} quantity`}
                        >
                          <PlusIcon size={13} />
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
                </div>
              ))}

              {missingProducts.length > 0 ? (
                <div className="my-5 rounded-[6px] border border-[var(--color-line)] bg-[var(--color-mist)] p-4">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-graphite)]">
                    Complete the daily routine
                  </p>
                  {missingProducts.map((companion) => (
                    <div
                      key={companion.id}
                      className="mt-3 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
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
                        className="button-shape shrink-0 bg-[var(--color-ink)] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-signal)]"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="border-t border-[var(--color-line)] bg-white px-5 py-5 md:px-6">
              {subscriptionSavings > 0 ? (
                <div className="mb-1.5 flex items-center justify-between text-xs text-[var(--color-graphite)]">
                  <span>Subscription savings</span>
                  <span className="font-medium text-[var(--color-signal)]">
                    −{formatPrice(subscriptionSavings)}
                  </span>
                </div>
              ) : null}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-graphite)]">Subtotal</span>
                <span className="text-lg font-semibold text-[var(--color-ink)]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-[var(--color-graphite)]">
                Taxes and delivery calculated at checkout.
              </p>
              <Link
                href="/cart"
                onClick={closeCart}
                className="button-shape mt-4 flex h-12 w-full items-center justify-center bg-[var(--color-signal)] text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-ink)]"
              >
                Review cart
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2.5 w-full py-1.5 text-xs text-[var(--color-graphite)] hover:text-[var(--color-ink)]"
              >
                Continue shopping
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-mist)]">
              <PlusIcon size={28} className="text-[var(--color-graphite)]" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-[var(--color-ink)]">
              Start with your day
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-graphite)]">
              Choose Oren Hydrate for heat or add Oren Creatine to build your routine.
            </p>
            <Link
              href="/collections/all-products"
              onClick={closeCart}
              className="button-shape mt-6 bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white"
            >
              Shop all products
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
