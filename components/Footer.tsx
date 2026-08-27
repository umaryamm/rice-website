import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-container text-background font-sans w-full border-t border-surface-container-highest/10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        {/* Brand block */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <span className="font-logo text-2xl text-background font-semibold">
            Heritage Rice Co.
          </span>
          <p className="text-background/70 text-sm leading-relaxed max-w-sm font-light">
            Cultivating excellence since 1924.<br />
            Rooted in tradition, driven by quality.
          </p>
          {/* Contact info — placeholder, replace with real details */}
          <div className="mt-2 text-sm text-background/70 flex flex-col gap-1">
            <a href="mailto:hello@heritagericeco.com" className="hover:text-accent-gold transition-colors duration-300 w-fit">
              hello@heritagericeco.com
            </a>
            <span>+00 000 000 0000</span>
          </div>
        </div>

        {/* Divisions */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent-gold font-medium uppercase tracking-[0.2em] text-xs font-sans">Divisions</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/shop">Retail Shop</Link></li>
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/portal">Bulk Export</Link></li>
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/distributors">Distributors</Link></li>
          </ul>
        </div>

        {/* Standards */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent-gold font-medium uppercase tracking-[0.2em] text-xs font-sans">Standards</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/certifications#iso">ISO 22000</Link></li>
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/certifications#haccp">HACCP Certified</Link></li>
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/certifications#halal">Halal Compliance</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent-gold font-medium uppercase tracking-[0.2em] text-xs font-sans">Company</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/about">Our Story</Link></li>
            <li><Link className="text-background/70 transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block" href="/sustainability">Sustainability</Link></li>
          </ul>
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t border-surface-container-highest/10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-background/40 text-xs tracking-wider">
        <span>© {new Date().getFullYear()} Heritage Rice Co. All Rights Reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-background/70 transition-colors duration-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-background/70 transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}