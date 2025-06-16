
interface CarouselDotsProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const CarouselDots = ({ totalItems, currentIndex, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center mt-8 gap-2">
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
            currentIndex === index 
              ? 'bg-purple-500 scale-125 neon-glow-subtle' 
              : 'bg-purple-800/50 hover:bg-purple-700/50'
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
