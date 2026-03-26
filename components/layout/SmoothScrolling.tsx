"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [pathname, lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Controls the smoothness (lower is smoother, 0.08-0.1 is premium)
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {/* Adding 'as any' fixes the React 19 vs React 18 type mismatch here */}
      {children as any}
    </ReactLenis>
  );
}
