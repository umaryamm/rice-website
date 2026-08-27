"use client";
import FadeIn from "@/components/FadeIn";

export default function Testimonial() {
  return (
    <section className="bg-primary-container py-24">
      <FadeIn className="max-w-3xl mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-accent-gold text-4xl mb-6 block">format_quote</span>
        <p className="font-serif text-xl md:text-2xl text-background leading-relaxed mb-8">
          The depth of aroma and consistency of grain we get from Heritage Rice Co. is unmatched — it's the difference our guests notice immediately.
          
        </p>
      
      </FadeIn>
    </section>
  );
}