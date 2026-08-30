import B2BSidebar from "@/components/B2BSidebar";

export const dynamic = "force-dynamic";

const shipments = [
  { ref: "#SC-4471", route: "Karachi → Rotterdam", variety: "Basmati 1121", volume: "24 MT", eta: "Sep 14, 2026", status: "In Transit" },
  { ref: "#SC-4468", route: "Karachi → Dubai", variety: "Jasmine Select", volume: "18 MT", eta: "Sep 08, 2026", status: "Customs Hold" },
  { ref: "#SC-4460", route: "Karachi → Singapore", variety: "Arborio Premium", volume: "27 MT", eta: "Aug 30, 2026", status: "Delivered" },
];

const statusStyles: Record<string, string> = {
  "In Transit": "border-accent-gold/50 text-[#8a6d1f] bg-accent-gold/10",
  "Customs Hold": "border-red-700/40 text-red-700 bg-red-700/5",
  "Delivered": "border-primary-container/40 text-primary-container bg-primary-container/5",
};

export default function SupplyChainPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <B2BSidebar />
      <main className="flex-1 md:ml-72 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          <header className="mb-16 border-b border-surface-container-highest/40 pb-8">
            <p className="text-xs uppercase tracking-widest text-primary-container mb-4">Enterprise Portal / Logistics</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-container mb-4">Supply Chain Tracker</h2>
            <p className="font-body-md text-primary-container/70 max-w-2xl">
              Live status on active maritime shipments — from mill dispatch through customs clearance to final port delivery.
            </p>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  {["Reference", "Route", "Variety", "Volume", "ETA", "Status"].map((h) => (
                    <th key={h} className="text-xs uppercase tracking-widest text-primary-container pb-6 pr-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shipments.map((s) => (
                  <tr key={s.ref} className="border-b border-surface-container-highest/40 hover:bg-surface-container-highest/10 transition-colors">
                    <td className="py-5 pr-4 font-semibold text-primary-container">{s.ref}</td>
                    <td className="py-5 pr-4 text-primary-container/70">{s.route}</td>
                    <td className="py-5 pr-4 text-primary-container/70">{s.variety}</td>
                    <td className="py-5 pr-4 text-primary-container/70">{s.volume}</td>
                    <td className="py-5 pr-4 text-primary-container/70">{s.eta}</td>
                    <td className="py-5 pr-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[s.status]}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" /> {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-xs text-primary-container/40">
            Placeholder data — this table will pull from live carrier tracking once the shipping integration is built.
          </p>
        </div>
      </main>
    </div>
  );
}