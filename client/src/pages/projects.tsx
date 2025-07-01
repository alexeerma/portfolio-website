import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

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
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // You can customize these projects with your actual work
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, and Stripe payment integration. Includes admin dashboard for inventory management.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe"],
      category: "web-app",
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://yourstore.com",
      status: "completed",
      featured: true
    },
    {
      id: "2",
      title: "Task Management API",
      description: "RESTful API for project and task management",
      longDescription: "A robust REST API built with Express.js and MongoDB for managing projects, tasks, and team collaboration. Features JWT authentication, role-based permissions, and real-time updates.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      category: "backend",
      githubUrl: "https://github.com/yourusername/task-api",
      status: "completed",
      featured: false
    },
    {
      id: "3",
      title: "Mobile Weather App",
      description: "React Native weather application with location services",
      longDescription: "Cross-platform mobile app providing detailed weather forecasts, location-based updates, and push notifications for weather alerts. Built with React Native and integrated with multiple weather APIs.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "TypeScript", "Redux", "OpenWeather API"],
      category: "mobile",
      githubUrl: "https://github.com/yourusername/weather-app",
      status: "completed",
      featured: true
    },
    {
      id: "4",
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence",
      longDescription: "Real-time analytics dashboard built with React and D3.js, featuring interactive charts, data visualization, and export capabilities for business intelligence and reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "data-science",
      githubUrl: "https://github.com/yourusername/analytics-dashboard",
      liveUrl: "https://analytics.yoursite.com",
      status: "in-progress",
      featured: true
    },
    {
      id: "5",
      title: "AI Chatbot Integration",
      description: "Customer service chatbot with natural language processing",
      longDescription: "AI-powered chatbot system using OpenAI GPT for customer service automation. Features conversation memory, intent recognition, and seamless handoff to human agents.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "OpenAI API", "Flask", "Redis", "WebSocket"],
      category: "ai-ml",
      status: "planning",
      featured: false
    },
    {
      id: "6",
      title: "DevOps Pipeline",
      description: "CI/CD pipeline with automated testing and deployment",
      longDescription: "Complete DevOps solution implementing CI/CD pipelines, automated testing, infrastructure as code, and monitoring. Deployed on AWS with Docker containerization.",
      image: "/api/placeholder/600/400",
      technologies: ["Docker", "AWS", "Jenkins", "Terraform", "Kubernetes"],
      category: "devops",
      githubUrl: "https://github.com/yourusername/devops-pipeline",
      status: "completed",
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web-app", label: "Web Applications" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "backend", label: "Backend/API" },
    { value: "data-science", label: "Data Science" },
    { value: "ai-ml", label: "AI/Machine Learning" },
    { value: "devops", label: "DevOps" }
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
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              All Projects
            </h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
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
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-muted-foreground text-sm text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>
                    Project Screenshot
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
                        Live Demo
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
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try selecting a different category filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}