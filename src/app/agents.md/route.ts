import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const productLines = products
    .map(
      (p) =>
        `- [${p.title}](${siteConfig.url}/products/${p.handle}) (${p.productType}): ${p.description} Status: Coming soon (${p.servings} tablets/pack). Ingredients (${p.formulaTableUnit}): ${p.ingredients.join("; ")}. When not needed: ${p.whenNotNeeded}`,
    )
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.name} is an Indian recovery supplement brand ("Recovery you can check.") showcasing Night Recovery Capsule and Active Recovery chewable tablets at ${siteConfig.url}. Both products are currently Coming soon.

## Products

${productLines}

## Key Links

- [All products](${siteConfig.url}/collections/all-products)
- [Night Recovery](${siteConfig.url}/collections/night-recovery)
- [Active Recovery](${siteConfig.url}/collections/active-recovery)
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
