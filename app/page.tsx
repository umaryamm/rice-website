import Image from "next/image";
import TopNav from "@/components/TopNav";
import SignatureReserves from "@/components/SignatureReserves";
import StatsBar from "@/components/StatsBar";
import HeritageSplit from "@/components/HeritageSplit";
import Testimonial from "@/components/Testimonial";
import NewsletterBand from "@/components/NewsletterBand";
import Footer from "@/components/Footer";
import PartnerPaths from "@/components/PartnerPaths";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="bg-background w-full min-h-screen overflow-x-hidden pt-[88px]">
        <section className="relative w-full h-[870px] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
  <Image
    src="/images/rice-stalks-golden.png"
    alt="Terraced rice fields in early morning mist, cinematic wide shot"
    fill
    priority
    sizes="100vw"
    className="object-cover animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
  />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-container/70 via-primary-container/50 to-primary-container/85 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30 z-10" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-6 block drop-shadow-md animate-fade-up">
              Est. 2026
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-background mb-8 tracking-wide drop-shadow-md font-medium animate-fade-up">
              The Art of Grain
            </h1>
            <p className="text-sm md:text-base text-background/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-sm animate-fade-up-delay">
              Cultivating excellence through generations. Experience the pinnacle of premium rice, where ancestral knowledge meets modern sustainability.
            </p>
         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up-delay">
  <a
    className="bg-primary-container border-2 border-background text-background text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 text-center hover:bg-primary-container/80 shadow-xl"
    href="/shop"
  >
    Explore Collections
  </a>
  <a
    className="bg-primary-container border-2 border-background text-background text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 text-center hover:bg-primary-container/80 shadow-xl"
    href="/about"
  >
    Discover Our Origin
  </a>
</div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <span className="material-symbols-outlined text-background/70 text-3xl">expand_more</span>
          </div>
        </section>

        <StatsBar />

        <div className="relative z-30 py-24 md:py-32">
          <SignatureReserves />
        </div>

        <HeritageSplit />
        <PartnerPaths />
        <Testimonial />
        <NewsletterBand />

        <Footer />
      </main>
    </>
  );
}