import AdminSidebar from "@/components/AdminSidebar";

const metrics = [
  {
    label: "Total Gross Domestic Revenue (PKR)",
    value: "4.2B",
    icon: "payments",
    trend: "+12%",
    trendLabel: "vs last quarter",
    up: true,
  },
  {
    label: "Active Int. Freight Exports (FCL)",
    value: "184",
    icon: "flight_takeoff",
    trend: "+5%",
    trendLabel: "vs last month",
    up: true,
  },
  {
    label: "Pending Distributor Apps",
    value: "5",
    icon: "assignment_ind",
    trend: null,
    trendLabel: "Requires review",
    up: null,
  },
  {
    label: "Total Combined Milling Stock (MT)",
    value: "12,500",
    icon: "warehouse",
    trend: "-2%",
    trendLabel: "seasonal adjustment",
    up: false,
  },
];

export default function AdminOverviewPage() {
  return (
    <div className="min-h-screen bg-[#fffaf4]">
      <AdminSidebar />

      <main className="min-h-screen md:ml-64">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12 md:py-14">
          <header className="mb-10 border-b border-[#eadfce] pb-6">
            <h1 className="text-4xl font-normal tracking-tight text-[#16302e] md:text-5xl">
              Overview
            </h1>

            <p className="mt-2 text-[13px] text-[#68736d]">
              Main admin dashboard metrics for Heritage Rice Co.
            </p>
          </header>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-[#eadfce] bg-white p-6 transition-colors hover:border-[#c9a75d]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#52605a]">
                    {metric.label}
                  </p>

                  <span className="material-symbols-outlined shrink-0 text-[20px] text-[#b8860b]">
                    {metric.icon}
                  </span>
                </div>

                <div className="text-3xl font-medium tracking-tight text-[#16302e]">
                  {metric.value}
                </div>

                <div className="mt-4 flex items-center gap-2 text-[11px]">
                  {metric.trend && (
                    <span
                      className={`flex items-center gap-1 ${
                        metric.up ? "text-[#315c48]" : "text-[#8a6d1f]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {metric.up ? "trending_up" : "trending_down"}
                      </span>
                      {metric.trend}
                    </span>
                  )}

                  <span className="text-[#8b918d]">
                    {metric.trendLabel}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-xl border border-[#eadfce] bg-white p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#9b8a72]">
                    Operations
                  </p>
                  <h2 className="mt-2 text-xl font-medium text-[#16302e]">
                    Administrative activity
                  </h2>
                </div>

                <span className="material-symbols-outlined text-[#b8860b]">
                  monitoring
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#faf5ee] p-5">
                  <p className="text-[10px] uppercase tracking-wider text-[#8b918d]">
                    Orders today
                  </p>
                  <p className="mt-2 text-2xl text-[#16302e]">28</p>
                </div>

                <div className="rounded-lg bg-[#faf5ee] p-5">
                  <p className="text-[10px] uppercase tracking-wider text-[#8b918d]">
                    Awaiting dispatch
                  </p>
                  <p className="mt-2 text-2xl text-[#16302e]">12</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#eadfce] bg-[#16302e] p-6 text-[#fffaf4]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#c9a75d]">
                System status
              </p>

              <h2 className="mt-2 text-xl font-medium">
                Mock administration
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-[#d7ddd8]">
                This administration interface is currently frontend-only.
                Orders, products, applications and exports are sample data.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[11px] text-[#d7ddd8]">
                <span className="h-2 w-2 rounded-full bg-[#9bc58b]" />
                Interface operational
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
