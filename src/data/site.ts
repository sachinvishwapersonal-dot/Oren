export const siteConfig = {
  name: "Oren",
  tagline: "Recovery you can check.",
  description:
    "Recovery supplements in India with plain elemental doses, clear guidance on when to use them, and one fair per-serving price.",
  url: "https://oren.in",
  locale: "en_IN",
  countryCode: "IN",
  currency: "INR",
  market: "India",
  email: "hello@oren.in",
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    tiktok: "https://www.tiktok.com/",
  },
  snapshotYear: 2026,
} as const;

export const navigation = {
  header: [
    { label: "Shop", href: "/collections/all-products" },
    { label: "The science", href: "/#science" },
    { label: "About us", href: "/pages/about-us" },
    { label: "Contact", href: "/pages/contact" },
  ],
  footer: [
    { label: "Shop all", href: "/collections/all-products" },
    { label: "Hydration", href: "/collections/hydration-series" },
    { label: "Creatine", href: "/collections/creatine" },
    { label: "The science", href: "/#science" },
    { label: "About us", href: "/pages/about-us" },
    { label: "Contact", href: "/pages/contact" },
    { label: "Shipping & delivery", href: "/pages/shipping" },
    { label: "Returns & refunds", href: "/pages/returns" },
    { label: "Privacy policy", href: "/pages/privacy" },
    { label: "Terms of service", href: "/pages/terms" },
    { label: "Disclaimer", href: "/pages/disclaimer" },
  ],
} as const;

export const trustPoints = [
  { title: "Elemental doses", detail: "Declared in plain numbers" },
  { title: "One honest price", detail: "Shown per sachet" },
  { title: "Clear limits", detail: "When you don't need it" },
  { title: "Zero sugar", detail: "Nothing unnecessary" },
  { title: "Vegan", detail: "Plant-sourced ingredients" },
  { title: "Gluten free", detail: "No fillers or colours" },
] as const;

export const faqs = [
  {
    question: "What does 'Recovery you can check' mean?",
    answer:
      "Every Oren product is built around four standards: exact active ingredients shown in elemental amounts, clear guidance on when to use it and when water or food is enough, independent batch certificates published at launch, and one everyday price shown per sachet without inflated MRPs.",
  },
  {
    question: "What is inside Oren Hydrate and Oren Creatine?",
    answer:
      "Each Oren Hydrate sachet contains 500 mg sodium, 200 mg potassium, chloride and 120 mg of elemental magnesium in three forms, plus vitamin C, B6, B12, zinc and chromium. Oren Creatine contains 3 g of 200-mesh creatine monohydrate per sachet and nothing else.",
  },
  {
    question: "Why list elemental magnesium instead of compound weight?",
    answer:
      "Many labels show total compound weight (such as 2,000 mg of a magnesium compound) rather than the actual elemental magnesium you consume. Oren declares elemental amounts directly: 60 mg from malate, 40 mg from L-threonate, and 20 mg from taurate (120 mg total).",
  },
  {
    question: "When should I use Oren Hydrate — and when is water enough?",
    answer:
      "Use Oren Hydrate during long, hot, or sweat-heavy training sessions where sodium and fluid losses are significant. For a short 30-minute indoor workout or normal desk day, plain water is usually enough.",
  },
  {
    question: "Why 3 g of creatine per sachet, and how do I take it?",
    answer:
      "3 g per sachet matches the standard daily serving for adults in India, with zero flavour, sweetener, or fillers. Take one sachet daily as part of your training routine—creatine works through steady daily intake rather than as an overnight soreness fix.",
  },
  {
    question: "Why doesn't Oren run permanent 50% off sales?",
    answer:
      "Instead of inflating an MRP only to run constant discounts, Oren sets one fair everyday price and displays the cost per sachet: ₹899 for 30 sachets of Oren Hydrate (₹30/sachet) and ₹699 for 30 sachets of Oren Creatine (₹23/sachet).",
  },
] as const;

