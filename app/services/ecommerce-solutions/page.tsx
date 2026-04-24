import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Globe,
  CheckCircle2,
  ShoppingBag,
  Zap,
} from "lucide-react";
import FAQ from "@/components/home/FAQ";
import Clients from "@/components/home/Clients";
import SkeletonImage from "@/components/services/SkeletonImage";

// 1. 10/10 SEO METADATA
export const metadata: Metadata = {
  title: "E-commerce Development Calicut & Kerala | Custom Online Stores Dubai",
  description:
    "Build high-converting online stores in Calicut, Manjeri, and across Kerala. Specialized in custom B2B & B2C e-commerce solutions using Next.js for brands in Dubai and India. 24/7 sales architecture.",
  keywords: [
    "E-commerce website builder Calicut",
    "Online store development Manjeri",
    "Best e-commerce developer Kerala",
    "Shopify expert Thrissur",
    "Custom shopping website Kannur",
    "B2B e-commerce Dubai",
    "Next.js E-commerce India",
    "Best e-commerce developer Kerala",
    "Custom B2B portal Dubai",
    "Next.js E-commerce expert Saudi Arabia",
    "Shopify & React Developer Kerala",
    "Enterprise retail solutions GCC",
  ],
  alternates: {
    canonical: "https://getanas.com/services/ecommerce-solutions",
  },
};

