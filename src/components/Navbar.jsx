import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-brand-600 text-white p-2 rounded-xl shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-gray-900">EAK International</span>
            <span className="block text-xs font-medium text-brand-600">Session 2027-28</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#about" className="hover:text-brand-600 transition">About</a>
          <a href="#programs" className="hover:text-brand-600 transition">Programs</a>
          <a href="#facilities" className="hover:text-brand-600 transition">Facilities</a>
          <a href="#process" className="hover:text-brand-600 transition">Admission Process</a>
          <a href="#fees" className="hover:text-brand-600 transition">Fee Structure</a>
          <a href="#faq" className="hover:text-brand-600 transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenEnquiry} className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-brand-500/25 transition transform active:scale-95">
            <PhoneCall className="w-4 h-4" /> Enquire Now
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">About</a>
          <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Programs</a>
          <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Facilities</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Admission Process</a>
          <a href="#fees" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Fee Structure</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">FAQ</a>
          <button onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }} className="w-full bg-brand-600 text-white py-3 rounded-xl font-semibold text-center shadow-md">
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
}