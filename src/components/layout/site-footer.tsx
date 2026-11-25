import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Container } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_2fr] md:py-20">
          <div>
            <Link href="/" className="text-3xl font-bold tracking-[0.16em]">OREN</Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
              A daily electrolyte and creatine system. Match the day, keep it simple.
            </p>
            <div className="mt-8 max-w-sm">
              <NewsletterForm compact />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/60">Shop</p>
              <ul className="mt-5 space-y-3">
                {navigation.footer.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/60">Support</p>
              <ul className="mt-5 space-y-3">
                {navigation.footer.slice(4, 8).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/60">Legal</p>
              <ul className="mt-5 space-y-3">
                {navigation.footer.slice(8).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[11px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.snapshotYear} {siteConfig.name}.</p>
          <div className="flex gap-5">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
