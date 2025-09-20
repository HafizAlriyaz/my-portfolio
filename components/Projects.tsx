
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import Section from './Section';

const Projects: React.FC = () => {
  return (
    <Section title="Projects" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <AnimatedSection key={index}>
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col hover:border-mint transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-mint/50 text-dark-text text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
