'use client';

import { SectionWrapper } from './section_wrapper';
import { cvData } from '@/lib/cv_data';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection = () => {
  return (
    <SectionWrapper id="education" className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Education</h2>
        
        <div className="space-y-12">
          {cvData.education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-200 last:border-0 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-400" />
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                  <p className="text-lg text-blue-600 font-medium">{edu.degree}</p>
                </div>
                <div className="text-sm text-slate-500 mt-2 sm:mt-0 text-right">
                  <div className="flex items-center sm:justify-end gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.date}
                  </div>
                  <div className="flex items-center sm:justify-end gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-slate-600">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

