import Link from "next/link";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function EditorialStub({
  eyebrow,
  title,
  paragraphs,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <>
      <TopNav />

      <main className="bg-background w-full min-h-screen pt-[88px] flex flex-col">
        <section className="flex-grow max-w-[900px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-6 block">
              {eyebrow}
            </span>

            <h1 className="font-serif text-4xl md:text-6xl text-primary-container mb-10 tracking-wide">
              {title}
            </h1>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="flex flex-col gap-6 font-body-md text-primary-container/75 leading-relaxed max-w-2xl"
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </FadeIn>

          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-12 text-xs uppercase tracking-widest border-b border-primary-container text-primary-container pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors"
            >
              {ctaLabel}
            </Link>
          )}
        </section>

        <Footer />
      </main>
    </>
  );
}
