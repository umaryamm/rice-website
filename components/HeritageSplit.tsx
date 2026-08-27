"use client";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ParallaxImage from "@/components/ParallaxImage";

export default function HeritageSplit() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <FadeIn className="relative h-[350px] md:h-[500px] order-2 md:order-1">
  <ParallaxImage
    src="/images/archival-harvest.png"
    alt="Archival photograph of early 20th-century farmers harvesting rice"
    className="w-full h-full shadow-luxury"
    strength={30}
  />
</FadeIn>
      <FadeIn delay className="order-1 md:order-2">
        <span className="text-xs uppercase tracking-widest text-accent-gold mb-4 block">A Century of Craft</span>
        <h2 className="font-serif text-3xl md:text-4xl text-primary-container mb-6">
          Every Grain Tells a Story.
        </h2>
        <p className="text-sm text-primary-container/70 mb-8 leading-relaxed">
          From heirloom seed lines preserved across generations to a commitment to sustainable cultivation, our heritage isn't a marketing story — it's how we still work today.
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-container font-semibold border-b-2 border-accent-gold pb-1 transition-opacity hover:opacity-70"
        >
          Read Our Story
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </FadeIn>
    </section>
  );
}