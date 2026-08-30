import B2BSidebar from "@/components/B2BSidebar";

export default function PortalSettingsPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <B2BSidebar />
      <main className="flex-1 md:ml-72 min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          <header className="mb-12 border-b border-surface-container-highest/40 pb-8">
            <p className="text-xs uppercase tracking-widest text-primary-container mb-4">Enterprise Portal / Settings</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-container">Account Settings</h2>
          </header>

          <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-6 mb-12">
            <p className="font-body-md text-primary-container/80 text-sm">
              ⚠️ <strong>Placeholder page.</strong> Account management, notification preferences, and team access
              controls will be built here once the partner account system is in place.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-surface-container-highest/40 pb-4">
              <span className="text-sm text-primary-container/60">Company</span>
              <span className="text-sm text-primary-container font-medium">Global Foods Inc.</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container-highest/40 pb-4">
              <span className="text-sm text-primary-container/60">Account Tier</span>
              <span className="text-sm text-primary-container font-medium">Enterprise</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container-highest/40 pb-4">
              <span className="text-sm text-primary-container/60">Contact Email</span>
              <span className="text-sm text-primary-container font-medium">demo@heritagericeco.com</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}