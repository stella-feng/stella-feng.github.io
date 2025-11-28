'use client';

import { SectionWrapper } from './section_wrapper';
import { cvData } from '@/lib/cv_data';
import { Dna, FlaskConical, PenTool, Monitor } from 'lucide-react';

export const SkillsSection = () => {
  const { skills } = cvData;
  
  const skillCategories = [
    { title: "Molecular Biology", icon: Dna, content: skills.molecularBiology },
    { title: "Plant–Pathogen Assays", icon: FlaskConical, content: skills.plantPathogenAssays },
    { title: "General Laboratory", icon: PenTool, content: skills.general },
    { title: "Software", icon: Monitor, content: skills.software },
  ];

  return (
    <SectionWrapper id="skills" className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {category.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

