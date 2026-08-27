export type WeightOption = { value: string; label: string; tag: string; price: number };
export type GalleryImage = { src: string; alt: string };

export type Product = {
  id: string;
  name: string;
  tag: string; // short label used in related-product cards, e.g. "Himalayan Origin • 5kg"
  desc: string;
  price: number; // base price, matches the default weight option
  size: string;
  rating: number;
  reviews: number;
  badge: string | null;
  img: string;
  alt: string;
  gallery: GalleryImage[];
  weightOptions: WeightOption[];
  heritageStory: string[]; // paragraphs
  prepSteps: string[];
  techSpecs: [string, string][];
};

export const products: Product[] = [
  {
    id: "royal-aged-basmati",
    name: "Royal Aged Basmati",
    tag: "Himalayan Origin • 5kg",
    desc: "Extra-long grain, aged 24 months for superior aroma and fluffiness.",
    price: 45,
    size: "5kg Jute Bag",
    rating: 5,
    reviews: 128,
    badge: "Premium Selection",
    img: "/images/basmati-thumb.png",
    alt: "Premium 5kg burlap sack of aged Basmati rice, studio lit",
    gallery: [
      { src: "/images/basmati-main.png", alt: "Aged basmati rice grains cascading onto a slate surface" },
      { src: "/images/basmati-macro.png", alt: "Macro shot of a single long grain of aged basmati rice" },
      { src: "/images/basmati-sack-table.png", alt: "Minimalist burlap sack of basmati rice on a wooden table" },
      { src: "/images/basmati-plated.png", alt: "Plated basmati rice in a ceramic bowl with saffron garnish" },
    ],
    weightOptions: [
      { value: "1", label: "1 kg", tag: "Sample", price: 12 },
      { value: "5", label: "5 kg", tag: "Standard", price: 45 },
      { value: "10", label: "10 kg", tag: "Pantry", price: 82 },
    ],
    heritageStory: [
      "Sourced exclusively from legacy farms in the Taraba region, our Royal Basmati is the result of generations of agricultural refinement. We partner directly with farmers who still use traditional harvesting methods.",
      "The defining characteristic of this reserve is the 24-month aging process in climate-controlled silos, which reduces moisture content and enhances the natural aromatic oils within the grain.",
    ],
    prepSteps: [
      "Rinse 1 cup of rice gently under cold water until it runs clear.",
      "Soak in cold water for 30 minutes for maximum grain elongation.",
      "Bring 1.5 cups of water to a boil, add rice, reduce heat, cover, simmer 15–18 minutes.",
      "Remove from heat, rest covered for 5 minutes, fluff gently before serving.",
    ],
    techSpecs: [
      ["Serving Size", "45g (1/4 cup dry)"],
      ["Calories", "160"],
      ["Total Fat", "0g (0% DV)"],
      ["Total Carbohydrate", "36g (13% DV)"],
      ["Protein", "3g"],
      ["Grain Length", "8.35mm · <1% broken · 12% moisture"],
      ["Aroma Profile", "Nutty, Floral"],
    ],
  },
  {
    id: "golden-sella",
    name: "Golden Sella",
    tag: "Parboiled • 5kg",
    desc: "Parboiled to seal in nutrients, ensuring non-sticky grains perfect for biryanis.",
    price: 38,
    size: "5kg Cotton Bag",
    rating: 4.5,
    reviews: 94,
    badge: null,
    img: "/images/sella-bag.png",
    alt: "5kg cotton bag of Sella Parboiled rice with green branding",
    // NOTE: no dedicated gallery shots exist yet for this product — reusing the main thumbnail as a placeholder.
    gallery: [{ src: "/images/sella-bag.png", alt: "5kg cotton bag of Sella Parboiled rice with green branding" }],
    weightOptions: [
      { value: "1", label: "1 kg", tag: "Sample", price: 10 },
      { value: "5", label: "5 kg", tag: "Standard", price: 38 },
      { value: "10", label: "10 kg", tag: "Pantry", price: 70 },
    ],
    heritageStory: [
      "Parboiling is an ancient technique that locks in nutrients before milling, and our Golden Sella follows that process exactly as it has been done for generations in the region it's sourced from.",
      "The result is a grain that holds its shape and separates cleanly even after cooking — the standard choice for biryani kitchens that can't compromise on texture.",
    ],
    prepSteps: [
      "Rinse 1 cup of rice under cold water until it runs clear.",
      "No soaking required — Sella's parboiling process means it's ready to cook directly.",
      "Bring 2 cups of water to a boil, add rice, reduce heat, cover, simmer 18–20 minutes.",
      "Rest covered for 5 minutes, fluff gently before serving.",
    ],
    techSpecs: [
      ["Serving Size", "45g (1/4 cup dry)"],
      ["Calories", "165"],
      ["Total Fat", "0.5g (1% DV)"],
      ["Total Carbohydrate", "37g (13% DV)"],
      ["Protein", "3.5g"],
      ["Grain Length", "7.9mm · <2% broken · 13% moisture"],
      ["Aroma Profile", "Mild, Earthy"],
    ],
  },
  {
    id: "irri-6-long-grain",
    name: "IRRI-6 Long Grain",
    tag: "Everyday Grain • 10kg",
    desc: "Versatile everyday rice with exceptional elongation and a clean, subtle flavor profile.",
    price: 42,
    size: "10kg Woven Bag",
    rating: 5,
    reviews: 215,
    badge: null,
    img: "/images/irri6-sack.png",
    alt: "10kg luxury woven sack of IRRI-6 Long Grain rice",
    gallery: [{ src: "/images/irri6-sack.png", alt: "10kg luxury woven sack of IRRI-6 Long Grain rice" }],
    weightOptions: [
      { value: "5", label: "5 kg", tag: "Standard", price: 24 },
      { value: "10", label: "10 kg", tag: "Family", price: 42 },
      { value: "25", label: "25 kg", tag: "Bulk", price: 95 },
    ],
    heritageStory: [
      "IRRI-6 is our everyday workhorse grain — bred for consistency and elongation, it's the rice our own team reaches for at home.",
      "Sourced from long-standing partner farms, it delivers a clean, versatile flavor that holds up to everything from pilafs to simple steamed sides.",
    ],
    prepSteps: [
      "Rinse 1 cup of rice under cold water until it runs clear.",
      "Soak for 15 minutes for best elongation.",
      "Bring 1.75 cups of water to a boil, add rice, reduce heat, cover, simmer 15 minutes.",
      "Rest covered for 5 minutes, fluff gently before serving.",
    ],
    techSpecs: [
      ["Serving Size", "45g (1/4 cup dry)"],
      ["Calories", "158"],
      ["Total Fat", "0g (0% DV)"],
      ["Total Carbohydrate", "35g (13% DV)"],
      ["Protein", "3g"],
      ["Grain Length", "7.5mm · <1% broken · 12% moisture"],
      ["Aroma Profile", "Clean, Neutral"],
    ],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string, limit = 3) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}