
import React from 'react';
import type { Skill, ExperienceItem, Project } from './types';

const iconClass = "w-6 h-6 mr-3 text-dark-text";

export const SKILLS_DATA: Skill[] = [
  { name: 'AutoCAD', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><line x1="2" y1="12.25" x2="22" y2="12.25"></line></svg> },
  { name: 'Civil 3D', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
  { name: 'Navisworks Review', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
  { name: 'AutoCAD Plant 3D', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-6"></path><path d="M12 8V2"></path><path d="M12 16a4 4 0 0 1 4-4h4V8h-4a4 4 0 0 1-4-4"></path><path d="M12 16a4 4 0 0 0-4-4H4v4h4a4 4 0 0 0 4 4z"></path></svg> },
  { name: 'Creo', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M12 12l6 6"></path><path d="M12 6l-6 6"></path></svg> },
  { name: 'Autodesk Inventor', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg> },
  { name: 'Ansys', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path><path d="M15 7h6v6"></path></svg> },
  { name: 'Pipeline Design', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8a13 13 0 0 1 13-13 1 1 0 0 1 1 1v4"></path><path d="M18 19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4z"></path></svg> },
  { name: 'Layout Drawings', icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    date: 'Jan 2023 - Present',
    company: 'COWI India Pvt Ltd',
    role: 'Associate BIM Engineer',
    projects: ['Slagelse District Heating', 'Vestforbrænding Transmission Pipeline', 'Asnæs Power Plant'],
  },
  {
    date: 'Aug 2022 - Dec 2022',
    company: 'COWI India Pvt Ltd',
    role: 'Intern',
    projects: ['Initial training and support on District Heating projects.'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Slagelse District Heating',
    description: 'Developed and optimized pipeline layouts for the Slagelse district heating network, ensuring efficient thermal distribution.',
    tags: ['District Heating Pipeline', 'Layout Drawing', 'BIM', 'AutoCAD Plant 3D'],
  },
  {
    title: 'Vestforbrænding Transmission Pipeline',
    description: 'Contributed to the design and 3D modeling of a major transmission pipeline, focusing on clash detection and material take-offs.',
    tags: ['Pipeline Optimization', 'Navisworks Review', 'BIM', 'Civil 3D'],
  },
  {
    title: 'Asnæs Power Plant Integration',
    description: 'Worked on the BIM coordination for integrating new pipeline systems within the existing Asnæs Power Plant infrastructure.',
    tags: ['Layout Drawing', 'BIM Coordination', 'AutoCAD'],
  },
];
