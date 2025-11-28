'use client';

import { cvData } from '@/lib/cv_data';

export const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-white mb-2">{cvData.personalInfo.name}</h3>
        <p className="text-slate-400 mb-8">{cvData.personalInfo.title}</p>
        
        <div className="text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

