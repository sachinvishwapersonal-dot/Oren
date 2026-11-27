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

export type FormulaIngredient = {
  name: string;
  amount: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  productType: "Chewable tablets";
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
  keyDose: string;
  keyStats: { label: string; value: string }[];
  formulaTableUnit: "Mg/Tab" | "Mg/Tablet";
  formulaBreakdown: FormulaIngredient[];
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
    id: "night-recovery",
    handle: "night-recovery",
    title: "Night Recovery Capsule",
    subtitle: "Chewable tablets · Evening unwind & overnight recovery",
    productType: "Chewable tablets",
    price: 0,
    currency: "INR",
    available: false,
    tone: "mint",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      {
        id: "night-pack",
        type: "image",
        label: "Evening routine",
        src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
        alt: "Night Recovery Capsule chewable tablets evening routine",
      },
      {
        id: "night-run",
        type: "image",
        label: "Training block",
        src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
        alt: "Athlete sprinting on outdoor track",
      },
      {
        id: "night-tablets",
        type: "image",
        label: "Chewable format",
        src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1400&q=85",
        alt: "Night Recovery chewable tablets bedtime glass",
      },
      {
        id: "night-reel",
        type: "reel",
        label: "Training reel",
        src: "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-track-in-slow-motion-40735-large.mp4",
        poster:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85",
        alt: "Night Recovery outdoor training reel",
      },
    ],
    servingWeight: "400 mg actives",
    servings: 30,
    keyDose: "150 mg Mg Bisglycinate · 100 mg KSM-66 · 100 mg Tart Cherry",
    keyStats: [
      { label: "Magnesium Bisglycinate 22%", value: "150 mg" },
      { label: "KSM-66 Ashwagandha (5%)", value: "100 mg" },
    ],
    formulaTableUnit: "Mg/Tab",
    formulaBreakdown: [
      { name: "Tart Cherry Extract (Generic)", amount: "100 mg" },
      { name: "Magnesium Bisglycinate 22%", amount: "150 mg" },
      { name: "KSM-66 Ashwagandha Extract (5% Withanolides)", amount: "100 mg" },
      { name: "L-Theanine", amount: "50 mg" },
    ],
    flavour: "Tart Cherry",
    useCases: ["Evening wind-down", "Overnight recovery", "High-load training days"],
    whenToUse:
      "Take as a chewable tablet in the evening after demanding training days to support relaxation, stress recovery, and overnight rest.",
    whenNotNeeded:
      "If your sleep schedule, evening nutrition, and training load are already light and well-managed, consistent sleep habits come first.",
    description:
      "Chewable tablet with 100 mg Tart Cherry Extract, 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha (5% Withanolides), and 50 mg L-Theanine.",
    longDescription:
      "Night Recovery Capsule is a chewable tablet formulated with four declared active ingredients per tab: 100 mg Tart Cherry Extract (Generic), 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha Extract (5% Withanolides), and 50 mg L-Theanine.",
    highlights: [
      "100 mg Tart Cherry Extract (Generic) per tab",
      "150 mg Magnesium Bisglycinate 22% per tab",
      "100 mg KSM-66 Ashwagandha Extract (5% Withanolides)",
      "50 mg L-Theanine · Chewable tablets",
    ],
    ingredients: [
      "Tart Cherry Extract (Generic) — 100 mg/Tab",
      "Magnesium Bisglycinate 22% — 150 mg/Tab",
      "KSM-66 Ashwagandha Extract (5% Withanolides) — 100 mg/Tab",
      "L-Theanine — 50 mg/Tab",
    ],
    collections: ["night-recovery", "all-products"],
    subscriptionEligible: true,
  },
  {
    id: "active-recovery",
    handle: "active-recovery",
    title: "Active Recovery",
    subtitle: "Chewable tablets · Post-session muscle & micronutrient support",
    productType: "Chewable tablets",
    price: 0,
    currency: "INR",
    available: false,
    tone: "lilac",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        id: "active-pack",
        type: "image",
        label: "Product shot",
        src: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=85",
        alt: "Active Recovery chewable tablets supplement setup",
      },
      {
        id: "active-strength",
        type: "image",
        label: "Post-training",
        src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
        alt: "Strength athlete training with barbell",
      },
      {
        id: "active-daily",
        type: "image",
        label: "Daily format",
        src: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1200&q=85",
        alt: "Active Recovery chewable tablet daily routine",
      },
      {
        id: "active-reel",
        type: "reel",
        label: "Training reel",
        src: "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-a-gym-44471-large.mp4",
        poster:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
        alt: "Active Recovery training reel",
      },
    ],
    servingWeight: "452 mg actives",
    servings: 30,
    keyDose: "200 mg Tart Cherry · 200 mg L-Glutamine · C, Zinc & B6",
    keyStats: [
      { label: "Tart Cherry Extract", value: "200 mg" },
      { label: "L-Glutamine", value: "200 mg" },
    ],
    formulaTableUnit: "Mg/Tablet",
    formulaBreakdown: [
      { name: "Tart Cherry Extract (Generic)", amount: "200 mg" },
      { name: "L-Glutamine", amount: "200 mg" },
      { name: "Vitamin C (Ascorbic Acid)", amount: "40 mg" },
      { name: "Zinc (as Zinc Citrate)", amount: "10 mg" },
      { name: "Vitamin B6 (Pyridoxal-5-Phosphate)", amount: "2 mg" },
    ],
    flavour: "Tart Cherry",
    useCases: ["Post-training recovery", "Repeated training days", "Active micronutrients"],
    whenToUse:
      "Chew after training sessions or during dense training weeks when you want measured Tart Cherry Extract, L-Glutamine, and recovery micronutrients without mixing powders.",
    whenNotNeeded:
      "On rest weeks or light-activity days where whole meals already cover your daily vitamin C, zinc, and B6 needs, you can skip it.",
    description:
      "Chewable tablet with 200 mg Tart Cherry Extract, 200 mg L-Glutamine, 40 mg Vitamin C, 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (P-5-P).",
    longDescription:
      "Active Recovery delivers five declared ingredients in a single chewable tablet: 200 mg Tart Cherry Extract (Generic), 200 mg L-Glutamine, 40 mg Vitamin C (Ascorbic Acid), 10 mg Zinc (as Zinc Citrate), and 2 mg active Vitamin B6 (Pyridoxal-5-Phosphate).",
    highlights: [
      "200 mg Tart Cherry Extract (Generic) per tablet",
      "200 mg L-Glutamine per tablet",
      "40 mg Vitamin C & 10 mg Zinc (as Zinc Citrate)",
      "2 mg Vitamin B6 (Pyridoxal-5-Phosphate) · Chewable tablets",
    ],
    ingredients: [
      "Tart Cherry Extract (Generic) — 200 mg/Tablet",
      "L-Glutamine — 200 mg/Tablet",
      "Vitamin C (Ascorbic Acid) — 40 mg/Tablet",
      "Zinc (as Zinc Citrate) — 10 mg/Tablet",
      "Vitamin B6 (Pyridoxal-5-Phosphate) — 2 mg/Tablet",
    ],
    collections: ["active-recovery", "all-products"],
    subscriptionEligible: true,
  },
];

