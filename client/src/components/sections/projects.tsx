import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import portfolio  from "@assets/portfolio.png";
import myhome from "@assets/Myhome.png";
import youtube from "@assets/youtube.png";
import threeDport from "@assets/threeDport.png";
import eventscal from "@assets/eventscalendar.jpg";


export function ProjectsSection() {
  const { t } = useLanguage();


  const featuredProjects = [
    {
      title: t('project1Title'),
      description: t('project1Description'),
      image: portfolio,
      technologies: ["React", "Three.js", "EmailJS", "TailwindCss"],
    },
    {
      title: t('project2Title'),
      description: t('project2Description'),
      image: youtube,
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    }
  ];

  const otherProjects = [
    {
      title: "Myhome",
      description: t('otherProject1Description'),
      image: myhome,
      technologies: ["Wordpess", "Docker", "Redis", "API", "PHP"],
    },
    {
      title: "3D portfolio project",
      description: t('otherProject2Description'),
      image: threeDport,
      technologies: ["Three.js", "React", "Tailwind,", "EmailJS"],
    },
    {
      title: "Events Calendar plugin for WP",
      description: t('otherProject3Description'),
      image:  eventscal,
      technologies: ["PHP", "CSS", "ACF"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('featuredProjects')}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Projects */}
          {featuredProjects.map((project, index) => (
            <div key={index} className="perspective-card glassmorphism rounded-2xl overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground dark:text-accent">{project.title}</h3>
                  <div className="flex space-x-3">
                    <button className="text-primary hover:text-accent transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="text-primary hover:text-accent transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-foreground dark:text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="perspective-card glassmorphism rounded-xl overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-foreground dark:text-accent mb-2">{project.title}</h4>
                <p className="text-foreground dark:text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            asChild
            className="px-8 py-4 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/projects">
              {t('viewAllProjects')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
