"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "01",
    title: "The Visionary Agency",
    category: "Development • UI/UX",
    image: "/images/project3.png",
    url: "https://visionary-agency.com",
    layoutClass: "md:w-9/12 self-start", // ഇടത് വശത്ത് വലിയ വലിപ്പത്തിൽ
  },
  {
    id: "02",
    title: "Luxury Commerce",
    category: "E-Commerce • Next.js",
    image: "/images/corevista.jpg",
    url: "https://luxury-shop.com",
    layoutClass: "md:w-7/12 self-end md:-mt-32", // വലത് വശത്ത് അല്പം മുകളിലേക്ക് കയറി
  },
  {
    id: "03",
    title: "Minimal Interior",
    category: "Architecture • Branding",
    image: "/images/welota.JPG",
    url: "https://minimal-interior.com",
    layoutClass: "md:w-8/12 self-center", // നടുവിൽ
  },
  {
    id: "04",
    title: "Aura Creative",
    category: "Motion • Engineering",
    image: "/images/b2nes.jpg",
    url: "https://aura-creative.com",
    layoutClass: "md:w-10/12 self-start md:-mt-20", // വലിയ വലിപ്പത്തിൽ
  },
];

export default function WorkPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".gallery-item").forEach((item: any) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="min-h-screen bg-[#050505] text-white">
      <div className="container mx-auto px-6 py-32 md:py-48 flex flex-col">
        {/* Editorial Header */}
        <div className="mb-32 md:mb-48 border-b border-zinc-900 pb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 block mb-6">
              Selected Works
            </span>
            <h1 className="text-6xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.8]">
              Archive <br />{" "}
              <span className="text-zinc-800 font-light">Bespoke</span>
            </h1>
          </div>
          <p className="max-w-xs text-zinc-500 text-sm md:text-right leading-relaxed lowercase tracking-tight">
            a curated digital gallery focusing on high-performance motion and
            architecture.
          </p>
        </div>

        {/* Modern Asymmetric Gallery */}
        <div className="flex flex-col space-y-40 md:space-y-64">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`gallery-item group relative flex flex-col ${project.layoutClass}`}
            >
              {/* Background Large Numbering */}
              <span className="absolute -top-16 -left-10 text-[18vw] font-black text-white/[0.02] pointer-events-none select-none z-0 uppercase">
                {project.id}
              </span>

              {/* Image Container (MacBook Mockup Style) */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 overflow-hidden aspect-video bg-zinc-900 rounded-sm shadow-2xl cursor-pointer block"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
                    Live Experience
                  </span>
                </div>
              </a>

              {/* Project Info - Museum Label Style */}
              <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-l border-zinc-900 pl-8">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none group-hover:text-zinc-400 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-medium ">
                    {project.category}
                  </p>
                </div>

                {/* Minimalist Action Button */}
                {/* <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 mb-2">
                  <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M1 14L14 1M14 1H1M14 1V14"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div> */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 mb-2"
                >
                  <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M1 14L14 1M14 1H1M14 1V14"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA Section */}
        <div className="mt-64 text-center">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-zinc-800 to-transparent mx-auto mb-16" />
          <Link
            href="/contact"
            className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-[0.6em] font-bold"
          >
            Back to Hub — Let&apos;s talk
          </Link>
        </div>
      </div>
    </section>
  );
}
