import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookMarked, Trophy } from 'lucide-react';

const stats = [
  { icon: <Award className="w-8 h-8 text-brand-600" />, count: "25+", label: "Years of Excellence" },
  { icon: <Users className="w-8 h-8 text-brand-600" />, count: "4,500+", label: "Successful Alumni" },
  { icon: <BookMarked className="w-8 h-8 text-brand-600" />, count: "120+", label: "Expert Faculty Members" },
  { icon: <Trophy className="w-8 h-8 text-brand-600" />, count: "50+", label: "Inter-School Sports Trophies" }
];

export default function SchoolHighlights() {
  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-300 font-bold uppercase tracking-wider text-xs bg-brand-800 px-3 py-1 rounded-full">School Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">Milestones That Speak Volumes</h2>
          <p className="text-gray-300">A legacy built on academic dedication, integrity, and exceptional student achievements.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center"
            >
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-md mb-4">
                {item.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2">{item.count}</h3>
              <p className="text-gray-300 text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}