import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Zap, Layout, Search } from "lucide-react";
import FAQ from "@/components/home/FAQ";
import Clients from "@/components/home/Clients";
import Image from "next/image";
import SkeletonImage from "@/components/services/SkeletonImage";

// SEO Metadata
export const metadata: Metadata = {
  title: "Bespoke Web Design Services Dubai & Kerala | Muhammed Anas",
  description:
    "Elevate your brand with premium, high-performance websites. Specialized in Next.js & GSAP. Bespoke web design solutions for businesses in Dubai, Kerala, and globally. Get a free quote today.",
  alternates: {
    canonical: "https://getanas.com/services/premium-web-design",
  },
  openGraph: {
    title: "Bespoke Web Design Services | Muhammed Anas",
    description:
      "Building high-end digital experiences with Next.js and GSAP. Premium web design for brands that value performance.",
    url: "https://getanas.com/services/premium-web-design",
    type: "website",
  },
};

const projects = [
  {
    title: "Calinova | Innovation's Next Chapter",
    category: "Next.js • GSAP • Tailwind",
    url: "https://calinova.ai/",
    videoUrl: "/videos/project1.MP4", // വീഡിയോ ഉണ്ടെങ്കിൽ അത് കാണിക്കണം
    image: "/images/calinova-thumb.jpg", // റെഡ് ലൈൻ മാറാൻ ഒരു തമ്പ്നൈൽ കൂടി നൽകുക
  },
  {
    title: "welota ",
    category: "react.js • GSAP • SEO",
    url: "https://welota.com/",
    image: "/images/welota.JPG",
  },
  {
    title: "Minimal Explore",
    category: "Next.js • GSAP • SEO",
    url: "https://minimalexplore.com/",
    image: "/images/minimal.jpg",
  },
  {
    title: "IESI Project",
    category: "NEXT.JS • GSAP • SEO",
    url: "https://iesi.vercel.app/",
    image: "/images/ies.jpg",
  },
];

const ServicePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Muhammed Anas | Premium Web Design & Development",
    provider: {
      "@type": "Person",
      name: "Muhammed Anas",
      url: "https://getanas.com",
      jobTitle: "Freelance Next.js & React Developer",
      description:
        "Muhammed Anas is a premium web developer specializing in Next.js, React, and GSAP animations, serving clients in Dubai, Kerala, and Saudi Arabia.",
    },
    description:
      "Professional freelance web design and development. Specialized in high-performance websites for businesses in Calicut, Kochi, Dubai, and beyond. Rank #1 on search engines.",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Calicut" },
      { "@type": "City", name: "Kozhikode" }, // ആളുകൾ ഇത് സെർച്ച് ചെയ്യാറുണ്ട്
      { "@type": "City", name: "Manjeri" },
      { "@type": "City", name: "Malappuram" },
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Ernakulam" },
      { "@type": "City", name: "Kannur" },
      { "@type": "City", name: "Thrissur" },
      { "@type": "City", name: "Muscat" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Oman" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance Web Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Freelance Web Developer in Kerala",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Best Web Designer in Dubai",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Best Web Designer in Calicut",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js & GSAP Animation Expert",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Website Builder",
          },
        },
      ],
    },
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-white/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 overflow-hidden">
        {/* Background Aura */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl relative z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 block mb-6 animate-pulse">
            Bespoke Digital Solutions
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-10">
            Premium <br />
            <span className="text-zinc-700 font-light">Web Design</span>
          </h1>
          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            Engineering high-end digital experiences for industry leaders across
            the **GCC and India**. Specializing in minimalist motion design and
            performance-driven architectures for brands in **Dubai, Muscat,
            Riyadh, and Kerala**.
          </p>
          <a
            href="https://wa.me/919645016304?text=Hi%20Anas,%20I'm%20interested%20in%20your%20Premium%20Web%20Design%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-zinc-800 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase tracking-widest font-bold"
          >
            Start Your Project <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* 2. WHY PREMIUM? (VALUE PROP) */}
      <section className="py-32 px-6 md:px-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
              Why settle for <br />
              <span className="text-zinc-700 font-light">average?</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-6">
              In a world of templates, a bespoke website is your strongest
              competitive advantage. I combine the speed of **Next.js** with the
              fluidity of **GSAP** to create experiences that capture attention
              and build trust instantly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap size={20} />,
                title: "Ultra Fast",
                desc: "90+ Lighthouse scores for SEO.",
              },
              {
                icon: <Layout size={20} />,
                title: "Custom UI",
                desc: "No templates. Pure engineering.",
              },
              {
                icon: <Search size={20} />,
                title: "SEO Ready",
                desc: "Rank higher on Google search.",
              },
              {
                icon: <CheckCircle2 size={20} />,
                title: "Responsive",
                desc: "Perfect on every screen size.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-zinc-900 rounded-sm hover:border-zinc-700 transition-colors"
              >
                <div className="text-zinc-400 mb-4">{item.icon}</div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS (TEXT-HEAVY FOR SEO) */}
      <section className="py-32 bg-zinc-900/10 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
              The Methodology
            </h2>
            <div className="h-px w-24 bg-zinc-800 mx-auto" />
          </div>

          <div className="space-y-24">
            {[
              {
                step: "01",
                name: "Strategic Discovery",
                text: "We analyze your target market in Kerala or Dubai to understand what your clients actually want. This phase defines the site architecture and user flow.",
              },
              {
                step: "02",
                name: "Minimalist Design",
                text: "Focusing on white space, typography, and premium imagery. We design a visual language that screams luxury and professionalism.",
              },
              {
                step: "03",
                name: "Motion Engineering",
                text: "Using GSAP to add micro-interactions that guide the user's eye, making the experience feel premium and interactive.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-10 items-start"
              >
                <span className="text-5xl font-light text-zinc-800">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                    {item.name}
                  </h3>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION - Place after Methodology */}
      <section className="py-32 px-6 md:px-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Selected <br />{" "}
              <span className="text-zinc-700 font-light">Success Stories</span>
            </h2>
            <Link
              href="/work"
              className="text-[10px] uppercase tracking-widest border-b border-zinc-700 pb-2 hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 4).map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-zinc-900 mb-6">
                    <SkeletonImage src={project.image} alt={project.title} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mt-2">
                    {project.category}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-40 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-10">
          Ready to elevate <br /> your{" "}
          <span className="text-zinc-700">Digital Presence?</span>
        </h2>
        <a
          href="https://wa.me/919645016304?text=Hi%20Anas,%20I%20just%20saw%20your%20Premium%20Web%20Design%20portfolio.%20I'd%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-12 py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Get a Custom Quote
        </a>
      </section>
      {/* 5. TARGET AUDIENCE & RESULTS */}
      <section className="py-24 px-6 md:px-16 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none mb-8">
              Global Standards. <br />{" "}
              <span className="text-zinc-500">Bespoke Execution.</span>
            </h2>

            <p className="text-lg text-zinc-500 mb-8 font-light leading-relaxed">
              Your website is your most valuable digital asset. I focus on
              bridging the gap between aesthetic luxury and technical precision.
              Having worked with clients in{" "}
              <span className="text-zinc-900 font-medium">
                Oman, Saudi Arabia, and Dubai
              </span>
              , I bring international design standards to every project I
              undertake in Kerala and beyond.
            </p>
            <ul className="space-y-4">
              {[
                "World-class GSAP Animations",
                "Next.js Speed & Performance (SEO 100)",
                "GCC & International Design Aesthetics",
                "Conversion-Optimized User Flows",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-bold uppercase text-xs tracking-widest"
                >
                  <CheckCircle2 size={18} className="text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-100 p-10 rounded-2xl border border-zinc-200">
            <h3 className="text-2xl font-bold mb-4">
              Want to see how I can help?
            </h3>
            <p className="text-zinc-500 mb-8 text-sm">
              Let&apos;s analyze your current website and find out how we can
              improve your conversion by 2x.
            </p>
            <a
              href="https://wa.me/919645016304?text=Hi%20Anas,%20I'm%20interested%20in%20building%20a%20Premium%20Website."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-black text-white py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all"
            >
              Start a Conversation on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 block mb-6 animate-pulse">
              International Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Serving Brands <br />{" "}
              <span className="text-zinc-700 font-light">Worldwide.</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
              My work spans across different time zones and business cultures.
              From the luxury markets of
              <span className="text-zinc-100 font-medium text-white">
                {" "}
                Dubai{" "}
              </span>{" "}
              and
              <span className="text-zinc-100 font-medium text-white">
                {" "}
                Riyadh{" "}
              </span>{" "}
              to the corporate landscape of
              <span className="text-zinc-100 font-medium text-white">
                {" "}
                Muscat
              </span>
              , I deliver digital solutions that resonate with global audiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { location: "Dubai", market: "United Arab Emirates" },
              { location: "Muscat", market: "Oman - Corporate" },
              { location: "Riyadh", market: "Saudi Arabia - Tech" },
              { location: "Jeddah", market: "Saudi Arabia - Retail" },
              { location: "Kochi", market: "Infopark Tech Hub" },
              { location: "Calicut", market: "Kerala Business" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-zinc-900 bg-zinc-900/10 rounded-sm"
              >
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                  {item.location}
                </h4>
                <p className="text-[9px] text-zinc-600 uppercase tracking-widest">
                  {item.market}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* clients reviews */}
      <Clients />
      {/* 7. MINI FAQ FOR THIS SERVICE */}
      <FAQ />
    </main>
  );
};

export default ServicePage;
