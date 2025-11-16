import { useState } from 'react';

export default function Carousel5Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-violet-500 to-purple-500', title: 'Vertical 1' },
    { id: 2, color: 'from-blue-500 to-indigo-500', title: 'Vertical 2' },
    { id: 3, color: 'from-emerald-500 to-teal-500', title: 'Vertical 3' },
    { id: 4, color: 'from-amber-500 to-yellow-500', title: 'Vertical 4' },
    { id: 5, color: 'from-rose-500 to-pink-500', title: 'Vertical 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 h-96">
        {/* Slides - Vertical */}
        <div
          className="flex flex-col transition-transform duration-500 ease-out"
          style={{ transform: `translateY(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="h-96 flex items-center justify-center flex-shrink-0"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button (Top) */}
        <button
          onClick={prevSlide}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Next Button (Bottom) */}
        <button
          onClick={nextSlide}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Vertical Indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white h-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}

export const carousel5Code = `import { useState } from 'react';

export default function Carousel5Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-violet-500 to-purple-500', title: 'Vertical 1' },
    { id: 2, color: 'from-blue-500 to-indigo-500', title: 'Vertical 2' },
    { id: 3, color: 'from-emerald-500 to-teal-500', title: 'Vertical 3' },
    { id: 4, color: 'from-amber-500 to-yellow-500', title: 'Vertical 4' },
    { id: 5, color: 'from-rose-500 to-pink-500', title: 'Vertical 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 h-96">
        {/* Slides - Vertical */}
        <div
          className="flex flex-col transition-transform duration-500 ease-out"
          style={{ transform: \`translateY(-\${currentSlide * 100}%)\` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="h-96 flex items-center justify-center flex-shrink-0"
            >
              <div className={\\`w-full h-full bg-gradient-to-br \${slide.color} flex items-center justify-center\\`}>
                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button (Top) */}
        <button
          onClick={prevSlide}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Next Button (Bottom) */}
        <button
          onClick={nextSlide}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Vertical Indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={\\`w-2 h-2 rounded-full transition-all duration-300 \${
                currentSlide === index
                  ? 'bg-white h-8'
                  : 'bg-white/50 hover:bg-white/70'
              }\\`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}`;
