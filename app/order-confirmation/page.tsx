export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <header className="border-b border-[#E6DEC9]/40 py-6 px-6 md:px-12 flex justify-center">
        <h1 className="font-serif text-xl text-[#1A3322]">Heritage Rice Co.</h1>
      </header>

      <main className="flex-grow max-w-[1400px] w-full mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-12">
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-[#1A3322]">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A3322]">Thank you for your order.</h2>
            </div>
            <p className="text-base text-[#1A3322]/70 max-w-2xl">
              Your commitment to exceptional quality has been received. Our artisans are now preparing your selection of heritage grains.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-[#1A3322]/60">Order Reference Number</p>
              <p className="text-base font-medium text-[#1A3322]">#HRC-{Math.floor(10000 + Math.random() * 90000)}</p>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8">
          <div className="bg-white p-8 border border-[#E6DEC9]/40 shadow-[0px_20px_40px_rgba(27,48,34,0.05)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#1A3322]">local_shipping</span>
              <h3 className="text-base font-bold text-[#1A3322]">What's Next</h3>
            </div>
            <p className="text-sm text-[#1A3322]/70">
              You'll receive a confirmation email shortly, and can track your shipment's progress once it's dispatched.
            </p>
          </div>
          <a href="/shop" className="w-full bg-[#1A3322] text-[#FDFBF7] py-4 px-8 text-center hover:bg-[#D4AF37] transition-colors">
            Continue Exploring
          </a>
          <a href="/track-order" className="w-full border border-[#1A3322] text-[#1A3322] py-4 px-8 text-center hover:bg-[#1A3322] hover:text-[#FDFBF7] transition-colors">
            Track Your Order
          </a>
        </div>
      </main>
    </div>
  );
}