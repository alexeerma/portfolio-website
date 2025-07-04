import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft, Filter, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "wouter";
import { SEOHead, seoConfigs } from "@/components/seo-head";

import portfolio  from "@assets/portfolio.png";
import myhome from "@assets/Myhome.png";
import youtube from "@assets/youtube.png";
import eventscal from "@assets/eventscalendar.jpg";
import netflix from "@assets/Netflix.webp";
import karinak from "@assets/karinak.png";
import puslekeskus from "@assets/puslekeskus.png";
import wisetrans from "@assets/wisetrans.png";
import orthoqp from "@assets/Orthoq.png";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planning";
  featured: boolean;
}

export default function ProjectsPage() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");


  const toggleLanguage = () => {
    setLanguage(language === "en" ? "et" : "en");
  };
  // You can customize these projects with your actual work
  const projects: Project[] = [
    {
      id: "1",
      title: t('fullProject1Title'),
      description: t('fullProject1Description'),
      longDescription: t('fullProject1LongDescription'),
      image: portfolio,
      technologies: ["React", "Node.js", "TypeScript", "Three.js", "TailwindCss"],
      category: "web-app",
      liveUrl: "https://alexeerma.ee",
      githubUrl: "https://github.com/alexeerma/portfolio-website",
      status: "completed",
      featured: true
    },
    {
      id: "2",
      title: t('fullProject2Title'),
      description: t('fullProject2Description'),
      longDescription: t('fullProject2LongDescription'),
      image: youtube,
      technologies: ["React", "Redux", "Tawilwind", "Firebase"],
      category: "web-app",
      githubUrl: "https://github.com/alexeerma/Youtube-clone",
      status: "completed",
      featured: false
    },
    {
      id: "3",
      title: t('fullProject3Title'),
      description: t('fullProject3Description'),
      longDescription: t('fullProject3LongDescription'),
      image: netflix,
      technologies: ["React", "TypeScript", "Redux", "Firebase"],
      category: "web-app",
      githubUrl: "https://github.com/alexeerma/netflix-clone",
      status: "completed",
      featured: true
    },
    {
      id: "4",
      title: t('fullProject4Title'),
      description: t('fullProject4Description'),
      longDescription: t('fullProject4LongDescription'),
      image: myhome,
      technologies: ["Javascript", "PHP", "Docker", "Elementor", "API"],
      category: "wordpress",
      liveUrl: "https://myhome.ee",
      status: "in-progress",
      featured: true
    },
    {
      id: "5",
      title:t('fullProject5Title'),
      description: t('fullProject5Description'),
      longDescription: t('fullProject5LongDescription'),
      image: karinak,
      technologies: ["Docker", "Custom Theme", "jQuery", "Redis", "PHP"],
      category: "wordpress",
      githubUrl: "https://github.com/alexeerma/KarinaK-theme",
      status: "in-progress",
      featured: false
    },
    {
      id: "6",
      title: t('fullProject6Title'),
      description: t('fullProject6Description'),
      longDescription: t('fullProject6LongDescription'),
      image: orthoqp,
      technologies: ["Docker", "Templates", "jQuery", "PHP"],
      category: "wordpress",
      liveUrl: "https://orthoq.ee",
      status: "completed",
      featured: false
    },
    {
      id: "7",
      title: t('fullProject7Title'),
      description: t('fullProject7Description'),
      longDescription: t('fullProject7LongDescription'),
      image: puslekeskus,
      technologies: ["Docker", "Wordpress", "Javascript", "Templates", "PHP"],
      category: "wordpress",
      liveUrl: "https://puslekeskus.ee",
      status: "completed",
      featured: false
    },
    {
      id: "8",
      title:t('fullProject8Title'),
      description: t('fullProject8Description'),
      longDescription: t('fullProject8LongDescription'),
      image: wisetrans,
      technologies: ["Docker", "API", "PHP", "Wordpress", "jQuery"],
      category: "wordpress",
      liveUrl: "https://wisetrans.ee",
      status: "completed",
      featured: false
    },
    {
      id: "9",
      title: t('fullProject9Title'),
      description: t('fullProject9Description'),
      longDescription: t('fullProject9LongDescription'),
      image: eventscal,
      technologies: ["Docker", "API", "PHP", "Wordpress", "jQuery"],
      category: "plugin",
      githubUrl: "https://github.com/alexeerma/events-calendar-plugin",
      status: "completed",
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: t('allCategories') },
    { value: "web-app", label: t('webAppCategory') },
    { value: "wordpress", label: t('wordpressCategory') },
    { value: "plugin", label: t('pluginCategory') },
    { value: "design", label: t('designCategory') },
    { value: "store", label: t('storeCategory') }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "planning": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planning": return "Planning";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.projects} />
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('backToHome')}
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('allProjects')}
            </h1>
            
            {/* Language and Theme Switchers */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-sm font-medium"
              >
                {language === "en" ? "EST" : "ENG"}
              </Button>
              
              {/* Theme Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{t('filterByCategory')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group perspective-card glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="space-y-4">
                {/* Project Image Placeholder */}
                {/* Project Image - REPLACE THIS SECTION */}
                <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={project.image}  // ← Fixed: Use project.image instead of image
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-placeholder');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-placeholder hidden w-full h-full flex items-center justify-center">
                    <div className="text-muted-foreground text-sm text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-8 w-8 text-primary" />
                      </div>
                      {t('projectScreenshot')}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="text-xs">Featured</Badge>
                    )}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs w-fit ${getStatusColor(project.status)}`}
                  >
                    {getStatusText(project.status)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.longDescription}
                </CardDescription>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('noProjectsFound')}</h3>
            <p className="text-muted-foreground">{t('tryDifferentFilter')}</p>
          </div>
        )}
      </main>
    </div>
  );
}