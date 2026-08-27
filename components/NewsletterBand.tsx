"use client";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to actual email service (Mailchimp/Resend/etc.)
    setSubmitted(true);
  };

  return (
    <section className="bg-surface-container-highest/10 py-20">
      <FadeIn className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-primary-container mb-4">Stay Connected</h2>
        <p className="text-sm text-primary-container/70 mb-8">
          Harvest updates, new releases, and stories from the field — straight to your inbox.
        </p>
        {submitted ? (
          <p className="text-sm text-accent-gold font-medium">Thank you — you're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-primary-container/20 bg-background text-sm text-primary-container placeholder:text-primary-container/40 focus:outline-none focus:border-primary-container/50"
            />
            <button
              type="submit"
              className="bg-primary-container text-background text-xs uppercase tracking-widest font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-primary-container/90"
            >
              Subscribe
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}