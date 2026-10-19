import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const dates = [
  { event: "Application Portal Opens", date: "October 1, 2026", status: "Completed" },
  { event: "Campus Visit & Open House", date: "November 15, 2026", status: "Upcoming" },
  { event: "Application Deadline", date: "January 31, 2027", status: "Upcoming" },
  { event: "Student Assessment & Interaction", date: "February 10 - 20, 2027", status: "Upcoming" },
  { event: "Result Announcement", date: "March 5, 2027", status: "Upcoming" },
  { event: "Final Enrollment Deadline", date: "March 31, 2027", status: "Upcoming" }
];

export default function ImportantDates() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full">Schedule</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Important Admission Dates 2027-28</h2>
          <p className="text-gray-600">Keep track of key milestones for the upcoming academic session.</p>
        </div>

        <div className="space-y-4">
          {dates.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="bg-gray-50 border border-gray-200/80 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-100 text-brand-700 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{item.event}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                    <Clock className="w-4 h-4 text-brand-600" /> {item.date}
                  </p>
                </div>
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-brand-100 text-brand-700'}`}>
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}