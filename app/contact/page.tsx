"use client";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

function InquiryForm({
  variant,
  onSubmit,
}: {
  variant: "retail" | "export";
  onSubmit: (e: React.FormEvent) => void;
}) {
  const isRetail = variant === "retail";
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {!isRetail && (
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">Inquiry Type</label>
          <select className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] cursor-pointer">
            <option>Bulk Quote Request (RFQ)</option>
            <option>Distribution Partnership</option>
            <option>Technical Specifications</option>
            <option>Other B2B Inquiry</option>
          </select>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">
            {isRetail ? "First Name" : "Company Name"}
          </label>
          <input required type="text" placeholder={isRetail ? "Jane" : "Company Ltd."} className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/30" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">
            {isRetail ? "Last Name" : "Contact Name"}
          </label>
          <input required type="text" placeholder={isRetail ? "Doe" : "John Smith"} className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/30" />
        </div>
      </div>
      <div className={isRetail ? "" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">
            {isRetail ? "Email Address" : "Corporate Email"}
          </label>
          <input required type="email" placeholder={isRetail ? "jane@example.com" : "john@company.com"} className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/30" />
        </div>
        {!isRetail && (
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">Region</label>
            <input required type="text" placeholder="Europe, APAC, etc." className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/30" />
          </div>
        )}
      </div>
      {isRetail && (
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">Order Number (Optional)</label>
          <input type="text" placeholder="HRC-XXXX" className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/30" />
        </div>
      )}
      <div>
        <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-2">
          {isRetail ? "Message" : "Business Requirements"}
        </label>
        <textarea
          required
          placeholder={isRetail ? "How can we assist you today?" : "Please outline your volume requirements and timeline..."}
          className="w-full bg-transparent border-0 border-b border-[#E6DEC9] py-2 focus:ring-0 focus:border-[#1A3322] text-[#1A3322] placeholder:text-[#1A3322]/30 resize-none h-24"
        />
      </div>
      <button
        type="submit"
        className={
          isRetail
            ? "mt-8 bg-[#1A3322] text-[#FDFBF7] text-xs uppercase tracking-widest py-4 px-8 w-full md:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-colors"
            : "mt-8 bg-transparent border border-[#1A3322] text-[#1A3322] text-xs uppercase tracking-widest py-4 px-8 w-full md:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#1A3322] hover:text-[#FDFBF7] transition-all duration-300"
        }
      >
        {isRetail ? "Submit Inquiry" : "Request B2B Contact"}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [retailSent, setRetailSent] = useState(false);
  const [exportSent, setExportSent] = useState(false);

  return (
    <>
      <TopNav />
      <main className="bg-[#FDFBF7] w-full min-h-screen pt-[88px]">
        {/* Hero */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-4">Connect With Us</p>
              <h1 className="font-serif text-4xl md:text-6xl text-[#1A3322] mb-6">
                Inquiries &<br />Partnerships.
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-base text-[#1A3322]/70">
                Whether you are seeking retail support for our heritage collections or initiating a global B2B export dialogue, our team is positioned to assist.
              </p>
            </div>
          </div>
        </section>

        {/* Split Forms */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E6DEC9]/40">
            <div className="bg-white p-8 md:p-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#1A3322] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                <h2 className="font-serif text-2xl text-[#1A3322]">Retail Support</h2>
              </div>
              <p className="text-sm text-[#1A3322]/70 mb-12 max-w-md">
                For individual orders, shipping inquiries, and product questions regarding our consumer heritage line.
              </p>
              {retailSent ? (
                <p className="text-[#1A3322] font-serif text-xl">Thank you — we'll be in touch within 1–2 business days.</p>
              ) : (
                <InquiryForm
                  variant="retail"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRetailSent(true);
                  }}
                />
              )}
            </div>
            <div className="bg-[#E6DEC9]/10 p-8 md:p-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#1A3322] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <h2 className="font-serif text-2xl text-[#1A3322]">Export Sales</h2>
              </div>
              <p className="text-sm text-[#1A3322]/70 mb-12 max-w-md">
                For B2B inquiries, bulk catalog requests, and global distribution partnerships.
              </p>
              {exportSent ? (
                <p className="text-[#1A3322] font-serif text-xl">Thank you — our export team will respond shortly.</p>
              ) : (
                <InquiryForm
                  variant="export"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setExportSent(true);
                  }}
                />
              )}
            </div>
          </div>
        </section>

        {/* HQ + Map */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
            <div className="lg:col-span-4 bg-[#1A3322] text-[#FDFBF7] p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-6">Global Headquarters</p>
              <h3 className="font-serif text-3xl mb-8">Heritage Estate</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#D4AF37]">location_on</span>
                  <div>
                    {/* TODO: confirm real HQ address — placeholder from Stitch export */}
                    <p className="text-lg">1892 Paddy Lane</p>
                    <p className="text-sm text-[#FDFBF7]/70 mt-1">Agricultural District<br />Milan, Italy 20121</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#D4AF37]">mail</span>
                  <div>
                    <p className="text-sm text-[#FDFBF7]/70">Corporate inquiries</p>
                    <p className="text-lg hover:text-[#D4AF37] transition-colors cursor-pointer">hq@heritagerice.co</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#D4AF37]">phone</span>
                  <div>
                    <p className="text-sm text-[#FDFBF7]/70">Mon–Fri, 9am – 5pm</p>
                    <p className="text-lg">+39 02 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 relative bg-[#E6DEC9]/20 overflow-hidden h-[300px] lg:h-full">
              <img
                src="/images/hq-map.png"
                alt="Architectural map view of the estate"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1A3322]/10" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}