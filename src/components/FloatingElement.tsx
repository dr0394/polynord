import { ReactNode, useEffect, useState } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export default function FloatingElement({
  children,
  className = '',
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${mounted ? 'animate-float' : ''} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
