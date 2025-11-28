'use client';

import { SectionWrapper } from './section_wrapper';
import { cvData } from '@/lib/cv_data';
import { Microscope } from 'lucide-react';

export const ResearchInterests = () => {
  return (
    <SectionWrapper id="interests" className="bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Research Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.researchInterests.map((interest, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-start"
            >
              <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-600">
                <Microscope size={24} />
              </div>
              <p className="text-slate-700 font-medium pt-1 leading-relaxed">
                {interest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

