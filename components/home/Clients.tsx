"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "Anas understood exactly what we needed for HashTech. He’s quick, reliable, and actually thinks about the business side of things. Our new site has definitely helped us look more professional to our global clients.",
    name: "Rishan",
    role: "CEO, HashTech Global",
    location: "Calicut",
  },
  {
    quote:
      "It's hard to find someone who handles GSAP and complex animations so smoothly. Anas's logic is clean and he really knows his way around Next.js. Even working remotely from Dubai, communication was spot on.",
    name: "Hakeem",
    role: "Developer",
    location: "Dubai",
  },
  {
    quote:
      "As a designer, I'm very picky about spacing and pixel-perfect layouts. Anas is one of the few developers who truly respects the design files and brings them to life with perfect micro-interactions. Solid work.",
    name: "Joyal",
    role: "Designer",
    location: "Kannur",
  },
  {
    quote:
      "Anas doesn't just code what's on the paper; he suggests better ways to handle UX. The final output feels very high-end and premium. Definitely my go-to guy for any serious web project.",
    name: "Rafeeq",
    role: "Product Designer",
    location: "Bengaluru",
  },
];

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".client-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-header",
          start: "top 90%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-32 bg-[#050505] overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="client-header flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-4 font-medium">
              Social Proof
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase text-white leading-none">
              Client <span className="text-zinc-700 font-light">Feedback</span>
            </h2>
          </div>

          <div className="flex gap-4">
            {/* Custom Navigation Buttons */}
            <button className="swiper-prev w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
            <button className="swiper-next w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="client-swiper overflow-visible"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900/30 border border-zinc-900 p-10 md:p-14 rounded-sm h-full flex flex-col justify-between hover:border-zinc-700 transition-colors duration-500">
                {/* Quote Icon */}
                <div className="mb-8 opacity-20">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                    <path
                      d="M0 30V15C0 6.66667 6.66667 0 15 0V7.5C10.8333 7.5 7.5 10.8333 7.5 15H15V30H0ZM25 30V15C25 6.66667 31.6667 0 40 0V7.5C35.8333 7.5 32.5 10.8333 32.5 15H40V30H25Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <p className="text-xl md:text-1xl font-light text-zinc-300 leading-relaxed tracking-tight mb-12">
                  &quot;{item.quote}&quot;
                </p>

                <div className="flex flex-col">
                  <span className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                    {item.name}
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
                      {item.role}
                    </span>
                    <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* TRUST INDICATOR */}
        <div className="mt-20 pt-10 border-t border-zinc-900 flex justify-center opacity-30">
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">
            Helping Global Brands Scale through Premium Design
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
