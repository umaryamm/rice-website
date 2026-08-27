"use client";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: 100, suffix: "+", label: "Years of Heritage" },
  { value: 40, suffix: "", label: "Countries Exported" },
  { value: 0, suffix: "", label: "Synthetic Fertilizers" },
  { value: 12, suffix: "K", label: "Acres Cultivated" },
];

function useCountUp(target: number, shouldStart: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return value;
}

function StatItem({ stat, delay }: { stat: (typeof stats)[number]; delay: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(stat.value, isVisible);

  return (
    <FadeIn delay={delay} className="text-center">
      <div ref={ref}>
        <p className="font-serif text-3xl md:text-4xl text-primary-container mb-2">
          {count}
          {stat.suffix}
        </p>
        <p className="text-xs uppercase tracking-widest text-primary-container/60">{stat.label}</p>
      </div>
    </FadeIn>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-surface-container-highest/10 border-y border-surface-container-highest/30 py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} delay={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}