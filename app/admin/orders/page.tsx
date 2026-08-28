"use client";

import { useMemo, useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";

type OrderStatus =
  | "Processing"
  | "Confirmed"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

type Order = {
  id: string;
  customer: string;
  email: string;
  product: string;
  quantity: number;
  total: string;
  date: string;
  status: OrderStatus;
};

const initialOrders: Order[] = [
  {
    id: "HRC-1048",
    customer: "Ayesha Khan",
    email: "ayesha@example.com",
    product: "Heritage Sella Basmati",
    quantity: 4,
    total: "PKR 9,800",
    date: "28 Aug 2026",
    status: "Processing",
  },
  {
    id: "HRC-1047",
    customer: "Muhammad Ali",
    email: "muhammad@example.com",
    product: "Terrace Reserve White Basmati",
    quantity: 2,
    total: "PKR 6,200",
    date: "28 Aug 2026",
    status: "Confirmed",
  },
  {
    id: "HRC-1046",
    customer: "Sara Ahmed",
    email: "sara@example.com",
    product: "Heritage Sella Basmati",
    quantity: 6,
    total: "PKR 14,700",
    date: "27 Aug 2026",
    status: "Shipped",
  },
  {
    id: "HRC-1045",
    customer: "Omar Farooq",
    email: "omar@example.com",
    product: "Terrace Reserve White Basmati",
    quantity: 3,
    total: "PKR 9,300",
    date: "27 Aug 2026",
    status: "Delivered",
  },
  {
    id: "HRC-1044",
    customer: "Hina Malik",
    email: "hina@example.com",
    product: "Heritage Sella Basmati",
    quantity: 2,
    total: "PKR 4,900",
    date: "26 Aug 2026",
    status: "Cancelled",
  },
];

const statusStyles: Record<OrderStatus, string> = {
  Processing: "border-[#d9bd83] bg-[#fff7e6] text-[#80621f]",
  Confirmed: "border-[#b7cdbd] bg-[#f0f7f1] text-[#315c48]",
  Shipped: "border-[#b8c8d5] bg-[#f1f6fa] text-[#39566b]",
  Delivered: "border-[#b7cdbd] bg-[#f0f7f1] text-[#315c48]",
  Cancelled: "border-[#dfb6b0] bg-[#fff2f0] text-[#8a3e35]",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [statusFilter, setStatusFilter] = useState<"All" | OrderStatus>(
    "All"
  );
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      const matchesSearch =
        !query ||
        order.id.toLowerCase().includes(query) ||
        order.customer.toLowerCase().includes(query) ||
        order.email.toLowerCase().includes(query) ||
        order.product.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [orders, search, statusFilter]);

  function updateStatus(id: string, status: OrderStatus) {
    setOrders((current) =>
      current.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf4]">
      <AdminSidebar />

      <main className="min-h-screen md:ml-64">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12 md:py-14">
          <header className="mb-8 border-b border-[#eadfce] pb-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h1 className="text-4xl font-normal tracking-tight text-[#16302e]">
                  B2C Orders Desk
                </h1>

                <p className="mt-2 text-[13px] text-[#68736d]">
                  Review customer orders, update fulfilment status, and manage
                  the retail order queue.
                </p>
              </div>

              <div className="rounded-full border border-[#eadfce] bg-white px-4 py-2 text-[11px] text-[#52605a]">
                {orders.length} total orders
              </div>
            </div>
          </header>

          <section className="mb-5 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-[#eadfce] bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#9b8a72]">
                Total
              </p>
              <p className="mt-2 text-2xl text-[#16302e]">{orders.length}</p>
            </div>

            <div className="rounded-xl border border-[#eadfce] bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#9b8a72]">
                Processing
              </p>
              <p className="mt-2 text-2xl text-[#16302e]">
                {orders.filter((o) => o.status === "Processing").length}
              </p>
            </div>

            <div className="rounded-xl border border-[#eadfce] bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#9b8a72]">
                Shipped
              </p>
              <p className="mt-2 text-2xl text-[#16302e]">
                {orders.filter((o) => o.status === "Shipped").length}
              </p>
            </div>

            <div className="rounded-xl border border-[#eadfce] bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#9b8a72]">
                Delivered
              </p>
              <p className="mt-2 text-2xl text-[#16302e]">
                {orders.filter((o) => o.status === "Delivered").length}
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-[#eadfce] bg-white">
            <div className="flex flex-col gap-4 border-b border-[#eadfce] p-5 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-sm">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#9b9186]">
                  search
                </span>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search orders..."
                  className="w-full rounded-md border border-[#dfd4c5] bg-[#fffaf4] py-2.5 pl-10 pr-3 text-[12px] text-[#16302e] outline-none placeholder:text-[#a59b90] focus:border-[#b8860b]"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as "All" | OrderStatus)
                }
                className="rounded-md border border-[#dfd4c5] bg-[#fffaf4] px-4 py-2.5 text-[12px] text-[#16302e] outline-none focus:border-[#b8860b]"
              >
                <option value="All">All statuses</option>
                <option value="Processing">Processing</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="border-b border-[#eadfce] bg-[#fffaf4] text-left">
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Order
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Customer
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Product
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Qty
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Total
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Date
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.14em] text-[#6f776f]">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-[#f0e8dc] last:border-b-0 hover:bg-[#fffdf9]"
                    >
                      <td className="px-5 py-4 align-top">
                        <p className="text-[12px] font-medium text-[#16302e]">
                          {order.id}
                        </p>
                      </td>

                      <td className="px-5 py-4 align-top">
                        <p className="text-[12px] text-[#16302e]">
                          {order.customer}
                        </p>
                        <p className="mt-1 text-[10px] text-[#8b918d]">
                          {order.email}
                        </p>
                      </td>

                      <td className="px-5 py-4 align-top">
                        <p className="max-w-[220px] text-[12px] text-[#52605a]">
                          {order.product}
                        </p>
                      </td>

                      <td className="px-5 py-4 align-top text-[12px] text-[#52605a]">
                        {order.quantity}
                      </td>

                      <td className="px-5 py-4 align-top text-[12px] font-medium text-[#16302e]">
                        {order.total}
                      </td>

                      <td className="px-5 py-4 align-top text-[11px] text-[#68736d]">
                        {order.date}
                      </td>

                      <td className="px-5 py-4 align-top">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(
                              order.id,
                              e.target.value as OrderStatus
                            )
                          }
                          className={`rounded-full border px-3 py-1.5 text-[10px] font-medium outline-none ${statusStyles[order.status]}`}
                        >
                          <option value="Processing">Processing</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}

                  {filteredOrders.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-5 py-16 text-center text-[12px] text-[#8b918d]"
                      >
                        No orders match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
