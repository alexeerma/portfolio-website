import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export function SEOHead({
  title = "Alex Eerma - Full Stack Developer",
  description = "Full Stack Developer specializing in React, Node.js, TypeScript, and WordPress.",
  keywords = "full stack developer, react, node.js, typescript, wordpress",
  url = "https://alexeerma.ee/"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:url', url);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, keywords, url]);

  return null;
}

export const seoConfigs = {
  home: {
    title: "Alex Eerma - Full Stack Developer | React, Node.js, WordPress Expert",
    description: "Full Stack Developer specializing in React, Node.js, TypeScript, and WordPress. Creating innovative web solutions with cutting-edge 3D design and user experiences.",
    keywords: "full stack developer, react developer, node.js, typescript, wordpress, web development, 3d design, portfolio, estonia",
    url: "https://alexeerma.ee/"
  },
  projects: {
    title: "Projects | Alex Eerma - Full Stack Developer Portfolio",
    description: "Explore my portfolio of React, Node.js, and WordPress projects. Featuring innovative web applications with 3D design and modern user experiences.",
    keywords: "react projects, node.js portfolio, wordpress development, web development portfolio, 3d web design",
    url: "https://alexeerma.ee/projects"
  }
};