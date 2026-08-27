"use client";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/cart-context";

const products = [
  {
    id: "royal-aged-basmati",
    name: "Royal Aged Basmati",
    desc: "Extra-long grain, aged 24 months for superior aroma and fluffiness.",
    price: "$45.00",
    size: "5kg Jute Bag",
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
    price: "$38.00",
    size: "5kg Cotton Bag",
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
    price: "$42.00",
    size: "10kg Woven Bag",
    rating: 5,
    reviews: 215,
    badge: null,
    img: "/images/irri6-sack.png",
    alt: "10kg luxury woven sack of IRRI-6 Long Grain rice",
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center text-[#D4AF37] gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: n <= rating ? "'FILL' 1" : "'FILL' 0" }}>
          {n <= Math.floor(rating) ? "star" : n - rating === 0.5 ? "star_half" : "star"}
        </span>
      ))}
      <span className="text-[#1A3322]/60 text-xs ml-1">({reviews})</span>
    </div>
  );
}

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <>
      <TopNav />
      <main className="bg-[#FDFBF7] w-full min-h-screen pt-[88px] flex flex-col">
        <div className="flex-grow max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Page Header */}
          <div className="col-span-full mb-12 border-b border-[#E6DEC9]/40 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl text-[#1A3322] mb-4">Retail Shop</h1>
              <p className="text-base text-[#1A3322]/70 max-w-2xl font-light">
                Curated selections from our finest harvests, packaged for the discerning culinary enthusiast.
              </p>
            </div>
            <div className="flex items-center gap-4 self-start md:self-end text-sm">
              <span className="text-xs uppercase tracking-widest text-[#1A3322] font-medium">Sort By:</span>
              <select className="bg-transparent border-b border-[#E6DEC9] text-[#1A3322] py-1 pr-6 focus:ring-0 cursor-pointer">
                <option>Recommended</option>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
                <option>New Harvest</option>
              </select>
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className="col-span-1 lg:col-span-3 space-y-12 pr-0 lg:pr-8 border-r-0 lg:border-r border-[#E6DEC9]/30 hidden md:block">
            <div>
              <h3 className="text-xs uppercase mb-6 tracking-widest text-[#1A3322] font-semibold">Rice Type</h3>
              <div className="space-y-4 text-sm text-[#1A3322]/70">
                {["Basmati (Aged)", "Sella (Parboiled)", "IRRI Long Grain", "Jasmine"].map((label, i) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked={i === 0} type="checkbox" className="rounded-sm text-[#1A3322] focus:ring-[#1A3322] h-4 w-4" />
                    <span className="group-hover:text-[#1A3322] transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-6 tracking-widest text-[#1A3322] font-semibold">Packaging Weight</h3>
              <div className="space-y-4 text-sm text-[#1A3322]/70">
                {[
                  { label: "1kg (Sample Pack)", checked: false },
                  { label: "5kg (Pantry Standard)", checked: true },
                  { label: "10kg (Family Size)", checked: false },
                ].map((opt) => (
                  <label key={opt.label} className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked={opt.checked} type="checkbox" className="rounded-sm text-[#1A3322] focus:ring-[#1A3322] h-4 w-4" />
                    <span className="group-hover:text-[#1A3322] transition-colors">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-6 tracking-widest text-[#1A3322] font-semibold">Price Range</h3>
              <div className="flex items-center gap-4 text-sm">
                <input defaultValue="$15" placeholder="Min" className="w-full bg-transparent border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322]" />
                <span className="text-[#1A3322]/50">-</span>
                <input defaultValue="$150" placeholder="Max" className="w-full bg-transparent border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322]" />
              </div>
              <button className="mt-6 w-full text-xs border border-[#1A3322] text-[#1A3322] py-3 hover:bg-[#1A3322] hover:text-[#FDFBF7] transition-colors uppercase tracking-widest">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="col-span-1 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <div key={p.id} className="group flex flex-col relative">
                  {p.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[#E6DEC9] text-[#1A3322] text-[11px] px-3 py-1 uppercase tracking-widest">
                      {p.badge}
                    </div>
                  )}
                  <div className="aspect-[4/5] bg-[#E6DEC9]/20 mb-6 overflow-hidden relative cursor-pointer transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(27,48,34,0.05)]">
                    <img src={p.img} alt={p.alt} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      <button
                        onClick={() =>
                          addItem({
                            id: p.id,
                            name: p.name,
                            variant: p.size,
                            price: parseFloat(p.price.replace("$", "")),
                            image: p.img,
                            alt: p.alt,
                          })
                        }
                        className="w-full bg-[#1A3322] text-[#FDFBF7] py-3 flex items-center justify-center gap-2 hover:bg-[#1A3322]/80 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base text-[#1A3322] font-medium">{p.name}</h4>
                      <span className="font-serif text-xl text-[#1A3322]">{p.price}</span>
                    </div>
                    <p className="text-sm text-[#1A3322]/60 mb-4 line-clamp-2">{p.desc}</p>
                    <div className="flex justify-between items-center mt-auto border-t border-[#E6DEC9]/40 pt-3">
                      <span className="text-xs text-[#1A3322]/60">{p.size}</span>
                      <StarRating rating={p.rating} reviews={p.reviews} />
                    </div>
                    <a href={`/product/${p.id}`} className="bg-[#1A3322] text-[#FDFBF7] w-full py-4 mt-6 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:opacity-90">
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span> View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-8 border-t border-[#E6DEC9]/40 pt-8">
              <button disabled className="text-[#1A3322]/50 flex items-center gap-2 text-xs uppercase tracking-widest disabled:opacity-50">
                <span className="material-symbols-outlined text-sm">arrow_back</span> Prev
              </button>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-[#1A3322] border-b border-[#1A3322] pb-1 font-medium">1</span>
                <a href="#" className="text-[#1A3322]/60 hover:text-[#1A3322] transition-colors">2</a>
                <a href="#" className="text-[#1A3322]/60 hover:text-[#1A3322] transition-colors">3</a>
              </div>
              <button className="text-[#1A3322] flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                Next <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}