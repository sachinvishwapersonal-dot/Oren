import { trustPoints } from "@/data/site";
import { CheckIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/primitives";

export function TrustStrip({ light = false }: { light?: boolean }) {
  return (
    <section className={`border-y py-7 ${light ? "border-white/10 bg-[var(--color-ink)]" : "border-[var(--color-line)] bg-white"}`}>
      <Container>
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-center gap-3 px-2 md:justify-center">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${light ? "bg-white/10 text-white" : "bg-[var(--color-mist)] text-[var(--color-ink)]"}`}>
                <CheckIcon size={14} />
              </span>
              <div>
                <p className={`text-xs font-semibold ${light ? "text-white" : "text-[var(--color-ink)]"}`}>{point.title}</p>
                <p className={`mt-0.5 text-[10px] ${light ? "text-white/65" : "text-[var(--color-graphite)]"}`}>{point.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
