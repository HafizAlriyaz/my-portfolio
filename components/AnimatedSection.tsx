
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-spring transform ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
