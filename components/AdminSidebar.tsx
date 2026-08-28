"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Overview", icon: "dashboard" },
  { href: "/admin/orders", label: "B2C Orders Desk", icon: "receipt_long" },
  { href: "/admin/export-ledger", label: "Export Ledger", icon: "sailing" },
  { href: "/admin/applications", label: "Distributor Applications", icon: "assignment_ind" },
  { href: "/admin/products", label: "Products", icon: "inventory_2" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-[#eadfce] bg-[#fffaf4] md:flex md:flex-col">
      <div className="border-b border-[#eadfce] px-6 py-6">
        <Link href="/admin" className="block">
          <div className="text-[17px] font-medium tracking-tight text-[#16302e]">
            Heritage Rice Co.
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#9b8a72]">
            Administration
          </div>
        </Link>
      </div>

      <div className="px-5 pt-6">
        <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-[#9b8a72]">
          Admin
        </p>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-[12px] transition-colors ${
                  active
                    ? "bg-[#f2eadf] font-medium text-[#16302e]"
                    : "text-[#52605a] hover:bg-[#f7f0e7] hover:text-[#16302e]"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-[#eadfce] px-5 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-[11px] text-[#68736d] hover:text-[#16302e]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#262626] text-[11px] text-white">
            N
          </span>
          <span>Back to website</span>
        </Link>
      </div>
    </aside>
  );
}
