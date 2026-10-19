import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ parentName: '', childName: '', grade: 'Grade 1', phone: '', email: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 p-1">
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Submitted!</h3>
            <p className="text-gray-600 text-sm mb-6">Thank you for your interest in EAK International School. Our admissions counselor will contact you shortly.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="bg-brand-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm">
              Close
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Admission Enquiry 2027-28</h3>
            <p className="text-gray-600 text-sm mb-6">Fill out your details and our team will get in touch with you.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Parent Name</label>
                <input required type="text" placeholder="Enter parent full name" value={formData.parentName} onChange={(e)=>setFormData({...formData, parentName: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-600" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Child Name</label>
                  <input required type="text" placeholder="Student name" value={formData.childName} onChange={(e)=>setFormData({...formData, childName: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Grade Applying For</label>
                  <select value={formData.grade} onChange={(e)=>setFormData({...formData, grade: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-600">
                    <option>Grade 1 - 5</option>
                    <option>Grade 6 - 8</option>
                    <option>Grade 9 - 12</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                <input required type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                <input required type="email" placeholder="parent@example.com" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-600" />
              </div>
              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3.5 rounded-xl font-bold shadow-lg transition mt-2">
                Submit Enquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}