import React from 'react';
import { SKILLS_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section title="Skills" id="skills">
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {SKILLS_DATA.map((skill, index) => (
          <AnimatedSection key={index}>
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-5 py-3 text-dark-text font-medium transition-all duration-300 hover:bg-mint hover:border-mint transform hover:scale-105">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Skills;