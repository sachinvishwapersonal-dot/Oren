"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getProductById,
  getUnitPrice,
  type Product,
  type PurchaseType,
} from "@/data/products";

export type { PurchaseType };

export type CartItem = {
  productId: string;
  quantity: number;
  purchaseType: PurchaseType;
};

export type DetailedCartItem = CartItem & {
  product: Product;
  unitPrice: number;
  lineTotal: number;
  originalLineTotal: number;
};

type CartContextValue = {
  items: DetailedCartItem[];
  count: number;
  subtotal: number;
  originalSubtotal: number;
  subscriptionSavings: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: string, quantity?: number, purchaseType?: PurchaseType) => void;
  updateQuantity: (productId: string, purchaseType: PurchaseType, quantity: number) => void;
  removeItem: (productId: string, purchaseType: PurchaseType) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "oren-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [rawItems, setRawItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate client-only cart after mount
          setRawItems(
            parsed.filter(
              (item) =>
                getProductById(item.productId) &&
                Number.isFinite(item.quantity) &&
                item.quantity > 0 &&
                ["once", "monthly", "quarterly"].includes(item.purchaseType),
            ),
          );
        }
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(storageKey, JSON.stringify(rawItems));
    }
  }, [rawItems, hydrated]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const addItem = useCallback(
    (productId: string, quantity = 1, purchaseType: PurchaseType = "once") => {
      if (!getProductById(productId)) return;
      setRawItems((current) => {
        const existing = current.find(
          (item) => item.productId === productId && item.purchaseType === purchaseType,
        );
        if (existing) {
          return current.map((item) =>
            item === existing
              ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
              : item,
          );
        }
        return [...current, { productId, quantity: Math.min(quantity, 99), purchaseType }];
      });
      setIsOpen(true);
    },
    [],
  );

  const updateQuantity = useCallback(
    (productId: string, purchaseType: PurchaseType, quantity: number) => {
      if (quantity <= 0) {
        setRawItems((current) =>
          current.filter(
            (item) => !(item.productId === productId && item.purchaseType === purchaseType),
          ),
        );
        return;
      }
      setRawItems((current) =>
        current.map((item) =>
          item.productId === productId && item.purchaseType === purchaseType
            ? { ...item, quantity: Math.min(quantity, 99) }
            : item,
        ),
      );
    },
    [],
  );

  const removeItem = useCallback((productId: string, purchaseType: PurchaseType) => {
    setRawItems((current) =>
      current.filter(
        (item) => !(item.productId === productId && item.purchaseType === purchaseType),
      ),
    );
  }, []);

  const clearCart = useCallback(() => {
    setRawItems([]);
  }, []);

  const items = useMemo(
    () =>
      rawItems.flatMap((item) => {
        const product = getProductById(item.productId);
        if (!product) return [];
        const unitPrice = getUnitPrice(product.price, item.purchaseType);
        return [
          {
            ...item,
            product,
            unitPrice,
            lineTotal: unitPrice * item.quantity,
            originalLineTotal: product.price * item.quantity,
          },
        ];
      }),
    [rawItems],
  );

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.lineTotal, 0),
    [items],
  );
  const originalSubtotal = useMemo(
    () => items.reduce((total, item) => total + item.originalLineTotal, 0),
    [items],
  );
  const subscriptionSavings = Math.max(0, originalSubtotal - subtotal);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      originalSubtotal,
      subscriptionSavings,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [
      items,
      count,
      subtotal,
      originalSubtotal,
      subscriptionSavings,
      isOpen,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
