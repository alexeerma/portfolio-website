import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function ExperienceSection() {
  const { t } = useLanguage();

  const workExperience = [
    {
      period: "2022 - Present",
      company: "TechCorp Solutions",
      title: "Senior Full-Stack Developer",
      description: "Led a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      period: "2020 - 2022",
      company: "Digital Agency Pro",
      title: "Frontend Developer",
      description: "Developed responsive web applications for various clients using React and Vue.js. Collaborated with design teams to implement pixel-perfect UI components.",
      technologies: ["React", "Vue.js", "Sass", "JavaScript"]
    },
    {
      period: "2019 - 2020",
      company: "StartupVenture Inc",
      title: "Junior Developer",
      description: "Built and maintained web applications using HTML, CSS, JavaScript, and PHP. Gained experience in database design and backend development.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      year: "2022"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      year: "2022"
    }
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
                    <h4 className="text-xl font-bold mb-3 text-accent">{job.title}</h4>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
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
                  <div className="text-primary font-mono text-sm mb-2">2015 - 2019</div>
                  <h4 className="text-lg font-bold text-accent mb-2">Bachelor's in Computer Science</h4>
                  <p className="text-muted-foreground text-sm">University of Technology, Estonia</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Graduated with honors, specialized in software engineering and web technologies.
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
                    <h4 className="font-semibold text-accent mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
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
