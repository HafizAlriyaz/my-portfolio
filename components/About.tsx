
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section title="About Me" id="about">
      <AnimatedSection>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          With one year of dedicated experience in mechanical engineering, I specialize in BIM and pipeline design. I thrive in collaborative environments, contributing to team success through strong problem-solving skills and a passion for creating efficient, high-quality engineering solutions.
        </p>
      </AnimatedSection>
    </Section>
  );
};

export default About;
