
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="w-full flex-shrink-0 px-2">
      <Card className="glass-morphism border-purple-700/20 overflow-hidden hover:border-purple-600/30 transition-all duration-300">
        <div className="grid lg:grid-cols-5 gap-0">
          <div className="lg:col-span-2 relative h-40 lg:h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.featured && (
              <Badge className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs px-2 py-1 neon-glow-subtle">
                {t('projects.featured')}
              </Badge>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <CardContent className="lg:col-span-3 p-4 lg:p-6 flex flex-col justify-center">
            <h3 className="text-lg lg:text-xl font-bold text-white mb-2 neon-text-subtle">{project.title}</h3>
            <p className="text-gray-300 mb-3 leading-relaxed text-sm line-clamp-2">{project.description}</p>
            
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-purple-900/20 text-purple-200 border-purple-700/30 text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge 
                    variant="secondary"
                    className="bg-purple-900/20 text-purple-200 border-purple-700/30 text-xs px-2 py-0.5"
                  >
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-purple-500/30 text-purple-200 hover:bg-purple-900/20 text-xs px-3 py-1.5 h-8 neon-border-subtle"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                {t('projects.code')}
              </Button>
              {project.liveUrl && (
                <Button 
                  size="sm"
                  className="bg-purple-600/90 hover:bg-purple-700/90 text-white text-xs px-3 py-1.5 h-8 neon-button-subtle"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {t('projects.liveDemo')}
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
