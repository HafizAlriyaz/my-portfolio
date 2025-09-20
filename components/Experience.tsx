import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import Section from './Section';

const Experience: React.FC = () => {
  return (
    <Section title="Experience" id="experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-mint/50"></div>
        {EXPERIENCE_DATA.map((item, index) => (
          <AnimatedSection key={index} className="mb-12">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-mint rounded-full border-4 border-white z-10"></div>
              <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-[calc(50%-2rem)] p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-mint/50 transition-all duration-300 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className="text-sm font-semibold text-gray-500">{item.date}</p>
                  <h3 className="text-xl font-bold mt-1 text-dark-text">{item.company}</h3>
                  <p className="text-md font-semibold text-mint">{item.role}</p>
                  <ul className={`mt-2 list-disc list-inside ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                    {item.projects.map((project, pIndex) => (
                      <li key={pIndex} className="text-gray-600">{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Experience;