export const scienceCards = [
  {
    number: "01",
    title: "Sodium, declared",
    copy: "Oren Hydrate contains 500 mg of sodium per sachet for hot, sweat-heavy sessions.",
    metric: "500 mg",
    label: "sodium per sachet",
    tone: "mint",
  },
  {
    number: "02",
    title: "Elemental magnesium",
    copy: "120 mg of elemental magnesium declared directly across malate, L-threonate and taurate.",
    metric: "120 mg",
    label: "elemental magnesium",
    tone: "lilac",
  },
  {
    number: "03",
    title: "Potassium included",
    copy: "Oren Hydrate pairs 200 mg of potassium alongside 500 mg of sodium and chloride.",
    metric: "200 mg",
    label: "potassium per sachet",
    tone: "peach",
  },
  {
    number: "04",
    title: "Single-ingredient creatine",
    copy: "Oren Creatine contains 3 g of 200-mesh creatine monohydrate per sachet with nothing else added.",
    metric: "3 g",
    label: "creatine per sachet",
    tone: "sky",
  },
  {
    number: "05",
    title: "Zero sugar",
    copy: "0 g sugar per sachet, pre-measured for 500 ml of cold water in 30 single-serve sachets.",
    metric: "0 g",
    label: "sugar per sachet",
    tone: "sand",
  },
] as const;

export const magnesiumForms = [
  {
    id: "malate",
    name: "Magnesium malate",
    short: "Malate",
    amount: "60 mg",
    role: "60 mg elemental magnesium",
    copy: "Accounts for half of the 120 mg elemental magnesium in each Oren Hydrate sachet, listed by elemental weight rather than compound mass.",
  },
  {
    id: "threonate",
    name: "Magnesium L-threonate",
    short: "L-threonate",
    amount: "40 mg",
    role: "40 mg elemental magnesium",
    copy: "Contributes 40 mg of elemental magnesium as part of the three-form mineral blend.",
  },
  {
    id: "taurate",
    name: "Magnesium taurate",
    short: "Taurate",
    amount: "20 mg",
    role: "20 mg elemental magnesium",
    copy: "Completes the 120 mg elemental magnesium blend without relying on magnesium oxide.",
  },
] as const;

export const policyContent = {
  shipping: {
    title: "Shipping & delivery",
    intro: "Delivery information for Oren orders across India.",
    sections: [
      {
        heading: "Service area",
        body: "Delivery coverage and pincode availability are confirmed at checkout.",
      },
      {
        heading: "Delivery options",
        body: "Available delivery methods and rates are calculated at checkout.",
      },
      {
        heading: "Order cut-offs",
        body: "Processing times and delivery estimates are shown at checkout.",
      },
    ],
  },
  returns: {
    title: "Returns & refunds",
    intro: "Returns and refunds for orders placed with Oren.",
    sections: [
      {
        heading: "Change of mind",
        body: "Sealed, unused boxes from a first order can be returned within 30 days of delivery for a refund of the product price. Return carriage is paid by the customer.",
      },
      {
        heading: "Damaged or incorrect items",
        body: "Damaged, faulty or incorrect items are replaced or refunded within 30 days. Contact us with your order number and photos.",
      },
      {
        heading: "Refunds",
        body: "Approved refunds are issued to the original payment method. Delivery charges are refunded only when the return is due to damage or an incorrect item.",
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    intro: "How Oren collects and uses personal information.",
    sections: [
      {
        heading: "Information we collect",
        body: "We collect contact details, order information, delivery addresses, marketing preferences and analytics data.",
      },
      {
        heading: "How we use information",
        body: "We use this information to fulfil orders, provide support, process payments, send marketing with consent and improve the service.",
      },
      {
        heading: "Your choices",
        body: "Contact us to access, correct, export or delete your information, or to withdraw marketing consent.",
      },
    ],
  },
  terms: {
    title: "Terms of service",
    intro: "Terms that apply to purchases from Oren.",
    sections: [
      {
        heading: "Orders and pricing",
        body: "Prices are shown in INR and include applicable taxes based on final HSN classification. Orders are accepted when confirmed.",
      },
      {
        heading: "Products and claims",
        body: "Final FSSAI product category, nutrition declaration, RDA values, allergens, and usage precautions appear on the approved product label and product page at launch.",
      },
      {
        heading: "Liability",
        body: "These terms are governed by the laws of India.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    intro: "Product, regulatory and health information for Oren.",
    sections: [
      {
        heading: "Not medical advice",
        body: "Content on this site is for general information and is not medical advice. Supplements are not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified health professional if you have a medical condition, are pregnant or take medication.",
      },
      {
        heading: "Pre-launch regulatory review",
        body: "Product names, doses, labels, and permitted claims undergo food-regulatory review under FSSAI Health Supplements & Nutraceuticals and Advertising & Claims regulations prior to commercial release.",
      },
    ],
  },
} as const;

export type PolicySlug = keyof typeof policyContent;
