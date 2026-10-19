import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, UserCheck, CheckSquare, Award } from 'lucide-react';

const steps = [
  { step: "01", title: "Online Enquiry", desc: "Submit your basic details through our online enquiry form or visit the campus.", icon: <Send className="w-6 h-6 text-brand-600" /> },
  { step: "02", title: "Application Form", desc: "Complete the admission application form along with required student documents.", icon: <FileText className="w-6 h-6 text-brand-600" /> },
  { step: "03", title: "Assessment", desc: "Friendly interaction / age-appropriate assessment for the student with faculty.", icon: <UserCheck className="w-6 h-6 text-brand-600" /> },
  { step: "04", title: "Selection", desc: "Receive formal admission offer letter upon successful review and assessment.", icon: <Award className="w-6 h-6 text-brand-600" /> },
  { step: "05", title: "Enrollment", desc: "Complete fee payment and final registration formalities to secure the seat.", icon: <CheckSquare className="w-6 h-6 text-brand-600" /> }
];

export default function AdmissionProcess() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-100 px-3 py-1 rounded-full">Step-by-Step Guide</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Simple & Transparent Admission Process</h2>
          <p className="text-gray-600">Our 5-step journey ensures a smooth and welcoming transition for parents and students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-brand-200">{item.step}</span>
                  <div className="p-3 bg-brand-50 rounded-2xl">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}