"use client";
import { useState, useMemo } from "react";
import AdminSidebar from "@/components/AdminSidebar";

export const dynamic = "force-dynamic";


type Order = {
  id: string;
  date: string;
  area: string;
  territory: string;
  total: string;
  payment: string;
  provider: string;
  status: string;
};

const initialOrders: Order[] = [
  { id: "#HR-9021", date: "Oct 24, 2024", area: "Lahore, Gulberg", territory: "Punjab", total: "PKR 12,450", payment: "JazzCash Verified", provider: "Trax", status: "Processing" },
  { id: "#HR-9020", date: "Oct 24, 2024", area: "Karachi, DHA", territory: "Sindh", total: "PKR 24,900", payment: "COD Pending", provider: "Leopards", status: "Awaiting Confirmation" },
  { id: "#HR-9019", date: "Oct 23, 2024", area: "Islamabad, F-8", territory: "Punjab", total: "PKR 8,200", payment: "JazzCash Verified", provider: "Trax", status: "Dispatched" },
  { id: "#HR-9018", date: "Oct 23, 2024", area: "Peshawar, Hayatabad", territory: "KPK", total: "PKR 15,600", payment: "Payment Failed", provider: "-", status: "On Hold" },
];

const paymentStyles: Record<string, string> = {
  "JazzCash Verified": "bg-primary-container/10 text-primary-container",
  "COD Pending": "bg-surface-container-highest/40 text-primary-container/70",
  "Payment Failed": "bg-red-100 text-red-700",
};

const paymentIcons: Record<string, string> = {
  "JazzCash Verified": "check_circle",
  "COD Pending": "pending",
  "Payment Failed": "error",
};

export default function OrdersDeskPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [territory, setTerritory] = useState("All Territories");
  const [payment, setPayment] = useState("All Payment Statuses");
  const [provider, setProvider] = useState("All Providers");
  const [toast, setToast] = useState<string | null>(null);

  const notify = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      if (territory !== "All Territories" && o.territory !== territory) return false;
      if (payment !== "All Payment Statuses" && o.payment !== payment) return false;
      if (provider !== "All Providers" && o.provider !== provider) return false;
      return true;
    });
  }, [orders, territory, payment, provider]);

  const resetFilters = () => {
    setTerritory("All Territories");
    setPayment("All Payment Statuses");
    setProvider("All Providers");
  };

  const updateStatus = (id: string, newStatus: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    notify(`${id} status updated to ${newStatus}.`);
  };

  return (
    <div className="flex bg-background min-h-screen">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 min-h-screen pt-16 md:pt-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container-highest/40 pb-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-container mb-2">Domestic Orders Desk</h2>
              <p className="text-sm text-primary-container/70 max-w-2xl">Manage and track B2C fulfillment operations across regional territories.</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => notify("Demo only — CSV export not wired yet.")}
                className="border border-primary-container text-primary-container rounded-full px-6 py-3 text-xs uppercase tracking-widest hover:bg-surface-container-highest/10 transition-colors"
              >
                Export CSV
              </button>
              <button
                onClick={() => notify("Demo only — manifest generation not wired yet.")}
                className="bg-primary-container text-background rounded-full px-6 py-3 text-xs uppercase tracking-widest hover:bg-primary-container/90 transition-colors"
              >
                Generate Manifest
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-surface-container-lowest p-6 border border-surface-container-highest/40 rounded-xl">
              <span className="text-xs uppercase tracking-widest text-primary-container/60 mb-2 block">Pending Fulfillment</span>
              <span className="font-serif text-3xl text-primary-container">142</span>
              <p className="text-xs text-primary-container mt-2">↑ 12% vs last week</p>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-surface-container-highest/40 rounded-xl">
              <span className="text-xs uppercase tracking-widest text-primary-container/60 mb-2 block">COD Pending Verification</span>
              <span className="font-serif text-3xl text-primary-container">38</span>
              <p className="text-xs text-accent-gold mt-2">Requires action</p>
            </div>
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 border border-surface-container-highest/40 rounded-xl flex flex-col justify-center gap-4">
              <div className="flex flex-wrap gap-4 items-center">
                <select value={territory} onChange={(e) => setTerritory(e.target.value)} className="bg-background border border-surface-container-highest rounded-lg px-3 py-2 text-sm text-primary-container">
                  <option>All Territories</option>
                  <option>Punjab</option>
                  <option>Sindh</option>
                  <option>KPK</option>
                </select>
                <select value={payment} onChange={(e) => setPayment(e.target.value)} className="bg-background border border-surface-container-highest rounded-lg px-3 py-2 text-sm text-primary-container">
                  <option>All Payment Statuses</option>
                  <option>JazzCash Verified</option>
                  <option>COD Pending</option>
                  <option>Payment Failed</option>
                </select>
                <select value={provider} onChange={(e) => setProvider(e.target.value)} className="bg-background border border-surface-container-highest rounded-lg px-3 py-2 text-sm text-primary-container">
                  <option>All Providers</option>
                  <option>Trax</option>
                  <option>Leopards</option>
                </select>
                <button onClick={resetFilters} className="text-primary-container underline text-sm ml-auto hover:text-accent-gold transition-colors">Reset Filters</button>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-surface-container-highest/40 rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-surface-container-highest/50 bg-surface-container-highest/10">
                  {["Order ID", "Date", "Delivery Area", "Total Value", "Payment Status", "Provider", "Action"].map((h) => (
                    <th key={h} className="p-4 text-xs uppercase tracking-widest text-primary-container">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-primary-container/50">No orders match the current filters.</td>
                  </tr>
                ) : (
                  filtered.map((o) => (
                    <tr key={o.id} className="border-b border-surface-container-highest/30 hover:bg-surface-container-highest/10 transition-colors">
                      <td className="p-4 text-primary-container font-semibold">{o.id}</td>
                      <td className="p-4 text-primary-container/70">{o.date}</td>
                      <td className="p-4 text-primary-container/70">{o.area}</td>
                      <td className="p-4 text-primary-container">{o.total}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${paymentStyles[o.payment]}`}>
                          <span className="material-symbols-outlined text-[14px]">{paymentIcons[o.payment]}</span> {o.payment}
                        </span>
                      </td>
                      <td className="p-4 text-primary-container/70">{o.provider}</td>
                      <td className="p-4 text-right">
                        <select
                          value={o.status}
                          onChange={(e) => updateStatus(o.id, e.target.value)}
                          className="bg-background border border-surface-container-highest rounded-lg text-xs px-2 py-1 text-primary-container"
                        >
                          <option>{o.status}</option>
                          <option>Processing</option>
                          <option>Dispatched</option>
                          <option>Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="p-4 border-t border-surface-container-highest/40 flex justify-between items-center text-sm text-primary-container/60">
              <span>Showing {filtered.length} of {orders.length} orders</span>
              <div className="flex gap-2">
                <button disabled className="px-3 py-1 border border-surface-container-highest rounded-lg opacity-50">Prev</button>
                <button disabled className="px-3 py-1 border border-surface-container-highest rounded-lg opacity-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {toast && (
        <div className="fixed bottom-8 right-8 bg-primary-container text-background px-6 py-4 rounded-xl shadow-luxury text-sm z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
