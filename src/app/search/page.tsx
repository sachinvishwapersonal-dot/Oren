import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResultsClient } from "@/components/product/search-results";
import { Container, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: false },
};

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

export default function SearchPage() {
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
            <SearchResultsClient />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}
