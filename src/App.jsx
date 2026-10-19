import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AcademicPrograms from './components/AcademicPrograms';
import SchoolHighlights from './components/SchoolHighlights';
import Facilities from './components/Facilities';
import AdmissionProcess from './components/AdmissionProcess';
import ImportantDates from './components/ImportantDates';
import RequiredDocuments from './components/RequiredDocuments';
import FeeStructure from './components/FeeStructure';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import EnquiryModal from './components/EnquiryModal';
import Footer from './components/Footer';
import PortalAccess from './components/PortalAccess';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-500 selection:text-white">
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Hero onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <WhyChooseUs />
      <AcademicPrograms />
      <SchoolHighlights />
      <Facilities />
      <PortalAccess />
      <AdmissionProcess />
      <ImportantDates />
      <RequiredDocuments />
      <FeeStructure />
      <Testimonials />
      <FAQ />
      <FinalCTA onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Footer />
      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
    </div>
  );
}