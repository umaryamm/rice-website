"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

export default function TopNav() {
  const { itemCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/certifications", label: "Certifications" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full h-[88px] flex items-center transition-all duration-500 font-sans
        ${isScrolled ? "bg-background/95 shadow-sm backdrop-blur-md" : "bg-background"}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center gap-4">
        {/* Logo */}
        <a
          href="/"
          className="flex-shrink-0 font-logo text-xl md:text-3xl tracking-tight text-primary-container font-semibold transition-transform duration-300 hover:opacity-90"
        >
          Heritage <span className="italic font-medium">Rice Co.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-widest text-primary-container/80 font-medium whitespace-nowrap">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative pb-1 group transition-colors duration-300 ${
                    active
                      ? "text-primary-container font-bold border-b-2 border-primary-container"
                      : "hover:text-primary-container"
                  }`}
                >
                  {link.label}
                  {!active && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <div className="flex items-center gap-4 text-primary-container">
            <button className="flex items-center justify-center p-1 transition-transform hover:scale-110" title="Switch Language">
              <span className="material-symbols-outlined text-[22px]">language</span>
            </button>
            <button className="flex items-center justify-center p-1 transition-transform hover:scale-110" title="Select Currency">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </button>
            <button onClick={openCart} className="flex items-center justify-center p-1 relative transition-transform hover:scale-110" title="Open Bag">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-accent-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              className="text-xs uppercase tracking-widest bg-primary-container text-background rounded-full px-5 py-2.5 font-medium transition-all duration-300 hover:bg-primary-container/90"
              href="/shop"
            >
              Shop Retail
            </a>
            <a
              className="text-xs uppercase tracking-widest bg-primary-container text-background rounded-full px-5 py-2.5 font-medium transition-all duration-300 hover:bg-primary-container/90"
              href="/distributors"
            >
              Become a Distributor
            </a>
            <a
              className="text-xs uppercase tracking-widest bg-primary-container text-background rounded-full px-5 py-2.5 font-medium transition-all duration-300 hover:bg-primary-container/90"
              href="/portal"
            >
              B2B Export
            </a>
          </div>
        </div>

        <button
          className="lg:hidden text-primary-container p-1 rounded transition-colors hover:bg-surface-container-highest/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background w-full border-t border-surface-container-highest/30 absolute top-full left-0 py-6 px-6 shadow-xl flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-base tracking-widest text-primary-container font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active ? "font-bold block py-1" : "block py-1 opacity-80"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="h-[1px] bg-surface-container-highest/40 w-full" />
          <div className="flex flex-col gap-3">
            <a
              className="text-center text-sm uppercase tracking-widest bg-primary-container text-background rounded-full py-3"
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Retail
            </a>
            <a
              className="text-center text-sm uppercase tracking-widest bg-primary-container text-background rounded-full py-3"
              href="/distributors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Distributor
            </a>
            <a
              className="text-center text-sm uppercase tracking-widest bg-primary-container text-background rounded-full py-3"
              href="/portal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              B2B Export
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}