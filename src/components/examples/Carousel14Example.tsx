import { useState } from 'react';

export default function Carousel14Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-600 via-pink-600 to-red-600', title: '3D Slide 1' },
    { id: 2, color: 'from-blue-600 via-cyan-600 to-teal-600', title: '3D Slide 2' },
    { id: 3, color: 'from-green-600 via-emerald-600 to-lime-600', title: '3D Slide 3' },
    { id: 4, color: 'from-orange-600 via-amber-600 to-yellow-600', title: '3D Slide 4' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
        {/* 3D Carousel Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const offset = index - currentSlide;
            const absOffset = Math.abs(offset);

            // Calculate 3D transformations
            const isActive = offset === 0;
            const rotateY = offset * 45;
            const translateZ = isActive ? 0 : -200;
            const translateX = offset * 300;
            const scale = isActive ? 1 : 0.7;
            const opacity = absOffset <= 1 ? 1 : 0;
            const zIndex = absOffset === 0 ? 30 : absOffset === 1 ? 20 : 10;

            return (
              <div
                key={slide.id}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={`w-80 h-72 rounded-2xl bg-gradient-to-br ${slide.color} flex items-center justify-center shadow-2xl ${
                  isActive ? 'ring-4 ring-white/50' : ''
                }`}>
                  <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        3D Carousel with perspective
      </div>
    </div>
  );
}

export const carousel14Code = `import { useState } from 'react';

export default function Carousel14Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-600 via-pink-600 to-red-600', title: '3D Slide 1' },
    { id: 2, color: 'from-blue-600 via-cyan-600 to-teal-600', title: '3D Slide 2' },
    { id: 3, color: 'from-green-600 via-emerald-600 to-lime-600', title: '3D Slide 3' },
    { id: 4, color: 'from-orange-600 via-amber-600 to-yellow-600', title: '3D Slide 4' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
        {/* 3D Carousel Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const offset = index - currentSlide;
            const absOffset = Math.abs(offset);

            // Calculate 3D transformations
            const isActive = offset === 0;
            const rotateY = offset * 45;
            const translateZ = isActive ? 0 : -200;
            const translateX = offset * 300;
            const scale = isActive ? 1 : 0.7;
            const opacity = absOffset <= 1 ? 1 : 0;
            const zIndex = absOffset === 0 ? 30 : absOffset === 1 ? 20 : 10;

            return (
              <div
                key={slide.id}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                  transform: \`translateX(\${translateX}px) translateZ(\${translateZ}px) rotateY(\${rotateY}deg) scale(\${scale})\`,
                  opacity,
                  zIndex,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={\`w-80 h-72 rounded-2xl bg-gradient-to-br \${slide.color} flex items-center justify-center shadow-2xl \${
                  isActive ? 'ring-4 ring-white/50' : ''
                }\`}>
                  <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={\`w-2 h-2 rounded-full transition-all duration-300 \${
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }\`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        3D Carousel with perspective
      </div>
    </div>
  );
}`;
