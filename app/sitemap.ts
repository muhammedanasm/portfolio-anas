import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muhammed-anas.vercel.app"; // തിങ്കളാഴ്ച ഇത് meetanas.com എന്നാക്കണം

  return [
    {
      url: baseUrl, // ഹോം പേജ് (ഇതിലാണ് Process, Reviews, FAQ സെക്ഷനുകൾ ഉള്ളത്)
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`, // സെപ്പറേറ്റ് ആയ വർക്ക് പേജ്
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
