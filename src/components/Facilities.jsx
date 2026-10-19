import React from 'react';
import { motion } from 'framer-motion';

const facilities = [
  { title: "Smart Classrooms", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80", desc: "Interactive digital panels and high-speed internet connectivity." },
  { title: "Advanced Science Labs", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80", desc: "State-of-the-art Physics, Chemistry, and Biology equipment." },
  { title: "Digital Library", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80", desc: "Over 20,000 physical volumes and access to global e-journals." },
  { title: "Sports Complex", img: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=600&q=80", desc: "Indoor badminton courts, football turf, and Olympic-size pool." },
  { title: "Safe Transport", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGcdQNsQVGeFOw2rZMm9Qh1oJRLyMkovYN7is2F0Vdw&s=10", desc: "AC buses equipped with live GPS tracking and female attendants." },
  { title: "Medical Care Unit", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80", desc: "24/7 infirmary with qualified nurse and emergency tie-up with hospitals." }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full">World-Class Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Campus Facilities Designed For Growth</h2>
          <p className="text-gray-600">Explore our modern spaces built to foster safety, creativity, and active learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-52 overflow-hidden relative">
                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fac.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{fac.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}