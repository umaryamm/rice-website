import Image from "next/image";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const certs = [
  {
    icon: "verified",
    title: "ISO 22000",
    desc: "Comprehensive Food Safety Management System certification ensuring absolute traceability.",
  },
  {
    icon: "health_and_safety",
    title: "HACCP",
    desc: "Hazard Analysis Critical Control Point compliance for risk-free global export.",
  },
  {
    icon: "task_alt",
    title: "Halal Certified",
    desc: "Internationally recognized certification for global market access and religious compliance.",
  },
  {
    icon: "eco",
    title: "Non-GMO Project",
    desc: "Verified genetic purity, preserving the authentic heritage of our rice varietals.",
  },
];

const incoterms = [
  {
    term: "FOB (Free On Board)",
    desc: "Seller delivers goods on board the vessel nominated by the buyer at the named port of shipment.",
    routes: "All Major Ports",
  },
  {
    term: "CIF (Cost, Insurance & Freight)",
    desc: "Seller pays costs, freight, and insurance to bring goods to the named port of destination.",
    routes: "Select Regions",
  },
  {
    term: "EXW (Ex Works)",
    desc: "Seller makes goods available at their premises; buyer assumes all risks and costs from there.",
    routes: "Domestic Warehouses",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <TopNav />

      <main className="bg-background pt-[88px]">
        <section className="w-full flex flex-col md:flex-row min-h-[500px] border-b border-surface-container-highest/40">
          <FadeIn className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-surface-container-highest/10">
            <div className="max-w-md">
              <h1 className="font-serif text-4xl md:text-6xl text-primary-container mb-6">
                Uncompromising Standards.
              </h1>

              <p className="font-body-md text-primary-container/70">
                Our commitment to global excellence is absolute. Explore our
                comprehensive suite of internationally recognized
                certifications, ensuring trust and compliance for our B2B
                partners worldwide.
              </p>
            </div>
          </FadeIn>

          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative">
            <Image
              src="/images/certificates-desk.png"
              alt="Stack of official certificates and export documents on a wooden desk"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section
          id="certifications"
          className="max-w-[1400px] mx-auto px-6 md:px-12 py-24"
        >
          <FadeIn className="mb-16">
            <h2 className="font-serif text-3xl text-primary-container mb-4">
              Global Certifications
            </h2>

            <p className="font-body-md text-primary-container/70 max-w-2xl">
              Verified excellence at every stage of cultivation, processing,
              and export.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certs.map((c, i) => (
              <FadeIn
                key={c.title}
                delay={i % 2 === 1 ? 0.2 : 0}
                className="bg-surface-container-highest/10 border border-surface-container-highest/40 p-8 flex flex-col h-full hover:shadow-luxury hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-primary-container transition-transform duration-500 group-hover:scale-110">
                    {c.icon}
                  </span>

                  {/* NOTE: no PDF files exist yet — shown as "Coming Soon" rather than a dead download link */}
                  <span className="text-primary-container/40 text-xs uppercase tracking-widest">
                    Coming Soon
                  </span>
                </div>

                <h3 className="font-serif text-xl text-primary-container mb-4">
                  {c.title}
                </h3>

                <p className="text-sm text-primary-container/70 mt-auto">
                  {c.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="w-full px-6 md:px-12 py-24 bg-surface-container-highest/10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12">
              <h2 className="font-serif text-3xl text-primary-container mb-4">
                Incoterms 2020 Matrix
              </h2>

              <p className="font-body-md text-primary-container/70">
                Standardized shipping agreements for our B2B partners. We
                facilitate seamless logistics tailored to your regional
                requirements.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="text-xs uppercase tracking-widest text-primary-container pb-4 border-b border-primary-container w-1/4">
                      Term
                    </th>

                    <th className="text-xs uppercase tracking-widest text-primary-container pb-4 border-b border-primary-container w-1/2">
                      Description
                    </th>

                    <th className="text-xs uppercase tracking-widest text-primary-container pb-4 border-b border-primary-container w-1/4">
                      Supported Routes
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {incoterms.map((row, i) => (
                    <tr
                      key={row.term}
                      className={
                        i % 2 === 0
                          ? "bg-background"
                          : "bg-surface-container-highest/10"
                      }
                    >
                      <td className="py-4 font-semibold text-primary-container">
                        {row.term}
                      </td>

                      <td className="py-4 text-primary-container/70">
                        {row.desc}
                      </td>

                      <td className="py-4 text-primary-container/70">
                        {row.routes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
