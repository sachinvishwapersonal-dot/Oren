import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { JsonLd } from "@/components/ui/json-ld";
import { ArrowIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description: "Oren makes recovery supplements in India you can check: elemental doses, clear usage limits, and honest per-serving pricing.",
  alternates: { canonical: "/pages/about-us" },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.url}/pages/about-us#about`,
  url: `${siteConfig.url}/pages/about-us`,
  name: "About Us",
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@id": `${siteConfig.url}/#organization`,
  },
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-[88px] md:pt-[96px]">
      <JsonLd data={aboutPageJsonLd} />
      <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
                Recovery you can check.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                Oren makes recovery supplements with clear elemental doses, guidance on when to use them—and when not to—and one fair per-serving price.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[var(--color-mist)] text-[var(--color-ink)]">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[var(--color-ink)]/15" />
              <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full border border-[var(--color-ink)]/15" />
              <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
                <p className="text-7xl font-semibold tracking-[-0.09em] md:text-9xl">OREN</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading
              title="Why Oren exists."
            />
            <div className="space-y-6 text-base leading-7 text-[var(--color-graphite)]">
              <p>
                Indian supplement buyers face labels that are hard to trust, compound weights that obscure actual elemental doses, promises bigger than ingredient science, and inflated MRPs with permanent discounts.
              </p>
              <p>
                Oren is built around a narrower, verifiable standard: show the exact elemental dose on the front, explain when a product is worth taking (and when plain water or food is enough), and charge one transparent price per sachet.
              </p>
              <p>
                Every final formula, label, and statement goes through Indian food-regulatory review and accredited batch testing before commercial release.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <SectionHeading title="Four brand pillars." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Know what's inside", "Every active ingredient shown in the elemental amount that matters, with no proprietary blends."],
              ["Know when to use it", "Clear use occasions on every page alongside honest 'when you don't need this' guidance."],
              ["Check the batch", "Independent lab certificates tied directly to the batch number on the pack at launch."],
              ["Honest price", "One fair everyday price shown per sachet—no inflated MRPs or permanent discount banners."],
            ].map(([title, copy], index) => (
              <article key={title} className="bg-[var(--color-paper)] p-6 md:p-8">
                <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-signal)]">
                  0{index + 1}
                </p>
                <h2 className="mt-10 text-2xl font-semibold tracking-[-0.035em]">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--color-graphite)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["500 mg", "Sodium in Oren Hydrate"],
              ["120 mg", "Elemental magnesium (3 forms)"],
              ["3 g", "Creatine per Oren Creatine sachet"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[6px] border border-[var(--color-line)] bg-white p-7"
              >
                <p className="text-5xl font-semibold tracking-[-0.065em]">{value}</p>
                <p className="mt-4 text-sm text-[var(--color-graphite)]">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-line)] pt-10 md:flex-row md:items-center">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
              Explore the range.
            </h2>
            <Link
              href="/collections/all-products"
              className="inline-flex items-center gap-3 text-sm font-semibold"
            >
              Shop the range <ArrowIcon size={16} />
            </Link>
          </div>
          <ButtonLink href="/pages/contact" className="mt-8">
            Contact us
          </ButtonLink>
        </Container>
      </section>
    </main>
  );
}
