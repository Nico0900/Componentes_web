import { useState } from 'react';

export default function Carousel13Example() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slides = [
    { id: 1, color: 'from-fuchsia-500 to-pink-500', title: 'Swipe 1' },
    { id: 2, color: 'from-cyan-500 to-blue-500', title: 'Swipe 2' },
    { id: 3, color: 'from-lime-500 to-green-500', title: 'Swipe 3' },
    { id: 4, color: 'from-amber-500 to-orange-500', title: 'Swipe 4' },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for slide change
    if (translateX < -100 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (translateX > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].pageX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = handleMouseUp;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        <div
          className="flex cursor-grab active:cursor-grabbing select-none"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-out',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-64 flex items-center justify-center"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex flex-col items-center justify-center`}>
                <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
                <p className="text-white/80 text-lg">
                  {isDragging ? 'Dragging...' : 'Drag to swipe'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        Touch & Drag enabled - Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
}

export const carousel13Code = `import { useState } from 'react';

export default function Carousel13Example() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slides = [
    { id: 1, color: 'from-fuchsia-500 to-pink-500', title: 'Swipe 1' },
    { id: 2, color: 'from-cyan-500 to-blue-500', title: 'Swipe 2' },
    { id: 3, color: 'from-lime-500 to-green-500', title: 'Swipe 3' },
    { id: 4, color: 'from-amber-500 to-orange-500', title: 'Swipe 4' },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for slide change
    if (translateX < -100 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (translateX > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].pageX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = handleMouseUp;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        <div
          className="flex cursor-grab active:cursor-grabbing select-none"
          style={{
            transform: \`translateX(calc(-\${currentSlide * 100}% + \${translateX}px))\`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-out',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-64 flex items-center justify-center"
            >
              <div className={\`w-full h-full bg-gradient-to-br \${slide.color} flex flex-col items-center justify-center\`}>
                <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
                <p className="text-white/80 text-lg">
                  {isDragging ? 'Dragging...' : 'Drag to swipe'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {slides.map((_, index) => (
            <div
              key={index}
              className={\`w-2 h-2 rounded-full transition-all duration-300 \${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }\`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        Touch & Drag enabled - Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
}`;
