"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

type RelatedProduct = {
  id: string;
  name: string;
  tag: string;
  price: string;
  img: string;
  alt: string;
};

export default function RelatedProducts({
  title = "Curated Companions",
  products,
  viewAllHref = "/shop",
}: {
  title?: string;
  products: RelatedProduct[];
  viewAllHref?: string;
}) {
  const { addItem } = useCart();

  return (
    <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-24">
      <div className="flex justify-between items-end mb-16 border-b border-surface-container-highest/40 pb-6">
        <h3 className="font-serif text-3xl md:text-5xl text-primary-container">{title}</h3>
        <Link
          href={viewAllHref}
          className="hidden md:inline-block text-xs uppercase tracking-widest text-primary-container underline hover:text-accent-gold transition-colors"
        >
          View All Collections
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((p) => (
          <div key={p.id} className="group">
            <Link href={`/product/${p.id}`} className="block cursor-pointer">
              <div className="w-full aspect-[4/5] bg-surface-container-highest/20 mb-6 relative overflow-hidden flex items-center justify-center p-8">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/5 transition-colors duration-300" />
                <button
                  onClick={(e) => {
                    e.preventDefault(); // don't trigger the wrapping Link navigation
                    addItem({ id: p.id, name: p.name, variant: p.tag, price: parseFloat(p.price.replace("$", "")), image: p.img, alt: p.alt });
                  }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-primary-container text-background text-xs px-6 py-3 w-max z-10"
                >
                  Quick Add
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base text-primary-container mb-1">{p.name}</h4>
                  <p className="text-xs text-primary-container/60">{p.tag}</p>
                </div>
                <span className="font-serif text-xl text-primary-container">{p.price}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link href={viewAllHref} className="text-xs uppercase tracking-widest text-primary-container underline">
          View All Collections
        </Link>
      </div>
    </section>
  );
}