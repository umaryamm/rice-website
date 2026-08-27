"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const USD_TO_PKR = 278; // placeholder rate — replace with a real FX source before launch

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "jazzcash" | "easypaisa">("card");

  const subtotalPKR = Math.round(subtotal * USD_TO_PKR);
  const shippingPKR = shippingMethod === "standard" ? 500 : 1200;
  const totalPKR = subtotalPKR + shippingPKR;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-center px-6">
        <h1 className="font-serif text-3xl text-[#1A3322] mb-4">Your cart is empty</h1>
        <p className="text-[#1A3322]/60 mb-8">Add something from the shop before checking out.</p>
        <a href="/shop" className="bg-[#1A3322] text-[#FDFBF7] px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
          Browse the Shop
        </a>
      </div>
    );
  }

  const handlePayNow = () => {
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <header className="border-b border-[#E6DEC9]/40 py-6 px-6 md:px-12 flex justify-center">
        <a href="/" className="font-serif text-xl uppercase tracking-widest text-[#1A3322]">Heritage Rice Co.</a>
      </header>

      <main className="flex-grow max-w-[1400px] w-full mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-8 mb-16">
              {["Shipping", "Method", "Payment"].map((label, i) => (
                <span key={label} className={`text-xs uppercase tracking-widest ${step >= i + 1 ? "text-[#1A3322]" : "text-[#1A3322]/40"}`}>
                  {i + 1}. {label}
                </span>
              ))}
            </div>

            {step === 1 && (
              <section>
                <h1 className="font-serif text-3xl text-[#1A3322] mb-12">Shipping Details</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep(2);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input required placeholder="First Name" className="border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                    <input required placeholder="Last Name" className="border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                  </div>
                  <input required placeholder="Street Address" className="w-full border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                  <input placeholder="Apartment, suite, etc. (optional)" className="w-full border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <input required placeholder="City" className="border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                    <select required defaultValue="" className="border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322]">
                      <option value="" disabled>Province</option>
                      <option value="punjab">Punjab</option>
                      <option value="sindh">Sindh</option>
                      <option value="kpk">Khyber Pakhtunkhwa</option>
                      <option value="balochistan">Balochistan</option>
                    </select>
                    <input required placeholder="Postal Code" className="border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                  </div>
                  <input required type="tel" placeholder="Phone Number" className="w-full border-0 border-b border-[#E6DEC9] bg-transparent py-3 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                  <div className="flex justify-between items-center pt-8">
                    <a href="/shop" className="text-sm text-[#D4AF37] underline hover:text-[#1A3322] transition-colors">Return to cart</a>
                    <button type="submit" className="bg-[#1A3322] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
                      Continue to Method
                    </button>
                  </div>
                </form>
              </section>
            )}

            {step === 2 && (
              <section>
                <h2 className="font-serif text-3xl text-[#1A3322] mb-12">Shipping Method</h2>
                <div className="border border-[#E6DEC9]">
                  {[
                    { id: "standard" as const, label: "Standard Local Delivery", sub: "3–5 Business Days", price: "Rs. 500" },
                    { id: "express" as const, label: "Express Delivery", sub: "1–2 Business Days", price: "Rs. 1,200" },
                  ].map((opt, i) => (
                    <label key={opt.id} className={`flex items-center justify-between p-6 cursor-pointer hover:bg-[#E6DEC9]/10 transition-colors ${i === 0 ? "border-b border-[#E6DEC9]" : ""}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" checked={shippingMethod === opt.id} onChange={() => setShippingMethod(opt.id)} className="accent-[#1A3322] w-5 h-5" />
                        <div>
                          <span className="block text-sm text-[#1A3322]">{opt.label}</span>
                          <span className="block text-xs text-[#1A3322]/60">{opt.sub}</span>
                        </div>
                      </div>
                      <span className="text-sm text-[#1A3322]">{opt.price}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-12">
                  <button onClick={() => setStep(1)} className="text-sm text-[#D4AF37] underline hover:text-[#1A3322] transition-colors">Back to Information</button>
                  <button onClick={() => setStep(3)} className="bg-[#1A3322] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </section>
            )}

            {step === 3 && (
              <section>
                <h2 className="font-serif text-3xl text-[#1A3322] mb-4">Payment</h2>
                <p className="text-[#1A3322]/60 mb-8">All transactions are secure and encrypted.</p>
                <div className="border border-[#E6DEC9]">
                  <div className="border-b border-[#E6DEC9]">
                    <label className={`flex items-center justify-between p-6 cursor-pointer ${paymentMethod === "card" ? "bg-[#E6DEC9]/10" : ""}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="accent-[#1A3322] w-5 h-5" />
                        <span className="text-sm text-[#1A3322]">Credit / Debit Card</span>
                      </div>
                      <span className="material-symbols-outlined text-[#1A3322]/60">credit_card</span>
                    </label>
                    {paymentMethod === "card" && (
                      <div className="p-6 border-t border-[#E6DEC9]/50 space-y-6">
                        <input placeholder="Card Number" className="w-full border-0 border-b border-[#E6DEC9] bg-transparent py-2 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                        <input placeholder="Name on Card" className="w-full border-0 border-b border-[#E6DEC9] bg-transparent py-2 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                        <div className="grid grid-cols-2 gap-8">
                          <input placeholder="Expiration (MM/YY)" className="border-0 border-b border-[#E6DEC9] bg-transparent py-2 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                          <input placeholder="Security Code" className="border-0 border-b border-[#E6DEC9] bg-transparent py-2 focus:outline-none focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/40" />
                        </div>
                      </div>
                    )}
                  </div>
                  {[
                    { id: "jazzcash" as const, label: "JazzCash", icon: "account_balance_wallet" },
                    { id: "easypaisa" as const, label: "Easypaisa", icon: "phone_iphone" },
                  ].map((opt, i) => (
                    <div key={opt.id} className={i === 0 ? "border-b border-[#E6DEC9]" : ""}>
                      <label className={`flex items-center justify-between p-6 cursor-pointer ${paymentMethod === opt.id ? "bg-[#E6DEC9]/10" : ""}`}>
                        <div className="flex items-center gap-4">
                          <input type="radio" checked={paymentMethod === opt.id} onChange={() => setPaymentMethod(opt.id)} className="accent-[#1A3322] w-5 h-5" />
                          <span className="text-sm text-[#1A3322]">{opt.label}</span>
                        </div>
                      </label>
                      {paymentMethod === opt.id && (
                        <div className="p-6 border-t border-[#E6DEC9]/50 text-center">
                          <span className="material-symbols-outlined text-4xl text-[#1A3322]/40 mb-4 block">{opt.icon}</span>
                          <p className="text-sm text-[#1A3322]/60">You'll be redirected to {opt.label} to complete your purchase securely.</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-12">
                  <button onClick={() => setStep(2)} className="text-sm text-[#D4AF37] underline hover:text-[#1A3322] transition-colors">Back to Method</button>
                  <button onClick={handlePayNow} className="bg-[#1A3322] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
                    Pay Now
                  </button>
                </div>
              </section>
            )}
          </div>

          <aside className="w-full lg:w-1/3">
            <div className="bg-[#E6DEC9]/10 p-8 border border-[#E6DEC9]/40 lg:sticky lg:top-12">
              <h3 className="font-serif text-xl text-[#1A3322] mb-8 border-b border-[#E6DEC9]/40 pb-4">Order Summary</h3>
              <div className="space-y-6 mb-8 border-b border-[#E6DEC9]/40 pb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="w-16 h-20 bg-[#E6DEC9]/30 relative shrink-0">
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                      <span className="absolute -top-2 -right-2 bg-[#1A3322] text-[#FDFBF7] w-6 h-6 rounded-full flex items-center justify-center text-xs">{item.qty}</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-[#1A3322] mb-1">{item.name}</h4>
                      <p className="text-xs text-[#1A3322]/60 mb-2">{item.variant}</p>
                      <p className="text-sm text-[#1A3322]">Rs. {Math.round(item.price * item.qty * USD_TO_PKR).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#1A3322]/70 text-sm">
                  <span>Subtotal</span>
                  <span className="text-[#1A3322]">Rs. {subtotalPKR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#1A3322]/70 text-sm">
                  <span>Shipping</span>
                  <span className="text-[#1A3322]">{step >= 2 ? `Rs. ${shippingPKR.toLocaleString()}` : "Calculated next step"}</span>
                </div>
              </div>
              <div className="flex justify-between items-end border-t border-[#E6DEC9]/40 pt-6">
                <span className="text-lg text-[#1A3322]">Total</span>
                <span className="font-serif text-2xl text-[#1A3322]">Rs. {(step >= 2 ? totalPKR : subtotalPKR).toLocaleString()}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}