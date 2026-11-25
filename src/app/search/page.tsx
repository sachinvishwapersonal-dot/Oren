import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProductCard } from "@/components/product/product-card";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: false },
};

type SearchResultsProps = { searchParams: Promise<{ q?: string }> };

async function SearchResults({ searchParams }: SearchResultsProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const normalized = query.toLowerCase();
  const results = query
    ? products.filter((product) =>
        [
          product.title,
          product.subtitle,
          product.description,
          product.productType,
          product.flavour,
          ...product.useCases,
          ...product.ingredients,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      )
    : [];

  return (
    <div>
      <form
        action="/search"
        method="get"
        className="mt-8 flex max-w-2xl border-b border-[var(--color-ink)] pb-3"
      >
        <label htmlFor="search-page-input" className="sr-only">
          Search products
        </label>
        <input
          id="search-page-input"
          key={query}
          name="q"
          type="search"
          defaultValue={query}
          placeholder="Electrolytes, creatine, magnesium, heat training…"
          className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[var(--color-graphite)]"
        />
        <button type="submit" className="px-3 text-sm font-semibold">
          Search
        </button>
      </form>

      <div className="mt-12">
        {!query ? (
          <div>
            <p className="text-sm text-[var(--color-graphite)]">Popular searches</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Hydration", "Creatine", "Magnesium", "Heat training", "Sauna"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm hover:border-[var(--color-ink)]"
                  >
                    {term}
                  </Link>
                ),
              )}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm text-[var(--color-graphite)]">
              {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;
              {query}&rdquo;
            </p>
            {results.length ? (
              <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[6px] border border-[var(--color-line)] bg-white p-10 text-center">
                <h2 className="text-2xl font-semibold">No matches yet.</h2>
                <p className="mt-3 text-sm text-[var(--color-graphite)]">
                  Try &ldquo;electrolytes&rdquo;, &ldquo;creatine&rdquo; or &ldquo;magnesium&rdquo;.
                </p>
                <ButtonLink href="/collections/all-products" className="mt-6">
                  Browse all products
                </ButtonLink>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SearchSkeleton() {
  return (
    <div aria-hidden="true" className="mt-8">
      <div className="h-10 max-w-2xl animate-pulse rounded bg-[var(--color-mist)]" />
      <div className="mt-12 h-4 w-40 animate-pulse rounded bg-[var(--color-mist)]" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index}>
            <div className="aspect-[4/5] animate-pulse rounded-[3px] bg-[var(--color-mist)]" />
            <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-[var(--color-mist)]" />
            <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-[var(--color-mist)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SearchPage({ searchParams }: SearchResultsProps) {
  return (
    <main
      id="main-content"
      className="bg-[var(--color-paper)] pb-20 pt-[88px] md:pt-[96px]"
    >
      <section className="py-10 md:py-16">
        <Container>
          <Eyebrow>Find your formula</Eyebrow>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Search.
          </h1>
          <Suspense fallback={<SearchSkeleton />}>
            <SearchResults searchParams={searchParams} />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}
