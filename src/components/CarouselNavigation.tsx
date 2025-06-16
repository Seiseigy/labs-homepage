
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselNavigation = ({ onPrevious, onNext }: CarouselNavigationProps) => {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 glass-morphism border-purple-700/30 text-purple-200 hover:bg-purple-900/20 w-8 h-8 md:w-10 md:h-10 neon-border-subtle"
        onClick={onPrevious}
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 neon-icon" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 glass-morphism border-purple-700/30 text-purple-200 hover:bg-purple-900/20 w-8 h-8 md:w-10 md:h-10 neon-border-subtle"
        onClick={onNext}
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 neon-icon" />
      </Button>
    </>
  );
};

export default CarouselNavigation;
