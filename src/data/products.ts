export type ProductTone = "mint" | "lilac" | "peach" | "sky" | "sand" | "rose";

export type PurchaseType = "once" | "monthly" | "quarterly";

export type ProductMediaItem = {
  id: string;
  type: "image" | "reel";
  label: string;
  src: string;
  poster?: string;
  alt: string;
};

export type ProductReel = {
  id: string;
  title: string;
  tag: string;
  productHandle: string;
  videoUrl: string;
  posterUrl: string;
  duration: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  productType: "Electrolyte drink mix" | "Creatine" | "Bundle" | "Accessory";
  price: number;
  compareAtPrice?: number;
  currency: "INR";
  available: boolean;
  tone: ProductTone;
  badge?: string;
  image: string;
  hoverImage: string;
  gallery: ProductMediaItem[];
  servingWeight: string;
  servings: number;
  sodiumMg?: number;
  potassiumMg?: number;
  magnesiumMg?: number;
  creatineG?: number;
  flavour: string;
  useCases: string[];
  whenToUse: string;
  whenNotNeeded: string;
  description: string;
  longDescription: string;
  highlights: string[];
  ingredients: string[];
  collections: string[];
  subscriptionEligible: boolean;
};

export type Collection = {
  handle: string;
  title: string;
  eyebrow: string;
  description: string;
  products: string[];
  tone: ProductTone;
};

export const products: Product[] = [
  {
    id: "hydrate",
    handle: "oren-hydrate",
    title: "Oren Hydrate",
    subtitle: "Electrolytes for sweat-heavy days",
    productType: "Electrolyte drink mix",
    price: 899,
    currency: "INR",
    available: true,
    tone: "mint",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      {
        id: "air-pack",
        type: "image",
        label: "Heat training",
        src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
        alt: "Oren Hydrate outdoor heat training session",
      },
      {
        id: "air-heat-run",
        type: "image",
        label: "Outdoor session",
        src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
        alt: "Athlete sprinting on outdoor track in the heat",
      },
      {
        id: "air-mix",
        type: "image",
        label: "500 ml mix",
        src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1400&q=85",
        alt: "Cold water hydration glass and electrolyte mix",
      },
      {
        id: "air-reel",
        type: "reel",
        label: "Training reel",
        src: "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-track-in-slow-motion-40735-large.mp4",
        poster:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85",
        alt: "Oren Hydrate outdoor heat endurance reel",
      },
    ],
    servingWeight: "6.6 g",
    servings: 30,
    sodiumMg: 500,
    potassiumMg: 200,
    magnesiumMg: 120,
    flavour: "Rhubarb",
    useCases: ["Heat training", "Outdoor sessions", "Heavy sweat"],
    whenToUse:
      "Mix one sachet into 500 ml cold water for long, hot, or sweat-heavy sessions where fluid and sodium losses add up.",
    whenNotNeeded:
      "For a 30-minute indoor workout or a normal day at your desk, plain water and food are usually enough.",
    description:
      "500 mg sodium, 120 mg elemental magnesium and 200 mg potassium per sachet for long, sweat-heavy sessions.",
    longDescription:
      "Oren Hydrate lists every active mineral in plain elemental numbers: 500 mg sodium, 200 mg potassium and 120 mg elemental magnesium across three forms, with zero sugar.",
    highlights: [
      "500 mg sodium per sachet",
      "120 mg elemental magnesium in three forms",
      "200 mg potassium per sachet",
      "30 single-serve sachets · ₹30 per sachet",
    ],
    ingredients: [
      "Sodium",
      "Potassium",
      "Chloride",
      "Magnesium malate (60 mg elemental)",
      "Magnesium L-threonate (40 mg elemental)",
      "Magnesium taurate (20 mg elemental)",
      "Vitamin C",
      "Vitamin B6",
      "Vitamin B12",
      "Zinc",
      "Chromium",
      "Rhubarb flavour",
    ],
    collections: ["hydration-series", "all-products"],
    subscriptionEligible: true,
  },
  {
    id: "creatine",
    handle: "oren-creatine",
    title: "Oren Creatine",
    subtitle: "3 g creatine monohydrate per sachet",
    productType: "Creatine",
    price: 699,
    currency: "INR",
    available: true,
    tone: "lilac",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        id: "creatine-pack",
        type: "image",
        label: "Product shot",
        src: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=85",
        alt: "Oren Creatine single-serve supplement setup",
      },
      {
        id: "creatine-strength",
        type: "image",
        label: "Strength training",
        src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
        alt: "Strength athlete training with barbell",
      },
      {
        id: "creatine-daily",
        type: "image",
        label: "Daily format",
        src: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1200&q=85",
        alt: "Pre-measured daily creatine mix",
      },
      {
        id: "creatine-reel",
        type: "reel",
        label: "Strength reel",
        src: "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-a-gym-44471-large.mp4",
        poster:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
        alt: "Oren Creatine strength training reel",
      },
    ],
    servingWeight: "3.0 g",
    servings: 30,
    creatineG: 3,
    flavour: "Unflavoured",
    useCases: ["Strength training", "Repeated high-intensity work", "Daily routine"],
    whenToUse:
      "Take one 3 g sachet daily as part of a regular strength or high-intensity training routine, including rest days.",
    whenNotNeeded:
      "Skip it if you want an instant soreness cure or overnight muscle repair—creatine supports training output through steady daily intake.",
    description:
      "3 g of 200-mesh creatine monohydrate per sachet. Nothing else added: no flavour, sweetener, colour or filler.",
    longDescription:
      "Oren Creatine contains 3 g of micronised 200-mesh creatine monohydrate per single-serve sachet and nothing else. Built to support repeated high-intensity training with clear dosing and one honest daily price.",
    highlights: [
      "3 g creatine monohydrate per sachet",
      "200 mesh micronised grade",
      "Single ingredient, zero fillers",
      "30 single-serve sachets · ₹23 per sachet",
    ],
    ingredients: ["Creatine monohydrate"],
    collections: ["creatine", "all-products"],
    subscriptionEligible: true,
  },
];

