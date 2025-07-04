import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function ExperienceSection() {
  const { t } = useLanguage();

  const workExperience = [
    {
      period: t('workExp1Period'),
      company: t('workExp1Company'),
      title: t('workExp1Title'),
      description: t('workExp1Description'),
      technologies: ["Javascript", "PHP", "React", "MySQL", "ACF", "Elementor", "Custom Plugins", "Wordpress"]
    },
    {
      period: t('workExp2Period'),
      company: t('workExp2Company'),
      title: t('workExp2Title'),
      description: t('workExp2Description'),
      technologies: ["Jira", "Project Planning", "Magento", "Wordpress"]
    },
    {
      period: t('workExp3Period'),
      company: t('workExp3Company'),
      title: t('workExp3Title'),
      description: t('workExp3Description'),
      technologies: ["Adobe XD", "Figma", "Swagger", "Confluence", "Jira", "MySQL"]
    },
    {
      period: t('workExp4Period'),
      company: t('workExp4Company'),
      title: t('workExp4Title'),
      description: t('workExp4Description'),
      technologies: ["HTML/CSS", "BPMN", "Jira", "MySQL"]
    },

    {
      period: t('workExp5Period'),
      company: t('workExp5Company'),
      title: t('workExp5Title'),
      description: t('workExp5Description'),
      technologies: ["Volleyball"]
    }


  ];

  const certifications = [
    {
      title: t('cert1Title'),
      issuer: t('cert1Issuer'),
      year: t('cert1Year')
    },
    {
      title: t('cert2Title'),
      issuer: t('cert2Issuer'),
      year: t('cert2Year')
    },
  ];


  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('experienceTitle')}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('experienceDescription')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {/* Work Experience */}
          <div className="perspective-card glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
              <Briefcase className="mr-3" />
              {t('workExperience')}
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-start gap-6 pb-8 border-b border-border last:border-b-0">
                  <div className="md:w-1/4">
                    <div className="text-primary font-mono text-sm">{job.period}</div>
                    <div className="text-muted-foreground text-sm">{job.company}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-xl font-bold mb-3 text-foreground dark:text-accent">{job.title}</h4>
                    <p className="text-foreground dark:text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="perspective-card glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <GraduationCap className="mr-3" />
                {t('education')}
              </h3>
              
              <div className="space-y-6">
                <div className="pb-6 border-b border-border last:border-b-0">
                  <div className="text-primary font-mono text-sm mb-2">2014 - 2017</div>
                  <h4 className="text-lg font-bold text-foreground dark:text-accent mb-2">Bachelor of Applied Science - BASc - Logistics and Supply Chain Management</h4>
                  <p className="text-foreground dark:text-muted-foreground text-sm">University of Technology, Estonia</p>
                  <p className="text-foreground dark:text-muted-foreground text-sm mt-2">
                    Played professional volleyball in the University team at the same time. 
                  </p>
                </div>
                <div className="pb-6 border-b border-border last:border-b-0">
                <div className="text-primary font-mono text-sm mb-2">2019 - 2022</div>
                  <h4 className="text-lg font-bold text-foreground dark:text-accent mb-2">Master's degree, Analysis and Design of Information Systems</h4>
                  <p className="text-foreground dark:text-muted-foreground text-sm">University of Technology, Estonia</p>
                  <p className="text-foreground dark:text-muted-foreground text-sm mt-2">
                    Specialized in business IT and took extra software development courses.
                  </p>
                </div>
              </div>
            </div>

            {/* Courses & Certifications */}
            <div className="perspective-card glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Award className="mr-3" />
                {t('certifications')}
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground dark:text-accent mb-1">{cert.title}</h4>
                    <p className="text-foreground dark:text-muted-foreground text-sm">{cert.issuer}</p>
                    <div className="text-primary font-mono text-xs mt-1">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
