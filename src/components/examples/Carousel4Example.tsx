import { useState } from 'react';

export default function Carousel4Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-600 to-blue-600', title: 'Fade 1', subtitle: 'Beautiful transition' },
    { id: 2, color: 'from-pink-600 to-rose-600', title: 'Fade 2', subtitle: 'Smooth animation' },
    { id: 3, color: 'from-green-600 to-teal-600', title: 'Fade 3', subtitle: 'Elegant design' },
    { id: 4, color: 'from-orange-600 to-red-600', title: 'Fade 4', subtitle: 'Modern look' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative h-80 overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Slides with Fade Effect */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex flex-col items-center justify-center`}>
              <h2 className="text-5xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-white/80">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
    </div>
  );
}

export const carousel4Code = `import { useState } from 'react';

export default function Carousel4Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-purple-600 to-blue-600', title: 'Fade 1', subtitle: 'Beautiful transition' },
    { id: 2, color: 'from-pink-600 to-rose-600', title: 'Fade 2', subtitle: 'Smooth animation' },
    { id: 3, color: 'from-green-600 to-teal-600', title: 'Fade 3', subtitle: 'Elegant design' },
    { id: 4, color: 'from-orange-600 to-red-600', title: 'Fade 4', subtitle: 'Modern look' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative h-80 overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Slides with Fade Effect */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }\`}
          >
            <div className={\`w-full h-full bg-gradient-to-br \${slide.color} flex flex-col items-center justify-center\`}>
              <h2 className="text-5xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-white/80">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
    </div>
  );
}`;
