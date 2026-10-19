import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap } from 'lucide-react';

const programs = [
  {
    level: "Primary Level",
    ages: "Ages 6 - 10 (Grades 1 - 5)",
    desc: "Building strong foundational literacy, numeracy, and social emotional intelligence through experiential play-way and inquiry methods.",
    features: ["Activity-based learning", "Language & Phonetics labs", "Creative arts & music", "Safe supervised play areas"]
  },
  {
    level: "Middle Level",
    ages: "Ages 11 - 13 (Grades 6 - 8)",
    desc: "Transitioning students toward analytical thinking, scientific inquiry, critical reasoning, and collaborative project work.",
    features: ["Advanced STEM labs", "Coding & robotics introduction", "Debate & Model UN", "Specialized sports coaching"]
  },
  {
    level: "Secondary Level",
    ages: "Ages 14 - 15 (Grades 9 - 10)",
    desc: "Rigorous academic preparation focusing on board examinations, conceptual clarity, and independent study habits.",
    features: ["Board exam foundation", "Career counseling workshops", "Olympiad training", "Advanced science labs"]
  },
  {
    level: "Senior Secondary",
    ages: "Ages 16 - 17 (Grades 11 - 12)",
    desc: "Specialized streams in Science, Commerce, and Humanities geared toward premier university admissions worldwide.",
    features: ["Stream specializations", "Entrance exam coaching (JEE/NEET/CLAT)", "Leadership mentorship", "Global university guidance"]
  }
];

export default function AcademicPrograms() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-100 px-3 py-1 rounded-full">Academic Programs</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Structured Learning For Every Stage</h2>
          <p className="text-gray-600">Tailored curriculum designed to match cognitive developmental milestones across all age groups.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{prog.level}</h3>
                  <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">{prog.ages}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{prog.desc}</p>
                <div className="space-y-2 mb-6">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">EAK Curriculum</span>
                <span className="text-xs font-bold text-brand-600 flex items-center gap-1">Admissions Open 2027</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}