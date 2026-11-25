import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main id="main-content" className="bg-[var(--color-ink)] pb-24 pt-[140px] text-white md:pt-[160px]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow light>404 / Off the system</Eyebrow>
          <h1 className="mt-6 text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-8xl">This page is not in the formula.</h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/70">The link may have moved, or the page is still being built.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="secondary">Back home</ButtonLink>
            <ButtonLink href="/collections/all-products" variant="light">Shop all products</ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
