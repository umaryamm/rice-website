"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/cart-context";

const products = [
  {
    id: "royal-aged-basmati",
    name: "Royal Aged Basmati",
    desc: "Extra-long grain, aged 24 months for superior aroma and fluffiness.",
    price: 45,
    size: "5kg Jute Bag",
    weightKg: 5,
    type: "Basmati (Aged)",
    rating: 5,
    reviews: 128,
    badge: "Premium Selection",
    img: "/images/basmati-thumb.png",
    alt: "Premium 5kg burlap sack of aged Basmati rice, studio lit",
  },
  {
    id: "golden-sella",
    name: "Golden Sella",
    desc: "Parboiled to seal in nutrients, ensuring non-sticky grains perfect for biryanis.",
    price: 38,
    size: "5kg Cotton Bag",
    weightKg: 5,
    type: "Sella (Parboiled)",
    rating: 4.5,
    reviews: 94,
    badge: null,
    img: "/images/sella-bag.png",
    alt: "5kg cotton bag of Sella Parboiled rice with green branding",
  },
  {
    id: "irri-6-long-grain",
    name: "IRRI-6 Long Grain",
    desc: "Versatile everyday rice with exceptional elongation and a clean, subtle flavor profile.",
    price: 42,
    size: "10kg Woven Bag",
    weightKg: 10,
    type: "IRRI Long Grain",
    rating: 5,
    reviews: 215,
    badge: null,
    img: "/images/irri6-sack.png",
    alt: "10kg luxury woven sack of IRRI-6 Long Grain rice",
  },
];

const RICE_TYPES = ["Basmati (Aged)", "Sella (Parboiled)", "IRRI Long Grain", "Jasmine"];
const WEIGHTS = [
  { label: "1kg (Sample Pack)", value: 1 },
  { label: "5kg (Pantry Standard)", value: 5 },
  { label: "10kg (Family Size)", value: 10 },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center text-accent-gold gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const isHalf = n - rating === 0.5;
        const isFilled = n <= rating || isHalf;
        return (
          <span
            key={n}
            className="material-symbols-outlined text-[14px]"
            style={{ fontVariationSettings: isFilled ? "'FILL' 1" : "'FILL' 0" }}
          >
            {isHalf ? "star_half" : "star"}
          </span>
        );
      })}
      <span className="text-primary-container/60 text-xs ml-1">({reviews})</span>
    </div>
  );
}

