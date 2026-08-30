"use client";
import { useState } from "react";

export const dynamic = "force-dynamic";

const steps = [
  { label: "Identity", title: "Corporate Identity", desc: "Please provide the foundational details of your enterprise to begin the qualification process." },
  { label: "Compliance", title: "Compliance & Volume", desc: "Verify your capacity and legal standing for international distribution." },
  { label: "Strategy", title: "Market Strategy", desc: "Outline your vision for positioning our premium agricultural product in your region." },
];

export default function DistributorApplicationPage() {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [volume, setVolume] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [strategy, setStrategy] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = steps[step - 1];

  return (
    <main className="min-h-screen flex flex-col md:flex-row w-full max-w-[1400px] mx-auto bg-[#FDFBF7]">
      {/* Left: editorial banner — intentionally no site nav, matches Stitch's transactional-flow choice */}
      <div className="hidden md:block md:w-1/2 relative bg-[#E6DEC9]/20 h-screen sticky top-0 border-r border-[#E6DEC9]/40 overflow-hidden">
        <img src="/images/rice-grains-burlap.png" alt="Raw premium rice grains on woven burlap" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3322]/80 via-[#1A3322]/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-12 text-[#FDFBF7]">
          <span className="text-xs uppercase tracking-widest mb-4 text-[#D4AF37]">Partnership Inquiry</span>
          <h1 className="font-serif text-6xl mb-6 leading-tight">Heritage<br />Rice Co.</h1>
          <p className="text-base max-w-md text-[#FDFBF7]/80">
            Join our global network of elite distributors, bringing centuries of agricultural excellence to refined markets worldwide.
          </p>
        </div>
      </div>

      {/* Right: form */}
      <div className="w-full md:w-1/2 flex flex-col h-screen overflow-y-auto">
        <div className="md:hidden w-full bg-[#1A3322] text-[#FDFBF7] p-6 pb-12 pt-16">
          <h1 className="font-serif text-3xl mb-4">Heritage Rice Co.</h1>
          <p className="text-sm text-[#FDFBF7]/70">Distributor Application Form</p>
        </div>

        <div className="flex-grow flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 max-w-2xl mx-auto w-full -mt-8 md:mt-0 bg-[#FDFBF7] rounded-t-3xl md:rounded-none">
          {submitted ? (
            <div className="text-center py-24">
              <span className="material-symbols-outlined text-6xl text-[#D4AF37] mb-6 block">check_circle</span>
              <h2 className="font-serif text-3xl text-[#1A3322] mb-4">Application Received</h2>
              <p className="text-[#1A3322]/70">Our export team will review your submission and respond within 3–5 business days.</p>
            </div>
          ) : (
            <>
              {/* Progress indicator */}
              <div className="mb-16">
                <div className="flex items-center justify-between w-full relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#E6DEC9] -z-10" />
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#1A3322] -z-10 transition-all duration-500"
                    style={{ width: `${(step - 1) * 50}%` }}
                  />
                  {steps.map((s, i) => {
                    const idx = i + 1;
                    const active = idx <= step;
                    return (
                      <div key={s.label} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-300 ${
                          active ? "bg-[#1A3322] text-[#FDFBF7]" : "bg-[#FDFBF7] text-[#1A3322]/40 border border-[#E6DEC9]"
                        }`}>
                          {idx}
                        </div>
                        <span className={`mt-2 text-xs uppercase tracking-widest transition-colors duration-300 ${active ? "text-[#1A3322]" : "text-[#1A3322]/40"}`}>
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-serif text-3xl text-[#1A3322] mb-2">{current.title}</h2>
                <p className="text-sm text-[#1A3322]/70">{current.desc}</p>
              </div>

              <form
                className="space-y-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step < 3) setStep(step + 1);
                  else setSubmitted(true);
                }}
              >
                {step === 1 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-1">Company Legal Name</label>
                      <input
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g., Global Agritech Imports LLC"
                        className="w-full border-0 border-b border-[#1A3322]/40 bg-transparent py-3 text-lg text-[#1A3322] focus:outline-none focus:border-[#1A3322] placeholder:text-[#1A3322]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-1">Registration Country</label>
                      <select
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border-0 border-b border-[#1A3322]/40 bg-transparent py-3 text-lg text-[#1A3322] focus:outline-none focus:border-[#1A3322] appearance-none"
                      >
                        <option value="" disabled>Select jurisdiction</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="EU">European Union</option>
                        <option value="UAE">United Arab Emirates</option>
                        <option value="JP">Japan</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-1">Core Target Import Volume (MT/Year)</label>
                      <input
                        type="number"
                        min={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        placeholder="Enter metric tons"
                        className="w-full border-0 border-b border-[#1A3322]/40 bg-transparent py-3 text-lg text-[#1A3322] focus:outline-none focus:border-[#1A3322] placeholder:text-[#1A3322]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-4">Business License Verification</label>
                      <label className={`border border-dashed p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative block ${
                        fileName ? "border-[#1A3322] bg-[#E6DEC9]/10" : "border-[#E6DEC9] hover:bg-[#E6DEC9]/5"
                      }`}>
                        <input
                          type="file"
                          accept=".pdf,.png,.jpg"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                        />
                        <span className={`material-symbols-outlined text-4xl mb-4 ${fileName ? "text-[#1A3322]" : "text-[#1A3322]/40"}`}>
                          {fileName ? "check_circle" : "upload_file"}
                        </span>
                        <p className="text-[#1A3322] mb-1">{fileName ?? "Drag and drop file here, or click to browse"}</p>
                        <p className="text-xs text-[#1A3322]/50">Supported: PDF, JPG, PNG (Max 10MB)</p>
                      </label>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#1A3322] mb-4">Distribution Strategy Narrative</label>
                    <p className="text-xs text-[#1A3322]/60 mb-4">
                      Detail your approach to positioning Heritage Rice Co. within your target market segments — high-end retail, hospitality, or direct-to-consumer channels.
                    </p>
                    <textarea
                      value={strategy}
                      onChange={(e) => setStrategy(e.target.value)}
                      placeholder="Begin narrative here..."
                      rows={6}
                      className="w-full border border-[#E6DEC9] bg-transparent p-4 text-[#1A3322] focus:outline-none focus:border-[#1A3322] resize-none placeholder:text-[#1A3322]/30"
                    />
                  </div>
                )}

                <div className="pt-8 flex items-center justify-between border-t border-[#E6DEC9]/40">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="text-[#1A3322] hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">arrow_back</span> Return
                    </button>
                  ) : <span />}
                  <button type="submit" className="bg-[#1A3322] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors flex items-center gap-2">
                    {step === 3 ? "Submit Application" : "Continue"}
                    {step < 3 && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        <div className="mt-auto py-8 text-center px-6">
          <p className="text-xs text-[#1A3322]/40">Information provided is secured under our standard Non-Disclosure protocols.</p>
        </div>
      </div>
    </main>
  );
}