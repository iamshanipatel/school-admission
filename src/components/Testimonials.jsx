import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { quote: "Choosing EAK International for our daughter was the best decision. The teachers are exceptionally supportive and focus heavily on overall confidence.", author: "Rajesh & Priya Sharma", role: "Parents of Grade 7 Student" },
  { quote: "The smart campus infrastructure and coding programs have kept my son extremely engaged. He looks forward to school every single day.", author: "Vikram Malhotra", role: "Parent of Grade 4 Student" },
  { quote: "Transparent admission process, caring mentors, and world-class sports facilities make EAK stand out completely.", author: "Ananya Deshmukh", role: "Parent of Grade 10 Student" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-100 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Trusted By Parents</h2>
          <p className="text-gray-600">Hear what families have to say about their experience with our school community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-brand-200 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6">"{item.quote}"</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
