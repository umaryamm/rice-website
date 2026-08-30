"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Overview", icon: "dashboard" },
  { href: "/admin/orders", label: "B2C Orders Desk", icon: "receipt_long" },
  { href: "/admin/export-ledger", label: "Export Ledger", icon: "sailing" },
  { href: "/admin/applications", label: "Distributor Applications", icon: "assignment_ind" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest border-r border-surface-container-highest/40 z-50">
      <div className="p-6 border-b border-surface-container-highest/40">
        <h1 className="font-logo text-lg text-primary-container">Heritage Rice Co.</h1>
        <p className="text-xs text-accent-gold uppercase tracking-widest mt-1">Admin Console</p>
      </div>

      <div className="flex-1 py-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 pl-6 py-3 transition-all text-sm ${
                active
                  ? "text-primary-container font-bold border-l-4 border-accent-gold bg-surface-container-highest/20"
                  : "text-primary-container/70 border-l-4 border-transparent hover:bg-surface-container-highest/10 hover:text-primary-container"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-surface-container-highest/40 space-y-1">
        <Link href="/admin/settings" className="flex items-center gap-3 pl-2 py-2 text-primary-container/70 hover:text-primary-container transition-colors text-sm">
          <span className="material-symbols-outlined text-[20px]">settings</span> Settings
        </Link>
        <Link href="/admin/login" className="flex items-center gap-3 pl-2 py-2 text-primary-container/70 hover:text-primary-container transition-colors text-sm">
          <span className="material-symbols-outlined text-[20px]">logout</span> Logout
        </Link>
        <div className="flex items-center gap-3 pt-4 mt-4 border-t border-surface-container-highest/40 pl-2">
          <div className="w-8 h-8 rounded-full bg-surface-container-highest/40 flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px] text-primary-container">account_circle</span>
          </div>
          <span className="text-xs text-primary-container">Admin User</span>
        </div>
      </div>
    </nav>
  );
}