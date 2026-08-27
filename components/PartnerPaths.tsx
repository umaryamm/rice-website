"use client";
import FadeIn from "@/components/FadeIn";

const paths = [
  {
    icon: "storefront",
    title: "Retail Shop",
    desc: "Browse our full collection of premium heritage rice, curated for the home kitchen.",
    cta: "Shop Now",
    href: "/shop",
  },
{
  icon: "handshake",
  title: "Become a Distributor",
  desc: "Partner with us to bring Heritage Rice Co. to new markets and retail shelves.",
  cta: "Apply to Distribute",
  href: "/distributors",
},
  {
    icon: "public",
    title: "B2B Export",
    desc: "Wholesale and export solutions for restaurants, importers, and international buyers.",
    cta: "Explore Export Portal",
    href: "/portal",
  },
];

export default function PartnerPaths() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-accent-gold mb-4 block">Work With Us</span>
        <h2 className="font-serif text-3xl md:text-4xl text-primary-container">Three Ways to Partner.</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paths.map((path, i) => (
          <FadeIn
  key={path.title}
  delay={i % 2 === 1}
  className="border border-surface-container-highest/40 p-10 flex flex-col items-start hover:border-accent-gold hover:-translate-y-2 hover:shadow-luxury transition-all duration-500 group"
>
  <span className="material-symbols-outlined text-4xl text-accent-gold mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
    {path.icon}
  </span>
  
            <h3 className="font-serif text-xl text-primary-container mb-3">{path.title}</h3>
            <p className="text-sm text-primary-container/70 mb-8 leading-relaxed flex-1">{path.desc}</p>
            <a
              href={path.href}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-container font-semibold border-b-2 border-transparent group-hover:border-accent-gold pb-1 transition-all"
            >
              {path.cta}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}