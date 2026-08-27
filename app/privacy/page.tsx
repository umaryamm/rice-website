import type { Metadata } from "next";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <TopNav />
      <main className="bg-background pt-[88px] min-h-screen">
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-24">
          <span className="text-xs uppercase tracking-widest text-accent-gold mb-4 block">Legal</span>
          <h1 className="font-serif text-3xl md:text-4xl text-primary-container mb-8">Privacy Policy</h1>

          <div className="bg-surface-container-highest/20 border border-accent-gold/30 rounded-lg p-6 mb-12">
            <p className="font-body-md text-primary-container/80 text-sm">
              ⚠️ <strong>Placeholder content.</strong> This page is a structural stand-in for demo purposes only.
              Replace with legal copy reviewed by the client (or their legal counsel) before public launch.
            </p>
          </div>

          <div className="flex flex-col gap-8 font-body-md text-primary-container/70 leading-relaxed">
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Information We Collect</h2>
              <p>[Placeholder — describe what data is collected: account info, order details, payment info via processor, cookies/analytics, etc.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">How We Use Your Information</h2>
              <p>[Placeholder — order fulfillment, communications, marketing opt-in, analytics.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Data Sharing</h2>
              <p>[Placeholder — third parties: payment processor, shipping carriers, email service provider.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Your Rights</h2>
              <p>[Placeholder — access, correction, deletion requests; relevant regional regulations e.g. GDPR/CCPA if applicable.]</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-primary-container mb-3">Contact Us</h2>
              <p>Questions about this policy: [placeholder email]</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}