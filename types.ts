
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  projects: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}
