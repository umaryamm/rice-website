"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function SignatureReserves() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 432, behavior: "smooth" });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Respect users who've asked for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrame: number;
    const speed = 0.5; // px per frame — tune this for faster/slower drift

    const step = () => {
      if (!isPaused && el) {
        // Loop back to start once we hit the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += speed;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-24 bg-background">
      <div className="flex justify-between items-end mb-12 border-b border-surface-container-highest/40 pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-2 block">
            The Reserve Collection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-container font-medium tracking-wide">
            Signature Reserves
          </h2>
          <p className="font-sans text-sm text-primary-container/70 mt-2 font-light">
            Curated harvests for the discerning palate.
          </p>
        </div>

        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll(-1)}
            className="w-12 h-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container transition-all duration-300 hover:bg-primary-container hover:text-background hover:border-primary-container"
            title="Scroll Left"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-12 h-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container transition-all duration-300 hover:bg-primary-container hover:text-background hover:border-primary-container"
            title="Scroll Right"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5] bg-surface-container-highest/20 mb-6 overflow-hidden rounded-xl shadow-sm transition-shadow duration-500 group-hover:shadow-luxury">
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 85vw, 400px"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-accent-gold/0 rounded-xl transition-all duration-500 group-hover:border-accent-gold/30 z-10" />
            </div>

            <div className="flex justify-between items-start px-1">
              <div>
                <h3 className="font-serif text-lg md:text-xl text-primary-container mb-1 font-medium tracking-wide transition-colors duration-300 group-hover:text-accent-gold">
                  {p.name}
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-primary-container/60 font-light">
                  {p.size}
                </p>
              </div>
              <span className="font-serif text-lg text-primary-container font-semibold">
                ${p.price.toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}