import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://pacesettercleaning.co.uk", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://pacesettercleaning.co.uk/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://pacesettercleaning.co.uk/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://pacesettercleaning.co.uk/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
