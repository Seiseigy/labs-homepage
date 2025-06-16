
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import CarouselNavigation from '@/components/CarouselNavigation';
import CarouselDots from '@/components/CarouselDots';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {t('projects.title')} <span className="gradient-text neon-text-subtle">{t('projects.subtitle')}</span>
        </h2>
        <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {t('projects.description')}
        </p>
      </div>

      <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="relative overflow-hidden rounded-2xl px-12 md:px-16">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <CarouselNavigation onPrevious={prevProject} onNext={nextProject} />
        <CarouselDots totalItems={projects.length} currentIndex={currentIndex} onDotClick={goToProject} />
      </div>
    </section>
  );
};

export default ProjectCarousel;
