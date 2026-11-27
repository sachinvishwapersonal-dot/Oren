import Link from "next/link";
import type { Metadata } from "next";
import { FaqSection } from "@/components/home/faq-section";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { MagnesiumTabs } from "@/components/home/magnesium-tabs";
import { ProductArt } from "@/components/product/product-art";
import { ProductCard } from "@/components/product/product-card";
import { ReelsSection } from "@/components/home/reels-section";
import { Reveal } from "@/components/ui/reveal";
import { ScienceSection } from "@/components/home/science-section";
import { TaglineReveal } from "@/components/home/tagline-reveal";
import { TrustStrip } from "@/components/home/trust-strip";
import { JsonLd } from "@/components/ui/json-ld";
import { ArrowIcon, PlayIcon } from "@/components/ui/icons";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { getProduct } from "@/data/products";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Recovery you can check",
  description:
    "Night Recovery Capsule (100 mg Tart Cherry, 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha, 50 mg L-Theanine) and Active Recovery (200 mg Tart Cherry, 200 mg L-Glutamine, Vitamin C, Zinc, Vitamin B6) chewable tablets.",
  alternates: { canonical: "/" },
};

const nightRecovery = getProduct("night-recovery")!;
const activeRecovery = getProduct("active-recovery")!;

const homepageFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <main id="main-content">
      <JsonLd data={homepageFaq} />

      <HeroShowcase />

      <section className="overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-paper)] py-8">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap font-mono text-[11px] tracking-[0.12em] text-[var(--color-graphite)]">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex items-center gap-10" aria-hidden={group === 1}>
              <span>CHEWABLE TABLETS</span><span className="text-[var(--color-signal)]">●</span>
              <span>150 MG MAGNESIUM BISGLYCINATE 22%</span><span className="text-[var(--color-signal)]">●</span>
              <span>200 MG TART CHERRY EXTRACT</span><span className="text-[var(--color-signal)]">●</span>
              <span>100 MG KSM-66 ASHWAGANDHA (5%)</span><span className="text-[var(--color-signal)]">●</span>
              <span>200 MG L-GLUTAMINE</span><span className="text-[var(--color-signal)]">●</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Night Recovery",
                subtitle: "Chewable tablets · Coming soon",
                copy: "100 mg Tart Cherry Extract, 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha (5% Withanolides), and 50 mg L-Theanine.",
                href: "/collections/night-recovery",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Active Recovery",
                subtitle: "Chewable tablets · Coming soon",
                copy: "200 mg Tart Cherry Extract, 200 mg L-Glutamine, 40 mg Vitamin C, 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (P-5-P).",
                href: "/collections/active-recovery",
                image:
                  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
              },
            ].map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <Link
                  href={card.href}
                  className="group relative flex aspect-[5/4] flex-col justify-between overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-ink)] p-6 text-white md:p-8"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1E20]/90 via-[#0F1E20]/30 to-[#0F1E20]/40" />
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-white/80">
                      {card.subtitle}
                    </span>
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <div className="relative">
                    <h2 className="text-4xl font-bold tracking-[-0.055em] md:text-5xl">
                      {card.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                      {card.copy}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white md:py-28">
        <Container>
          <div className="max-w-5xl">
            <h2 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.055em] md:text-6xl">
              Numbers before adjectives.
            </h2>
            <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              {[
                ["150 mg", "Magnesium Bisglycinate 22% per Night Recovery tab"],
                ["100 mg", "KSM-66 Ashwagandha (5% Withanolides) per tab"],
                ["200 mg", "Tart Cherry & L-Glutamine per Active Recovery tablet"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{value}</p>
                  <p className="mt-2 text-sm text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <ProductArt product={nightRecovery} className="rounded-[6px]" />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Evening wind-down & overnight recovery."
                copy="Night Recovery Capsule is a chewable tablet combining 100 mg Tart Cherry Extract (Generic), 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha Extract (5% Withanolides), and 50 mg L-Theanine."
              />
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[var(--color-line)] py-6">
                {[
                  ["150 mg", "Mg Bisglycinate 22%"],
                  ["100 mg", "KSM-66 (5%)"],
                  ["50 mg", "L-Theanine"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                    <p className="mt-1 text-xs text-[var(--color-graphite)]">{label}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href="/products/night-recovery" className="mt-8">
                Shop Night Recovery
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Explore the range."
            copy="Two targeted chewable tablet formulas with every ingredient declared in milligrams per tablet."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {[nightRecovery, activeRecovery].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <ReelsSection
        title="Training & recovery reels."
        copy="Post-session active recovery and evening wind-down."
      />

      <section id="supporting" className="bg-[var(--color-mist)] py-20 text-[var(--color-ink)] md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.055em] md:text-6xl">
                Post-session Active Recovery in a chewable tablet.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 opacity-80">
                Active Recovery combines 200 mg Tart Cherry Extract (Generic), 200 mg L-Glutamine, 40 mg Vitamin C (Ascorbic Acid), 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (Pyridoxal-5-Phosphate) per chewable tablet.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/products/active-recovery">Shop Active Recovery</ButtonLink>
                <ButtonLink href="/collections/active-recovery" variant="outline">
                  View formula
                </ButtonLink>
              </div>
            </div>
            <ProductArt product={activeRecovery} className="rounded-[6px]" />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-24 md:py-36">
        <Container>
          <TaglineReveal text="Know what is inside, how it is standardised, and when to use it." />
        </Container>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                title="Night Recovery Capsule."
                copy="Chewable tablets · Complete ingredient declaration per tab."
                light
              />
              <div className="mt-8 border-t border-white/15">
                {nightRecovery.formulaBreakdown.map((item) => (
                  <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/15 py-5">
                    <p className="text-base font-semibold">{item.name}</p>
                    <p className="font-mono text-sm text-white">{item.amount} / Tab</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                title="Active Recovery."
                copy="Chewable tablets · Complete ingredient declaration per tablet."
                light
              />
              <div className="mt-8 border-t border-white/15">
                {activeRecovery.formulaBreakdown.map((item) => (
                  <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/15 py-5">
                    <p className="text-base font-semibold">{item.name}</p>
                    <p className="font-mono text-sm text-white">{item.amount} / Tablet</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Nothing to hide. Everything to show.</h2>
            <ButtonLink href="/collections/all-products">Shop all products</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <Link href="/pages/about-us" className="group grid overflow-hidden rounded-[6px] bg-[var(--color-ink)] text-white lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative flex min-h-[360px] flex-col justify-between p-7 md:min-h-[460px] md:p-10">
              <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-white/10" />
              <div className="relative my-auto max-w-2xl">
                <p className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                  “You shouldn&apos;t have to guess what is in your tablet, decode proprietary blends, or settle for vague labels.”
                </p>
                <p className="mt-6 text-sm text-white/65">Oren Brand Principles</p>
              </div>
              <span className="relative inline-flex items-center gap-3 text-sm font-semibold text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 group-hover:scale-105"><PlayIcon size={16} /></span>
                About Oren
              </span>
            </div>
            <div className="relative min-h-[280px] overflow-hidden bg-[var(--color-ink)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85"
                alt="Athlete training outdoors"
                loading="lazy"
                className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <SectionHeading
            title="The problem we solve."
            copy="Four gaps in Indian recovery supplements shaped how Oren works."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Labels are hard to trust", "Indian lab studies have found products that do not match what their labels declare."],
              ["Standardisation left vague", "Extracts and mineral chelates are often listed without their actual standardisation percentage or active coenzyme form."],
              ["Promises bigger than science", "'Instant recovery' and 'no more cramps' overstate what ingredient evidence supports."],
              ["No clear usage boundaries", "Most supplements tell you to take them every day without explaining when rest and whole food are enough."],
            ].map(([title, copy]) => (
              <article key={title} className="bg-[var(--color-paper)] p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-graphite)]">{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <MagnesiumTabs />
      <ScienceSection />
      <FaqSection />

      <section id="start-here" className="bg-[var(--color-ink)] py-24 text-white md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">Recovery, minus the guesswork.</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Night Recovery Capsule for evening wind-down. Active Recovery for post-training sessions.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/collections/night-recovery" variant="secondary">Shop Night Recovery</ButtonLink>
              <ButtonLink href="/collections/active-recovery" variant="light">Shop Active Recovery</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
