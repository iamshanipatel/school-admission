import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Cpu, Users, Award, Trophy, HeartHandshake, Sparkles } from 'lucide-react';

const differentiators = [
  { icon: <BookOpen className="w-6 h-6 text-brand-600" />, title: "Experienced Faculty", description: "Educators with decades of experience dedicated to personalized student mentorship." },
  { icon: <Trophy className="w-6 h-6 text-brand-600" />, title: "Outstanding Results", description: "Consistent board exam records with top university placements globally." },
  { icon: <Cpu className="w-6 h-6 text-brand-600" />, title: "Smart Campus & Tech", description: "AI labs, robotics clubs, and fully digital classrooms for future-ready learning." },
  { icon: <HeartHandshake className="w-6 h-6 text-brand-600" />, title: "Holistic Development", description: "Balanced focus on arts, music, dramatics, debates, and community service." },
  { icon: <ShieldCheck className="w-6 h-6 text-brand-600" />, title: "Safe & Secure Campus", description: "24/7 CCTV surveillance, GPS-enabled buses, and secure gated campus." },
  { icon: <Users className="w-6 h-6 text-brand-600" />, title: "Global Sports Arena", description: "Professional coaching in football, basketball, swimming, and tennis." }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full">Why Choose EAK International</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Nurturing Excellence In Every Child</h2>
          <p className="text-gray-600">We provide an inspiring environment where curiosity is encouraged, talents are polished, and lifelong values are instilled.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 hover:bg-brand-50/50 border border-gray-100 hover:border-brand-100 p-8 rounded-3xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}