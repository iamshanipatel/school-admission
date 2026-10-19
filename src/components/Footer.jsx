import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-brand-600 text-white p-2 rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white">EAK International</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering future-ready leaders through world-class academics, strong moral values, and state-of-the-art facilities.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#programs" className="hover:text-white transition">Academic Programs</a></li>
            <li><a href="#facilities" className="hover:text-white transition">Campus Facilities</a></li>
            <li><a href="#fees" className="hover:text-white transition">Fee Structure</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Admissions</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#process" className="hover:text-white transition">Admission Process</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#process" className="hover:text-white transition">Schedule a Visit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" /> 123 Education Lane, Knowledge City</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-500 flex-shrink-0" /> +91 (0) 1234 567890</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-500 flex-shrink-0" /> admissions@eakinternational.edu</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2027 EAK International School. All rights reserved. Built for Academic Session 2027-28.
      </div>
    </footer>
  );
}