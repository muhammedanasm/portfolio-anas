"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const steps = [
  {
    no: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by deep-diving into your brand’s core values and business objectives. I define a strategic roadmap to ensure the final product aligns perfectly with your global market goals.",
  },
  {
    no: "02",
    title: "Visual Architecture",
    description:
      "Translating strategy into a high-end minimalist visual language. I craft intuitive and immersive user experiences that resonate with an international audience through clean aesthetics.",
  },
  {
    no: "03",
    title: "Technical Engineering",
    description:
      "Bringing the vision to life using Next.js and GSAP. I focus on high-performance code, fluid motion engineering, and responsive scalability to ensure a premium digital presence.",
  },
  {
    no: "04",
    title: "Launch & Optimization",
    description:
      "Beyond deployment, I ensure a seamless transition to the live environment with rigorous testing and SEO optimization, followed by ongoing support to help your brand scale effectively.",
  },
];

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step cards animation
      gsap.utils.toArray(".step-item").forEach((item: any) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });

      // Background Illustration floating animation
      gsap.to(".abstract-bg", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-32 md:py-28 bg-[#050505] overflow-hidden"
    >
      {/* CREATIVE BACKGROUND ILLUSTRATION (Minimalist SVG) */}
      <div className="abstract-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.11] pointer-events-none">
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="400"
            cy="400"
            r="399.5"
            stroke="white"
            strokeDasharray="10 10"
          />
          <path d="M400 100V700M100 400H700" stroke="white" strokeWidth="0.5" />
          <rect
            x="200"
            y="200"
            width="400"
            height="400"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-4 ">
            Methodology
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white leading-none">
            The <span className="text-zinc-700  font-light">Workflow</span>
          </h2>
        </div>

        {/* PROCESS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item group border-l border-zinc-900 pl-8 py-4 hover:border-zinc-500 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-white transition-colors duration-500">
                  [{step.no}]
                </span>
                <div className="h-[1px] w-12 bg-zinc-900 group-hover:w-20 group-hover:bg-zinc-500 transition-all duration-700" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-4">
                {step.title}
              </h3>

              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-24 pt-12 border-t border-zinc-900">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-700">
            Efficiency meets creativity • Every project is unique
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
