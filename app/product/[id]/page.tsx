"use client";
import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  if (!product) notFound();

  const [activeImage, setActiveImage] = useState(0);
  const [weight, setWeight] = useState(product.weightOptions[1]?.value ?? product.weightOptions[0].value);
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectedWeight = product.weightOptions.find((w) => w.value === weight)!;
  const total = (selectedWeight.price * qty).toFixed(2);

  const currentCartItem = {
    id: product.id,
    name: product.name,
    variant: `${selectedWeight.label} / ${product.tag.split("•")[0].trim()}`,
    price: selectedWeight.price,
    image: product.gallery[0].src,
    alt: product.gallery[0].alt,
  };

  const accordions = [
    {
      title: "The Heritage Story",
      content: (
        <>
          {product.heritageStory.map((p, i) => (
            <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
          ))}
        </>
      ),
    },
    {
      title: "Preparation Guide",
      content: (
        <ul className="space-y-4">
          {product.prepSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-xs text-primary-container w-14 shrink-0 pt-1 font-semibold">Step 0{i + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Technical Specifications",
      content: (
        <div className="text-sm w-full">
          {product.techSpecs.map(([label, val], i) => (
            <div key={label} className={`flex justify-between py-3 px-2 border-b border-surface-container-highest/60 ${i % 2 === 0 ? "bg-background" : "bg-surface-container-highest/10"}`}>
              <span className="font-semibold text-primary-container">{label}</span>
              <span className="text-primary-container/70">{val}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const related = getRelatedProducts(product.id).map((p) => ({
    id: p.id,
    name: p.name,
    tag: p.tag,
    price: `$${p.price.toFixed(2)}`,
    img: p.img,
    alt: p.alt,
  }));

  return (
    <>
      <TopNav />
      <main className="bg-background w-full min-h-screen pt-[88px] pb-24">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          {/* Gallery */}
          <div className="md:col-span-7 flex flex-col md:flex-row-reverse gap-4 md:gap-8 md:sticky md:top-[110px] h-fit">
            <div className="w-full aspect-[4/5] bg-surface-container-highest/20 relative overflow-hidden shadow-luxury">
              <Image
                src={product.gallery[activeImage].src}
                alt={product.gallery[activeImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-primary-container text-background text-xs px-3 py-1 tracking-widest">Aged 2 Years</span>
                <span className="bg-surface-container-highest text-primary-container text-xs px-3 py-1">Limited Harvest</span>
              </div>
            </div>
            {product.gallery.length > 1 && (
              <div className="flex flex-row md:flex-col gap-4 overflow-x-auto pb-2 md:pb-0 md:w-24 shrink-0">
                {product.gallery.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-24 md:w-full md:h-32 bg-surface-container-highest/20 shrink-0 relative border transition-opacity ${
                      activeImage === i ? "opacity-100 border-primary-container" : "opacity-50 border-surface-container-highest/40 hover:opacity-80"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Purchase */}
          <div className="md:col-span-5 flex flex-col pt-8 md:pt-0">
            <nav className="flex text-xs text-primary-container/60 mb-6 gap-2">
              <Link href="/shop" className="hover:text-primary-container transition-colors">Retail</Link>
              <span>/</span>
              <span className="text-primary-container font-semibold">{product.name}</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-6xl text-primary-container mb-4">{product.name}</h1>
            <p className="font-serif text-2xl text-primary-container mb-8">
              ${total} <span className="text-sm text-primary-container/60 align-middle font-sans">/ {selectedWeight.label}</span>
            </p>

            <p className="font-body-md text-primary-container/80 mb-12 leading-relaxed">{product.desc}</p>
            <hr className="border-t border-surface-container-highest/40 mb-8" />

            {/* Weight Selector */}
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-primary-container font-semibold mb-4 block">Select Weight</span>
              <div className="grid grid-cols-3 gap-4">
                {product.weightOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setWeight(opt.value)}
                    className={`relative py-4 text-center border transition-all ${
                      weight === opt.value ? "border-primary-container bg-surface-container-highest/20 text-primary-container" : "border-surface-container-highest/60 text-primary-container/60"
                    }`}
                  >
                    <span className="block text-base">{opt.label}</span>
                    <span className="block text-xs text-primary-container/50 mt-1">{opt.tag}</span>
                    {weight === opt.value && (
                      <div className="absolute -top-2 -right-2 bg-primary-container text-background w-5 h-5 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Actions */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex gap-4">
                <div className="border border-primary-container flex items-center justify-between px-4 w-32 shrink-0">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-primary-container hover:opacity-60 py-3">
                    <span className="material-symbols-outlined text-[18px]">remove</span>
                  </button>
                  <span className="text-primary-container">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="text-primary-container hover:opacity-60 py-3">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                </div>
                <button
                  onClick={() => addItem(currentCartItem, qty)}
                  className="flex-1 bg-primary-container text-background py-4 hover:bg-primary-container/80 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Add to Cart — ${total}
                </button>
              </div>
              <label className="flex items-start gap-3 p-4 border border-surface-container-highest/50 hover:border-primary-container/50 transition-colors cursor-pointer bg-surface-container-lowest">
                <input type="checkbox" className="mt-1 text-primary-container focus:ring-primary-container rounded-sm" />
                <div>
                  <span className="block text-sm text-primary-container font-medium">Subscribe & Save 10%</span>
                  <span className="block text-xs text-primary-container/60 mt-1">Delivered every 4 weeks. Cancel anytime.</span>
                </div>
              </label>
            </div>

            {/* Accordions */}
            <div className="border-t border-surface-container-highest/40">
              {accordions.map((acc, i) => (
                <div key={acc.title} className="border-b border-surface-container-highest/40">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
                    className="w-full flex justify-between items-center py-6 text-left group"
                  >
                    <span className="font-serif text-xl text-primary-container group-hover:text-accent-gold transition-colors">{acc.title}</span>
                    <span className={`material-symbols-outlined text-primary-container transition-transform duration-300 ${openAccordion === i ? "rotate-45" : ""}`}>
                      add
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out text-sm text-primary-container/80"
                    style={{ maxHeight: openAccordion === i ? "600px" : "0px" }}
                  >
                    <div className="pb-6">{acc.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provenance split banner */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[500px] md:h-[700px] relative">
              <Image src="/images/rice-paddy-dawn.png" alt="Terraced rice paddy field at dawn with morning mist" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="bg-surface-container-highest/20 flex flex-col justify-center items-center text-center p-12 md:p-24">
              <span className="text-xs text-primary-container mb-6 tracking-widest uppercase">The Provenance</span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary-container mb-8 max-w-md">Time is the ultimate ingredient.</h2>
              <p className="text-sm text-primary-container/70 max-w-sm mb-10">
                Our aging process is not an industry standard; it is a commitment to excellence.
              </p>
              <Link href="/about" className="text-xs text-primary-container border-b border-primary-container pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors">
                Read the Origin Story
              </Link>
            </div>
          </div>
        </section>

        <RelatedProducts products={related} />

        <Footer />
      </main>

      {/* Sticky Add to Cart Bar */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-container-highest/40 py-4 px-6 md:px-12 z-40 flex justify-between items-center shadow-luxury transition-transform duration-500 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="hidden md:flex items-center gap-4">
          <div className="w-12 h-16 bg-surface-container-highest/20 relative">
            <Image src={product.gallery[0].src} alt={`${product.name} thumbnail`} fill sizes="48px" className="object-cover" />
          </div>
          <div>
            <h4 className="text-sm text-primary-container font-semibold">{product.name}</h4>
            <p className="text-xs text-primary-container/60">{selectedWeight.label}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          <span className="font-serif text-xl text-primary-container">${total}</span>
          <button
            onClick={() => addItem(currentCartItem, qty)}
            className="bg-primary-container text-background px-8 py-3 hover:bg-primary-container/80 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}