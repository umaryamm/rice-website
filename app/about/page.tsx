import type { Metadata } from "next";
import Image from "next/image";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "Our heritage, our process, our commitment to the art of grain.",
};

const processSteps = [
  { phase: "Phase 01", title: "Soil Stewardship", desc: "We employ rigorous crop rotation and organic composting to maintain optimal soil biome health, ensuring nutrient-dense cultivation without synthetic fertilizers.", img: "/images/soil-stewardship.png", alt: "Dark, nutrient-rich soil being turned by hand" },
  { phase: "Phase 02", title: "Optical Sorting", desc: "Post-harvest, grains undergo laser-guided optical sorting. Only grains meeting exact dimensional and color tolerances proceed to the final milling stage.", img: "/images/optical-sorting.png", alt: "Optical sorting machinery in a modern milling facility" },
  { phase: "Phase 03", title: "Artisanal Milling", desc: "A slow-friction milling process preserves the structural integrity and essential oils of the grain, resulting in a superior polish and enhanced cooking properties.", img: "/images/artisanal-milling.png", alt: "Perfectly milled white rice grains on linen" },
];

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <main className="bg-background pt-[88px]">
        {/* Split hero */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 min-h-[500px] md:min-h-[716px]">
            <FadeIn className="flex flex-col justify-center py-16 order-2 md:order-1">
              <p className="text-xs uppercase tracking-widest text-accent-gold mb-6">Our Genesis</p>
              <h1 className="font-display-lg-mobile md:font-display-lg text-primary-container mb-8 max-w-lg">
                Cultivating Excellence Since {siteConfig.foundingYear}.
              </h1>
              <p className="font-body-md text-primary-container/70 max-w-md">
                We view agriculture not as an industry, but as an artisanal practice passed down through generations. Our commitment to heritage strains yields a product of unmatched culinary fidelity.
              </p>
            </FadeIn>
            <div className="order-1 md:order-2 h-[400px] md:h-auto relative overflow-hidden group">
              <Image
                src="/images/rice-stalks-golden.png"
                alt="Golden rice stalks in a sun-drenched terraced field"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover shadow-luxury transition-transform duration-[3000ms] ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* Broken grid history section */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <FadeIn className="md:col-span-5 md:col-start-2 relative z-10 h-[350px] md:h-[450px]">
              <Image
                src="/images/archival-harvest.png"
                alt="Archival photograph of early 20th-century farmers harvesting rice"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover shadow-luxury"
              />
            </FadeIn>
            <FadeIn
              delay
              className="md:col-span-5 md:col-start-7 bg-surface-container-lowest p-8 md:p-16 md:-ml-24 relative z-20 shadow-luxury"
            >
              <h2 className="font-headline-sm text-primary-container mb-6">The Lineage of Flavor.</h2>
              <p className="font-technical-data text-primary-container/70 mb-6">
                Our story begins in the fertile valleys where the first heirloom grains were sown. We have painstakingly preserved these original seed lines, resisting the industrial urge to hybridize for yield over quality.
              </p>
              <p className="font-technical-data text-primary-container/70">
                Each harvest is a continuation of a century-old dialogue between the soil, the climate, and our master cultivators — resulting in a grain with a complex aromatic profile modern commercial varieties can&apos;t replicate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Process section */}
        <section className="bg-surface-container-highest/10 py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <FadeIn className="text-center mb-24 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-accent-gold mb-4 block">The Methodology</span>
              <h2 className="font-headline-md text-primary-container">Precision at Every Stage.</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {processSteps.map((step, i) => (
                <FadeIn
                  key={step.title}
                  delay={i % 2 === 1}
                  className={`flex flex-col group ${i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}`}
                >
                  <div className="h-64 mb-8 overflow-hidden relative">
  <Image
    src={step.img}
    alt={step.alt}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
  />
</div>
<div className="border-t border-surface-container-highest/50 pt-6 group-hover:border-accent-gold transition-colors duration-500">
  <span className="text-xs text-accent-gold mb-2 block">{step.phase}</span>
  <h3 className="font-headline-sm !text-xl text-primary-container mb-4 transition-colors duration-300 group-hover:text-accent-gold">
    {step.title}
  </h3>
  <p className="font-technical-data text-primary-container/70">{step.desc}</p>
</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}