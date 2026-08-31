"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function SignatureReserves() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getCardOffset = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.children[index] as HTMLElement | undefined;
    return card ? card.offsetLeft : 0;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const wrapped = (index + products.length) % products.length;
      setActiveIndex(wrapped);
      const el = scrollRef.current;
      if (el) {
        el.scrollTo({ left: getCardOffset(wrapped), behavior: "smooth" });
      }
    },
    [getCardOffset]
  );

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  // Autoplay — steps one card at a time, pauses on hover/touch/manual interaction
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % products.length;
        const el = scrollRef.current;
        if (el) el.scrollTo({ left: getCardOffset(nextIndex), behavior: "smooth" });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, getCardOffset]);

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
            onClick={() => {
              setIsPaused(true);
              prev();
            }}
            className="w-12 h-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container transition-all duration-300 hover:bg-primary-container hover:text-background hover:border-primary-container"
            title="Previous"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>
          <button
            onClick={() => {
              setIsPaused(true);
              next();
            }}
            className="w-12 h-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container transition-all duration-300 hover:bg-primary-container hover:text-background hover:border-primary-container"
            title="Next"
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

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 -mt-4">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsPaused(true);
              goTo(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-primary-container" : "w-2 bg-surface-container-highest"
            }`}
          />
        ))}
      </div>
    </section>
  );
}