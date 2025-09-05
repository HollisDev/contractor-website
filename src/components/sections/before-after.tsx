'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: { clientX: number }) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <section id="before-after" className="bg-gray-50 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '144px', paddingBottom: '96px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-burgundy mb-6">
            Our Transformations
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See the dramatic difference our expert craftsmanship makes. 
            Drag the slider to reveal stunning before and after results.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="relative mx-auto max-w-6xl">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-xl shadow-2xl cursor-grab active:cursor-grabbing select-none"
            style={{ 
              aspectRatio: '16/10',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* After Image (Left side) */}
            <div className="absolute inset-0 select-none">
              <Image
                src="/image-assets/before-after/after-image.png"
                alt="After renovation"
                fill
                className="object-cover select-none"
                priority
                draggable={false}
              />
              {/* After Label */}
              <div className="absolute bottom-4 left-4 bg-gray-100 text-burgundy px-4 py-2 rounded-lg font-semibold text-lg shadow-lg select-none">
                After
              </div>
            </div>

            {/* Before Image (Right side) with clip path */}
            <div 
              className="absolute inset-0 select-none"
              style={{
                clipPath: `inset(0 0 0 ${sliderPosition}%)`
              }}
            >
              <Image
                src="/image-assets/before-after/before-image.png"
                alt="Before renovation"
                fill
                className="object-cover select-none"
                draggable={false}
              />
              {/* Before Label */}
              <div className="absolute bottom-4 right-4 bg-burgundy text-gray-100 px-4 py-2 rounded-lg font-semibold text-lg shadow-lg select-none">
                Before
              </div>
            </div>

            {/* Slider Line and Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Slider Handle */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-xl border-4 border-burgundy cursor-grab active:cursor-grabbing flex items-center justify-center"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-burgundy rounded-full"></div>
                  <div className="flex flex-col space-y-1">
                    <div className="w-2 h-1 bg-burgundy rounded-full"></div>
                    <div className="w-2 h-1 bg-burgundy rounded-full"></div>
                  </div>
                  <div className="w-1 h-4 bg-burgundy rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <span className="inline-block mr-2">←</span>
              Drag the slider to see the transformation
              <span className="inline-block ml-2">→</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
