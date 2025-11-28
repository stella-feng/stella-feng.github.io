'use client';

import { SectionWrapper } from './section_wrapper';
import { cvData } from '@/lib/cv_data';
import { Calendar, MapPin, User } from 'lucide-react';

export const ResearchExperience = () => {
  return (
    <SectionWrapper id="experience" className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Research Experience</h2>
        
        <div className="space-y-16">
          {cvData.researchExperience.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1.5" />
                      {exp.role}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {exp.institution}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {exp.date}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

