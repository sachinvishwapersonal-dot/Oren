import { formatPrice, getPerServingPrice, products } from "@/data/products";
import { siteConfig } from "@/data/site";

export function GET() {
  const productLines = products
    .map(
      (p) =>
        `- [${p.title}](${siteConfig.url}/products/${p.handle}): ${p.description} Price: ${formatPrice(p.price)} (${formatPrice(getPerServingPrice(p.price, p.servings))}/sachet, ${p.servings} sachets/box).`,
    )
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.name} is an Indian sports nutrition brand selling zero-sugar electrolyte drink mixes and 200-mesh creatine monohydrate in single-serve sachets at ${siteConfig.url}. Prices are in Indian Rupees (${siteConfig.currency}) and include GST.

## Products (The Daily Routine)

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
