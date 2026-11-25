# Architecture Map

This project implements the **Oren** storefront (`Oren Air` + `Simply Creatine`) using the **Silver Garnet** brand palette in Next.js 16.

## Global shell

| Module | Implementation |
| --- | --- |
| Glass header | `src/components/layout/site-header.tsx` (sticky translucent header, desktop/mobile nav, search dialog) |
| Cart drawer | `src/components/cart/cart-drawer.tsx` (slide-out cart with companion routine upsell & focus trap) |
| Footer | `src/components/layout/site-footer.tsx` (multi-column footer with newsletter & legal links) |
| Sticky product bar | `src/components/product/sticky-product-bar.tsx` (slides in on PDP scroll) |

## Route map

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Long-form homepage |
| `/collections/[handle]` | `src/app/collections/[handle]/page.tsx` | Collection pages (`all-products`, `hydration-series`, `creatine`) |
| `/products/[handle]` | `src/app/products/[handle]/page.tsx` | Product detail pages (`oren-air`, `simply-creatine`) |
| `/pages/about-us` | `src/app/pages/about-us/page.tsx` | Brand story & principles (`AboutPage` JSON-LD) |
| `/pages/contact` | `src/app/pages/contact/page.tsx` | Contact form & support FAQ |
| `/pages/[slug]` | `src/app/pages/[slug]/page.tsx` | Policy pages (`shipping`, `returns`, `privacy`, `terms`, `disclaimer`) |
| `/cart` | `src/app/cart/page.tsx` | Full cart review page |
| `/search` | `src/app/search/page.tsx` | Search page |
| `/agents.md` | `src/app/agents.md/route.ts` | Agentic commerce discovery markdown route |
| `/robots.txt` | `src/app/robots.ts` | Crawler directives |
| `/sitemap.xml` | `src/app/sitemap.ts` | XML sitemap |

## Component organization (`src/components/`)

- `layout/` — `site-header.tsx`, `site-footer.tsx`, `newsletter-form.tsx`
- `home/` — `hero-showcase.tsx`, `reels-section.tsx`, `science-section.tsx`, `magnesium-tabs.tsx`, `faq-section.tsx`, `trust-strip.tsx`, `tagline-reveal.tsx`
- `product/` — `product-art.tsx`, `product-card.tsx`, `product-gallery.tsx`, `add-to-cart.tsx`, `sticky-product-bar.tsx`
- `cart/` — `cart-provider.tsx`, `cart-drawer.tsx`, `cart-view.tsx`
- `ui/` — `primitives.tsx`, `icons.tsx`, `reveal.tsx`, `json-ld.tsx`, `contact-form.tsx`
