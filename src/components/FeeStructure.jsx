import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';

const feeData = [
  { grade: "Grade 1 - 5", annualFee: "Rs. 45,000", admissionFee: "Rs. 8,000" },
  { grade: "Grade 6 - 8", annualFee: "Rs. 58,000", admissionFee: "Rs. 10,000" },
  { grade: "Grade 9 - 12", annualFee: "Rs. 72,000", admissionFee: "Rs. 12,000" }
];

export default function FeeStructure() {
  return (
    <section id="fees" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Fee Structure Preview (2027-28)</h2>
          <p className="text-gray-600">Clear and affordable fee structure with flexible quarterly payment options.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200/80 rounded-3xl shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-sm font-bold text-gray-900">Grade Range</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-900">Annual Fee</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-900">Admission Fee (One-time)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feeData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition">
                    <td className="py-5 px-6 text-sm font-bold text-gray-800">{row.grade}</td>
                    <td className="py-5 px-6 text-sm font-semibold text-brand-600">{row.annualFee}</td>
                    <td className="py-5 px-6 text-sm font-semibold text-gray-600">{row.admissionFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 p-4 text-center text-xs text-gray-500 border-t border-gray-200">
            * Note: Optional facilities like transport and cafeteria are charged separately based on distance and usage.
          </div>
        </motion.div>
      </div>
    </section>
  );
}