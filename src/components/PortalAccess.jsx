import React from 'react';
import { motion } from 'framer-motion';
import { Tablet, UserCheck, ShieldAlert, GraduationCap, MessageCircle } from 'lucide-react';

export default function PortalAccess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full">Digital Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Eak Pustak Tablet & Portal Integration</h2>
          <p className="text-gray-600">Seamlessly connected digital portals for administration, teachers, and students.</p>
        </div>

        <div className="relative max-w-xl mx-auto h-[380px] flex items-center justify-center">
          {/* Background Rotating / Dashed Circles */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-brand-200/60 animate-spin-slow"></div>
          <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-brand-400"></div>

          {/* Center Card: Eak Pustak Tablet */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute bg-white border border-gray-100 shadow-2xl p-8 rounded-3xl text-center z-20 w-64"
          >
            <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Tablet className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Eak Pustak Tablet</h3>
            <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-1 bg-green-50 text-green-600 rounded-full">System Active</span>
          </motion.div>

          {/* Floating Badge: Teacher (Top Right) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-4 right-4 sm:right-10 bg-white border border-gray-100 shadow-xl px-5 py-3 rounded-2xl flex items-center gap-3 z-30"
          >
            <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-800 text-sm">Teacher</span>
          </motion.div>

          {/* Floating Badge: Admin (Bottom Left) */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute bottom-4 left-4 sm:left-10 bg-white border border-gray-100 shadow-xl px-5 py-3 rounded-2xl flex items-center gap-3 z-30"
          >
            <div className="bg-orange-50 text-orange-600 p-2 rounded-xl">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-800 text-sm">Admin</span>
          </motion.div>

          {/* Floating Badge: Student (Bottom Right) */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-6 right-4 sm:right-12 bg-white border border-gray-100 shadow-xl px-5 py-3 rounded-2xl flex items-center gap-3 z-30"
          >
            <div className="bg-purple-50 text-purple-600 p-2 rounded-xl">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-800 text-sm">Student</span>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Quick Button (similar to bottom-right in image) */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </section>
  );
}