
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ChevronLeft, ChevronRight, Clock, Eye } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  videoUrl: string;
  featured: boolean;
}

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const videos: Video[] = [
    {
      id: 1,
      title: "Building Scalable Microservices with Docker",
      description: "Learn how to architect and deploy microservices using Docker containers, including best practices for production environments.",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      duration: "15:32",
      views: "125K",
      category: "DevOps",
      videoUrl: "https://youtube.com/watch?v=example1",
      featured: true
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      description: "Deep dive into React performance optimization strategies including memoization, code splitting, and virtual DOM optimization.",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      duration: "22:18",
      views: "89K",
      category: "React",
      videoUrl: "https://youtube.com/watch?v=example2",
      featured: true
    },
    {
      id: 3,
      title: "TypeScript Advanced Patterns & Best Practices",
      description: "Master advanced TypeScript patterns including generics, conditional types, and utility types for better code quality.",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      duration: "18:45",
      views: "156K",
      category: "TypeScript",
      videoUrl: "https://youtube.com/watch?v=example3",
      featured: true
    },
    {
      id: 4,
      title: "System Design: Building a Real-time Chat App",
      description: "Complete system design walkthrough for building a scalable real-time chat application with WebSockets and Redis.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      duration: "28:12",
      views: "201K",
      category: "System Design",
      videoUrl: "https://youtube.com/watch?v=example4",
      featured: false
    }
  ];

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

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="videos" ref={sectionRef} className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Latest <span className="gradient-text">Videos</span>
        </h2>
        <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Educational content and tutorials to help developers grow their skills
        </p>
      </div>

      <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="relative overflow-hidden rounded-2xl px-12 md:px-16">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video) => (
              <div key={video.id} className="w-full flex-shrink-0 px-2">
                <Card className="glass-morphism border-purple-700/20 overflow-hidden group hover:border-purple-600/30 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-48 lg:h-72 overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="lg"
                          className="bg-purple-600/90 hover:bg-purple-700/90 text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                          onClick={() => window.open(video.videoUrl, '_blank')}
                        >
                          <Play className="w-4 h-4 md:w-6 md:h-6 ml-1" />
                        </Button>
                      </div>

                      {/* Duration Badge */}
                      <Badge className="absolute bottom-3 right-3 bg-black/80 text-white text-xs">
                        {video.duration}
                      </Badge>

                      {/* Featured Badge */}
                      {video.featured && (
                        <Badge className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-4 lg:p-8 flex flex-col justify-center">
                      <div className="mb-3">
                        <Badge 
                          variant="secondary"
                          className="bg-purple-900/20 text-purple-200 border-purple-700/30 mb-3 text-xs"
                        >
                          {video.category}
                        </Badge>
                      </div>

                      <h3 className="text-lg lg:text-2xl font-bold text-white mb-3 lg:mb-4 leading-tight">{video.title}</h3>
                      <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base line-clamp-3">{video.description}</p>
                      
                      <div className="flex items-center gap-4 text-xs lg:text-sm text-gray-400 mb-4 lg:mb-6">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                          {video.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                          {video.duration}
                        </div>
                      </div>

                      <Button 
                        className="bg-purple-600/90 hover:bg-purple-700/90 text-white w-fit text-sm px-4 py-2"
                        onClick={() => window.open(video.videoUrl, '_blank')}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 glass-morphism border-purple-700/30 text-purple-200 hover:bg-purple-900/20 w-8 h-8 md:w-10 md:h-10"
          onClick={prevVideo}
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 glass-morphism border-purple-700/30 text-purple-200 hover:bg-purple-900/20 w-8 h-8 md:w-10 md:h-10"
          onClick={nextVideo}
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-purple-800/50 hover:bg-purple-700/50'
              }`}
              onClick={() => goToVideo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
