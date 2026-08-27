"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  strength?: number; // px of movement, default 40
};

export default function ParallaxImage({ src, alt, className = "", strength = 40 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // progress: -1 (above viewport) to 1 (below viewport), 0 = centered
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      setOffset(progress * strength);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
    </div>
  );
}