import { useState } from 'react';

export default function Carousel9Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-indigo-600 to-purple-600', title: 'Custom 1', description: 'Styled controls' },
    { id: 2, color: 'from-pink-600 to-rose-600', title: 'Custom 2', description: 'Beautiful design' },
    { id: 3, color: 'from-teal-600 to-cyan-600', title: 'Custom 3', description: 'Modern look' },
    { id: 4, color: 'from-amber-600 to-orange-600', title: 'Custom 4', description: 'Elegant style' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700/50 shadow-2xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-72 flex flex-col items-center justify-center p-8"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} rounded-xl flex flex-col items-center justify-center shadow-xl`}>
                <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
                <p className="text-xl text-white/80">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Styled Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Custom Styled Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const carousel9Code = `import { useState } from 'react';

export default function Carousel9Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'from-indigo-600 to-purple-600', title: 'Custom 1', description: 'Styled controls' },
    { id: 2, color: 'from-pink-600 to-rose-600', title: 'Custom 2', description: 'Beautiful design' },
    { id: 3, color: 'from-teal-600 to-cyan-600', title: 'Custom 3', description: 'Modern look' },
    { id: 4, color: 'from-amber-600 to-orange-600', title: 'Custom 4', description: 'Elegant style' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700/50 shadow-2xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: \`translateX(-\${currentSlide * 100}%)\` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-72 flex flex-col items-center justify-center p-8"
            >
              <div className={\\`w-full h-full bg-gradient-to-br \${slide.color} rounded-xl flex flex-col items-center justify-center shadow-xl\\`}>
                <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
                <p className="text-xl text-white/80">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Styled Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Custom Styled Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={\\`transition-all duration-300 rounded-full \${
                currentSlide === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }\\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`;
