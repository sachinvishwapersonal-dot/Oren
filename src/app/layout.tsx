import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import { CartProvider } from "@/components/cart/cart-provider";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLd } from "@/components/ui/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(resolvedSiteUrl),
  title: {
    default: "Oren | Recovery you can check.",
    template: "%s | Oren",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "recovery supplements",
    "chewable recovery tablets",
    "tart cherry extract",
    "magnesium bisglycinate",
    "KSM-66 ashwagandha",
    "L-glutamine",
    "sports nutrition",
    "India",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Oren | Recovery you can check.",
    description: siteConfig.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Oren recovery supplements" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oren | Recovery you can check.",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1E20",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: { "@type": "Country", name: siteConfig.market },
  email: siteConfig.email,
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[200] -translate-y-24 bg-white px-4 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-lg transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
        <JsonLd data={[organization, website]} />
      </body>
    </html>
  );
}
