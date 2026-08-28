import B2BSidebar from "@/components/B2BSidebar";

export const dynamic = "force-dynamic";


const faqs = [
  { q: "How do I request a bulk quote?", a: "Use the \"Request Bulk Quote\" button on your Dashboard, or select varieties directly in the Bulk Catalog and click \"Add Selection to RFQ.\"" },
  { q: "What Incoterms do you support?", a: "We currently support FOB and CIF shipments from Karachi port. Contact your account manager for other arrangements." },
  { q: "How long does customs clearance typically take?", a: "Clearance timelines vary by destination port and current customs conditions — track live status in Supply Chain." },
];

export default function PortalSupportPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <B2BSidebar />
      <main className="flex-1 md:ml-72 min-h-screen">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          <header className="mb-16 border-b border-surface-container-highest/40 pb-8">
            <p className="text-xs uppercase tracking-widest text-primary-container mb-4">Enterprise Portal / Support</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-container mb-4">Distributor Support</h2>
            <p className="font-body-md text-primary-container/70">
              Have a question about your account, an active shipment, or a bulk order? Reach your dedicated export team directly.
            </p>
          </header>

          <div className="bg-surface-container-lowest border border-surface-container-highest/50 rounded-xl p-8 mb-16 flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-container mb-2">Export Team</p>
              <p className="font-serif text-xl text-primary-container mb-1">hq@heritagericeco.com</p>
              <p className="text-sm text-primary-container/60">Response within 1 business day</p>
            </div>
            {/* NOTE: /contact doesn't exist yet — this opens a mail client instead until a real contact page is built */}
            <a
              href="mailto:hq@heritagericeco.com"
              className="self-start md:self-center bg-primary-container text-background rounded-full text-xs uppercase tracking-widest px-6 py-3 hover:bg-primary-container/90 transition-colors"
            >
              Open a Support Request
            </a>
          </div>

          <h3 className="font-serif text-2xl text-primary-container mb-8">Frequently Asked</h3>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-surface-container-highest/40 pb-6">
                <p className="text-base font-semibold text-primary-container mb-2">{f.q}</p>
                <p className="text-sm text-primary-container/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