export default function ShopPage() {
  const { addItem } = useCart();

  const [selectedTypes, setSelectedTypes] = useState<string[]>(RICE_TYPES.filter((t) => t !== "Jasmine"));
  const [selectedWeights, setSelectedWeights] = useState<number[]>([5]);
  const [minPrice, setMinPrice] = useState("15");
  const [maxPrice, setMaxPrice] = useState("150");
  const [appliedMin, setAppliedMin] = useState(15);
  const [appliedMax, setAppliedMax] = useState(150);
  const [sortBy, setSortBy] = useState("Recommended");

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  const toggleWeight = (weight: number) => {
    setSelectedWeights((prev) => (prev.includes(weight) ? prev.filter((w) => w !== weight) : [...prev, weight]));
  };

  const applyFilters = () => {
    setAppliedMin(Number(minPrice) || 0);
    setAppliedMax(Number(maxPrice) || Infinity);
  };

  const visibleProducts = useMemo(() => {
    let result = products.filter((p) => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.type);
      const weightMatch = selectedWeights.length === 0 || selectedWeights.includes(p.weightKg);
      const priceMatch = p.price >= appliedMin && p.price <= appliedMax;
      return typeMatch && weightMatch && priceMatch;
    });

    if (sortBy === "Price: High to Low") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "Price: Low to High") result = [...result].sort((a, b) => a.price - b.price);
    // "Recommended" and "New Harvest" keep original order — no real recency data to sort by yet

    return result;
  }, [selectedTypes, selectedWeights, appliedMin, appliedMax, sortBy]);

  return (
    <>
      <TopNav />
      <main className="bg-background w-full min-h-screen pt-[88px] flex flex-col">
        <div className="flex-grow max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Page Header */}
          <div className="col-span-full mb-12 border-b border-surface-container-highest/40 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl text-primary-container mb-4">Retail Shop</h1>
              <p className="font-body-md text-primary-container/70 max-w-2xl font-light">
                Curated selections from our finest harvests, packaged for the discerning culinary enthusiast.
              </p>
            </div>
            <div className="flex items-center gap-4 self-start md:self-end text-sm">
              <span className="text-xs uppercase tracking-widest text-primary-container font-medium">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-b border-surface-container-highest text-primary-container py-1 pr-6 focus:ring-0 cursor-pointer"
              >
                <option>Recommended</option>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
                <option>New Harvest</option>
              </select>
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className="col-span-1 lg:col-span-3 space-y-12 pr-0 lg:pr-8 border-r-0 lg:border-r border-surface-container-highest/30 hidden md:block">
            <div>
              <h3 className="text-xs uppercase mb-6 tracking-widest text-primary-container font-semibold">Rice Type</h3>
              <div className="space-y-4 text-sm text-primary-container/70">
                {RICE_TYPES.map((label) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      checked={selectedTypes.includes(label)}
                      onChange={() => toggleType(label)}
                      type="checkbox"
                      className="rounded-sm text-primary-container focus:ring-primary-container h-4 w-4"
                    />
                    <span className="group-hover:text-primary-container transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-6 tracking-widest text-primary-container font-semibold">Packaging Weight</h3>
              <div className="space-y-4 text-sm text-primary-container/70">
                {WEIGHTS.map((opt) => (
                  <label key={opt.label} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      checked={selectedWeights.includes(opt.value)}
                      onChange={() => toggleWeight(opt.value)}
                      type="checkbox"
                      className="rounded-sm text-primary-container focus:ring-primary-container h-4 w-4"
                    />
                    <span className="group-hover:text-primary-container transition-colors">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-6 tracking-widest text-primary-container font-semibold">Price Range</h3>
              <div className="flex items-center gap-4 text-sm">
                <input
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min"
                  className="w-full bg-transparent border-b border-surface-container-highest py-2 focus:ring-0 focus:border-primary-container text-primary-container"
                />
                <span className="text-primary-container/50">-</span>
                <input
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max"
                  className="w-full bg-transparent border-b border-surface-container-highest py-2 focus:ring-0 focus:border-primary-container text-primary-container"
                />
              </div>
              <button
                onClick={applyFilters}
                className="mt-6 w-full text-xs border border-primary-container text-primary-container rounded-full py-3 hover:bg-primary-container hover:text-background transition-colors uppercase tracking-widest"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="col-span-1 lg:col-span-9">
            {visibleProducts.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-primary-container/60 mb-2">No products match your filters.</p>
                <p className="text-sm text-primary-container/40">Try adjusting rice type, weight, or price range.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProducts.map((p) => (
                  <div key={p.id} className="group flex flex-col relative">
                    {p.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-surface-container-highest text-primary-container text-[11px] px-3 py-1 uppercase tracking-widest rounded-full">
                        {p.badge}
                      </div>
                    )}
                    <div className="aspect-[4/5] bg-surface-container-highest/20 mb-4 overflow-hidden relative rounded-lg transition-all duration-500 hover:shadow-luxury">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <button
                      onClick={() =>
                        addItem({
                          id: p.id,
                          name: p.name,
                          variant: p.size,
                          price: p.price,
                          image: p.img,
                          alt: p.alt,
                        })
                      }
                      className="w-full bg-primary-container text-background py-3 rounded-full flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-colors mb-6"
                    >
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                    </button>

                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-base text-primary-container font-medium">{p.name}</h4>
                        <span className="font-serif text-xl text-primary-container">${p.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-primary-container/60 mb-4 line-clamp-2">{p.desc}</p>
                      <div className="flex justify-between items-center mt-auto border-t border-surface-container-highest/40 pt-3 mb-6">
                        <span className="text-xs text-primary-container/60">{p.size}</span>
                        <StarRating rating={p.rating} reviews={p.reviews} />
                      </div>
                      <Link
                        href={`/product/${p.id}`}
                        className="bg-primary-container text-background w-full py-4 rounded-full flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:opacity-90"
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span> View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}