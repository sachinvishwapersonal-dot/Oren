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
    id: "air",
    handle: "oren-air",
    title: "Oren Air",
    subtitle: "Electrolytes for heat",
    productType: "Electrolyte drink mix",
    price: 3899,
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
        alt: "Oren Air outdoor heat training session",
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
        alt: "Oren Air outdoor heat endurance reel",
      },
    ],
    servingWeight: "6.6 g",
    servings: 30,
    sodiumMg: 500,
    potassiumMg: 200,
    magnesiumMg: 120,
    flavour: "Rhubarb",
    useCases: ["Heat training", "Outdoor sessions", "Saunas"],
    description:
      "500 mg sodium, 120 mg magnesium and 200 mg potassium for training in the heat and outdoor sessions.",
    longDescription:
      "Oren Air pairs 500 mg of sodium with a clean rhubarb flavour. Each sachet delivers 120 mg of elemental magnesium in three forms, 200 mg of potassium and zero sugar.",
    highlights: [
      "500 mg sodium per sachet",
      "120 mg magnesium in three forms",
      "200 mg potassium per sachet",
      "30 single-serve sachets",
    ],
    ingredients: [
      "Sodium",
      "Potassium",
      "Chloride",
      "Magnesium malate",
      "Magnesium L-threonate",
      "Magnesium taurate",
      "Vitamin C",
      "Vitamin B6",
      "Vitamin B12",
      "Zinc",
      "Chromium",
      "Natural rhubarb flavour",
    ],
    collections: ["hydration-series", "all-products"],
    subscriptionEligible: true,
  },
  {
    id: "creatine",
    handle: "simply-creatine",
    title: "Simply Creatine",
    subtitle: "One ingredient, 5 g per sachet",
    productType: "Creatine",
    price: 2599,
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
        alt: "Simply Creatine single-serve supplement setup",
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
        alt: "Simply Creatine strength training reel",
      },
    ],
    servingWeight: "5.0 g",
    servings: 30,
    creatineG: 5,
    flavour: "Unflavoured",
    useCases: ["Strength training", "Daily routine", "Rest days"],
    description:
      "5 g of creatine monohydrate per sachet with no flavour, sweetener, colour or filler.",
    longDescription:
      "Simply Creatine uses 200 mesh creatine monohydrate and nothing else. Each box contains 30 sachets with 5 g per serving. Directions: one sachet daily, with no loading phase and no need to skip rest days.",
    highlights: [
      "5 g creatine monohydrate per sachet",
      "200 mesh micronised grade",
      "Single ingredient, zero fillers",
      "30 single-serve sachets",
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
    tag: "Oren Air · 500 mg Sodium",
    productHandle: "oren-air",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-track-in-slow-motion-40735-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    duration: "0:15",
  },
  {
    id: "reel-02",
    title: "5 g 200-mesh daily strength block",
    tag: "Simply Creatine · 5 g",
    productHandle: "simply-creatine",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-a-gym-44471-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=85",
    duration: "0:12",
  },
  {
    id: "reel-03",
    title: "One sachet into 500 ml cold water",
    tag: "Oren Air · Rhubarb",
    productHandle: "oren-air",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-runner-drinking-water-after-exercising-40745-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",
    duration: "0:10",
  },
  {
    id: "reel-04",
    title: "Post-sauna electrolyte & magnesium reload",
    tag: "Oren Air · 120 mg Magnesium",
    productHandle: "oren-air",
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
      "Zero sugar electrolytes built for heat, outdoor sessions and heavy sweat.",
    products: ["oren-air"],
    tone: "mint",
  },
  {
    handle: "all-products",
    title: "All products",
    eyebrow: "The complete range",
    description: "Oren Air and Simply Creatine, built to work as one daily routine.",
    products: ["oren-air", "simply-creatine"],
    tone: "sand",
  },
  {
    handle: "creatine",
    title: "Creatine",
    eyebrow: "One simple ingredient",
    description:
      "5 g of creatine monohydrate per sachet, with no flavour, sweetener or filler.",
    products: ["simply-creatine"],
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

export function getSubscriptionDiscountPercent(purchaseType: PurchaseType): number {
  if (purchaseType === "monthly") return 10;
  if (purchaseType === "quarterly") return 15;
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
