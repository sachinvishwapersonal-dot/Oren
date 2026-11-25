"use client";

import { useId, useState } from "react";
import {
  formatPrice,
  getPerServingPrice,
  getSubscriptionDiscountPercent,
  getUnitPrice,
  type Product,
  type PurchaseType,
} from "@/data/products";
import { useCart } from "@/components/cart/cart-provider";
import { MinusIcon, PlusIcon } from "@/components/ui/icons";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("once");
  const groupName = useId();

  const options: {
    value: PurchaseType;
    label: string;
    detail: string;
    badge?: string;
  }[] = [
    { value: "once", label: "One time", detail: "30 sachets · single delivery" },
    ...(product.subscriptionEligible
      ? [
          {
            value: "monthly" as const,
            label: "Every month",
            detail: "30 sachets delivered monthly · cancel anytime",
            badge: "Save 10%",
          },
          {
            value: "quarterly" as const,
            label: "Every 3 months",
            detail: "Quarterly supply replenishment · cancel anytime",
            badge: "Save 15%",
          },
        ]
      : []),
  ];

  const selectedUnitPrice = getUnitPrice(product.price, purchaseType);
  const selectedPerServing = getPerServingPrice(
    product.price,
    product.servings,
    purchaseType,
  );

  return (
    <div className="mt-8">
      {product.subscriptionEligible ? (
        <fieldset>
          <div className="flex items-center justify-between">
            <legend className="text-sm font-semibold text-[var(--color-ink)]">
              Purchase option
            </legend>
            <span className="font-mono text-xs text-[var(--color-graphite)]">
              {formatPrice(selectedPerServing)} / sachet
            </span>
          </div>
          <div className="mt-3 grid gap-2">
            {options.map((option) => {
              const optionPrice = getUnitPrice(product.price, option.value);
              const discount = getSubscriptionDiscountPercent(option.value);
              const isSelected = purchaseType === option.value;
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center justify-between rounded-[3px] border px-4 py-3 transition-colors duration-200 ${
                    isSelected
                      ? "border-[var(--color-ink)] bg-white shadow-xs"
                      : "border-[var(--color-line)] bg-transparent hover:border-[var(--color-ink)]/40"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name={groupName}
                      value={option.value}
                      checked={isSelected}
                      onChange={() => setPurchaseType(option.value)}
                      className="h-4 w-4 accent-[var(--color-ink)]"
                    />
                    <span>
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[var(--color-ink)]">
                          {option.label}
                        </span>
                        {option.badge ? (
                          <span className="rounded-[2px] bg-[var(--color-signal)] px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
                            {option.badge}
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block text-xs text-[var(--color-graphite)]">
                        {option.detail}
                      </span>
                    </span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-sm font-semibold text-[var(--color-ink)]">
                      {formatPrice(optionPrice)}
                    </span>
                    {discount > 0 ? (
                      <span className="block text-xs text-[var(--color-graphite)] line-through">
                        {formatPrice(product.price)}
                      </span>
                    ) : null}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <div className="mt-5 flex gap-3">
        <div className="flex h-14 items-center rounded-[3px] border border-[var(--color-line)] bg-white">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="flex h-full w-11 items-center justify-center text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mist)]"
            aria-label="Decrease quantity"
          >
            <MinusIcon size={16} />
          </button>
          <span
            className="w-8 text-center text-sm font-semibold text-[var(--color-ink)]"
            aria-live="polite"
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(99, value + 1))}
            className="flex h-full w-11 items-center justify-center text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mist)]"
            aria-label="Increase quantity"
          >
            <PlusIcon size={16} />
          </button>
        </div>
        <button
          type="button"
          onClick={() => addItem(product.id, quantity, purchaseType)}
          className="button-shape flex h-14 flex-1 items-center justify-center bg-[var(--color-signal)] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--color-ink)] active:translate-y-px"
        >
          Add to cart · {formatPrice(selectedUnitPrice * quantity)}
        </button>
      </div>
    </div>
  );
}
