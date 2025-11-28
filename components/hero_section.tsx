'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { cvData } from '@/lib/cv_data';

export const HeroSection = () => {
  const { personalInfo } = cvData;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {personalInfo.avatar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative w-48 h-48 md:w-56 md:h-56"
            >
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg overflow-hidden">
                 <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light mb-8">
              {personalInfo.title}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-600 mb-12 text-sm md:text-base">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {personalInfo.phone}
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {personalInfo.address}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">About Me</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-light">
            {personalInfo.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
