"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";


const DEMO_EMAIL = "demo@heritagericeco.com";
const DEMO_PASSWORD = "heritage2024";

export default function PortalLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  return (
    <div className="min-h-screen flex flex-col font-sans text-primary-container bg-background">
      <header className="w-full absolute top-0 z-10 bg-background flex justify-between items-center px-6 md:px-12 py-6 border-b border-surface-container-highest/40">
        <Link href="/" className="font-logo text-xl text-primary-container">Heritage Rice Co.</Link>
        <span className="text-primary-container/40 flex items-center gap-2 text-sm cursor-not-allowed" title="Support isn't set up yet">
          <span className="material-symbols-outlined">help</span>
          <span className="hidden md:inline">Support</span>
        </span>
      </header>

      <main className="flex-grow flex flex-col md:flex-row w-full min-h-screen pt-[88px]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-[480px]">
            <div className="mb-12">
              <h1 className="font-serif text-4xl md:text-6xl text-primary-container mb-4">Partner Portal</h1>
              <p className="font-body-md text-primary-container/70">Secure access for authorized B2B partners.</p>
            </div>

            <form
              className="space-y-8"
             onSubmit={(e) => {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setLoginError("");
      router.push("/portal/dashboard");
    } else {
      setLoginError("Invalid credentials. Use the demo login shown below.");
    }
  }}
            >
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b border-surface-container-highest py-3 px-0 text-primary-container focus:ring-0 focus:border-primary-container placeholder-transparent transition-colors"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-primary-container/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-container">
                  Corporate Email
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b border-surface-container-highest py-3 px-0 text-primary-container focus:ring-0 focus:border-primary-container placeholder-transparent transition-colors"
                />
                <label htmlFor="password" className="absolute left-0 -top-3.5 text-xs text-primary-container/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-container">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-0 top-3 text-primary-container/60 hover:text-primary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 rounded-none text-primary-container focus:ring-primary-container" />
                  <label htmlFor="remember-me" className="ml-3 text-sm text-primary-container/70">Remember me</label>
                </div>
                <span className="text-sm text-primary-container/40 cursor-not-allowed" title="Not set up yet">
                  Forgot password?
                </span>
              </div>

              {loginError && (
                <p className="text-sm text-red-600">{loginError}</p>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-primary-container text-background text-xs uppercase tracking-widest rounded-full hover:bg-primary-container/90 transition-colors duration-300"
              >
                Secure Login
              </button>
            </form>

            <div className="mt-6 bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-4 text-xs text-primary-container/70">
              <strong>Demo login:</strong> {DEMO_EMAIL} / {DEMO_PASSWORD}
            </div>

            <div className="mt-8 pt-8 border-t border-surface-container-highest/40 text-center md:text-left">
              <p className="text-sm text-primary-container/70">
                Interested in becoming a distributor?{" "}
                <Link href="/distributors" className="text-primary-container font-medium underline decoration-1 underline-offset-4 hover:text-accent-gold transition-colors">
                  Start your application
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full relative overflow-hidden bg-surface-container-highest/20">
          <Image
            src="/images/rice-paddy-sunrise.png"
            alt="Aerial view of terraced rice paddies at golden sunrise"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover scale-105 transition-transform duration-1000 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10 hidden md:block">
            <p className="font-serif text-3xl text-background max-w-lg leading-tight">
              Cultivating excellence.<br />Distributing heritage.
            </p>
            <div className="w-12 h-1 bg-background mt-6" />
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-highest/10 flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-8 gap-4 border-t border-surface-container-highest/40">
        <div className="font-logo text-xl text-primary-container text-center md:text-left">Heritage Rice Co.</div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-primary-container/70">
          <Link href="/terms" className="hover:text-primary-container hover:underline transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-primary-container hover:underline transition-colors">Privacy Policy</Link>
        </nav>
        <div className="text-xs text-primary-container/60 text-center md:text-right">
          © {new Date().getFullYear()} Heritage Rice Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
