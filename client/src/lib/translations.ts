export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    
    // Hero Section
    hello: "Hello, I'm",
    heroTitle: "Alex Developer",
    heroDescription: "I craft exceptional digital experiences through innovative web development and cutting-edge technology solutions.",
    viewWork: "View My Work",
    downloadCV: "Download CV",
    
    // About Section
    aboutMe: "About Me",
    aboutDescription: "Passionate developer with expertise in modern web technologies and a keen eye for user experience design.",
    background: "Background",
    backgroundText: "With over 5 years of experience in web development, I specialize in creating scalable applications using React, Node.js, and cloud technologies. My passion lies in transforming complex problems into elegant, user-friendly solutions.",
    projectsCompleted: "Projects Completed",
    yearsExperience: "Years Experience",
    techStack: "Technology Stack",
    frontend: "Frontend",
    backend: "Backend",
    cloudDevops: "Cloud & DevOps",
    
    // Experience Section
    experienceTitle: "Experience",
    experienceDescription: "My professional journey and educational background in software development.",
    workExperience: "Work Experience",
    education: "Education",
    certifications: "Certifications",
    
    // Projects Section
    featuredProjects: "Featured Projects",
    projectsDescription: "A showcase of my recent work and technical achievements.",
    viewAllProjects: "View All Projects",
    
    // Contact Section
    workTogether: "Let's Work Together",
    contactDescription: "Ready to bring your ideas to life? Let's discuss your next project.",
    getInTouch: "Get in Touch",
    email: "Email",
    phone: "Phone",
    location: "Location",
    followMe: "Follow Me",
    availableWork: "Available for new projects",
    availableText: "I'm currently accepting new client work and interesting collaboration opportunities.",
    firstName: "First Name",
    lastName: "Last Name",
    company: "Company",
    projectType: "Project Type",
    budgetRange: "Budget Range",
    projectDescription: "Project Description",
    sendMessage: "Send Message",
    responseTime: "I'll get back to you within 24 hours.",
    
    // Form Options
    selectProjectType: "Select project type",
    webApp: "Web Application",
    mobileApp: "Mobile Application",
    ecommerce: "E-commerce Platform",
    consulting: "Technical Consulting",
    other: "Other",
    selectBudget: "Select budget range",
    projectPlaceholder: "Tell me about your project...",
    
    // Footer
    footerTagline: "Building the future, one line of code at a time.",
    copyright: "© 2024 Alex Developer. All rights reserved.",
    
    // Success Messages
    messageSent: "Thank you for your message! I'll get back to you soon.",
  },
  et: {
    // Navigation
    home: "Kodu",
    about: "Meist",
    experience: "Kogemus",
    projects: "Projektid",
    contact: "Kontakt",
    
    // Hero Section
    hello: "Tere, mina olen",
    heroTitle: "Alex Developer",
    heroDescription: "Loon erakordset digitaalset kogemust läbi innovatiivse veebiarenduse ja tipptasemel tehnoloogialahenduste.",
    viewWork: "Vaata Minu Tööd",
    downloadCV: "Lae alla CV",
    
    // About Section
    aboutMe: "Minust",
    aboutDescription: "Kirglik arendaja, kellel on kogemused kaasaegsetes veebitehnoloogiates ja terav silm kasutajakogemuse disaini jaoks.",
    background: "Taust",
    backgroundText: "Üle 5 aasta kogemusega veebiarenduses spetsialiseerun skaleeritavate rakenduste loomisele, kasutades React, Node.js ja pilvetehnoloogiaid. Mu kirg seisneb keeruliste probleemide muutmises elegantseks, kasutajasõbralikeks lahendusteks.",
    projectsCompleted: "Lõpetatud Projektid",
    yearsExperience: "Aastat Kogemust",
    techStack: "Tehnoloogia Stack",
    frontend: "Frontend",
    backend: "Backend",
    cloudDevops: "Pilv & DevOps",
    
    // Experience Section
    experienceTitle: "Kogemus",
    experienceDescription: "Minu professionaalne teekond ja hariduslik taust tarkvaraarenduses.",
    workExperience: "Töökogemus",
    education: "Haridus",
    certifications: "Sertifikaadid",
    
    // Projects Section
    featuredProjects: "Esile Tõstetud Projektid",
    projectsDescription: "Minu viimaste tööde ja tehniliste saavutuste näiteid.",
    viewAllProjects: "Vaata Kõiki Projekte",
    
    // Contact Section
    workTogether: "Teeme Koostööd",
    contactDescription: "Valmis oma ideid ellu viima? Arutame sinu järgmist projekti.",
    getInTouch: "Võta Ühendust",
    email: "E-post",
    phone: "Telefon",
    location: "Asukoht",
    followMe: "Jälgi Mind",
    availableWork: "Saadaval uuteks projektideks",
    availableText: "Praegu võtan vastu uut klientide tööd ja huvitavaid koostöövõimalusi.",
    firstName: "Eesnimi",
    lastName: "Perekonnanimi",
    company: "Ettevõte",
    projectType: "Projekti Tüüp",
    budgetRange: "Eelarve Vahemik",
    projectDescription: "Projekti Kirjeldus",
    sendMessage: "Saada Sõnum",
    responseTime: "Vastan sulle 24 tunni jooksul.",
    
    // Form Options
    selectProjectType: "Vali projekti tüüp",
    webApp: "Veebirakendus",
    mobileApp: "Mobiilirakendus",
    ecommerce: "E-kaubanduse Platvorm",
    consulting: "Tehniline Konsultatsioon",
    other: "Muu",
    selectBudget: "Vali eelarve vahemik",
    projectPlaceholder: "Räägi mulle oma projektist...",
    
    // Footer
    footerTagline: "Ehitan tulevikku, üks koodirida korraga.",
    copyright: "© 2024 Alex Developer. Kõik õigused kaitstud.",
    
    // Success Messages
    messageSent: "Tänan sõnumi eest! Võtan sinuga peagi ühendust.",
  }
};

export type TranslationKey = keyof typeof translations.en;
export type Language = keyof typeof translations;
