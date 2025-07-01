import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
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
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
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
                    <div className="font-semibold text-accent">{t('email')}</div>
                    <div className="text-muted-foreground">alex@developer.ee</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-accent">{t('phone')}</div>
                    <div className="text-muted-foreground">+372 5123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-accent">{t('location')}</div>
                    <div className="text-muted-foreground">Tallinn, Estonia</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-accent">{t('followMe')}</h4>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-blue-400/20 text-blue-400 hover:bg-blue-400/30">
                    <Twitter className="h-4 w-4" />
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
                  <Label htmlFor="firstName" className="text-accent">{t('firstName')} *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-accent">{t('lastName')} *</Label>
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
                <Label htmlFor="email" className="text-accent">{t('email')} *</Label>
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
                <Label htmlFor="company" className="text-accent">{t('company')}</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-accent">{t('projectType')} *</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={t('selectProjectType')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-app">{t('webApp')}</SelectItem>
                    <SelectItem value="mobile-app">{t('mobileApp')}</SelectItem>
                    <SelectItem value="ecommerce">{t('ecommerce')}</SelectItem>
                    <SelectItem value="consulting">{t('consulting')}</SelectItem>
                    <SelectItem value="other">{t('other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-accent">{t('budgetRange')}</Label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={t('selectBudget')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">€5,000 - €10,000</SelectItem>
                    <SelectItem value="10k-25k">€10,000 - €25,000</SelectItem>
                    <SelectItem value="25k-50k">€25,000 - €50,000</SelectItem>
                    <SelectItem value="50k+">€50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-accent">{t('projectDescription')} *</Label>
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
                disabled={contactMutation.isPending}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                {contactMutation.isPending ? "Sending..." : t('sendMessage')}
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
