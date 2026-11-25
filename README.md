# Oren Storefront

Next.js storefront for **Oren** (`Oren Air` and `Simply Creatine`) built with the **Silver Garnet** design system.

See [`docs/architecture-map.md`](docs/architecture-map.md) for the route, template, and component structure and [`docs/brand-tokens.md`](docs/brand-tokens.md) for the Silver Garnet color palette and Inter typography.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript 5
- Tailwind CSS 4 (`@tailwindcss/turbopack`)
- Next.js Metadata API, JSON-LD, `sitemap.xml`, `robots.txt`, and `/agents.md`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Netlify deployment

The site is configured for zero-cold-start static export on Netlify (`output: "export"` in `next.config.ts` and `netlify.toml` publishing `out/`):

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Forms:** Contact and newsletter forms include `data-netlify="true"` for automatic Netlify Forms collection.
- **Headers & caching:** Security headers, immutable `/_next/static/*` caching, and Markdown content-type for `/agents.md` are configured in `netlify.toml`.

## Directory structure

```text
oren-storefront/
├── Brand_folder/                        Oren brand guidelines, colour palettes & market research
├── docs/
│   ├── architecture-map.md              Route & component architecture
│   └── brand-tokens.md                  Silver Garnet design tokens
├── public/
│   └── og-image.svg                     Social OpenGraph preview image
└── src/
    ├── app/
│   ├── page.tsx                         Homepage
│   ├── layout.tsx                       Global layout, Inter font, metadata, JSON-LD
│   ├── globals.css                      Silver Garnet tokens & utilities
│   ├── icon.svg                         Favicon
│   ├── collections/[handle]/page.tsx    Collection pages (all-products, hydration-series, creatine)
│   ├── products/[handle]/page.tsx       Product detail pages (oren-air, simply-creatine)
│   ├── pages/
│   │   ├── about-us/page.tsx            About Oren
│   │   ├── contact/page.tsx             Contact page
│   │   └── [slug]/page.tsx              Legal & policy pages (shipping, returns, privacy, terms, disclaimer)
│   ├── cart/page.tsx                    Cart review page
│   ├── search/page.tsx                  Product search page
│   ├── agents.md/route.ts               AI-agent discovery markdown endpoint
│   ├── not-found.tsx                    404 page
│   ├── robots.ts                        Generated robots.txt
│   └── sitemap.ts                       Generated sitemap.xml
├── components/
│   ├── layout/
│   │   ├── site-header.tsx              Fixed glass navigation & search modal
│   │   ├── site-footer.tsx              Multi-column footer
│   │   └── newsletter-form.tsx          Email subscription capture
│   ├── home/
│   │   ├── hero-showcase.tsx            Full-screen hero section
│   │   ├── reels-section.tsx            9:16 vertical training & product reels
│   │   ├── science-section.tsx          5-card formula science breakdown
│   │   ├── magnesium-tabs.tsx           Interactive 3-form magnesium tabs
│   │   ├── faq-section.tsx              Accordion FAQ section
│   │   ├── trust-strip.tsx              Formula highlight strip
│   │   └── tagline-reveal.tsx           Scroll-activated word reveal
│   ├── product/
│   │   ├── product-art.tsx              Product photo frame with Silver Garnet top stripe
│   │   ├── product-card.tsx             Product grid card with hover image & quick-add
│   │   ├── product-gallery.tsx          4-tab PDP media & reel gallery
│   │   ├── add-to-cart.tsx              One-time & subscription purchase selector
│   │   └── sticky-product-bar.tsx       Scroll-activated PDP bottom purchase bar
│   ├── cart/
│   │   ├── cart-provider.tsx            Client cart state & localStorage persistence
│   │   ├── cart-drawer.tsx              Slide-out cart drawer with companion upsell
│   │   └── cart-view.tsx                Full cart page view
│   └── ui/
│       ├── primitives.tsx               Container, ButtonLink, Eyebrow, SectionHeading, Badge
│       ├── icons.tsx                    SVG icon components
│       ├── reveal.tsx                   IntersectionObserver reveal wrapper
│       ├── json-ld.tsx                  Structured data script renderer
│       └── contact-form.tsx             Contact enquiry form
└── data/
    ├── site.ts                          Brand config, navigation, FAQ, science cards, policies
    └── products.ts                      Products, stock images, reels, collections, pricing helpers
```
