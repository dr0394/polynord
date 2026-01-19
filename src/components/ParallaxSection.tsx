import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  imageUrl: string;
  overlay?: string;
}

export default function ParallaxSection({ children, imageUrl, overlay = 'from-gray-900/90 via-gray-900/80 to-gray-900/90' }: ParallaxSectionProps) {
  return (
    <div className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {children}
      </div>
    </div>
  );
}