export const productReels: ProductReel[] = [
  {
    id: "reel-01",
    title: "Track intervals in 36°C heat",
    tag: "Oren Hydrate · 500 mg Sodium",
    productHandle: "oren-hydrate",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-track-in-slow-motion-40735-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    duration: "0:15",
  },
  {
    id: "reel-02",
    title: "3 g 200-mesh daily strength block",
    tag: "Oren Creatine · 3 g",
    productHandle: "oren-creatine",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-a-gym-44471-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=85",
    duration: "0:12",
  },
  {
    id: "reel-03",
    title: "One sachet into 500 ml cold water",
    tag: "Oren Hydrate · 30 Sachets",
    productHandle: "oren-hydrate",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-runner-drinking-water-after-exercising-40745-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",
    duration: "0:10",
  },
  {
    id: "reel-04",
    title: "Post-heat electrolyte & magnesium reload",
    tag: "Oren Hydrate · 120 mg Magnesium",
    productHandle: "oren-hydrate",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-an-asphalt-road-32807-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    duration: "0:14",
  },
];

export const collections: Collection[] = [
  {
    handle: "hydration-series",
    title: "Hydration",
    eyebrow: "Electrolytes",
    description:
      "Zero sugar electrolytes with 500 mg sodium for heat, outdoor sessions and heavy sweat.",
    products: ["oren-hydrate"],
    tone: "mint",
  },
  {
    handle: "all-products",
    title: "All products",
    eyebrow: "The complete range",
    description: "Oren Hydrate and Oren Creatine — clear doses, honest per-serving prices.",
    products: ["oren-hydrate", "oren-creatine"],
    tone: "sand",
  },
  {
    handle: "creatine",
    title: "Creatine",
    eyebrow: "One simple ingredient",
    description:
      "3 g of creatine monohydrate per sachet, with no flavour, sweetener or filler.",
    products: ["oren-creatine"],
    tone: "lilac",
  },
];

export function getProduct(handle: string) {
  return products.find((product) => product.handle === handle);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getCollection(handle: string) {
  return collections.find((collection) => collection.handle === handle);
}

export function getProductsForCollection(handle: string) {
  const collection = getCollection(handle);
  if (!collection) return [];
  return collection.products
    .map((productHandle) => getProduct(productHandle))
    .filter((product): product is Product => Boolean(product));
}

export function getSubscriptionDiscountPercent(_purchaseType: PurchaseType): number {
  void _purchaseType;
  return 0;
}

export function getUnitPrice(price: number, purchaseType: PurchaseType = "once"): number {
  const discount = getSubscriptionDiscountPercent(purchaseType);
  if (discount === 0) return price;
  return Math.round((price * (100 - discount)) / 100);
}

export function getPerServingPrice(
  price: number,
  servings: number,
  purchaseType: PurchaseType = "once",
): number {
  const unitPrice = getUnitPrice(price, purchaseType);
  return Math.round(unitPrice / Math.max(1, servings));
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
