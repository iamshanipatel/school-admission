import React from 'react';
import { ArrowRight, Calendar, PhoneCall } from 'lucide-react';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-600 to-indigo-700 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">Give Your Child a Future-Ready Education</h2>
        <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
          Admissions for Academic Session 2027-28 are now open. Secure your child's place in our thriving learning community today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-700 px-8 py-4 rounded-xl font-bold shadow-xl transition flex items-center justify-center gap-2"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white border border-brand-500 px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" /> Book a Campus Visit
          </button>
          <button 
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white border border-brand-500 px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5" /> Talk to Admissions Team
          </button>
        </div>
      </div>
    </section>
  );
}