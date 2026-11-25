import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";
import { Container, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Your cart",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <main id="main-content" className="bg-[var(--color-paper)] pb-20 pt-[88px] md:pt-[96px]">
      <section className="py-10 md:py-16">
        <Container>
          <Eyebrow>Review your order</Eyebrow>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">Your cart.</h1>
          <div className="mt-10"><CartView /></div>
        </Container>
      </section>
    </main>
  );
}
