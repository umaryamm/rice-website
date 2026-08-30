"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart();

  return (
    <div className={`fixed inset-0 z-[60] flex justify-end ${isOpen ? "" : "pointer-events-none"}`}>
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-primary-container/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`relative w-full max-w-md bg-background h-full flex flex-col border-l border-primary-container/10 shadow-luxury transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-8 py-6 border-b border-surface-container-highest/40">
          <h2 className="font-serif text-2xl text-primary-container">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-primary-container/60 hover:text-primary-container transition-colors">
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-24 h-24 rounded-full bg-surface-container-highest/30 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl text-primary-container/40">shopping_bag</span>
            </div>
            <h3 className="font-serif text-2xl text-primary-container mb-4">Empty Vessel</h3>
            <p className="text-sm text-primary-container/60 max-w-xs mb-10">
              Your current selection contains no premium agricultural staples. Browse our inventory to begin your order.
            </p>
            <Link href="/shop" onClick={closeCart} className="border-b border-accent-gold text-accent-gold pb-1 text-sm hover:text-primary-container hover:border-primary-container transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 items-start">
                  <div className="w-24 h-32 bg-surface-container-highest/20 shrink-0 relative overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.alt} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-base text-primary-container font-medium leading-tight">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} aria-label="Remove item" className="text-primary-container/50 hover:text-red-700 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                    <p className="text-xs text-primary-container/60 mb-4">{item.variant}</p>
                    <div className="mt-auto flex items-center justify-between w-full">
                      <div className="flex items-center border border-surface-container-highest rounded-full overflow-hidden">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 flex items-center justify-center text-primary-container/60 hover:text-primary-container">
                          <span className="material-symbols-outlined text-[16px]">remove</span>
                        </button>
                        <span className="w-8 text-center text-sm text-primary-container">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center text-primary-container/60 hover:text-primary-container">
                          <span className="material-symbols-outlined text-[16px]">add</span>
                        </button>
                      </div>
                      <span className="font-serif text-lg text-primary-container">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface-container-lowest px-8 py-8 border-t border-surface-container-highest/40">
              <div className="mb-6 flex">
                <input placeholder="Promo Code" className="w-full bg-transparent border-0 border-b border-surface-container-highest focus:border-primary-container focus:ring-0 text-primary-container placeholder:text-primary-container/40 px-0 py-2" />
                <button className="text-xs text-primary-container border-b border-primary-container hover:text-accent-gold hover:border-accent-gold transition-colors py-2 px-2 whitespace-nowrap">APPLY</button>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-base text-primary-container/70">Subtotal</span>
                <span className="font-serif text-2xl text-primary-container">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-primary-container/50 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full bg-primary-container hover:bg-primary-container/90 text-background text-xs uppercase tracking-widest rounded-full py-4 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">lock</span> Secure Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}