import { faqs } from "@/data/site";
import { PlusIcon } from "@/components/ui/icons";
import { Container, SectionHeading } from "@/components/ui/primitives";

export function FaqSection({
  title = "Questions, answered.",
  items = faqs,
  id = "faq",
}: {
  title?: string;
  items?: readonly { question: string; answer: string }[];
  id?: string;
}) {
  return (
    <section id={id} className="bg-[var(--color-paper)] py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            title={title}
            copy="The details behind the daily system, from formula choice to delivery."
          />
          <div className="border-t border-[var(--color-line)]">
            {items.map((item, index) => (
              <details key={item.question} className="group border-b border-[var(--color-line)]" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-[var(--color-ink)] marker:hidden md:text-lg">
                  <span>{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45">
                    <PlusIcon size={15} />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-[var(--color-graphite)] md:text-base md:leading-7">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
