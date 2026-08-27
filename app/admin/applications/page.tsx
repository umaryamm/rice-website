"use client";
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";

type Application = {
  id: string;
  company: string;
  applicant: string;
  region: string;
  volume: string;
  businessType: string;
  revenue: string;
};

const initialApplications: Application[] = [
  { id: "app-1", company: "AgriTrade Global Partners", applicant: "Sarah Jenkins, Director of Procurement", region: "North America, West Coast", volume: "5,000 MT / Annually", businessType: "Enterprise Wholesale", revenue: "$12.5M USD" },
  { id: "app-2", company: "Meridian Import Co.", applicant: "David Chen, VP Operations", region: "APAC, Southeast Asia", volume: "2,200 MT / Annually", businessType: "Regional Distributor", revenue: "$4.8M USD" },
];

export default function ApplicationsReviewPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [toast, setToast] = useState<string | null>(null);

  const resolve = (id: string, message: string) => {
    setApplications((prev) => prev.filter((a) => a.id !== id));
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex bg-[#FDFBF7] min-h-screen">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <div className="flex justify-between items-end border-b border-[#E6DEC9]/40 pb-6 mb-12">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1A3322] mb-2">Pending Applications</h1>
              <p className="text-sm text-[#1A3322]/70 max-w-2xl">Review and verify distributor applications. Select the appropriate tier to proceed with onboarding, or reject applications that do not meet corporate standards.</p>
            </div>
            <span className="hidden lg:block text-sm text-[#1A3322]/60">Showing {applications.length} of {applications.length} Pending</span>
          </div>

          {applications.length === 0 ? (
            <p className="text-center text-[#1A3322]/50 py-24">No pending applications — you're all caught up.</p>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {applications.map((app) => (
                <article key={app.id} className="bg-white border border-[#E6DEC9]/40 rounded-lg p-6 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#E6DEC9]/30 flex items-center justify-center border border-[#E6DEC9]/40">
                        <span className="material-symbols-outlined text-[#1A3322]/50 text-2xl">business_center</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-[#1A3322] font-bold">{app.company}</h3>
                        <p className="text-sm text-[#1A3322]/60">Applicant: {app.applicant}</p>
                      </div>
                    </div>
                    <span className="bg-[#E6DEC9]/40 text-[#1A3322] text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> New
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-b border-[#E6DEC9]/40 py-4 text-sm">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#1A3322] block mb-1">Region</span>
                      <span className="text-[#1A3322]/70">{app.region}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#1A3322] block mb-1">Requested Volume</span>
                      <span className="text-[#1A3322]/70">{app.volume}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#1A3322] block mb-1">Business Type</span>
                      <span className="text-[#1A3322]/70">{app.businessType}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#1A3322] block mb-1">Est. Annual Rev.</span>
                      <span className="text-[#1A3322]/70">{app.revenue}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => resolve(app.id, `${app.company} approved to Tier 1.`)}
                      className="flex-1 bg-[#1A3322] text-[#FDFBF7] text-xs uppercase tracking-widest py-3 px-4 rounded hover:bg-[#D4AF37] transition-colors"
                    >
                      Approve to Tier 1
                    </button>
                    <button
                      onClick={() => resolve(app.id, `${app.company} approved to Tier 2.`)}
                      className="flex-1 border border-[#1A3322] text-[#1A3322] text-xs uppercase tracking-widest py-3 px-4 rounded hover:bg-[#E6DEC9]/10 transition-colors"
                    >
                      Approve to Tier 2
                    </button>
                  </div>
                  <button
                    onClick={() => resolve(app.id, `${app.company} application rejected.`)}
                    className="w-full text-red-700 border border-red-300 bg-red-50 text-xs uppercase tracking-widest py-3 px-4 rounded hover:bg-red-100 transition-colors"
                  >
                    Reject Application
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {toast && (
        <div className="fixed bottom-8 right-8 bg-[#1A3322] text-[#FDFBF7] px-6 py-4 rounded shadow-lg text-sm z-50">
          {toast}
        </div>
      )}
    </div>
  );
}