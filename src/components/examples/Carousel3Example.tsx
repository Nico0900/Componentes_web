import { useState } from 'react';

export default function Carousel3Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-rose-500 to-pink-500', title: 'Gallery 1' },
    { id: 2, color: 'from-indigo-500 to-blue-500', title: 'Gallery 2' },
    { id: 3, color: 'from-teal-500 to-cyan-500', title: 'Gallery 3' },
    { id: 4, color: 'from-yellow-500 to-amber-500', title: 'Gallery 4' },
    { id: 5, color: 'from-red-500 to-orange-500', title: 'Gallery 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-80 flex items-center justify-center"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
                <h2 className="text-5xl font-bold text-white">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              currentSlide === index
                ? 'ring-2 ring-blue-500 scale-110'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`w-20 h-16 bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
              <span className="text-xs font-bold text-white">{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export const carousel3Code = `import { useState } from 'react';

export default function Carousel3Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-rose-500 to-pink-500', title: 'Gallery 1' },
    { id: 2, color: 'from-indigo-500 to-blue-500', title: 'Gallery 2' },
    { id: 3, color: 'from-teal-500 to-cyan-500', title: 'Gallery 3' },
    { id: 4, color: 'from-yellow-500 to-amber-500', title: 'Gallery 4' },
    { id: 5, color: 'from-red-500 to-orange-500', title: 'Gallery 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: \`translateX(-\${currentSlide * 100}%)\` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-80 flex items-center justify-center"
            >
              <div className={\`w-full h-full bg-gradient-to-br \${slide.color} flex items-center justify-center\`}>
                <h2 className="text-5xl font-bold text-white">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={\`relative overflow-hidden rounded-lg transition-all duration-300 \${
              currentSlide === index
                ? 'ring-2 ring-blue-500 scale-110'
                : 'opacity-60 hover:opacity-100'
            }\`}
          >
            <div className={\`w-20 h-16 bg-gradient-to-br \${slide.color} flex items-center justify-center\`}>
              <span className="text-xs font-bold text-white">{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}`;
