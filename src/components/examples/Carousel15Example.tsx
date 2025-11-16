import { useState } from 'react';

export default function Carousel15Example() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      color: 'from-red-600 to-rose-600',
      title: 'Video 1',
      description: 'Nature Documentary'
    },
    {
      id: 2,
      color: 'from-blue-600 to-indigo-600',
      title: 'Video 2',
      description: 'Ocean Life'
    },
    {
      id: 3,
      color: 'from-green-600 to-teal-600',
      title: 'Video 3',
      description: 'Mountain Adventure'
    },
    {
      id: 4,
      color: 'from-purple-600 to-pink-600',
      title: 'Video 4',
      description: 'City Lights'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
    setIsPlaying(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(null);
  };

  const togglePlay = (index: number) => {
    setIsPlaying(isPlaying === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Video Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="min-w-full h-96 flex items-center justify-center relative"
            >
              {/* Video Placeholder */}
              <div className={`w-full h-full bg-gradient-to-br ${video.color} flex items-center justify-center relative`}>
                {/* Play Overlay */}
                {isPlaying !== index && (
                  <button
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-200 group"
                  >
                    <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-12 h-12 text-slate-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Playing State */}
                {isPlaying === index && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-white text-center mb-8">
                      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-2xl font-bold">Playing...</p>
                    </div>
                    <button
                      onClick={() => togglePlay(index)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-3xl font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-lg text-white/80">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Video Thumbnails */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(null);
              }}
              className={`w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                currentSlide === index
                  ? 'ring-2 ring-white scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${video.color} flex items-center justify-center`}>
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        Video Carousel - Click play to watch
      </div>
    </div>
  );
}

export const carousel15Code = `import { useState } from 'react';

export default function Carousel15Example() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      color: 'from-red-600 to-rose-600',
      title: 'Video 1',
      description: 'Nature Documentary'
    },
    {
      id: 2,
      color: 'from-blue-600 to-indigo-600',
      title: 'Video 2',
      description: 'Ocean Life'
    },
    {
      id: 3,
      color: 'from-green-600 to-teal-600',
      title: 'Video 3',
      description: 'Mountain Adventure'
    },
    {
      id: 4,
      color: 'from-purple-600 to-pink-600',
      title: 'Video 4',
      description: 'City Lights'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
    setIsPlaying(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(null);
  };

  const togglePlay = (index: number) => {
    setIsPlaying(isPlaying === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
        {/* Video Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: \`translateX(-\${currentSlide * 100}%)\` }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="min-w-full h-96 flex items-center justify-center relative"
            >
              {/* Video Placeholder */}
              <div className={\\`w-full h-full bg-gradient-to-br \${video.color} flex items-center justify-center relative\\`}>
                {/* Play Overlay */}
                {isPlaying !== index && (
                  <button
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-200 group"
                  >
                    <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-12 h-12 text-slate-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Playing State */}
                {isPlaying === index && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-white text-center mb-8">
                      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-2xl font-bold">Playing...</p>
                    </div>
                    <button
                      onClick={() => togglePlay(index)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-3xl font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-lg text-white/80">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Video Thumbnails */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(null);
              }}
              className={\\`w-16 h-12 rounded overflow-hidden transition-all duration-300 \${
                currentSlide === index
                  ? 'ring-2 ring-white scale-110'
                  : 'opacity-60 hover:opacity-100'
              }\\`}
            >
              <div className={\\`w-full h-full bg-gradient-to-br \${video.color} flex items-center justify-center\\`}>
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        Video Carousel - Click play to watch
      </div>
    </div>
  );
}`;
