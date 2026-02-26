"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
      });

      // 1. Side Blur Blobs Animation (Minimalist floating)
      gsap.to(".blur-blob", {
        y: "random(-40, 40)",
        x: "random(-20, 20)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      // 2. Scroll Line Animation (Slowly scaling/moving)
      gsap.to(".scroll-line", {
        scaleY: 0.3,
        transformOrigin: "top",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Subtle mouse move effect for the background spotlight
      const moveSpotlight = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        gsap.to(".spotlight", {
          x: clientX - 400,
          y: clientY - 400,
          duration: 2,
        });
      };
      window.addEventListener("mousemove", moveSpotlight);
      return () => window.removeEventListener("mousemove", moveSpotlight);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-[#050505]"
    >
      {/* Background Spotlight */}
      <div className="spotlight absolute w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Minimal Blur Blobs on sides */}
      <div className="blur-blob absolute -left-20 top-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="blur-blob absolute -right-20 bottom-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="hero-content z-10 text-center max-w-5xl">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">
          Premium Web Designer & Developer
        </p>

        <h1 className="text-[12vw] md:text-[5.5vw] font-bold leading-[0.95] tracking-tight text-white mb-8">
          We Build Websites That <br />
          <span className="text-zinc-500 font-semibold leading-normal">
            Turn Users into Clients
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-lg font-light leading-relaxed mb-10">
          I create high-end digital experiences for brands that want to stand
          out. No templates, just pure custom engineering.
        </p>

        <div className="flex flex-col items-center gap-8">
          {/* 4. Enhanced Button with Shine Effect & Gradient Hover */}
          <button className="relative group overflow-hidden px-12 py-5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 cursor-pointer hover:border-transparent bg-zinc-900">
            {/* Shine Sweep Effect */}
            <span className="absolute inset-0 flex justify-center">
              <span className="relative h-full w-12 bg-white/20 blur-[20px] -skew-x-[45deg] -translate-x-[300%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
            </span>

            {/* Gradient Overlay on Hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)]" />

            <span className="relative z-10">Apply for Partnership</span>
          </button>

          {/* Social Proof / Avatars */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="client"
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">
              Trusted by 20+ Happy Clients Worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Hero Bottom - Animated Scroll Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="flex flex-col items-center gap-2">
          <div className="scroll-line w-[1px] h-14 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
