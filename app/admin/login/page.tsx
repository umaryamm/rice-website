"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";


const ADMIN_EMAIL = "admin@heritagericeco.com";
const ADMIN_PASSWORD = "admin2024";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-[420px]">
        <Link href="/" className="font-logo text-xl text-primary-container block mb-2 text-center">Heritage Rice Co.</Link>
        <p className="text-xs uppercase tracking-widest text-accent-gold text-center mb-10">Internal Admin Access</p>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
              setError("");
              router.push("/admin");
            } else {
              setError("Invalid credentials.");
            }
          }}
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-surface-container-highest rounded-lg bg-surface-container-lowest px-4 py-3 text-primary-container focus:outline-none focus:border-primary-container"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-primary-container mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-surface-container-highest rounded-lg bg-surface-container-lowest px-4 py-3 text-primary-container focus:outline-none focus:border-primary-container"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full py-4 bg-primary-container text-background rounded-full text-xs uppercase tracking-widest hover:bg-primary-container/90 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-4 text-xs text-primary-container/70 text-center">
          <strong>Demo login:</strong> {ADMIN_EMAIL} / {ADMIN_PASSWORD}
        </div>
      </div>
    </div>
  );
}
