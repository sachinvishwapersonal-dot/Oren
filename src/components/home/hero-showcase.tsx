import { ButtonLink, Container } from "@/components/ui/primitives";

export function HeroShowcase() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-ink)] pb-20 pt-32 text-white md:items-center md:pb-24 md:pt-36">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2200&q=85"
          alt="Athlete training outdoors"
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-65 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E20]/90 via-[#0F1E20]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E20] via-transparent to-[#0F1E20]/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="hero-heading text-balance text-5xl font-extrabold uppercase leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-8xl">
            Recovery you can check.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-white/80 md:text-lg md:leading-8">
            Night Recovery Capsule and Active Recovery chewable tablets—every active ingredient declared in milligrams per tablet.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/collections/all-products" variant="secondary">
              Shop the range
            </ButtonLink>
            <ButtonLink href="/#science" variant="light">
              Explore the science
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
