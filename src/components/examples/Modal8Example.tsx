import { useState } from 'react';

export default function Modal8Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop'
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => openImage(index)}
            className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-slate-700 hover:border-pink-500 transition-colors"
          >
            <img src={src} alt={\`Thumbnail \${index + 1}\`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 z-10 p-3 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-5xl max-h-[90vh] animate-scaleIn">
            <img
              src={images[selectedImage]}
              alt={\`Image \${selectedImage + 1}\`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-slate-800/80 rounded-lg text-slate-200">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 p-3 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export const modal8Code = \`import { useState } from 'react';

export default function Modal8Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const images = ['url1', 'url2', 'url3'];

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => openImage(i)} className="w-24 h-24 rounded-lg border-2 border-slate-700 hover:border-pink-500">
            <img src={src} alt={\\\`Thumb \\\${i + 1}\\\`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">✕</button>
          <button onClick={prevImage} className="absolute left-4 text-white">←</button>
          <img src={images[selectedImage]} alt="Image" className="max-w-full max-h-[90vh] rounded-lg" />
          <button onClick={nextImage} className="absolute right-4 text-white">→</button>
        </div>
      )}
    </div>
  );
}\`;
