import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-24 scroll-mt-16">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-12 text-center relative w-full">
            {title}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-mint"></span>
        </h2>
      </AnimatedSection>
      {children}
    </section>
  );
};

export default Section;