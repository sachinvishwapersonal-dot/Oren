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
    "Oren Hydrate (500 mg sodium, 120 mg elemental magnesium) and Oren Creatine (3 g 200-mesh creatine monohydrate). Plain doses and honest per-serving pricing.",
  alternates: { canonical: "/" },
};

const hydrate = getProduct("oren-hydrate")!;
const creatine = getProduct("oren-creatine")!;

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
              <span>ELEMENTAL DOSES</span><span className="text-[var(--color-signal)]">●</span>
              <span>500 MG SODIUM</span><span className="text-[var(--color-signal)]">●</span>
              <span>3 G CREATINE</span><span className="text-[var(--color-signal)]">●</span>
              <span>120 MG ELEMENTAL MAGNESIUM</span><span className="text-[var(--color-signal)]">●</span>
              <span>NO INFLATED MRP</span><span className="text-[var(--color-signal)]">●</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Hydration",
                subtitle: "Oren Hydrate · ₹30 / sachet",
                copy: "500 mg sodium, 120 mg elemental magnesium and 200 mg potassium for long, sweat-heavy sessions.",
                href: "/collections/hydration-series",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Creatine",
                subtitle: "Oren Creatine · ₹23 / sachet",
                copy: "3 g of 200-mesh creatine monohydrate per sachet. Nothing else added: no flavour, sweetener or filler.",
                href: "/collections/creatine",
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
                ["500 mg", "Sodium per Oren Hydrate sachet"],
                ["120 mg", "Elemental magnesium (3 forms)"],
                ["3 g", "200-mesh creatine monohydrate"],
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
              <ProductArt product={hydrate} className="rounded-[6px]" />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="For long, sweat-heavy sessions."
                copy="Oren Hydrate contains 500 mg sodium, 120 mg elemental magnesium and 200 mg potassium per sachet. For a 30-minute workout, plain water is usually enough."
              />
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[var(--color-line)] py-6">
                {[["500 mg", "Sodium"], ["120 mg", "Elemental Mg"], ["₹30", "Per sachet"]].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                    <p className="mt-1 text-xs text-[var(--color-graphite)]">{label}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href="/products/oren-hydrate" className="mt-8">Shop Oren Hydrate</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Explore the range."
            copy="Plain elemental doses and one fair daily price shown per sachet."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {[hydrate, creatine].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <ReelsSection
        title="Training & product reels."
        copy="Hydration in the heat and daily strength work."
      />

      <section id="supporting" className="bg-[var(--color-mist)] py-20 text-[var(--color-ink)] md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.055em] md:text-6xl">
                3 g creatine monohydrate. Nothing else added.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 opacity-80">
                Oren Creatine is 200-mesh creatine monohydrate in 3 g single-serve sachets—₹699 for 30 days, ₹23 a day, same price every day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/products/oren-creatine">Shop Oren Creatine</ButtonLink>
                <ButtonLink href="/collections/creatine" variant="outline">View creatine</ButtonLink>
              </div>
            </div>
            <ProductArt product={creatine} className="rounded-[6px]" />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-24 md:py-36">
        <Container>
          <TaglineReveal text="Know what is inside, when to use it, and what it costs per serving." />
        </Container>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <SectionHeading
              title="Elemental amounts, not compound weight."
              copy="Every active mineral in Oren Hydrate is listed by the actual elemental amount delivered per sachet."
              light
            />
            <div className="border-t border-white/15">
              {[
                ["Sodium", "500 mg", "For long, sweat-heavy sessions"],
                ["Potassium", "200 mg", "Alongside sodium and chloride"],
                ["Magnesium (Elemental)", "120 mg", "Malate 60 mg, L-threonate 40 mg, taurate 20 mg"],
                ["Micronutrients", "C, B6, B12", "Plus zinc and chromium"],
              ].map(([name, amount, detail]) => (
                <div key={name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/15 py-5">
                  <div>
                    <p className="text-base font-semibold">{name}</p>
                    <p className="mt-1 text-xs text-white/65">{detail}</p>
                  </div>
                  <p className="font-mono text-sm text-white">{amount}</p>
                </div>
              ))}
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
                  “You shouldn&apos;t have to guess what is in your scoop, decode compound weights, or pay inflated MRPs.”
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
              ["Compound vs elemental math", "Brands often show compound weight instead of the actual elemental dose inside each serving."],
              ["Promises bigger than science", "'Instant recovery' and 'no more cramps' overstate what ingredient evidence supports."],
              ["Discount pricing games", "Inflated MRPs with permanent '50% off' banners make a fair daily price hard to compare."],
            ].map(([title, copy], index) => (
              <article key={title} className="bg-[var(--color-paper)] p-6 md:p-8">
                <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-signal)]">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{title}</h3>
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
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Oren Hydrate for sweat-heavy heat. Oren Creatine for daily strength training.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/collections/hydration-series" variant="secondary">Shop Oren Hydrate</ButtonLink>
              <ButtonLink href="/collections/creatine" variant="light">Shop Oren Creatine</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
