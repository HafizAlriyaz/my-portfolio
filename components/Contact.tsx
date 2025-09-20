import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <Section title="Contact" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
        </AnimatedSection>
        <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <div className="text-center">
                    <h4 className="font-bold text-lg">Email</h4>
                    <a href="mailto:hafizahamedr@example.com" className="text-gray-600 hover:text-mint transition-colors">hafizahamedr@example.com</a>
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-lg">Phone</h4>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-mint transition-colors">+91 123 456 7890</a>
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-lg">LinkedIn</h4>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-mint transition-colors">linkedin.com/in/hafizahamedr</a>
                </div>
            </div>
        </AnimatedSection>
        <AnimatedSection>
            <form className="w-full max-w-lg mx-auto space-y-6">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-mint" id="grid-first-name" type="text" placeholder="Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-mint" id="grid-last-name" type="email" placeholder="Email" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                        <textarea className=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 h-48 resize-none leading-tight focus:outline-none focus:bg-white focus:border-mint" placeholder="Message"></textarea>
                    </div>
                </div>
                <div>
                    <button className="bg-mint text-dark-text font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105" type="button">
                        Send Message
                    </button>
                </div>
            </form>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default Contact;