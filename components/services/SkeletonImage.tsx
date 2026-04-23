// components/services/SkeletonImage.tsx
"use client"; // ഇതാണ് ഏറ്റവും പ്രധാനം

import React, { useState } from "react";
import Image from "next/image";

const SkeletonImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-900">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-1000 group-hover:scale-[1.03] ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SkeletonImage;
