import AdminSidebar from "@/components/AdminSidebar";

const kpis = [
  { label: "Active Shipments", value: "12" },
  { label: "In Customs Hold", value: "3" },
  { label: "Pending Proformas", value: "5" },
  { label: "YTD Export Vol (MT)", value: "42,500" },
];

const contracts = [
  { ref: "HRC-2024-892", consignee: "Global Agri Traders GMBH", vessel: "MSC Isabella / V.245N", port: "Hamburg, DE", incoterm: "CIF", status: "In-Transit", icon: "sailing" },
  { ref: "HRC-2024-901", consignee: "Pacific Rim Foods Ltd.", vessel: "Ever Given / V.012E", port: "Yokohama, JP", incoterm: "FOB", status: "Customs Hold", icon: "warning" },
  { ref: "HRC-2024-905", consignee: "Mercado Del Sur S.A.", vessel: "Pending Assignment", port: "Valparaiso, CL", incoterm: "FCA", status: "Awaiting Vessel", icon: "pending_actions" },
];

export default function ExportLedgerPage() {
  return (
    <div className="flex bg-[#FDFBF7] min-h-screen">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1A3322] mb-2">Export Contracts & Shipments</h1>
              <p className="text-sm text-[#1A3322]/70 max-w-2xl">Real-time ledger of global consignments, vessel tracking, and contractual documentation for premium agricultural exports.</p>
            </div>
            <div className="flex gap-4">
              <button className="border border-[#1A3322] text-[#1A3322] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#E6DEC9]/10 transition-colors">Issue Proforma Invoice</button>
              <button className="bg-[#1A3322] text-[#FDFBF7] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">Upload Bill of Lading</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {kpis.map((k) => (
              <div key={k.label} className="bg-white p-6 border-l-4 border-[#1A3322]">
                <p className="text-xs uppercase tracking-widest text-[#1A3322]/60 mb-2">{k.label}</p>
                <p className="font-serif text-2xl text-[#1A3322]">{k.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded border border-[#E6DEC9]/40 overflow-hidden">
            <div className="p-6 border-b border-[#E6DEC9]/40 flex justify-between items-center bg-[#E6DEC9]/10">
              <h3 className="font-serif text-xl text-[#1A3322]">Active Contracts Ledger</h3>
              <span className="material-symbols-outlined text-[#1A3322]/60 cursor-pointer hover:text-[#1A3322]">filter_list</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E6DEC9]/50">
                    {["Contract Ref", "Consignee", "Vessel / Voyage", "Port of Discharge", "Incoterm", "Status", "Actions"].map((h) => (
                      <th key={h} className="p-4 text-xs uppercase tracking-widest text-[#1A3322]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((c, i) => (
                    <tr key={c.ref} className={`border-b border-[#E6DEC9]/30 hover:bg-[#E6DEC9]/10 transition-colors ${i % 2 === 1 ? "bg-[#E6DEC9]/5" : ""}`}>
                      <td className="p-4 font-medium text-[#1A3322]">{c.ref}</td>
                      <td className="p-4 text-[#1A3322]/70">{c.consignee}</td>
                      <td className="p-4 text-[#1A3322]/70">{c.vessel}</td>
                      <td className="p-4 text-[#1A3322]/70">{c.port}</td>
                      <td className="p-4"><span className="bg-[#E6DEC9]/40 px-2 py-1 rounded text-xs text-[#1A3322]">{c.incoterm}</span></td>
                      <td className="p-4">
                        <span className="flex items-center gap-1 text-[#1A3322]">
                          <span className="material-symbols-outlined text-sm">{c.icon}</span> {c.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-[#D4AF37] hover:text-[#1A3322] underline underline-offset-2 text-xs">View Docs</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}