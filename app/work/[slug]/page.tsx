import { projects } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// 1. ADVANCED SEO & GEO METADATA
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${project.subtitle} | Muhammed Anas`,
    description: `Case study: How we built a high-performance ${project.category} for a brand in ${project.location}. Developed by Muhammed Anas, the best freelance developer in Kerala & Dubai.`,
    keywords: [
      "Web design Kerala",
      "Next.js developer Dubai",
      "React expert Calicut",
      "Freelance web developer Manjeri",
      "Luxury ecommerce website India",
      "GSAP animation expert",
      "Bespoke digital solutions",
    ],
    openGraph: {
      title: project.title,
      description: project.challenge,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* HEADER SECTION */}
      <section className="container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-zinc-800"></span>
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500">
              Project Case Study / {project.location}
            </span>
          </div>

          <h1 className="text-6xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] mb-12">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-snug">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] border border-zinc-800 px-5 py-2 rounded-full uppercase tracking-[0.2em] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-6 pb-32">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-sm bg-zinc-900 border border-zinc-900 shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} developed by Muhammed Anas - Web Developer in Kerala`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* CASE STUDY CONTENT - HIGH SEO IMPACT */}
      <section className="container mx-auto px-6 py-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-4">
          <div className="sticky top-40 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-2">
                Role
              </h4>
              <p className="text-sm uppercase font-bold">
                Lead Frontend Engineer
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-2">
                Service
              </h4>
              <p className="text-sm uppercase font-bold">{project.category}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-2">
                Region
              </h4>
              <p className="text-sm uppercase font-bold">{project.location}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-40">
          {/* CHALLENGE */}
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-10 text-white">
              The Challenge
            </h3>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* SOLUTION */}
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-10 text-white">
              The Solution
            </h3>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

          {/* RESULTS / IMPACT */}
          <div className="bg-zinc-950 p-10 md:p-20 border border-zinc-900 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg
                width="120"
                height="120"
                viewBox="0 0 15 15"
                fill="none"
                className="text-white"
              >
                <path
                  d="M1 14L14 1M14 1H1M14 1V14"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-10">
              Client Impact & Local Reach
            </h3>
            <p className="text-2xl md:text-4xl text-white font-light leading-tight mb-12">
              {project.impact}
            </p>
            <a
              href={project.url}
              target="_blank"
              className="inline-flex items-center gap-6 text-sm uppercase tracking-[0.4em] font-bold border-b border-white pb-4 hover:text-zinc-400 hover:border-zinc-400 transition-all"
            >
              Experience Live Site <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FOOTER */}
      <footer className="container mx-auto px-6 py-32 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
        <Link
          href="/work"
          className="group text-zinc-500 hover:text-white transition-colors uppercase text-[10px] tracking-[0.6em] flex items-center gap-4"
        >
          <span className="group-hover:-translate-x-2 transition-transform">
            ←
          </span>{" "}
          Back to Archive
        </Link>
        <div className="text-center md:text-right">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">
            Next Step
          </p>
          <Link
            href="/contact"
            className="text-2xl md:text-4xl font-bold uppercase tracking-tighter hover:text-zinc-400 transition-all"
          >
            Start a project with Anas
          </Link>
        </div>
      </footer>
      <WhatsAppButton />
    </main>
  );
}
