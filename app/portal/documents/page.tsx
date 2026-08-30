"use client";
import { useState, useMemo } from "react";
import B2BSidebar from "@/components/B2BSidebar";

export const dynamic = "force-dynamic";

const invoices = [
  { id: "INV-2024-089", desc: "Bulk Order - Jasmine Premium", date: "Oct 24, 2024", amount: "$42,500.00", status: "Paid" },
  { id: "PRO-2024-112", desc: "Advance - Arborio Reserve", date: "Nov 02, 2024", amount: "$18,200.00", status: "Pending" },
  { id: "INV-2024-075", desc: "Bulk Order - Basmati Gold", date: "Sep 15, 2024", amount: "$65,000.00", status: "Paid" },
];

const complianceDocs = [
  { title: "Phytosanitary Certificate", ref: "REF-PHY-JP-889", type: "Agricultural Clearances", date: "Oct 20, 2024", status: "Valid (90 Days)", icon: "policy" },
  { title: "Customs Clearance Form C-1", ref: "REF-CUST-US-112", type: "Import/Export", date: "Oct 18, 2024", status: "Cleared", icon: "description" },
  { title: "Lab Quality Analysis Report", ref: "REF-LAB-Q3-24", type: "Quality Control", date: "Sep 30, 2024", status: "Permanent", icon: "fact_check" },
];

export default function DocumentHubPage() {
  const [query, setQuery] = useState("");

  const filteredInvoices = useMemo(
    () => invoices.filter((i) => `${i.id} ${i.desc}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  const filteredDocs = useMemo(
    () => complianceDocs.filter((d) => `${d.title} ${d.ref}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="flex bg-background min-h-screen">
      <B2BSidebar />
      <main className="flex-1 md:ml-72 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container-highest/40 pb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-container mb-4">Enterprise Portal / Documents</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-container">Document Hub</h2>
            </div>
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary-container/50">search</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search invoices, certificates..."
                className="w-full bg-surface-container-highest/15 border-none rounded-full py-3 pl-10 pr-4 text-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none placeholder:text-primary-container/40"
              />
            </div>
          </header>

          <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-primary-container">Recent Invoices</h3>
              <span className="text-xs text-accent-gold/50 uppercase underline underline-offset-4 cursor-not-allowed" title="Not built yet">View All</span>
            </div>
            {filteredInvoices.length === 0 ? (
              <p className="text-sm text-primary-container/50">No invoices match &quot;{query}&quot;.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInvoices.map((inv) => (
                  <div key={inv.id} className="bg-surface-container-lowest border border-surface-container-highest/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:-translate-y-0.5">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-surface-container-highest/20 flex items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-primary-container">receipt_long</span>
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider ${
                          inv.status === "Paid" ? "bg-primary-container/10 text-primary-container" : "bg-surface-container-highest/40 text-primary-container/70"
                        }`}>
                          {inv.status}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-primary-container mb-1">Invoice #{inv.id}</h4>
                      <p className="text-sm text-primary-container/60 mb-4">{inv.desc}</p>
                      <table className="w-full mb-6 text-sm">
                        <tbody>
                          <tr className="border-b border-surface-container-highest/40">
                            <td className="py-2 text-primary-container/60 font-semibold">Date</td>
                            <td className="py-2 text-right text-primary-container">{inv.date}</td>
                          </tr>
                          <tr className="border-b border-surface-container-highest/40">
                            <td className="py-2 text-primary-container/60 font-semibold">Amount</td>
                            <td className="py-2 text-right text-primary-container font-serif text-lg">{inv.amount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button
                      onClick={() => alert("Demo only — no real PDF exists for this invoice yet.")}
                      className="w-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-background py-3 rounded-full transition-colors flex justify-center items-center gap-2 text-xs uppercase tracking-widest"
                    >
                      <span className="material-symbols-outlined text-sm">download</span> PDF
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <div className="flex items-center justify-between mb-8 border-b border-surface-container-highest/40 pb-4">
              <h3 className="font-serif text-2xl text-primary-container">Compliance & Certification</h3>
            </div>
            {filteredDocs.length === 0 ? (
              <p className="text-sm text-primary-container/50">No documents match &quot;{query}&quot;.</p>
            ) : (
              <div className="bg-surface-container-lowest border border-surface-container-highest/50 rounded-xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 bg-surface-container-highest/20 border-b border-surface-container-highest/50 text-xs uppercase tracking-wider text-primary-container hidden md:grid">
                  <div className="col-span-4">Document Title & ID</div>
                  <div className="col-span-3">Type</div>
                  <div className="col-span-2">Date Issued</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1 text-right">Action</div>
                </div>
                {filteredDocs.map((doc) => (
                  <div key={doc.ref} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center border-b border-surface-container-highest/30 hover:bg-surface-container-highest/10 transition-colors">
                    <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent-gold bg-surface-container-highest/30 p-2 rounded-lg">{doc.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-primary-container">{doc.title}</p>
                        <p className="text-xs text-primary-container/50">{doc.ref}</p>
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 hidden md:block text-sm text-primary-container/70">{doc.type}</div>
                    <div className="col-span-1 md:col-span-2 hidden md:block text-sm text-primary-container/70">{doc.date}</div>
                    <div className="col-span-1 md:col-span-2 hidden md:block text-sm text-primary-container/70">{doc.status}</div>
                    <div className="col-span-1 text-right mt-2 md:mt-0">
                      <button
                        onClick={() => alert("Demo only — no real document exists for this yet.")}
                        className="text-primary-container hover:text-accent-gold transition-colors p-2"
                        title="Download"
                      >
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}