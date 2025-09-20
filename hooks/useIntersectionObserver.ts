// FIX: Implemented the `useIntersectionObserver` hook which was missing.
// This file was previously empty and contained comments indicating it was obsolete,
// which was incorrect as it is actively used by the `AnimatedSection` component.
import { useState, useEffect, useRef, RefObject } from 'react';

const useIntersectionObserver = <T extends HTMLElement>(
  options?: IntersectionObserverInit
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state only when intersecting, and then unobserve to fire once.
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
    // The options object is a dependency. If a new object is passed on each render,
    // this effect will re-run. The consumer should memoize the options object if needed.
    // For the current usage in AnimatedSection, this is not an issue as no options are passed.
  }, [options]);

  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
