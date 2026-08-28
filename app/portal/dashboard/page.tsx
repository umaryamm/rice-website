
import Link from "next/link";
import Image from "next/image";
import B2BSidebar from "@/components/B2BSidebar";

export const dynamic = "force-dynamic";


const allocations = [
  { ref: "#HR-8842-A", variety: "Heirloom Basmati Reserve", volume: "120 MT", status: "Confirmed", tone: "confirmed" },
  { ref: "#HR-8841-C", variety: "Jasmine Select", volume: "50 MT", status: "In Transit", tone: "transit" },
  { ref: "#HR-8839-B", variety: "Arborio Premium", volume: "85 MT", status: "Pending Review", tone: "pending" },
];

const statusStyles: Record<string, string> = {
  confirmed: "border-primary-container/40 text-primary-container bg-primary-container/5",
  transit: "border-accent-gold/50 text-[#8a6d1f] bg-accent-gold/10",
  pending: "border-surface-container-highest text-primary-container/60 bg-surface-container-highest/20",
};

export default function DashboardPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <B2BSidebar />
      <main className="flex-1 md:ml-72 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-primary-container mb-2">
                Welcome back, <br />Global Foods Inc.
              </h2>
              <p className="font-body-md text-primary-container/70 max-w-2xl">
                Overview of your current inventory allocations and active logistics for Q3 distribution.
              </p>
            </div>
            <button className="border border-primary-container text-primary-container py-3 px-6 rounded-full text-xs uppercase tracking-widest hover:bg-primary-container hover:text-background transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Request Bulk Quote
            </button>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <div className="bg-surface-container-highest/10 rounded-xl p-8 border border-surface-container-highest/40 relative overflow-hidden">
              <p className="text-xs uppercase tracking-widest text-primary-container mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-gold" /> Active RFQs
              </p>
              <p className="font-serif text-6xl text-primary-container mb-2">04</p>
              <p className="text-xs text-primary-container/60 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">arrow_upward</span> +2 since last week
              </p>
            </div>
            <div className="bg-surface-container-highest/10 rounded-xl p-8 border border-surface-container-highest/40">
              <p className="text-xs uppercase tracking-widest text-primary-container mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container/40" /> Pending Shipments
              </p>
              <p className="font-serif text-6xl text-primary-container mb-2">12</p>
              <p className="text-xs text-primary-container/60">Scheduled for transit</p>
            </div>
            <div className="bg-primary-container rounded-xl p-8 text-background relative overflow-hidden">
              <p className="text-xs uppercase tracking-widest text-background/60 mb-4">Available Inventory (MT)</p>
              <p className="font-serif text-6xl mb-2">850</p>
              <div className="w-full bg-background/20 h-1 mt-4 rounded-full">
                <div className="bg-accent-gold h-full rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-xs text-background/60 mt-2 text-right">75% Capacity</p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <section className="lg:col-span-8">
              <div className="flex justify-between items-end mb-8 border-b border-surface-container-highest/40 pb-4">
                <h3 className="font-serif text-2xl text-primary-container">Recent Allocations</h3>
                {/* NOTE: no dedicated "all allocations" page exists yet */}
                <span className="text-xs text-primary-container/40 flex items-center gap-1 cursor-not-allowed" title="Not built yet">
                  View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr>
                      {["Order Ref", "Variety", "Volume", "Status"].map((h) => (
                        <th key={h} className="text-xs uppercase tracking-widest text-primary-container py-4 px-4 border-b border-surface-container-highest">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allocations.map((row) => (
                      <tr key={row.ref} className="hover:bg-surface-container-highest/10 transition-colors">
                        <td className="py-5 px-4 border-b border-surface-container-highest/60 text-sm font-semibold text-primary-container">{row.ref}</td>
                        <td className="py-5 px-4 border-b border-surface-container-highest/60 text-sm text-primary-container">{row.variety}</td>
                        <td className="py-5 px-4 border-b border-surface-container-highest/60 text-sm text-primary-container/70">{row.volume}</td>
                        <td className="py-5 px-4 border-b border-surface-container-highest/60">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[row.tone]}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" /> {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-highest/10 rounded-xl p-8 border border-surface-container-highest/40">
                <h4 className="font-serif text-xl text-primary-container mb-4">Technical Catalog Q3</h4>
                <p className="text-sm text-primary-container/70 mb-8">
                  Access detailed specifications, moisture content, and origin tracing for the latest harvest.
                </p>
                <Link href="/portal/catalog" className="inline-flex items-center gap-2 pb-1 border-b border-accent-gold text-primary-container hover:text-accent-gold transition-colors text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">download</span> View Full Catalog
                </Link>
              </div>
              <div className="h-48 md:flex-1 relative bg-primary-container overflow-hidden rounded-xl">
                <Image src="/images/rice-grains-texture.png" alt="Raw heirloom rice grains on burlap" fill sizes="400px" className="object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs text-accent-gold mb-1">Harvest Report</p>
                  <p className="font-serif text-xl text-background">Yield Quality: Exceptional</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
