import { useState } from 'react';

export default function Carousel7Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-fuchsia-500 to-pink-500', title: 'Centered 1' },
    { id: 2, color: 'from-cyan-500 to-blue-500', title: 'Centered 2' },
    { id: 3, color: 'from-lime-500 to-green-500', title: 'Centered 3' },
    { id: 4, color: 'from-amber-500 to-orange-500', title: 'Centered 4' },
    { id: 5, color: 'from-red-500 to-rose-500', title: 'Centered 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden py-8">
        {/* Slides */}
        <div className="flex items-center justify-center">
          {slides.map((slide, index) => {
            const offset = index - currentSlide;
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`absolute transition-all duration-500 ease-out ${
                  isActive ? 'z-20 scale-100' : 'z-10 scale-75 opacity-40'
                }`}
                style={{
                  transform: `translateX(${offset * 280}px) scale(${isActive ? 1 : 0.75})`,
                }}
              >
                <div className={`w-64 h-80 rounded-xl bg-gradient-to-br ${slide.color} flex items-center justify-center border-4 ${
                  isActive ? 'border-white shadow-2xl' : 'border-transparent'
                }`}>
                  <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const carousel7Code = `import { useState } from 'react';

export default function Carousel7Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-fuchsia-500 to-pink-500', title: 'Centered 1' },
    { id: 2, color: 'from-cyan-500 to-blue-500', title: 'Centered 2' },
    { id: 3, color: 'from-lime-500 to-green-500', title: 'Centered 3' },
    { id: 4, color: 'from-amber-500 to-orange-500', title: 'Centered 4' },
    { id: 5, color: 'from-red-500 to-rose-500', title: 'Centered 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden py-8">
        {/* Slides */}
        <div className="flex items-center justify-center">
          {slides.map((slide, index) => {
            const offset = index - currentSlide;
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={\`absolute transition-all duration-500 ease-out \${
                  isActive ? 'z-20 scale-100' : 'z-10 scale-75 opacity-40'
                }\`}
                style={{
                  transform: \`translateX(\${offset * 280}px) scale(\${isActive ? 1 : 0.75})\`,
                }}
              >
                <div className={\`w-64 h-80 rounded-xl bg-gradient-to-br \${slide.color} flex items-center justify-center border-4 \${
                  isActive ? 'border-white shadow-2xl' : 'border-transparent'
                }\`}>
                  <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={\`w-2 h-2 rounded-full transition-all duration-300 \${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`;
