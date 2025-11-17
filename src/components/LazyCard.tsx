import { useEffect, useRef, useState } from 'react';

interface LazyCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function LazyCard({ children, delay = 0 }: LazyCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialCheck, setIsInitialCheck] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If initial check and element is already visible, show immediately
            if (isInitialCheck) {
              setIsVisible(true);
              setIsInitialCheck(false);
            } else {
              // Add delay before showing to create staggered effect
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
            }
            // Stop observing once visible
            observer.unobserve(entry.target);
          } else if (isInitialCheck) {
            // Element not visible on initial load
            setIsInitialCheck(false);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '100px', // Start loading 100px before element enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay, isInitialCheck]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
