export const siteConfig = {
  name: "Oren",
  tagline: "Recovery you can check.",
  description:
    "Chewable recovery tablets in India with exact per-tablet milligram disclosures: Night Recovery Capsule and Active Recovery.",
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
    { label: "Night Recovery", href: "/collections/night-recovery" },
    { label: "Active Recovery", href: "/collections/active-recovery" },
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
  { title: "Declared mg/tablet", detail: "Exact per-tablet breakdown" },
  { title: "Chewable format", detail: "No shaker or mixing needed" },
  { title: "Standardised actives", detail: "KSM-66 (5%) & Bisglycinate 22%" },
  { title: "Active B6 & Zinc", detail: "P-5-P & Zinc Citrate forms" },
  { title: "Clear limits", detail: "When you don't need it" },
  { title: "Coming soon", detail: "Pre-launch formula showcase" },
] as const;

export const faqs = [
  {
    question: "What does 'Recovery you can check' mean?",
    answer:
      "Every Oren product is built around clear standards: exact active ingredients and standardisation percentages declared in mg per chewable tablet, clear guidance on when to use it and when rest or food is enough, and independent batch certificates published at launch.",
  },
  {
    question: "What is inside Night Recovery Capsule (Chewable tablets)?",
    answer:
      "Each Night Recovery chewable tablet contains 100 mg Tart Cherry Extract (Generic), 150 mg Magnesium Bisglycinate 22%, 100 mg KSM-66 Ashwagandha Extract (5% Withanolides), and 50 mg L-Theanine.",
  },
  {
    question: "What is inside Active Recovery (Chewable tablets)?",
    answer:
      "Each Active Recovery chewable tablet contains 200 mg Tart Cherry Extract (Generic), 200 mg L-Glutamine, 40 mg Vitamin C (Ascorbic Acid), 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (Pyridoxal-5-Phosphate).",
  },
  {
    question: "Why specify Magnesium Bisglycinate 22% and Pyridoxal-5-Phosphate?",
    answer:
      "Naming the exact chemical form and standardisation lets you verify what you are taking: Magnesium Bisglycinate 22% declares the chelate percentage directly, KSM-66 Ashwagandha is standardised to 5% Withanolides, Zinc is supplied as Zinc Citrate, and Vitamin B6 is supplied in its active coenzyme form, Pyridoxal-5-Phosphate (P-5-P).",
  },
  {
    question: "How do I use Night Recovery vs Active Recovery?",
    answer:
      "Use Active Recovery after training sessions for daytime tart cherry, L-glutamine, vitamin C, zinc, and B6 support. Use Night Recovery in the evening on demanding training days for magnesium bisglycinate, KSM-66 ashwagandha, L-theanine, and tart cherry support.",
  },
  {
    question: "Why a chewable tablet format?",
    answer:
      "Chewable tablets give you a pre-measured milligram dose without needing a shaker bottle or water after training or before bed.",
  },
] as const;

export const scienceCards = [
  {
    number: "01",
    title: "Tart Cherry Extract",
    copy: "100 mg per tab in Night Recovery and 200 mg per tablet in Active Recovery.",
    metric: "100–200 mg",
    label: "tart cherry extract / tab",
    tone: "mint",
  },
  {
    number: "02",
    title: "Magnesium Bisglycinate 22%",
    copy: "150 mg of Magnesium Bisglycinate 22% per chewable tab in Night Recovery Capsule.",
    metric: "150 mg",
    label: "Mg bisglycinate 22% / tab",
    tone: "lilac",
  },
  {
    number: "03",
    title: "KSM-66 + L-Theanine",
    copy: "100 mg KSM-66 Ashwagandha Extract (5% Withanolides) paired with 50 mg L-Theanine in Night Recovery.",
    metric: "100 + 50 mg",
    label: "KSM-66 & L-Theanine / tab",
    tone: "peach",
  },
  {
    number: "04",
    title: "L-Glutamine",
    copy: "200 mg L-Glutamine paired with 200 mg Tart Cherry Extract in every Active Recovery chewable tablet.",
    metric: "200 mg",
    label: "L-Glutamine / tablet",
    tone: "sky",
  },
  {
    number: "05",
    title: "C, Zinc Citrate & P-5-P",
    copy: "40 mg Vitamin C (Ascorbic Acid), 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (Pyridoxal-5-Phosphate) in Active Recovery.",
    metric: "40 / 10 / 2 mg",
    label: "Vit C, Zinc & B6 (P-5-P)",
    tone: "sand",
  },
] as const;

export const magnesiumForms = [
  {
    id: "magnesium-bisglycinate",
    name: "Magnesium Bisglycinate 22%",
    short: "Mg Bisglycinate",
    amount: "150 mg",
    role: "Night Recovery · 150 mg/Tab",
    copy: "Chelated Magnesium Bisglycinate declared at 22% standardisation in Night Recovery Capsule, paired with 100 mg Tart Cherry Extract.",
  },
  {
    id: "ksm66-theanine",
    name: "KSM-66 Ashwagandha & L-Theanine",
    short: "KSM-66 + Theanine",
    amount: "100 + 50 mg",
    role: "Night Recovery · 5% Withanolides",
    copy: "100 mg KSM-66 Ashwagandha Extract standardised to 5% Withanolides alongside 50 mg L-Theanine per Night Recovery chewable tablet.",
  },
  {
    id: "tart-cherry-glutamine",
    name: "Tart Cherry & L-Glutamine",
    short: "Active Recovery Core",
    amount: "200 + 200 mg",
    role: "Active Recovery · 200 mg each/Tablet",
    copy: "200 mg Tart Cherry Extract (Generic) and 200 mg L-Glutamine per Active Recovery chewable tablet, plus 40 mg Vitamin C, 10 mg Zinc (as Zinc Citrate), and 2 mg Vitamin B6 (P-5-P).",
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
        body: "Sealed, unused packs from a first order can be returned within 30 days of delivery for a refund of the product price. Return carriage is paid by the customer.",
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
