export const siteConfig = {
  name: "Oren",
  tagline: "Hydration for heat. Creatine for strength.",
  description:
    "Zero sugar electrolytes and 200-mesh creatine monohydrate sachets built around a simple daily routine.",
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
  { title: "500 mg sodium", detail: "Per Oren Air sachet" },
  { title: "120 mg magnesium", detail: "Three-form blend" },
  { title: "5 g creatine", detail: "200 mesh monohydrate" },
  { title: "Zero sugar", detail: "Nothing unnecessary" },
  { title: "Vegan", detail: "Plant based ingredients" },
  { title: "Gluten free", detail: "Made for daily use" },
] as const;

export const faqs = [
  {
    question: "What is in the Oren daily system?",
    answer:
      "Each Oren Air sachet contains 500 mg sodium, 200 mg potassium, chloride and 120 mg of elemental magnesium in three forms, plus vitamin C, B6, B12, zinc and chromium. Simply Creatine contains 5 g of 200-mesh creatine monohydrate and nothing else.",
  },
  {
    question: "Why 120 mg of magnesium in Oren Air?",
    answer:
      "The formula uses 60 mg magnesium malate, 40 mg magnesium L-threonate and 20 mg magnesium taurate. The goal is to support daily intake with well-tolerated forms rather than magnesium oxide or citrate.",
  },
  {
    question: "Which product should I choose?",
    answer:
      "Choose Oren Air for heat, outdoor sessions, saunas and heavy sweat. Add Simply Creatine for strength training and a simple daily routine.",
  },
  {
    question: "Is the system vegan, gluten free and caffeine free?",
    answer:
      "Yes. Oren formulas are vegan, gluten free, non-GMO and caffeine free. Full ingredients are printed on each product label.",
  },
  {
    question: "How should I mix a sachet?",
    answer:
      "Mix one sachet into 500 ml of cold water. Each box contains 30 single-serve sachets.",
  },
  {
    question: "Can I subscribe?",
    answer:
      "Monthly and quarterly subscription options are available across the range. You can change or cancel your plan from your account.",
  },
] as const;

export const scienceCards = [
  {
    number: "01",
    title: "Sodium, matched",
    copy: "Oren Air carries 500 mg of sodium for hot, sweat-heavy sessions and outdoor training.",
    metric: "500 mg",
    label: "sodium per sachet",
    tone: "mint",
  },
  {
    number: "02",
    title: "Three forms of magnesium",
    copy: "Malate, L-threonate and taurate deliver 120 mg of elemental magnesium in every Oren Air sachet.",
    metric: "120 mg",
    label: "elemental magnesium",
    tone: "lilac",
  },
  {
    number: "03",
    title: "Potassium included",
    copy: "Oren Air pairs 200 mg of potassium alongside 500 mg of sodium and chloride.",
    metric: "200 mg",
    label: "potassium per sachet",
    tone: "peach",
  },
  {
    number: "04",
    title: "Nothing sugary",
    copy: "Zero sugar and zero calories, with natural rhubarb flavour in Oren Air and zero fillers in Simply Creatine.",
    metric: "0 g",
    label: "sugar per sachet",
    tone: "sky",
  },
  {
    number: "05",
    title: "Simple daily format",
    copy: "One pre-measured sachet, 500 ml of cold water, and 30 servings per box that travel easily.",
    metric: "30",
    label: "sachets per box",
    tone: "sand",
  },
] as const;

export const magnesiumForms = [
  {
    id: "malate",
    name: "Magnesium malate",
    short: "Malate",
    amount: "60 mg",
    role: "Energy support",
    copy: "The largest part of the blend, paired with malic acid as part of the daily electrolyte formula.",
  },
  {
    id: "threonate",
    name: "Magnesium L-threonate",
    short: "L-threonate",
    amount: "40 mg",
    role: "Focus support",
    copy: "A distinct magnesium form included to round out the blend rather than relying on a single source.",
  },
  {
    id: "taurate",
    name: "Magnesium taurate",
    short: "Taurate",
    amount: "20 mg",
    role: "Recovery support",
    copy: "Completes the three-form blend with a measured 20 mg of elemental magnesium.",
  },
] as const;

export const policyContent = {
  shipping: {
    title: "Shipping & delivery",
    intro: "Delivery information for Oren orders.",
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
        body: "Prices are shown in INR and include GST. Orders are accepted when confirmed. Pricing errors may be corrected before dispatch.",
      },
      {
        heading: "Products",
        body: "Product descriptions, allergen information, directions and required disclaimers are shown on each product page and label.",
      },
      {
        heading: "Liability",
        body: "These terms are governed by the laws of India.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    intro: "Product and health information for Oren formulas.",
    sections: [
      {
        heading: "Not medical advice",
        body: "Content on this site is for general information and is not medical advice. Consult a qualified health professional if you have a medical condition, are pregnant or take medication.",
      },
      {
        heading: "Product information",
        body: "Ingredient, dosage, registration and manufacturing information is shown on the final label and product page.",
      },
    ],
  },
} as const;

export type PolicySlug = keyof typeof policyContent;
