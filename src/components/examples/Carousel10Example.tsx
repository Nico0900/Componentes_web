import { useState } from 'react';

export default function Carousel10Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-500 to-violet-500', title: 'Slide 1', subtitle: 'With indicators' },
    { id: 2, color: 'from-blue-500 to-indigo-500', title: 'Slide 2', subtitle: 'Dot navigation' },
    { id: 3, color: 'from-emerald-500 to-green-500', title: 'Slide 3', subtitle: 'Easy control' },
    { id: 4, color: 'from-orange-500 to-amber-500', title: 'Slide 4', subtitle: 'Click dots' },
    { id: 5, color: 'from-pink-500 to-rose-500', title: 'Slide 5', subtitle: 'Navigate freely' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-72 flex items-center justify-center"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex flex-col items-center justify-center`}>
                <h2 className="text-5xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
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

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'bg-white w-10 h-3'
                  : 'bg-white/50 hover:bg-white/70 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="mt-4 text-center">
        <span className="text-slate-400 text-sm">
          {currentSlide + 1} of {slides.length}
        </span>
      </div>
    </div>
  );
}

export const carousel10Code = `import { useState } from 'react';

export default function Carousel10Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-500 to-violet-500', title: 'Slide 1', subtitle: 'With indicators' },
    { id: 2, color: 'from-blue-500 to-indigo-500', title: 'Slide 2', subtitle: 'Dot navigation' },
    { id: 3, color: 'from-emerald-500 to-green-500', title: 'Slide 3', subtitle: 'Easy control' },
    { id: 4, color: 'from-orange-500 to-amber-500', title: 'Slide 4', subtitle: 'Click dots' },
    { id: 5, color: 'from-pink-500 to-rose-500', title: 'Slide 5', subtitle: 'Navigate freely' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: \`translateX(-\${currentSlide * 100}%)\` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-72 flex items-center justify-center"
            >
              <div className={\`w-full h-full bg-gradient-to-br \${slide.color} flex flex-col items-center justify-center\`}>
                <h2 className="text-5xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
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

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={\`transition-all duration-300 rounded-full \${
                currentSlide === index
                  ? 'bg-white w-10 h-3'
                  : 'bg-white/50 hover:bg-white/70 w-3 h-3'
              }\`}
              aria-label={\`Go to slide \${index + 1}\`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="mt-4 text-center">
        <span className="text-slate-400 text-sm">
          {currentSlide + 1} of {slides.length}
        </span>
      </div>
    </div>
  );
}`;
