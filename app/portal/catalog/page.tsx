"use client";
import { useState } from "react";
import Image from "next/image";
import B2BSidebar from "@/components/B2BSidebar";

const varieties = [
  { id: "basmati-1121-white", name: "Basmati 1121 (White)", grainLength: "8.35mm min", broken: "< 1.0% max", moisture: "12.5% max", packaging: "25kg / 50kg PP Bags" },
  { id: "basmati-1121-sella", name: "Basmati 1121 (Sella)", grainLength: "8.30mm min", broken: "< 1.0% max", moisture: "12.5% max", packaging: "25kg / 50kg PP Bags" },
  { id: "jasmine-hom-mali", name: "Jasmine (Hom Mali)", grainLength: "7.00mm min", broken: "< 4.0% max", moisture: "14.0% max", packaging: "10kg / 25kg BOPP" },
  { id: "sonamasuri-raw", name: "Sonamasuri (Raw)", grainLength: "5.00mm min", broken: "< 3.0% max", moisture: "13.0% max", packaging: "25kg Jute Bags" },
  { id: "arborio-risotto", name: "Arborio (Risotto)", grainLength: "6.50mm min", broken: "< 5.0% max", moisture: "14.0% max", packaging: "5kg / 10kg Vacuum" },
];

export default function CatalogPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="flex bg-background min-h-screen">
      <B2BSidebar />
      <main className="flex-1 md:ml-72 min-h-screen">
        <section className="px-6 md:px-12 py-12 md:py-24 border-b border-surface-container-highest/40 max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent-gold mb-4">B2B Export Division</p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary-container mb-6">Bulk Product Catalog</h2>
          <p className="font-body-md text-primary-container/70 max-w-2xl">
            Technical specifications and export configurations for our premium heritage rice varieties, designed for global distributors requiring precise documentation.
          </p>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:sticky lg:top-12">
              <div className="relative w-full aspect-[4/5] bg-surface-container-highest/20 rounded-xl overflow-hidden">
                <Image src="/images/basmati-macro-catalog.png" alt="Extreme macro shot of raw Basmati grains" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover shadow-luxury" />
                <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 rounded-lg p-6 backdrop-blur-sm border border-surface-container-highest/50 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-primary-container mb-1">Premium Grade</p>
                    <p className="font-serif text-xl text-primary-container">Basmati 1121</p>
                  </div>
                  <span className="material-symbols-outlined text-accent-gold text-4xl font-light">verified</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-surface-container-highest/50 rounded-xl p-8">
                <h4 className="font-serif text-xl text-primary-container mb-6">Container Loading Config</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-surface-container-highest/40 pb-2">
                    <span className="text-primary-container/70 font-semibold">20ft FCL</span>
                    <span className="text-primary-container">24 Metric Tons</span>
                  </div>
                  <div className="flex justify-between border-b border-surface-container-highest/40 pb-2">
                    <span className="text-primary-container/70 font-semibold">40ft FCL</span>
                    <span className="text-primary-container">27 Metric Tons</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-primary-container/70 font-semibold">Palletization</span>
                    <span className="text-primary-container">Optional / Fumigated Wood</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="pb-6 pl-2 w-10"></th>
                      <th className="text-xs uppercase tracking-widest text-primary-container pb-6 w-1/4">Rice Variety</th>
                      <th className="text-xs uppercase tracking-widest text-primary-container pb-6 w-1/6">Grain Length</th>
                      <th className="text-xs uppercase tracking-widest text-primary-container pb-6 w-1/6">Broken %</th>
                      <th className="text-xs uppercase tracking-widest text-primary-container pb-6 w-1/6">Moisture %</th>
                      <th className="text-xs uppercase tracking-widest text-primary-container pb-6 w-1/4">Packaging</th>
                    </tr>
                  </thead>
                  <tbody>
                    {varieties.map((v) => (
                      <tr
                        key={v.id}
                        onClick={() => toggle(v.id)}
                        className={`border-b border-surface-container-highest/40 cursor-pointer transition-colors ${
                          selected.has(v.id) ? "bg-accent-gold/10" : "hover:bg-surface-container-highest/10"
                        }`}
                      >
                        <td className="py-6 pl-2">
                          <input type="checkbox" checked={selected.has(v.id)} readOnly className="w-4 h-4 accent-[#1A3322]" />
                        </td>
                        <td className="py-6 font-semibold text-primary-container">{v.name}</td>
                        <td className="py-6 text-primary-container/70">{v.grainLength}</td>
                        <td className="py-6 text-primary-container/70">{v.broken}</td>
                        <td className="py-6 text-primary-container/70">{v.moisture}</td>
                        <td className="py-6 text-primary-container/70">{v.packaging}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <button
                  disabled={selected.size === 0}
                  onClick={() => alert(`RFQ request submitted for ${selected.size} item(s) — this is a demo, no request was actually sent.`)}
                  className="bg-primary-container text-background py-4 px-8 rounded-full text-xs uppercase tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-primary-container/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-xl">playlist_add</span>
                  Add {selected.size > 0 ? `${selected.size} ` : ""}Selection{selected.size !== 1 ? "s" : ""} to RFQ
                </button>
                <button
                  onClick={() => alert("Technical sheet request submitted — this is a demo, no email was actually sent.")}
                  className="bg-transparent text-primary-container border border-primary-container rounded-full py-4 px-8 text-xs uppercase tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-primary-container hover:text-background transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">download</span>
                  Request Technical Sheet
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}