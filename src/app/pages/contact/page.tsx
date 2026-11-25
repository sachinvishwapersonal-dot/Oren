import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { FaqSection } from "@/components/home/faq-section";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { faqs, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Oren team for product or order questions.",
  alternates: { canonical: "/pages/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-[88px] md:pt-[96px]">
      <section className="bg-[var(--color-paper)] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">Talk to a human.</h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[var(--color-graphite)]">Product questions and order support start here.</p>
              <div className="mt-10 space-y-5 border-t border-[var(--color-line)] pt-8 text-sm">
                <div><p className="text-[var(--color-graphite)]">Email</p><a href={`mailto:${siteConfig.email}`} className="mt-1 block font-medium hover:underline">{siteConfig.email}</a></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
      <FaqSection title="Support answers." items={faqs.slice(4)} />
    </main>
  );
}
