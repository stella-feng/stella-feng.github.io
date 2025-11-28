'use client';

import { SectionWrapper } from './section_wrapper';
import { cvData } from '@/lib/cv_data';
import { Award } from 'lucide-react';

export const HonorsSection = () => {
  return (
    <SectionWrapper id="honors" className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Honors & Awards</h2>
        
        <div className="space-y-6">
          {cvData.honors.map((honor, index) => (
            <div 
              key={index} 
              className="flex items-start bg-slate-50 p-6 rounded-xl border border-slate-100 transition-all hover:border-blue-200"
            >
              <div className="mt-1 mr-4 text-yellow-500 flex-shrink-0">
                <Award size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">
                {honor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

