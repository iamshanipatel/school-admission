import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck } from 'lucide-react';

const docs = [
  "Birth Certificate of the student",
  "Previous academic year report cards / transcripts",
  "Passport-size recent photographs of the student (4 copies)",
  "Address Proof (Aadhaar / Utility Bill / Passport)",
  "Parent / Guardian Government ID Proof",
  "Transfer Certificate (TC) from previous school (Required at enrollment)"
];

export default function RequiredDocuments() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-100 px-3 py-1 rounded-full">Checklist</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Required Documents for Application</h2>
          <p className="text-gray-600">Please ensure you have digital or physical copies ready for the application submission.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200/80 p-8 sm:p-10 rounded-3xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Document Checklist</h3>
              <p className="text-xs text-gray-500">All documents must be verified during interaction.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {docs.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}