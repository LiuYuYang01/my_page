import { useEffect, useRef, useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

interface HorizontalGalleryProps {
  images?: ImageData[];
  scrollSpeed?: number;
}

export default function HorizontalGallery({
  images = [
    { src: 'https://picsum.photos/id/1/600/600', alt: 'Image 1' },
    { src: 'https://picsum.photos/id/10/600/600', alt: 'Image 10' },
    { src: 'https://picsum.photos/id/100/600/600', alt: 'Image 100' },
    { src: 'https://picsum.photos/id/1000/600/600', alt: 'Image 1000' },
    { src: 'https://picsum.photos/id/1001/600/600', alt: 'Image 1001' },
    { src: 'https://picsum.photos/id/1002/600/600', alt: 'Image 1002' },
    { src: 'https://picsum.photos/id/1003/600/600', alt: 'Image 1003' },
    { src: 'https://picsum.photos/id/1004/600/600', alt: 'Image 1004' },
  ],
  scrollSpeed = 2,
}: HorizontalGalleryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const singleLoopWidthRef = useRef(0); // 一组图片的总宽度

  // 复制一份图片用于无缝滚动的视觉效果
  const galleryImages = [...images, ...images];

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    // 计算单组图片的总宽度（假设所有图片宽度相同）
    const firstImage = strip.querySelector('img');
    if (firstImage) {
      const imageWidth = firstImage.offsetWidth;
      const gap = 24; // 与CSS中的gap-6对应（6*4px=24px）
      singleLoopWidthRef.current = images.length * (imageWidth + gap);
    }

    let animationFrameId: number;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= scrollSpeed;

        // 使用取模运算实现无缝滚动
        if (singleLoopWidthRef.current > 0) {
          // 确保position始终为负值，便于取模运算
          positionRef.current = positionRef.current % singleLoopWidthRef.current;
          if (positionRef.current > 0) {
            positionRef.current -= singleLoopWidthRef.current;
          }
        }

        strip.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, scrollSpeed, images.length]);

  return (
    <div
      ref={galleryRef}
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10"></div>
      <div ref={stripRef} className="flex gap-6 whitespace-nowrap" style={{ willChange: 'transform' }}>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-xl flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
