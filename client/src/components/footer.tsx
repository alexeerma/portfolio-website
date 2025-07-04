import { Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-3xl font-bold text-primary font-mono">&lt;Alex /&gt;</span>
          </div>
          <p className="text-muted-foreground mb-6">
            {t('footerTagline')}
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <a href="https://www.linkedin.com/in/aleksander-eerma-416b281a2/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <a href="https://www.github.com/alexeerma" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </button>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
