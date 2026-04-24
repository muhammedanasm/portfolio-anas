import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  CheckCircle2,
  TrendingUp,
  Cpu, // AI-യെ സൂചിപ്പിക്കാൻ
  Code2,
} from "lucide-react";
import FAQ from "@/components/home/FAQ";
import Clients from "@/components/home/Clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SEO Expert in Kerala & Dubai | Rank #1 on Google & AI Search",
  description:
    "Dominate Google, ChatGPT, and Gemini search results. Expert SEO services in Calicut, Kochi, and Dubai using Next.js & React. Get high-quality leads with Muhammed Anas.",
  keywords: [
    "SEO Expert Kerala",
    "GEO Optimization Expert",
    "AI Search Engine Optimization",
    "Next.js SEO Specialist India",
    "React Developer Calicut",
    "Search Engine Optimization Kochi",
    "Dubai SEO Consultant",
  ],
  alternates: {
    canonical: "https://getanas.com/services/seo-optimization",
  },
};

const SEOPage = () => {
  // JSON-LD Schema for AI and Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Search Engine & AI Optimization (GEO)",
    provider: {
      "@type": "Person",
      name: "Muhammed Anas",
      jobTitle: "Full Stack Developer & SEO Specialist",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manjeri",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
    },
    areaServed: [
      "Calicut",
      "Kochi",
      "Dubai",
      "Manjeri",
      "Malappuram",
      "Thrissur",
      "Kannur",
      "Oman",
    ],
    description:
      "Premium SEO and Generative Engine Optimization (GEO) services to rank businesses on Google, ChatGPT, and Gemini.",
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500/30">
      {/* 1. Structured Data for AI Discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl relative z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 block mb-6 animate-pulse">
            Next-Gen Search Domination
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-10">
            Rank on Google <br />
            <span className="text-zinc-700 font-light">& AI Search.</span>
          </h1>
          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            Traditional SEO isn&apos;t enough. We optimize your brand to be the
            top recommendation on{" "}
            <span className="text-white font-medium">
              Google, ChatGPT, and Gemini
            </span>
            . Tailored strategies for the{" "}
            <span className="text-white font-medium">Kerala</span> and{" "}
            <span className="text-white font-medium">GCC</span> markets.
          </p>
          <a
            href="https://wa.me/919645016304?text=Hi%20Anas,%20I%20want%20to%20rank%20on%20Google%20and%20AI%20Search."
            target="_blank"
            className="inline-flex items-center gap-4 border border-zinc-800 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase tracking-widest font-bold"
          >
            Claim Your Free SEO & AI Audit <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* 2. THE NEW ERA: GEO (AI OPTIMIZATION) */}
      <section className="py-32 px-6 md:px-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
              Beyond the <br />{" "}
              <span className="text-zinc-700 font-light">Search Bar.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              When users ask ChatGPT{" "}
              <span className="text-zinc-100 font-medium">
                &quot;Who is the best web developer in Kerala?&quot;
              </span>
              , your name should be the answer. We use{" "}
              <span className="text-white font-bold">
                Generative Engine Optimization (GEO)
              </span>{" "}
              to ensure AI models recognize your authority and expertise.
            </p>
          </div>
          <div className="space-y-10">
            {[
              {
                icon: <Search size={20} />,
                title: "Google First Page",
                desc: "Dominating local search in Calicut, Kochi, and Dubai.",
              },
              {
                icon: <Cpu size={20} />,
                title: "AI Visibility",
                desc: "Optimizing content for LLMs like GPT-4, Gemini, and Claude.",
              },
              {
                icon: <Code2 size={20} />,
                title: "React & Next.js Architecture",
                desc: "Clean, performant code that search botes love to index.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="text-zinc-500 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold uppercase text-[12px] tracking-widest mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REGIONAL DOMINATION GRID */}
      <section className="py-32 px-6 md:px-16 border-y border-zinc-900 bg-zinc-900/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">
            Local Domination{" "}
            <span className="text-zinc-700 font-light">& Beyond.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              "Calicut",
              "Kochi",
              "Thrissur",
              "Manjeri",
              "Kannur",
              "Malappuram",
              "Dubai",
              "Muscat",
            ].map((city, i) => (
              <div
                key={i}
                className="p-8 border border-zinc-900 rounded-sm hover:border-zinc-500/30 transition-all bg-[#050505] group"
              >
                <h4 className="text-white font-bold uppercase text-[11px] tracking-widest">
                  {city}
                </h4>
                <p className="text-[9px] text-zinc-600 uppercase mt-2">
                  Market Leader
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME FOR SEO - Mentioning React.js */}
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="bg-blue-600/5 p-12 rounded-sm border border-blue-500/10">
            <h3 className="text-2xl font-bold mb-8 italic">
              The Full-Stack SEO Edge
            </h3>
            <div className="space-y-10">
              <div>
                <h5 className="text-white font-bold uppercase text-xs mb-2">
                  React & Next.js Performance
                </h5>
                <p className="text-zinc-500 text-sm font-light">
                  Leveraging the{" "}
                  <span className="text-white font-bold">React ecosystem</span>{" "}
                  to build SPAs that are light, fast, and SEO-friendly from the
                  first line of code.
                </p>
              </div>
              <div>
                <h5 className="text-white font-bold uppercase text-xs mb-2">
                  Intent-Based Keywords
                </h5>
                <p className="text-zinc-500 text-sm font-light">
                  We focus on high-ticket keywords that bring ready-to-buy
                  clients from the GCC and Kerala.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
              More Leads. <br />{" "}
              <span className="text-zinc-500">More Revenue.</span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-8">
              Whether you are a retail brand in{" "}
              <span className="text-white font-medium">Manjeri</span> or a tech
              firm in <span className="text-white font-medium">Kochi</span>, we
              ensure your digital presence is bulletproof.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "White-hat GEO & SEO",
                "Mobile-First Optimization",
                "Schema & AI Discovery Integration",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest"
                >
                  <TrendingUp size={16} className="text-blue-500" /> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Clients />
      <FAQ />

      {/* FINAL CTA */}
      <section className="py-40 text-center px-6 border-t border-zinc-900">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-10">
          Be the First <br /> <span className="text-zinc-500">They See.</span>
        </h2>
        <a
          href="https://wa.me/919645016304?text=Hi%20Anas,%20I'd%20like%20a%20free%20SEO%20and%20AI%20Audit."
          target="_blank"
          className="bg-white text-black px-12 py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all inline-block shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          Claim Your Free SEO Audit
        </a>
      </section>
    </main>
  );
};

export default SEOPage;
