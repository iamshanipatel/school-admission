import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Award, CheckCircle } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" /> Admissions Open Academic Session 2027-28
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Empowering Minds, <span className="text-brand-600">Shaping Futures.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Welcome to EAK International School. We blend world-class academics, values-based holistic growth, and modern smart infrastructure to build future-ready leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-brand-500/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Apply For Admission <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#process"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-5 h-5 text-brand-600" /> Schedule Campus Visit
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/60 max-w-lg mx-auto lg:mx-0">
              <div>
                <h4 className="text-2xl font-black text-gray-900">25+</h4>
                <p className="text-xs text-gray-500 font-medium">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-900">100%</h4>
                <p className="text-xs text-gray-500 font-medium">College Placement</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-900">15:1</h4>
                <p className="text-xs text-gray-500 font-medium">Student-Teacher Ratio</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 to-indigo-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
                  alt="Students learning at school" 
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
                  <div className="bg-green-500 text-white p-2 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Admissions Open 2027-28</h5>
                    <p className="text-xs text-gray-600">Limited seats available for Grade 1 to 12</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}