import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSelect } from "@/components/contact-select";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budgetRange: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (data: ContactForm) => {
    // EmailJS configuration - you'll need to set up your EmailJS account
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
    
    // Check if EmailJS is properly configured
    if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
      throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in the .env file. Check EMAILJS_SETUP.md for instructions.');
    }
    
    // Use environment variable for recipient email, fallback to contact section email
    const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'aleksander.eerma@hotmail.com';
    const recipientName = import.meta.env.VITE_CONTACT_NAME || 'Alex Developer';

    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      company: data.company,
      project_type: data.projectType,
      budget_range: data.budgetRange,
      message: data.message,
      to_name: recipientName,
      to_email: recipientEmail,
      reply_to: data.email, // So you can reply directly to the sender
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      toast({
        title: "Success",
        description: t('messageSent'),
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        budgetRange: "",
        message: ""
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please check your EmailJS configuration.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('workTogether')}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="perspective-card glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{t('getInTouch')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground dark:text-accent">{t('email')}</div>
                    <div className="text-muted-foreground">aleksander.eerma@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground dark:text-accent">{t('phone')}</div>
                    <div className="text-muted-foreground">+372 5387 0061</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground dark:text-accent">{t('location')}</div>
                    <div className="text-muted-foreground">Tartu, Estonia</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-foreground dark:text-accent">{t('followMe')}</h4>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="bg-primary/20 text-primary hover:bg-primary/30">
                    <a href="https://www.linkedin.com/in/aleksander-eerma-416b281a2/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-primary/20 text-primary hover:bg-primary/30">
                    <a href="https://www.github.com/alexeerma" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="perspective-card glassmorphism rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold">{t('availableWork')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('availableText')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="perspective-card glassmorphism rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-foreground dark:text-accent">{t('firstName')} *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground dark:text-accent">{t('lastName')} *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground dark:text-accent">{t('email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-foreground dark:text-accent">{t('company')}</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-foreground dark:text-accent">{t('projectType')} *</Label>
                <ContactSelect
                  value={formData.projectType}
                  placeholder={t('selectProjectType')}
                  options={[
                    { value: "web-app", label: t('webApp') },
                    { value: "mobile-app", label: t('mobileApp') },
                    { value: "ecommerce", label: t('ecommerce') },
                    { value: "consulting", label: t('consulting') },
                    { value: "other", label: t('other') }
                  ]}
                  onValueChange={(value) => handleInputChange('projectType', value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-foreground dark:text-accent">{t('budgetRange')}</Label>
                <ContactSelect
                  value={formData.budgetRange}
                  placeholder={t('selectBudget')}
                  options={[
                    { value: "0,5k-1k", label: "€500 - €1000" },
                    { value: "1,1k-2k", label: "€1100 - €2000" },
                    { value: "3k-5k", label: "€3000 - €5000" },
                    { value: "6k-10k", label: "€6000 - €10000" },
                    { value: "10k+", label: "€10,000+" }
                  ]}
                  onValueChange={(value) => handleInputChange('budgetRange', value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground dark:text-accent">{t('projectDescription')} *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className="mt-2"
                  placeholder={t('projectPlaceholder')}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                {isSubmitting ? "Sending..." : t('sendMessage')}
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                {t('responseTime')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
