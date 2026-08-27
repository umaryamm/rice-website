"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/portal/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/portal/catalog", label: "Bulk Catalog", icon: "inventory_2" },
  { href: "/portal/documents", label: "Document Hub", icon: "description" },
  { href: "/portal/supply-chain", label: "Supply Chain", icon: "local_shipping" },
  { href: "/portal/support", label: "Support", icon: "support_agent" },
];

export default function B2BSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 border-b border-surface-container-highest/40 bg-surface-container-lowest sticky top-0 z-30">
        <h1 className="font-logo text-lg text-primary-container">Heritage Rice Co.</h1>
        <button onClick={() => setMobileOpen(true)} className="text-primary-container p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest border-r border-surface-container-highest/40 flex flex-col z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-surface-container-highest/40">
          <h1 className="font-logo text-xl text-primary-container">Heritage Rice Co.</h1>
          <p className="text-xs text-primary-container/60 mt-1">Global Export Hub</p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container">account_circle</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-container font-semibold">Distributor Profile</p>
              <p className="text-xs text-primary-container/60">Enterprise Tier</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 pl-6 py-3 transition-all ${
                  active
                    ? "text-primary-container font-bold border-l-4 border-accent-gold bg-surface-container-highest/20"
                    : "text-primary-container/70 border-l-4 border-transparent hover:bg-surface-container-highest/10 hover:text-primary-container"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-surface-container-highest/40">
          <button className="w-full mb-4 bg-primary-container text-background py-3 px-4 rounded-full text-xs uppercase tracking-widest hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Price List
          </button>
          {/* NOTE: /portal/settings doesn't exist yet — build it or remove this link before demo */}
          <Link href="/portal/settings" className="flex items-center gap-3 pl-2 py-2 text-primary-container/70 hover:text-primary-container transition-colors text-sm">
            <span className="material-symbols-outlined text-[20px]">settings</span> Settings
          </Link>
          <Link href="/portal" className="flex items-center gap-3 pl-2 py-2 text-primary-container/70 hover:text-primary-container transition-colors text-sm">
            <span className="material-symbols-outlined text-[20px]">logout</span> Logout
          </Link>
        </div>
      </aside>
    </>
  );
}