"use client";
import { useState } from "react";

const steps = [
  { label: "Order Placed", date: "Confirmed" },
  { label: "Processing at Mills", date: "Confirmed" },
  { label: "Dispatched via Courier", date: "In Progress" },
  { label: "Out for Delivery", date: "Pending" },
  { label: "Delivered", date: "Pending" },
];

export default function TrackOrderPage() {
  const [airbill, setAirbill] = useState("");
  const [searched, setSearched] = useState(false);
  const activeStep = 2; // demo state — real version reads this from the airbill lookup

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <header className="border-b border-[#E6DEC9]/40 py-4 px-6 md:px-12">
        <a href="/" className="font-serif text-xl text-[#1A3322]">Heritage Rice Co.</a>
      </header>

      <main className="flex-grow max-w-[1400px] w-full mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-6xl text-[#1A3322] mb-6">Track Order</h1>
          <p className="text-base text-[#1A3322]/70 mb-12">Enter your Trax or Leopards airbill number to trace your shipment.</p>
          <div className="bg-[#E6DEC9]/10 p-8 border border-[#E6DEC9]/40">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearched(true);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">Airbill Number</label>
                <input
                  value={airbill}
                  onChange={(e) => setAirbill(e.target.value)}
                  placeholder="e.g. TRX-987654321"
                  className="w-full bg-transparent border-0 border-b border-[#E6DEC9] focus:border-[#1A3322] focus:ring-0 px-0 py-3 text-[#1A3322] placeholder:text-[#1A3322]/40"
                />
              </div>
              <button type="submit" className="w-full bg-[#1A3322] text-[#FDFBF7] py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
                Track Shipment
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-[#E6DEC9]/10 rounded-xl p-8 md:p-12 h-full">
            {!searched ? (
              <p className="text-[#1A3322]/50 text-center py-24">Enter an airbill number to see live tracking status.</p>
            ) : (
              <>
                <h2 className="font-serif text-xl text-[#1A3322] mb-12 border-b border-[#E6DEC9]/50 pb-4">
                  Status: <span className="font-bold text-[#D4AF37]">Dispatched via Courier</span>
                </h2>
                <div className="relative ml-4 md:ml-8">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-[#E6DEC9]" />
                  <div className="absolute left-0 top-2 w-px bg-[#1A3322] transition-all duration-1000" style={{ height: `${(activeStep / (steps.length - 1)) * 60}%` }} />
                  <div className="space-y-12">
                    {steps.map((s, i) => {
                      const done = i <= activeStep;
                      return (
                        <div key={s.label} className={`relative flex items-start pl-8 ${done ? "" : "opacity-50"}`}>
                          <div
                            className={`absolute left-0 top-2 rounded-full border-2 border-[#E6DEC9]/10 -translate-x-1/2 ${
                              i === activeStep ? "w-4 h-4 bg-[#1A3322] animate-pulse" : done ? "w-3 h-3 bg-[#1A3322]" : "w-3 h-3 bg-[#E6DEC9]"
                            }`}
                          />
                          <div>
                            <h3 className={`text-xs uppercase tracking-widest text-[#1A3322] mb-1 ${i === activeStep ? "font-bold" : ""}`}>{s.label}</h3>
                            <p className="text-xs text-[#1A3322]/60">{s.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}