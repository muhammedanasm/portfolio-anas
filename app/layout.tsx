import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScrolling from "@/components/layout/SmoothScrolling";

// Importing the premium font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getanas.com"),
  title: "Muhammed Anas | Best Freelance Web Developer in Kerala & Dubai",

  description:
    "Premium Next.js & GSAP Developer in Kerala. Specializing in high-performance minimalist websites for brands in India and Dubai. Hire Anas for bespoke digital solutions.",
  verification: {
    google: "4-NQWHXt92g1FybwwJ7VR84BSuFfyHZw7qEQd3Qx0x4",
  },

  keywords: [
    "Best web developer in Calicut",
    "Top freelance developer Dubai",
    "Freelance developer Manjeri",
    "Next.js developer Malappuram",
    "React developer Calicut",
    "Premium web design Dubai",
    "Frontend engineer Kerala",
    "Bespoke website developer India",
    "GSAP animation expert Kerala",
  ],
  alternates: {
    canonical: "https://getanas.com/",
  },
  openGraph: {
    title: "Muhammed Anas | Premium Web Developer",
    description: "Building high-end digital experiences with Next.js and GSAP.",
    url: "https://getanas.com/",
    siteName: "Anas Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Anas | Web Developer",
    description: "High-performance minimalist websites built with Next.js.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} bg-[#050505] text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammed Anas",
              url: "https://getanas.com/",
              jobTitle: "Freelance Web Developer & React, Next.js Expert",
              description:
                "Specialized React and Next.js developer creating premium digital experiences with GSAP animations in Kerala and Dubai.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Calicut",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              serviceArea: [
                { "@type": "City", name: "Calicut" },
                { "@type": "City", name: "Dubai" },
                { "@type": "State", name: "Kerala" },
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "GSAP Animation",
                "Web Design",
                "SEO",
                "JavaScript",
                "Frontend Development",
                "Performance Optimization",
                "E-commerce Solutions",
                "Custom Web Development",
                "Responsive Design",
                "UI/UX Design",
                "Web Accessibility",
                "Content Management Systems",
                "Progressive Web Apps",
                "API Integration",
                "Web Security",
                "Cross-Browser Compatibility",
                "HTML5",
                "CSS3",
                "TypeScript",
                "Node.js",
              ],
              sameAs: [
                "https://linkedin.com/in/muhammedanasm",
                "https://github.com/muhammedanasm",
                "https://www.instagram.com/anasmk_07/",
              ],
            }),
          }}
        />
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
