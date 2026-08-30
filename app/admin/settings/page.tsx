import AdminSidebar from "@/components/AdminSidebar";

export default function AdminSettingsPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12">
          <header className="mb-12 border-b border-surface-container-highest/40 pb-6">
            <h1 className="font-serif text-3xl md:text-4xl text-primary-container mb-2">Admin Settings</h1>
            <p className="text-sm text-primary-container/70">Console preferences and access management.</p>
          </header>

          <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-6 mb-12">
            <p className="text-sm text-primary-container/80">
              ⚠️ <strong>Placeholder page.</strong> Admin roles, permissions, and notification settings will be
              built here once the internal user system is in place.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-surface-container-highest/40 pb-4">
              <span className="text-sm text-primary-container/60">Logged in as</span>
              <span className="text-sm text-primary-container font-medium">Admin User</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container-highest/40 pb-4">
              <span className="text-sm text-primary-container/60">Role</span>
              <span className="text-sm text-primary-container font-medium">Super Admin</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container-highest/40 pb-4">
              <span className="text-sm text-primary-container/60">Account Email</span>
              <span className="text-sm text-primary-container font-medium">admin@heritagericeco.com</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}