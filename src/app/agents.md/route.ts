import { formatPrice, getPerServingPrice, products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const productLines = products
    .map(
      (p) =>
        `- [${p.title}](${siteConfig.url}/products/${p.handle}): ${p.description} Price: ${formatPrice(p.price)} (${formatPrice(getPerServingPrice(p.price, p.servings))}/sachet, ${p.servings} sachets/box). When not needed: ${p.whenNotNeeded}`,
    )
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.name} is an Indian recovery supplement brand ("Recovery you can check.") offering electrolyte drink mixes and 200-mesh creatine monohydrate in single-serve sachets at ${siteConfig.url}. Prices are in Indian Rupees (${siteConfig.currency}) with transparent per-serving cost.

## Products

${productLines}

## Key Links

- [All products](${siteConfig.url}/collections/all-products)
- [Hydration](${siteConfig.url}/collections/hydration-series)
- [Creatine](${siteConfig.url}/collections/creatine)
- [About Oren](${siteConfig.url}/pages/about-us)
- [Contact](${siteConfig.url}/pages/contact)
- [Sitemap](${siteConfig.url}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
