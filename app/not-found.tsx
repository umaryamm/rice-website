export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#FDFBF7] px-6 text-center">
      <span className="text-xs uppercase tracking-widest text-[#1A3322] mb-4 block">Error 404</span>
      <h1 className="font-serif text-4xl md:text-6xl text-[#1A3322] mb-6">Page Not Found</h1>
      <p className="text-base text-[#1A3322]/70 mb-12 max-w-md">
        The specific harvest or technical document you are looking for is currently unavailable or has been relocated.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/shop" className="py-4 px-8 bg-[#1A3322] text-[#FDFBF7] text-center hover:bg-[#D4AF37] transition-colors">
          Return to Consumer Shop
        </a>
        <a href="/portal" className="py-4 px-8 border border-[#1A3322] text-[#1A3322] text-center hover:bg-[#1A3322] hover:text-[#FDFBF7] transition-colors">
          Return to B2B Trade Portal
        </a>
      </div>
    </main>
  );
}