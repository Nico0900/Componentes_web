import { useState } from 'react';

export default function Carousel11Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      color: 'from-indigo-500 to-purple-500',
      title: 'Mountain Vista',
      caption: 'Experience breathtaking views from the highest peaks'
    },
    {
      id: 2,
      color: 'from-cyan-500 to-blue-500',
      title: 'Ocean Waves',
      caption: 'Discover the serenity of crystal clear waters'
    },
    {
      id: 3,
      color: 'from-emerald-500 to-teal-500',
      title: 'Forest Path',
      caption: 'Walk through ancient woods and find peace'
    },
    {
      id: 4,
      color: 'from-orange-500 to-red-500',
      title: 'Desert Sunset',
      caption: 'Witness the magic of golden hour in the dunes'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
              className="min-w-full h-80 flex items-end"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} relative`}>
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
                  <p className="text-lg text-white/90">{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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

export const carousel11Code = `import { useState } from 'react';

export default function Carousel11Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      color: 'from-indigo-500 to-purple-500',
      title: 'Mountain Vista',
      caption: 'Experience breathtaking views from the highest peaks'
    },
    {
      id: 2,
      color: 'from-cyan-500 to-blue-500',
      title: 'Ocean Waves',
      caption: 'Discover the serenity of crystal clear waters'
    },
    {
      id: 3,
      color: 'from-emerald-500 to-teal-500',
      title: 'Forest Path',
      caption: 'Walk through ancient woods and find peace'
    },
    {
      id: 4,
      color: 'from-orange-500 to-red-500',
      title: 'Desert Sunset',
      caption: 'Witness the magic of golden hour in the dunes'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
              className="min-w-full h-80 flex items-end"
            >
              <div className={\\`w-full h-full bg-gradient-to-br \${slide.color} relative\\`}>
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
                  <p className="text-lg text-white/90">{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={\\`w-2 h-2 rounded-full transition-all duration-300 \${
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }\\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`;
