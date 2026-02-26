"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ur } from "zod/locales";
import { url } from "inspector";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Calinova | Innovation's Next Chapter",
    category: "Next.js • GSAP • Tailwind",
    url: "https://calinova.vercel.app",
    videoUrl: "/videos/project1.mp4",
    gridClass: "md:col-span-6",
  },
  {
    title: "Core Vista ",
    category: "Html • CSS • Performance",
    url: "https://www.core-vista.com/",
    image: "/images/corevista.jpg",
    gridClass: "md:col-span-4 md:mt-32 md:ml-auto",
  },
  {
    title: "Welota",
    category: "React • UI/UX • Branding",
    url: "https://www.welota.com/",
    image: "/images/welota.JPG",
    gridClass: "md:col-span-4 md:mr-auto",
  },
  {
    title: "IESI Project",
    category: "NEXT.JS • GSAP • SEO",
    url: "https://iesi-project.vercel.app/",
    videoUrl: "/videos/project2.mp4",
    gridClass: "md:col-span-6 md:-mt-32",
  },
];

// SKELETON LOADER COMPONENT (YouTube style shimmer)
const Skeleton = () => (
  <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  </div>
);

const ImageItem = ({
  src,
  alt,
  onLoaded,
}: {
  src: string;
  alt: string;
  onLoaded: () => void;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const loadedRef = useRef(false); // ഡ്യൂപ്ലിക്കേറ്റ് കോളുകൾ ഒഴിവാക്കാൻ

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete && !loadedRef.current) {
      loadedRef.current = true;
      onLoaded();
    }
  }, [onLoaded]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => {
        if (!loadedRef.current) {
          loadedRef.current = true;
          onLoaded();
        }
      }}
      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
    />
  );
};

// വീഡിയോയ്ക്ക് വേണ്ടി ഒരു പ്രത്യേക കമ്പോണന്റ് (കൂടുതൽ കൺട്രോളിന്)
const VideoItem = ({
  url,
  onLoaded,
}: {
  url: string;
  onLoaded: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // വീഡിയോ നേരത്തെ ലോഡ് ആയിട്ടുണ്ടെങ്കിൽ (Cache)
    if (video.readyState >= 3) {
      onLoaded();
    }

    // പ്ലേ ആകുന്നുണ്ടെന്ന് ഉറപ്പുവരുത്താൻ
    video.play().catch((e) => console.error("Autoplay failed:", e));
  }, [onLoaded]);
  return (
    <video
      ref={videoRef}
      src={url}
      autoPlay
      loop
      muted
      playsInline
      onLoadedData={onLoaded}
      className="w-full h-full object-cover md:object-top transition-opacity duration-1000 scale-[1.01]"
    />
  );
};

const Work = () => {
  const containerRef = useRef(null);
  const [loadedMedia, setLoadedMedia] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleMediaLoad = useCallback((index: number) => {
    setLoadedMedia((prev) => {
      if (prev[index]) return prev; // നേരത്തെ ലോഡ് ആയതാണെങ്കിൽ സ്റ്റേറ്റ് മാറ്റില്ല
      return { ...prev, [index]: true };
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-card").forEach((card: any) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="works"
      className="py-24 md:py-40 bg-[#050505] text-white"
    >
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b border-zinc-900 pb-12">
          <div className="max-w-md">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-3 italic">
              Selected Projects
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              Case{" "}
              <span className="text-zinc-700 font-light underline decoration-1 underline-offset-8">
                Studies
              </span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 md:max-w-[280px] md:text-right">
            <p className="text-zinc-500 text-[13px] leading-relaxed font-light lowercase tracking-tight">
              bespoke digital solutions for brands that value design and
              performance.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-x-12 gap-y-24 md:gap-y-32 items-start">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`work-card group cursor-pointer ${project.gridClass}`}
            >
              {/* 1. WRAPPED MEDIA IN EXTERNAL LINK */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden aspect-[16/9] bg-zinc-900 rounded-sm"
              >
                {!loadedMedia[index] && <Skeleton />}
                <div
                  className={`w-full h-full transition-opacity duration-1000 ${loadedMedia[index] ? "opacity-100" : "opacity-0"}`}
                >
                  {project.videoUrl ? (
                    <VideoItem
                      url={project.videoUrl}
                      onLoaded={() => handleMediaLoad(index)}
                    />
                  ) : (
                    <ImageItem
                      src={project.image || ""}
                      alt={project.title}
                      onLoaded={() => handleMediaLoad(index)}
                    />
                  )}
                </div>
              </a>

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white uppercase group-hover:text-zinc-400 transition-colors">
                    {project.title}
                  </h3>
                  {/* UPDATED CATEGORY STYLE */}
                  <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] mt-1 font-mono">
                    {project.category}
                  </p>
                </div>

                {/* 2. WRAPPED ARROW IN EXTERNAL LINK */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-900 flex items-center justify-center group-hover:translate-x-1 transition-all hover:bg-white hover:border-white group/arrow"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H1M9 1V9"
                      stroke="currentColor"
                      className="text-zinc-500 group-hover/arrow:text-black transition-colors"
                      strokeWidth="1.2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* VIEW ALL PROJECTS BUTTON (Redirection Button) */}
        <div className="work-cta mt-24 md:mt-40 flex justify-center">
          <Link
            href="/work"
            className="group relative overflow-hidden px-12 py-5 border border-zinc-800 rounded-full transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 group-hover:text-black transition-colors duration-500">
              Explore Full Portfolio
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
