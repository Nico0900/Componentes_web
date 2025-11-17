import { useState } from 'react';

export default function Carousel6Example() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const slides = [
    { id: 1, color: 'from-purple-500 to-pink-500', title: 'Item 1' },
    { id: 2, color: 'from-blue-500 to-cyan-500', title: 'Item 2' },
    { id: 3, color: 'from-green-500 to-emerald-500', title: 'Item 3' },
    { id: 4, color: 'from-orange-500 to-red-500', title: 'Item 4' },
    { id: 5, color: 'from-violet-500 to-purple-500', title: 'Item 5' },
    { id: 6, color: 'from-pink-500 to-rose-500', title: 'Item 6' },
  ];

  const maxIndex = slides.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 p-4">
        {/* Slides Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.5)}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}
              >
                <div className={`h-48 rounded-lg bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
                  <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 text-center text-sm text-slate-400">
        Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerView, slides.length)} of {slides.length}
      </div>
    </div>
  );
}

export const carousel6Code = `import { useState } from 'react';

export default function Carousel6Example() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const slides = [
    { id: 1, color: 'from-purple-500 to-pink-500', title: 'Item 1' },
    { id: 2, color: 'from-blue-500 to-cyan-500', title: 'Item 2' },
    { id: 3, color: 'from-green-500 to-emerald-500', title: 'Item 3' },
    { id: 4, color: 'from-orange-500 to-red-500', title: 'Item 4' },
    { id: 5, color: 'from-violet-500 to-purple-500', title: 'Item 5' },
    { id: 6, color: 'from-pink-500 to-rose-500', title: 'Item 6' },
  ];

  const maxIndex = slides.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 p-4">
        {/* Slides Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: \`translateX(-\${currentIndex * (100 / itemsPerView + 1.5)}%)\` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0"
                style={{ width: \`calc(\${100 / itemsPerView}% - 1rem)\` }}
              >
                <div className={\`h-48 rounded-lg bg-gradient-to-br \${slide.color} flex items-center justify-center\`}>
                  <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 text-center text-sm text-slate-400">
        Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerView, slides.length)} of {slides.length}
      </div>
    </div>
  );
}`;
