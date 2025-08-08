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
    { src: 'https://bu.dusays.com/2025/08/09/689624f3698af.jpg', alt: 'Image 14' },
    { src: 'https://bu.dusays.com/2025/08/09/6896247e7aaf6.jpg', alt: 'Image 13' },
    { src: 'https://bu.dusays.com/2025/08/09/689623fe118af.jpg', alt: 'Image 2' },
    { src: 'https://bu.dusays.com/2025/08/09/6896246086c01.jpg', alt: 'Image 6' },
    { src: 'https://bu.dusays.com/2025/08/09/689624cac990f.jpg', alt: 'Image 11' },
    { src: 'https://bu.dusays.com/2025/08/09/6896247f92f1f.jpg', alt: 'Image 10' },
    { src: 'https://bu.dusays.com/2025/08/09/689624d0475a5.jpg', alt: 'Image 12' },
    { src: 'https://bu.dusays.com/2025/08/09/6896240e1153a.jpg', alt: 'Image 9' },
    { src: 'https://bu.dusays.com/2025/08/09/689624670f0f7.jpg', alt: 'Image 8' },
    { src: 'https://bu.dusays.com/2025/08/09/6896246546c88.jpg', alt: 'Image 7' },
    { src: 'https://bu.dusays.com/2025/08/09/689624592b4bf.jpg', alt: 'Image 5' },
    { src: 'https://bu.dusays.com/2025/08/09/6896245875d65.jpg', alt: 'Image 4' },
    { src: 'https://bu.dusays.com/2025/08/09/68962457e423c.jpg', alt: 'Image 3' },
    { src: 'https://bu.dusays.com/2025/08/09/689623fc681f2.jpg', alt: 'Image 1' },
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
    <>
      <div
        ref={galleryRef}
        className="relative overflow-hidden py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={stripRef} className="flex gap-6 whitespace-nowrap" style={{ willChange: 'transform' }}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="w-[650px] rounded-lg overflow-hidden shadow-xl flex-shrink-0"
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
    </>
  );
}