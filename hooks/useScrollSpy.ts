import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 0) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    
    // This creates a "line" at the top of the viewport (offset by the navbar height)
    // and detects when a section crosses it.
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 1}px 0px`,
      threshold: 0
    });

    const { current: currentObserver } = observer;

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => currentObserver.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
};