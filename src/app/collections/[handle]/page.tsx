import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollection, getProductsForCollection } from "@/data/products";
import { ProductArt } from "@/components/product/product-art";
import { ProductCard } from "@/components/product/product-card";
import { ReelsSection } from "@/components/home/reels-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { JsonLd } from "@/components/ui/json-ld";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { siteConfig } from "@/data/site";

type PageProps = { params: Promise<{ handle: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((collection) => ({ handle: collection.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = getCollection(handle);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.description,
    alternates: { canonical: `/collections/${collection.handle}` },
    openGraph: {
      title: collection.title,
      description: collection.description,
      url: `/collections/${collection.handle}`,
    },
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;
  const collection = getCollection(handle);
  if (!collection) notFound();
  const collectionProducts = getProductsForCollection(handle);
  const featured = collectionProducts[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/collections/${collection.handle}#collection`,
    name: collection.title,
    description: collection.description,
    url: `${siteConfig.url}/collections/${collection.handle}`,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: collectionProducts.length,
      itemListElement: collectionProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.title,
        url: `${siteConfig.url}/products/${product.handle}`,
      })),
    },
  };

  return (
    <main id="main-content" className="pt-[88px] md:pt-[96px]">
      <JsonLd data={jsonLd} />
      <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] md:text-7xl">{collection.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/60">{collection.description}</p>
            </div>
            {featured ? <ProductArt product={featured} className="rounded-[6px]" /> : null}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] bg-white py-5">
        <Container>
          <nav aria-label="Product categories" className="flex gap-2 overflow-x-auto">
            {[
              { label: "Night Recovery", href: "/collections/night-recovery" },
              { label: "Active Recovery", href: "/collections/active-recovery" },
              { label: "All", href: "/collections/all-products" },
            ].map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={tab.href === `/collections/${collection.handle}` ? "page" : undefined}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  tab.href === `/collections/${collection.handle}`
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] text-[var(--color-graphite)] hover:border-[var(--color-ink)]/40 hover:text-[var(--color-ink)]"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-16 md:py-24">
        <Container>
          {collectionProducts.length ? (
            <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2">
              {collectionProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 2} />
              ))}
            </div>
          ) : (
            <div className="rounded-[6px] border border-[var(--color-line)] bg-white p-10 text-center">
              <h2 className="text-2xl font-semibold">This collection is being prepared.</h2>
              <p className="mt-3 text-sm text-[var(--color-graphite)]">Explore the full range in the meantime.</p>
              <ButtonLink href="/collections/all-products" className="mt-6">Shop all products</ButtonLink>
            </div>
          )}
        </Container>
      </section>

      <ReelsSection
        title="Training & product reels."
        copy="See the formulas in daily training."
      />
      <TrustStrip />
    </main>
  );
}
