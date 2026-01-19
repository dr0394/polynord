import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    'fade-up': isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
    'fade-down': isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0',
    'fade-left': isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0',
    'fade-right': isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0',
    'scale': isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
    'fade': isVisible ? 'opacity-100' : 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
