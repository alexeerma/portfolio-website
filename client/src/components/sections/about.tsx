import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('aboutMe')}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="perspective-card glassmorphism rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('background')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('backgroundText')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">{t('projectsCompleted')}</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">{t('yearsExperience')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="perspective-card glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">{t('techStack')}</h3>
            
            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <h4 className="font-semibold mb-3 text-accent">{t('frontend')}</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="font-semibold mb-3 text-accent">{t('backend')}</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Express.js</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">MongoDB</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h4 className="font-semibold mb-3 text-accent">{t('cloudDevops')}</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
