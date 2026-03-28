"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  rotateDeg?: number;
  distance?: number;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  rotateDeg = 0,
  distance = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  const style: CSSProperties = {
    ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {}),
    ["--reveal-rotate" as string]: `${rotateDeg}deg`,
    ["--reveal-y" as string]: `${distance}px`,
  };

  return (
    <div
      ref={ref}
      data-visible={isVisible ? "true" : "false"}
      className={`reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
