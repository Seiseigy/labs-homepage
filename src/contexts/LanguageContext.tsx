import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.videos": "Videos",

    // Hero
    "hero.subtitle": "Ninja Software Engineer & Content Creator",
    "hero.description":
      "A lot of rare ideas concentrated in one place, our lab",
    "hero.exploreProjects": "Explore Projects",
    "hero.learnMore": "Learn More",

    // About
    "about.title": "About",
    "about.subtitle": "SeiLabs",
    "about.subtitle2": "Where Engineering Meets Creativity and Innovation",
    "about.description":
      "Welcome to SeiLabs - where innovation meets expertise. As a Software Engineer and passionate Content Creator, I bridge the gap between complex technical solutions and accessible knowledge sharing.",
    "about.experience": "Years of Experience",
    "about.projects": "Projects Completed",
    "about.followers": "Community Members",
    "about.technologies": "Technologies Mastered",
    "about.me.title": "The Engineer Behind the Lab",
    "about.me.description":
      "As a passionate Software Engineer with several years of experience, I specialize in building scalable web applications. A while ago, I was thinking about what I could do with the pile of projects I have under my belt, and that's how SeiLabs and my social media came to be. Here, I share my projects, ideas, and knowledge with the developer community.",
    "about.technical.title": "Technical Arsenal",

    // Projects
    "projects.title": "Featured",
    "projects.subtitle": "Projects",
    "projects.description":
      "Explore the innovative solutions and open-source contributions from SeiLabs",
    "projects.code": "Code",
    "projects.liveDemo": "Live Demo",
    "projects.featured": "Featured",

    // Videos
    "videos.title": "Latest",
    "videos.subtitle": "Videos",
    "videos.description": "Educational content and tutorials from SeiLabs",
    "videos.watchOn": "Watch on",

    // Footer
    "footer.description": "Senior Software Engineer & Content Creator",
    "footer.quickLinks": "Quick Links",
    "footer.social": "Follow Me",
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.projects": "Proyectos",
    "nav.videos": "Videos",

    // Hero
    "hero.subtitle": "Ingeniero de Software Ninja  y Creador de Contenido",
    "hero.description":
      "Muchas ideas raras concentradas en un solo lugar, nuestro laboratorio",
    "hero.exploreProjects": "Explorar Proyectos",
    "hero.learnMore": "Saber Más",

    // About
    "about.title": "Acerca de",
    "about.subtitle": "SeiLabs",
    "about.subtitle2":
      "Donde la Ingeniería de Software se encuentra con el mundo onírico",
    "about.description":
      "Bienvenido a SeiLabs - donde la innovación se encuentra con la experiencia. Como Ingeniero de Software y Creador de Contenido apasionado, conecto soluciones técnicas complejas con el intercambio de conocimiento accesible.",
    "about.experience": "Años de Experiencia",
    "about.projects": "Proyectos Completados",
    "about.followers": "Miembros de la Comunidad",
    "about.technologies": "Tecnologías Dominadas",
    "about.me.title": "El ingeniero detrás del laboratorio",
    "about.me.description":
      "Como Ingeniero de Software apasionado con varios años de experiencia, me especializo en construir aplicaciones web escalables. Hace un tiempo estuve pensando en un qué podría hacer con el montón de proyectos que tengo bajo el tintero, así nació SeiLabs y mis redes sociales. Aquí comparto mis proyectos, ideas y conocimientos con la comunidad de desarrolladores.",
    "about.technical.title": "Arsenal Técnico",

    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Destacados",
    "projects.description":
      "Explora las soluciones innovadoras y contribuciones de código abierto de SeiLabs",
    "projects.code": "Código",
    "projects.liveDemo": "Demo en Vivo",
    "projects.featured": "Destacado",

    // Videos
    "videos.title": "Últimos",
    "videos.subtitle": "Videos",
    "videos.description": "Contenido educativo y tutoriales de SeiLabs",
    "videos.watchOn": "Ver en",

    // Footer
    "footer.description": "Ingeniero de Software Senior y Creador de Contenido",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.social": "Sígueme",
    "footer.rights": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