const EcommercePage = () => {
  // 2. AI-DISCOVERY SCHEMA (GEO OPTIMIZATION)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Muhammed Anas | E-commerce Architecture & Development",
    provider: {
      "@type": "Person",
      name: "Muhammed Anas",
      url: "https://getanas.com",
      jobTitle: "Lead E-commerce Engineer",
    },
    description:
      "Premium E-commerce development services specializing in high-performance digital stores for brands in Dubai, Saudi Arabia, Oman, and Kerala.",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Muscat" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Calicut" },
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Malappuram" },
      { "@type": "City", name: "Manjeri" },
      { "@type": "City", name: "Kozhikode" },
      { "@type": "City", name: "Thrissur" },
      { "@type": "City", name: "Kannur" },
      { "@type": "City", name: "Ernakulam" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-commerce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Online Store Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "B2B Wholesale & Dealer Portals",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Vendor Marketplace Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "D2C Luxury Brand Stores" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payment Gateway Integration (Mada, Telr, Stripe, Razorpay)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Speed & Performance Optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inventory & Order Management Systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js & React E-commerce Engineering",
          },
        },
      ],
    },
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-emerald-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. HERO SECTION - Targeted at Business Growth */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 overflow-hidden">
        {/* Emerald Aura for E-commerce/Money feel */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl relative z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 block mb-6 animate-pulse">
            High-Performance Retail
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-10">
            E-commerce <br />
            <span className="text-zinc-700 font-light">Architecture</span>
          </h1>
          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            Building digital storefronts that sell while you sleep. From bespoke
            B2B platforms in{" "}
            <span className="text-white font-bold"> Calicut</span> to luxury D2C
            stores in <span className="text-white font-bold">Dubai</span>, we
            focus on frictionless checkout and extreme performance.
          </p>

          <a
            href="https://wa.me/919645016304?text=Hi%20Anas,%20I'm%20interested%20in%20building%20an%20E-commerce%20store."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-zinc-800 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase tracking-widest font-bold"
          >
            Launch Your Store <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION - Focus on Business ROI */}
      <section className="py-32 px-6 md:px-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <ShieldCheck size={24} />,
              title: "Secure Gateways",
              desc: "Integration with Stripe, Telr, and Razorpay for seamless global and local transactions.",
            },
            {
              icon: <Zap size={24} />,
              title: "Lightning Speed",
              desc: "Built with Next.js for sub-second load times. Faster speed = Higher conversions.",
            },
            {
              icon: <BarChart3 size={24} />,
              title: "Inventory Logic",
              desc: "Advanced stock management systems tailored for Kerala's growing retail brands.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 border border-zinc-900 rounded-sm hover:border-zinc-700 transition-colors bg-zinc-900/10"
            >
              <div className="text-zinc-400 mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold uppercase tracking-tight mb-4">
                {item.title}
              </h4>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 1. PAIN POINTS SECTION */}
      <section className="py-24 px-6 md:px-16 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-16">
            Stop losing sales to <br />{" "}
            <span className="text-zinc-700 font-light">bad architecture.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Slow Load Times",
                desc: "If your store takes 3+ seconds to load, you are losing 40% of your customers.",
              },
              {
                title: "Poor Mobile UX",
                desc: "Most Kerala/Dubai users shop on mobile. A non-responsive site is a dead site.",
              },
              {
                title: "Complex Checkout",
                desc: "Confusing payment steps lead to abandoned carts. We make it frictionless.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l border-zinc-800 pl-8">
                <h4 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
                  The Problem
                </h4>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE ANAS METHOD (HOW I SOLVE) */}
      <section className="py-32 px-6 md:px-16 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
              How we fix <br />{" "}
              <span className="text-zinc-500">your growth.</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-lg mb-12 leading-relaxed font-light max-w-lg">
              I don&apos;t just build websites; I engineer high-conversion sales
              systems. By leveraging the power of{" "}
              <span className="text-white font-bold">React and Next.js</span>,
              we transform your digital presence from a simple link into a 24/7
              revenue powerhouse.
            </p>
            <div className="space-y-6">
              {[
                "Performance Audit before coding",
                "Custom UI/UX designed for conversion",
                "Seamless Payment Gateway integration",
                "Post-launch scale support",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                  <span className="text-xs uppercase font-bold tracking-widest">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerald-500/5 p-12 rounded-sm border border-emerald-500/10">
            <h3 className="text-2xl font-bold mb-6 italic">
              Why Hire Me Instead of an Agency?
            </h3>
            <div className="space-y-8">
              <div>
                <h5 className="font-bold text-white uppercase text-sm mb-1">
                  Direct Access
                </h5>
                <p className="text-zinc-500 text-xs font-light">
                  You talk to the engineer, not a manager. Ideas move faster.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-white uppercase text-sm mb-1">
                  Ownership
                </h5>
                <p className="text-zinc-500 text-xs font-light">
                  I take only limited projects. Your store gets my 100% focus.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-white uppercase text-sm mb-1">
                  Global Standard
                </h5>
                <p className="text-zinc-500 text-xs font-light">
                  Dubai quality design at a freelance efficiency. No overhead
                  costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY PREVIEW - Social Proof */}
      <section className="py-32 px-6 md:px-16 bg-zinc-900/10 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
              Bespoke B2B Solution
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
              Luxury <br />{" "}
              <span className="text-zinc-700 font-light">meets Scale.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-8 italic">
              &quot;For{" "}
              <span className="text-white font-bold">Swa Diamonds</span>, we
              built a high-end B2B ecosystem that manages thousands of SKUs with
              sub-second performance.&quot;
            </p>

            <a
              href="https://swadiamonds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-zinc-700 pb-2 hover:border-white transition-all group cursor-pointer"
            >
              Explore Live Experience{" "}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
          <a
            href="https://swadiamonds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/2 aspect-video relative rounded-sm overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer block group"
          >
            <SkeletonImage
              src="/images/swa.jpg"
              alt="Swa Diamonds E-commerce Development Kerala"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
                Visit Website
              </span>
            </div>
          </a>
        </div>
        {/* PROJECT 02: WELOTA (REACT.JS + MARKETPLACE) - Reversed Layout */}
        <div className="flex flex-col md:flex-row-reverse mt-30 gap-20 items-center">
          <div className="md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
              Marketplace Engineering
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              Modern <br />{" "}
              <span className="text-zinc-700 font-light">Marketplaces.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-8 italic">
              &quot;<span className="text-white font-bold">Welota</span>{" "}
              required a seamless shopping experience. Built with{" "}
              <span className="text-white font-bold">React.js</span>, we focused
              on a mobile-first interface and lightning-fast product discovery
              to boost user retention.&quot;
            </p>
            <a
              href="https://welota.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-zinc-700 pb-2 hover:border-white transition-all group"
            >
              View Live Marketplace{" "}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
          <a
            href="https://welota.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/2 aspect-video relative rounded-sm overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer block group"
          >
            <SkeletonImage
              src="/images/welota.JPG"
              alt="Welota Marketplace Development"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
                Visit Welota
              </span>
            </div>
          </a>
        </div>

        {/* PROJECT 03: TRUCKS DATA (REACT.JS + TYPESCRIPT + INDUSTRIAL SCALE) */}
        <div className="flex flex-col md:flex-row gap-20 mt-30 items-center">
          <div className="md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
              Industrial Marketplace
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              Heavy <br />{" "}
              <span className="text-zinc-700 font-light">Inventory.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-8 italic">
              &quot;For{" "}
              <span className="text-white font-bold">Trucks Data</span>, we
              engineered a robust commercial vehicle marketplace using{" "}
              <span className="text-white font-bold">React.js</span> and{" "}
              <span className="text-white font-bold">TypeScript</span>. We
              focused on managing massive inventories with complex filtering and
              sub-second search performance.&quot;
            </p>

            {/* വെബ്‌സൈറ്റിലേക്ക് നേരിട്ട് പോകുന്ന ലിങ്ക് */}
            <a
              href="https://www.trucksdata.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-zinc-700 pb-2 hover:border-white transition-all group cursor-pointer"
            >
              Explore Marketplace Architecture{" "}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* ഇമേജ് സെക്ഷൻ - ക്ലിക്ക് ചെയ്താൽ സൈറ്റിലേക്ക് പോകും */}
          <a
            href="https://www.trucksdata.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/2 aspect-video relative rounded-sm overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer block group"
          >
            <SkeletonImage
              src="/images/trucks.webp"
              alt="Trucks Data - Commercial Vehicle Marketplace Development"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
                Visit Trucks Data
              </span>
            </div>
          </a>
        </div>
        {/* PROJECT 04: SWA DIAMONDS B2B (REACT.JS + ENTERPRISE) - Reversed Layout */}
        <div className="flex flex-col md:flex-row-reverse gap-20 mt-30 items-center">
          <div className="md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
              Enterprise B2B Commerce
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              Wholesale <br />{" "}
              <span className="text-zinc-700 font-light">Inventory.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-8 italic">
              &quot;For the{" "}
              <span className="text-white font-bold">
                Swa Diamonds B2B Portal
              </span>
              , we engineered a massive wholesale architecture using{" "}
              <span className="text-white font-bold">React.js</span>. The
              platform handles complex dealer pricing, bulk order management,
              and real-time inventory sync for global distributors.&quot;
            </p>

            <a
              href="https://b2b.swadiamonds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-zinc-700 pb-2 hover:border-white transition-all group cursor-pointer"
            >
              Explore Enterprise Portal{" "}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          <a
            href="https://b2b.swadiamonds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/2 aspect-video relative rounded-sm overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer block group"
          >
            <SkeletonImage
              src="/images/01.png"
              alt="Swa Diamonds B2B E-commerce Portal Development"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
                Visit B2B Portal
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* 4. STRATEGIC REGIONAL PRESENCE (REFINED & PREMIUM) */}
      <section className="py-32 px-6 md:px-16 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
                Regional Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                Bridging Local Retail <br />
                <span className="text-zinc-700 font-light">
                  to Global Tech.
                </span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed mb-8">
                We understand the heartbeat of Kerala&apos;s business hubs.
                Whether you are scaling a retail brand from the commercial
                streets of{" "}
                <span className="text-zinc-100 font-medium">Calicut</span>,{" "}
                <span className="text-zinc-100 font-medium"> Manjeri</span>, and{" "}
                <span className="text-zinc-100 font-medium">Kannur</span>, or
                launching a tech-driven startup from{" "}
                <span className="text-zinc-100 font-medium">
                  Infopark Kochi
                </span>
                , we provide the architecture you need to win.
              </p>
              <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
                From the vibrant business communities in{" "}
                <span className="text-zinc-100 font-medium">Thrissur</span>,
                <span className="text-zinc-100 font-medium">Kondotty</span>, and{" "}
                <span className="text-zinc-100 font-medium">Areacode</span>, our
                e-commerce solutions are tailored to translate local success
                into international revenue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { city: "Calicut", zone: "Commercial Hub" },
                { city: "Infopark", zone: "Tech Corridor" },
                { city: "Manjeri", zone: "Retail Center" },
                { city: "Thrissur", zone: "Gold & Textile" },
                { city: "Kannur", zone: "Export & Trade" },
                { city: "Kondotty", zone: "Airport City" },
                { city: "Malappuram", zone: "Business District" },
                { city: "Dubai", zone: "Global HQ" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 border border-zinc-900 bg-zinc-900/10 rounded-sm group hover:border-zinc-500/30 transition-all"
                >
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-emerald-500 transition-colors">
                    {item.city}
                  </h4>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest italic">
                    {item.zone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS & FAQ */}
      <Clients />
      <FAQ />

      {/* 5. FINAL CTA - Lead Generation */}
      <section className="py-40 text-center px-6 border-t border-zinc-900">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-10">
          Start your <br /> <span className="text-zinc-500">Global Store.</span>
        </h2>
        <a
          href="https://wa.me/919645016304?text=Hi%20Anas,%20I'm%20looking%20for%20an%20E-commerce%20Audit."
          target="_blank"
          className="bg-white text-black px-12 py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all inline-block shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Book a Free Store Audit
        </a>
      </section>
    </main>
  );
};

export default EcommercePage;
