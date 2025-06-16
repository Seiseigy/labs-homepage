
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements with subtle neon effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float neon-glow-subtle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-800/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-900/20 backdrop-blur-sm border border-purple-700/30 rounded-full px-6 py-2 text-sm text-purple-200 mb-6">
            <Zap className="w-4 h-4" />
            {t('hero.subtitle')}
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text neon-text-subtle">Sei</span>
          <span className="text-white">Labs</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 neon-button-subtle"
          >
            <Code className="w-5 h-5 mr-2" />
            {t('hero.exploreProjects')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500/30 text-purple-200 hover:bg-purple-900/20 px-8 py-3 rounded-full text-lg backdrop-blur-sm"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.learnMore')}
          </Button>
        </div>

        <div className="animate-bounce cursor-pointer" onClick={scrollToProjects}>
          <ArrowDown className="w-8 h-8 text-purple-400 mx-auto neon-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