export const productReels: ProductReel[] = [
  {
    id: "reel-01",
    title: "Evening wind-down after track intervals",
    tag: "Night Recovery · 150 mg Mg Bisglycinate",
    productHandle: "night-recovery",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-track-in-slow-motion-40735-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    duration: "0:15",
  },
  {
    id: "reel-02",
    title: "Post-session Active Recovery chewable routine",
    tag: "Active Recovery · 200 mg Tart Cherry",
    productHandle: "active-recovery",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-a-gym-44471-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=85",
    duration: "0:12",
  },
  {
    id: "reel-03",
    title: "Zero-water chewable recovery format",
    tag: "Active Recovery · 200 mg L-Glutamine",
    productHandle: "active-recovery",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-runner-drinking-water-after-exercising-40745-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",
    duration: "0:10",
  },
  {
    id: "reel-04",
    title: "Overnight KSM-66 & L-Theanine recovery block",
    tag: "Night Recovery · 100 mg KSM-66",
    productHandle: "night-recovery",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-an-asphalt-road-32807-large.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    duration: "0:14",
  },
];

export const collections: Collection[] = [
  {
    handle: "night-recovery",
    title: "Night Recovery",
    eyebrow: "Chewable tablets",
    description:
      "100 mg Tart Cherry Extract, 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha (5% Withanolides), and 50 mg L-Theanine per chewable tablet.",
    products: ["night-recovery"],
    tone: "mint",
  },
  {
    handle: "all-products",
    title: "All products",
    eyebrow: "The complete range",
    description:
      "Night Recovery Capsule and Active Recovery chewable tablets — exact milligram breakdowns per tablet.",
    products: ["night-recovery", "active-recovery"],
    tone: "sand",
  },
  {
    handle: "active-recovery",
    title: "Active Recovery",
    eyebrow: "Chewable tablets",
    description:
      "200 mg Tart Cherry Extract, 200 mg L-Glutamine, 40 mg Vitamin C, 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (P-5-P) per chewable tablet.",
    products: ["active-recovery"],
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

export function formatPrice(_value?: number) {
  void _value;
  return "Coming soon";
}
