import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ThreeBackground } from "@/components/three-background";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Canvas */}
      <ThreeBackground />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="particle absolute w-1 h-1 bg-accent rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '2s' }} />
        <div className="particle absolute w-3 h-3 bg-primary rounded-full animate-float" style={{ top: '80%', left: '20%', animationDelay: '4s' }} />
        <div className="particle absolute w-1 h-1 bg-accent rounded-full animate-float" style={{ top: '30%', left: '70%', animationDelay: '1s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="mb-6">
            <span className="text-primary font-mono text-lg tracking-wider">
              {t('hello')}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              {t('viewWork')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              {t('downloadCV')}
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-8 text-4xl text-muted-foreground">
            <i className="fab fa-react hover:text-accent transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-node-js hover:text-primary transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-python hover:text-yellow-400 transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-aws hover:text-orange-400 transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-docker hover:text-blue-400 transition-colors duration-300 cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
