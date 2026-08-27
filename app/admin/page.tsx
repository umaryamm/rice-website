import AdminSidebar from "@/components/AdminSidebar";

const metrics = [
  { label: "Total Gross Domestic Revenue (PKR)", value: "4.2B", icon: "payments", trend: "+12%", trendLabel: "vs last quarter", up: true },
  { label: "Active Int. Freight Exports (FCL)", value: "184", icon: "flight_takeoff", trend: "+5%", trendLabel: "vs last month", up: true },
  { label: "Pending Distributor Apps", value: "27", icon: "assignment_ind", trend: null, trendLabel: "Requires review", up: null },
  { label: "Total Combined Milling Stock (MT)", value: "12,500", icon: "warehouse", trend: "-2%", trendLabel: "seasonal adjustment", up: false },
];

export default function AdminOverviewPage() {
  return (
    <div className="flex bg-[#FDFBF7] min-h-screen">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <header className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A3322]">Overview</h2>
              <p className="text-base text-[#1A3322]/70 mt-2">Main admin dashboard metrics for Heritage Rice Co.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white p-6 border border-[#E6DEC9]/40 rounded hover:border-[#D4AF37]/50 transition-colors">
                <p className="text-xs uppercase tracking-widest text-[#1A3322] mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">{m.icon}</span>
                  {m.label}
                </p>
                <h3 className="font-serif text-3xl text-[#1A3322] font-bold">{m.value}</h3>
                <div className="mt-4 flex items-center text-sm gap-2">
                  {m.trend && (
                    <span className={`flex items-center ${m.up ? "text-[#1A3322]" : "text-[#8a6d1f]"}`}>
                      <span className="material-symbols-outlined text-[16px]">{m.up ? "trending_up" : "trending_down"}</span>
                      {m.trend}
                    </span>
                  )}
                  <span className="text-[#1A3322]/50">{m.trendLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}