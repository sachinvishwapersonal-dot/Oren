import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { policyContent, type PolicySlug } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(policyContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = policyContent[slug as PolicySlug];
  if (!policy) return {};
  return {
    title: policy.title,
    description: policy.intro,
    alternates: { canonical: `/pages/${slug}` },
  };
}

export default async function PolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const policy = policyContent[slug as PolicySlug];
  if (!policy) notFound();

  return (
    <main id="main-content" className="pt-[88px] md:pt-[96px]">
      <section className="bg-[var(--color-paper)] py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">{policy.title}</h1>
            <p className="mt-6 text-base leading-7 text-[var(--color-graphite)]">{policy.intro}</p>
            <div className="mt-12 border-t border-[var(--color-line)]">
              {policy.sections.map((section) => (
                <article key={section.heading} className="border-b border-[var(--color-line)] py-8">
                  <h2 className="text-2xl font-semibold tracking-[-0.035em]">{section.heading}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-graphite)] md:text-base">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
