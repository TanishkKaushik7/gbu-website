// Same imports as before
import React, { useState, useEffect, useRef } from 'react';
import { Upload, UserPlus } from 'lucide-react';

// Simple toast fallback
const useToast = () => {
  return {
    toast: ({ title, description }) => {
      alert(`${title}\n\n${description}`);
    },
  };
};

const NSSRegistration = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    program: '',
    year: '',
    email: '',
    phone: '',
    motivation: '',
    profilePhoto: null,
    studentId: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openProgram, setOpenProgram] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const programRef = useRef(null);
  const yearRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful!",
        description: "Your NSS volunteer application has been submitted.",
      });

      setFormData({
        fullName: '',
        rollNo: '',
        program: '',
        year: '',
        email: '',
        phone: '',
        motivation: '',
        profilePhoto: null,
        studentId: null,
      });
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programRef.current && !programRef.current.contains(event.target)) {
        setOpenProgram(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target)) {
        setOpenYear(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const benefits = [
    'Certificate of completion after 240 hours of service',
    'Leadership development opportunities',
    'Community service experience',
    'Networking with like-minded individuals',
    'Recognition and awards for outstanding service',
    'Professional development workshops',
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      {/* Header */}
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Join NSS as a Volunteer</h2>
        <p className="text-md sm:text-lg text-gray-600">
          Be part of the change you want to see in society
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Form Section */}
        <div className="lg:col-span-2 min-w-0">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="mb-4">
              <h3 className="font-semibold text-lg flex items-center space-x-2">
                <UserPlus className="h-6 w-6 text-blue-600" />
                <span>Volunteer Registration Form</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Roll */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="rollNo" className="text-sm font-medium text-gray-700">Roll No *</label>
                  <input
                    id="rollNo"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Roll Number"
                    value={formData.rollNo}
                    onChange={(e) => handleInputChange('rollNo', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Program & Year Dropdown */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2" ref={programRef}>
                  <label className="text-sm font-medium text-gray-700">Program *</label>
                  <div
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left cursor-pointer"
                    onClick={() => setOpenProgram(!openProgram)}
                  >
                    {formData.program || 'Select your program'}
                  </div>
                  {openProgram && (
                    <div className="mt-1 border rounded-md shadow bg-white max-h-40 overflow-auto">
                      {['B.Tech', 'M.Tech', 'B.A.', 'M.A.', 'B.Com', 'M.Com', 'B.Sc', 'M.Sc'].map((prog) => (
                        <div
                          key={prog}
                          className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => {
                            handleInputChange('program', prog);
                            setOpenProgram(false);
                          }}
                        >
                          {prog}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2" ref={yearRef}>
                  <label className="text-sm font-medium text-gray-700">Year *</label>
                  <div
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left cursor-pointer"
                    onClick={() => setOpenYear(!openYear)}
                  >
                    {formData.year || 'Select your year'}
                  </div>
                  {openYear && (
                    <div className="mt-1 border rounded-md shadow bg-white max-h-40 overflow-auto">
                      {['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Final Year'].map((yr) => (
                        <div
                          key={yr}
                          className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => {
                            handleInputChange('year', yr);
                            setOpenYear(false);
                          }}
                        >
                          {yr}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    placeholder="+91-9876543210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Motivation */}
              <div className="space-y-2">
                <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                  Why do you want to join NSS? *
                </label>
                <textarea
                  id="motivation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Your motivation..."
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  required
                />
              </div>

              {/* Uploads */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="profilePhoto" className="text-sm font-medium text-gray-700">Profile Photo *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <input
                      type="file"
                      id="profilePhoto"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('profilePhoto', e.target.files[0])}
                      className="hidden"
                      required
                    />
                    <label htmlFor="profilePhoto" className="cursor-pointer text-sm text-gray-600 block">
                      {formData.profilePhoto?.name || 'Click to upload photo'}
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="studentId" className="text-sm font-medium text-gray-700">Student ID *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <input
                      type="file"
                      id="studentId"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('studentId', e.target.files[0])}
                      className="hidden"
                      required
                    />
                    <label htmlFor="studentId" className="cursor-pointer text-sm text-gray-600 block">
                      {formData.studentId?.name || 'Click to upload ID'}
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side Benefits & Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h3 className="text-xl text-blue-600 font-semibold mb-3">Why Join NSS?</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center space-y-4">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Active Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600">Service Hours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Events Organized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NSSRegistration;
