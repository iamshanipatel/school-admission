import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What is the admission process for the 2027-28 academic session?", a: "The process involves submitting an online enquiry, completing the application form, attending a student-faculty interaction session, and completing enrollment upon selection." },
  { q: "What documents are required to apply?", a: "You need the student's birth certificate, previous year report cards, passport-size photographs, address proof, and parent ID proof." },
  { q: "Is there an entrance assessment?", a: "For primary grades, we conduct a friendly informal interaction. For middle and senior secondary levels, a diagnostic assessment in core subjects is conducted." },
  { q: "Which classes are currently accepting applications?", a: "Admissions are currently open for Grade 1 through Grade 12 for the academic session 2027-28." },
  { q: "How can I schedule a campus visit?", a: "You can click on the 'Schedule Campus Visit' button on our website or call our admissions helpdesk directly to book a guided tour." }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common queries regarding admissions, fees, and campus life.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200/80 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 px-6 text-left font-bold text-gray-900 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}