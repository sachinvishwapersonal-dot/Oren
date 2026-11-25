import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/product/add-to-cart";
import { MagnesiumTabs } from "@/components/home/magnesium-tabs";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductCard } from "@/components/product/product-card";
import { ReelsSection } from "@/components/home/reels-section";
import { StickyProductBar } from "@/components/product/sticky-product-bar";
import { TrustStrip } from "@/components/home/trust-strip";
import { JsonLd } from "@/components/ui/json-ld";
import { Badge, ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { ArrowIcon, CheckIcon, PlayIcon } from "@/components/ui/icons";
import {
  formatPrice,
  getPerServingPrice,
  getProduct,
  products,
} from "@/data/products";
import { siteConfig } from "@/data/site";

type PageProps = { params: Promise<{ handle: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/${product.handle}` },
    openGraph: {
      type: "website",
      title: product.title,
      description: product.description,
      url: `/products/${product.handle}`,
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: product.title }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const related = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.collections.some((collection) => product.collections.includes(collection)),
    )
    .slice(0, 4);
  const fallbackRelated = products.filter((item) => item.id !== product.id).slice(0, 4);
  const relatedProducts = related.length ? related : fallbackRelated;
  const perServing = getPerServingPrice(product.price, product.servings);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/products/${product.handle}#product`,
    name: product.title,
    description: product.description,
    image: [`${siteConfig.url}/og-image.svg`],
    sku: product.id,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.handle}`,
      price: product.price,
      priceCurrency: product.currency,
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${siteConfig.url}/#organization` },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: siteConfig.countryCode,
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "All products",
        item: `${siteConfig.url}/collections/all-products`,
      },
      { "@type": "ListItem", position: 3, name: product.title },
    ],
  };

  return (
    <main id="main-content" className="pt-[88px] md:pt-[96px]">
      <JsonLd data={[productJsonLd, breadcrumbJsonLd]} />
      <section className="bg-[var(--color-paper)] py-10 md:py-16">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[var(--color-graphite)]"
          >
            <Link href="/" className="hover:text-[var(--color-ink)]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/collections/all-products"
              className="hover:text-[var(--color-ink)]"
            >
              All products
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-ink)]">{product.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery product={product} />

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="signal">{product.productType}</Badge>
                {product.badge ? <Badge>{product.badge}</Badge> : null}
              </div>
              <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                {product.title}
              </h1>
              <p className="mt-4 text-lg text-[var(--color-graphite)]">
                {product.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
                {product.compareAtPrice ? (
                  <p className="text-base text-[var(--color-graphite)] line-through">
                    {formatPrice(product.compareAtPrice)}
                  </p>
                ) : null}
                <span className="font-mono text-xs text-[var(--color-graphite)]">
                  ({formatPrice(perServing)} / sachet · incl. GST)
                </span>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-6 text-[var(--color-graphite)] md:text-base md:leading-7">
                {product.longDescription}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-[var(--color-graphite)]"
                  >
                    <CheckIcon
                      size={15}
                      className="mt-0.5 shrink-0 text-[var(--color-signal)]"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
              <AddToCart product={product} />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <section className="bg-[var(--color-ink)] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <Eyebrow light>Made for real days</Eyebrow>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.055em] md:text-6xl">
                A formula with a clear job.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {product.useCases.map((useCase) => (
                  <Badge key={useCase} tone="dark">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(product.sodiumMg
                ? [
                    ["Sodium", `${product.sodiumMg} mg`],
                    ["Potassium", `${product.potassiumMg} mg`],
                  ]
                : product.creatineG
                  ? [
                      ["Creatine", `${product.creatineG} g`],
                      ["Mesh grade", "200 mesh"],
                    ]
                  : [
                      ["Capacity", product.title],
                      ["Format", "Daily carry"],
                    ]
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[3px] border border-white/15 bg-white/5 p-6"
                >
                  <p className="font-mono text-[10px] tracking-[0.12em] text-white/60">
                    {label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                    {value}
                  </p>
                </div>
              ))}
              <div className="rounded-[3px] bg-[var(--color-signal)] p-6 text-white">
                <p className="font-mono text-[10px] tracking-[0.12em] text-white">
                  Sachets per box
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                  {product.servings}
                </p>
              </div>
              <div className="rounded-[3px] border border-white/15 bg-white/5 p-6">
                <p className="font-mono text-[10px] tracking-[0.12em] text-white/60">
                  Flavour
                </p>
                <p className="mt-4 text-xl font-semibold tracking-[-0.03em]">
                  {product.flavour}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="Product details"
              title="What is inside."
              copy="Ingredients, serving weight and usage information for the current formula."
            />
            <div className="border-t border-[var(--color-line)]">
              <div className="grid grid-cols-2 gap-4 border-b border-[var(--color-line)] py-5 text-sm">
                <span className="text-[var(--color-graphite)]">Servings per box</span>
                <span className="text-right font-medium">
                  {product.servings} × {product.servingWeight} sachets
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-[var(--color-line)] py-5 text-sm">
                <span className="text-[var(--color-graphite)]">Flavour</span>
                <span className="text-right font-medium">{product.flavour}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-[var(--color-line)] py-5 text-sm">
                <span className="text-[var(--color-graphite)]">Product type</span>
                <span className="text-right font-medium">{product.productType}</span>
              </div>
              <div className="py-6">
                <p className="text-sm font-semibold">Ingredient structure</p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]">
                  {product.ingredients.join(", ")}.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {product.productType === "Electrolyte drink mix" ? <MagnesiumTabs /> : null}

      <ReelsSection
        title="In the daily routine."
        copy="Training reels and single-serve preparation."
      />

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <Link
            href="/pages/about-us"
            className="group grid overflow-hidden rounded-[6px] bg-[var(--color-ink)] text-white lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[var(--color-ink)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.hoverImage}
                alt={product.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-ink)]/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                <PlayIcon size={26} />
              </span>
            </div>
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                  See how the formulas fit together.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/70">
                  The formulas, the format and the thinking behind the daily system.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white">
                Explore the story <ArrowIcon size={16} />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="The range" title="The full range." />
          <div
            className="mt-10 overflow-x-auto rounded-[6px] border border-[var(--color-line)] bg-white"
            role="region"
            aria-label="Product comparison table"
            tabIndex={0}
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-line)]">
                  <th className="p-5 font-semibold">Product</th>
                  <th className="p-5 font-semibold">Type</th>
                  <th className="p-5 font-semibold">Key dose</th>
                  <th className="p-5 font-semibold">Per sachet</th>
                  <th className="p-5 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr
                    key={item.id}
                    className={`border-b border-[var(--color-line)] last:border-0 ${
                      item.id === product.id ? "bg-[var(--color-mist)]" : ""
                    }`}
                  >
                    <td className="p-5 font-medium">{item.title}</td>
                    <td className="p-5">{item.productType}</td>
                    <td className="p-5">
                      {item.creatineG
                        ? `${item.creatineG} g creatine`
                        : `${item.sodiumMg} mg sodium`}
                    </td>
                    <td className="p-5 font-mono text-xs">
                      {formatPrice(getPerServingPrice(item.price, item.servings))}
                    </td>
                    <td className="p-5 text-[var(--color-graphite)]">
                      {item.useCases[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-mist)] py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Complete the routine" title="Pairs well with." />
            <ButtonLink href="/collections/all-products" variant="outline">
              Shop all
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </Container>
      </section>

      <StickyProductBar product={product} />
    </main>
  );
}
