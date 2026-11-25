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
  title: "Hydration for heat. Creatine for strength.",
  description:
    "Oren electrolytes and creatine monohydrate, built around 500 mg sodium, 120 mg magnesium and 5 g creatine per sachet.",
  alternates: { canonical: "/" },
};

const air = getProduct("oren-air")!;
const creatine = getProduct("simply-creatine")!;

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
              <span>ZERO SUGAR</span><span className="text-[var(--color-signal)]">●</span>
              <span>500 MG SODIUM</span><span className="text-[var(--color-signal)]">●</span>
              <span>5 G CREATINE</span><span className="text-[var(--color-signal)]">●</span>
              <span>120 MG MAGNESIUM</span><span className="text-[var(--color-signal)]">●</span>
              <span>30 SACHETS PER BOX</span><span className="text-[var(--color-signal)]">●</span>
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
                subtitle: "Oren Air",
                copy: "500 mg sodium, 120 mg magnesium and 200 mg potassium for heat, outdoor sessions and saunas.",
                href: "/collections/hydration-series",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
              },
              {
                title: "Creatine",
                subtitle: "Simply Creatine",
                copy: "5 g creatine monohydrate per sachet, with no flavour, sweetener, colour or filler.",
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
              Measured for daily training.
            </h2>
            <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              {[
                ["500 mg", "Sodium per Oren Air sachet"],
                ["120 mg", "Three-form elemental magnesium"],
                ["5 g", "200-mesh creatine monohydrate"],
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
              <ProductArt product={air} className="rounded-[6px]" />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="For the days that run hot."
                copy="Oren Air combines 500 mg sodium, 120 mg magnesium and 200 mg potassium with a clean rhubarb flavour and zero sugar."
              />
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[var(--color-line)] py-6">
                {[["500 mg", "Sodium"], ["120 mg", "Magnesium"], ["0 g", "Sugar"]].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                    <p className="mt-1 text-xs text-[var(--color-graphite)]">{label}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href="/products/oren-air" className="mt-8">Shop Oren Air</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Explore the range."
            copy="Targeted hydration and pure creatine in single-serve sachets."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {[air, creatine].map((product) => (
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
                Five grams of pure creatine. Every day.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 opacity-80">
                Simply Creatine is 200 mesh creatine monohydrate and nothing else. No flavour, sweetener, colour or filler.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/products/simply-creatine">Shop creatine</ButtonLink>
                <ButtonLink href="/collections/creatine" variant="outline">View creatine</ButtonLink>
              </div>
            </div>
            <ProductArt product={creatine} className="rounded-[6px]" />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-24 md:py-36">
        <Container>
          <TaglineReveal text="Hydration for heat. Creatine for strength. Built for the daily routine." />
        </Container>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <SectionHeading
              title="More than salt and sugar."
              copy="Oren Air brings electrolytes, magnesium and essential micronutrients together in a single daily sachet."
              light
            />
            <div className="border-t border-white/15">
              {[
                ["Sodium", "500 mg", "For heat and heavy sweat"],
                ["Potassium", "200 mg", "Alongside sodium and chloride"],
                ["Magnesium", "120 mg", "Malate, L-threonate and taurate"],
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
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Built around the day.</h2>
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
                  “Every dose is on the front of the box, and every ingredient has a clear job.”
                </p>
                <p className="mt-6 text-sm text-white/65">Founder, Oren</p>
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
            title="The category can be simpler."
            copy="Four common problems shaped how we formulate."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Sugar first", "Many hydration drinks lead with sugar or artificial syrups instead of a clean electrolyte balance."],
              ["Underdosed sodium", "Lightly salted water falls short during hot sessions, outdoor training and heavy sweat."],
              ["Magnesium as an afterthought", "Oren Air puts a measured 120 mg three-form magnesium blend in every sachet."],
              ["Pre-measured format", "Single-serve sachets mix cleanly into 500 ml of cold water with no scoops or guesswork."],
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
            <h2 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">Hydrate. Add creatine.</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Oren Air for heat. Simply Creatine every day.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/collections/hydration-series" variant="secondary">Shop Oren Air</ButtonLink>
              <ButtonLink href="/collections/creatine" variant="light">Shop creatine</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
