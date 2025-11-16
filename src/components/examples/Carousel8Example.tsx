import { useState } from 'react';

export default function Carousel8Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-500 to-pink-500', title: 'Loop 1' },
    { id: 2, color: 'from-blue-500 to-cyan-500', title: 'Loop 2' },
    { id: 3, color: 'from-green-500 to-emerald-500', title: 'Loop 3' },
    { id: 4, color: 'from-orange-500 to-red-500', title: 'Loop 4' },
  ];

  // Create infinite loop by duplicating slides
  const infiniteSlides = [...slides, ...slides, ...slides];
  const middleIndex = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Reset to middle when reaching boundaries
  const handleTransitionEnd = () => {
    if (currentSlide >= middleIndex * 2) {
      setCurrentSlide(middleIndex);
    } else if (currentSlide <= 0) {
      setCurrentSlide(middleIndex);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(currentSlide + middleIndex) * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {infiniteSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="min-w-full h-64 flex items-center justify-center"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Loop Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
          Infinite Loop
        </div>
      </div>
    </div>
  );
}

export const carousel8Code = `import { useState } from 'react';

export default function Carousel8Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-500 to-pink-500', title: 'Loop 1' },
    { id: 2, color: 'from-blue-500 to-cyan-500', title: 'Loop 2' },
    { id: 3, color: 'from-green-500 to-emerald-500', title: 'Loop 3' },
    { id: 4, color: 'from-orange-500 to-red-500', title: 'Loop 4' },
  ];

  // Create infinite loop by duplicating slides
  const infiniteSlides = [...slides, ...slides, ...slides];
  const middleIndex = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Reset to middle when reaching boundaries
  const handleTransitionEnd = () => {
    if (currentSlide >= middleIndex * 2) {
      setCurrentSlide(middleIndex);
    } else if (currentSlide <= 0) {
      setCurrentSlide(middleIndex);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: \`translateX(-\${(currentSlide + middleIndex) * 100}%)\` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {infiniteSlides.map((slide, index) => (
            <div
              key={\`\${slide.id}-\${index}\`}
              className="min-w-full h-64 flex items-center justify-center"
            >
              <div className={\\`w-full h-full bg-gradient-to-br \${slide.color} flex items-center justify-center\\`}>
                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Loop Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
          Infinite Loop
        </div>
      </div>
    </div>
  );
}`;
