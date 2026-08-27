import type { Metadata } from "next";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: "Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <TopNav />
      <main className="bg-background pt-[88px] min-h-screen">
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-24">
          <span className="text-xs uppercase tracking-widest text-accent-gold mb-4 block">Legal</span>
          <h1 className="font-serif text-3xl md:text-4xl text-primary-container mb-8">Terms of Service</h1>

          <div className="bg-surface-container-highest/20 border border-accent-gold/30 rounded-lg p-6 mb-12">
            <p className="font-body-md text-primary-container/80 text-sm">
              ⚠️ <strong>Placeholder content.</strong> This page is a structural stand-in for demo purposes only.
              Replace with legal copy reviewed by the client (or their legal counsel) before public launch.
            </p>
          </div>

          <div className="flex flex-col gap-8 font-body-md text-primary-container/70 leading-relaxed">
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Acceptance of Terms</h2>
              <p>[Placeholder — using the site constitutes agreement to these terms.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Orders & Payment</h2>
              <p>[Placeholder — pricing, payment methods, order acceptance/cancellation policy.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Shipping & Returns</h2>
              <p>[Placeholder — delivery timelines, return/refund policy.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Intellectual Property</h2>
              <p>[Placeholder — site content, branding, and product imagery ownership.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Limitation of Liability</h2>
              <p>[Placeholder — standard liability disclaimer language.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Contact Us</h2>
              <p>Questions about these terms: [placeholder email]</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}