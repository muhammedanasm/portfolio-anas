"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Controls the smoothness (lower is smoother, 0.08-0.1 is premium)
        duration: 1.5, // How long the scroll animation takes
        smoothWheel: true,
      }}
    >
      {/* Adding 'as any' fixes the React 19 vs React 18 type mismatch here */}
      {children as any}
    </ReactLenis>
  );
}
