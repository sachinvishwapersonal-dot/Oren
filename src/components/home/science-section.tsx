import { scienceCards } from "@/data/site";
import { Container, SectionHeading } from "@/components/ui/primitives";

const toneClasses = {
  mint: "bg-[var(--color-paper)] border border-[var(--color-line)]",
  lilac: "bg-[var(--color-paper)] border border-[var(--color-line)]",
  peach: "bg-[var(--color-paper)] border border-[var(--color-line)]",
  sky: "bg-[var(--color-paper)] border border-[var(--color-line)]",
  sand: "bg-[var(--color-paper)] border border-[var(--color-line)]",
};

export function ScienceSection() {
  return (
    <section id="science" className="bg-[var(--color-paper)] py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Built around what matters."
          copy="A clear look at the extracts, amino acids, minerals and active vitamins in every chewable tablet."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {scienceCards.map((card) => (
            <article key={card.number} className="flex min-h-[310px] flex-col justify-between rounded-[3px] bg-[var(--color-mist)] p-5">
              <div className={`flex aspect-[4/3] items-center justify-center rounded-[3px] ${toneClasses[card.tone as keyof typeof toneClasses]}`}>
                <div className="text-center text-[var(--color-ink)]">
                  <p className="text-4xl font-semibold tracking-[-0.06em]">{card.metric}</p>
                  <p className="mt-2 text-[11px] opacity-75">{card.label}</p>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold tracking-[-0.025em] text-[var(--color-ink)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
