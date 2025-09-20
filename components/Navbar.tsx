import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = NAV_ITEMS.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl font-bold text-dark-text bg-mint/70 px-3 py-1 rounded-md hover:bg-mint transition-all duration-200">H.A.R</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'font-bold text-dark-text bg-mint'
                      : 'font-medium text-gray-600 hover:bg-mint/50'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
