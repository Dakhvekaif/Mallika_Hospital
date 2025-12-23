import React from 'react';
import { FaCheckCircle, FaHospital, FaShieldAlt, FaHandHoldingMedical, FaPhone, FaEnvelope } from 'react-icons/fa';

const GovtSchemes = () => {
  const schemes = [
    { name: 'MJPJAY (Mahatma Jyotiba Phule Scheme)', icon: <FaHandHoldingMedical className="text-green-600" /> },
    { name: 'PMJAY', icon: <FaShieldAlt className="text-blue-600" /> },
    { name: 'ESIC - ONLY FOR DIALYSIS', icon: <FaHospital className="text-teal-600" /> },
    { name: 'CGHS', icon: <FaHospital className="text-indigo-600" /> },
    { name: 'W.R - ONLY FOR DIALYSIS', icon: <FaCheckCircle className="text-red-600" /> },
    { name: 'FCI', icon: <FaCheckCircle className="text-purple-600" /> },
    { name: 'AAI', icon: <FaShieldAlt className="text-orange-600" /> },
  ];

  return (
    // Main container with padding-top to account for navbar
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section with Title */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Government Schemes
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            EMPANELMENT
          </p>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            We are empaneled with various Government Schemes for Patient Support
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Schemes Grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Our Empaneled Schemes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="flex-shrink-0 text-4xl p-3 bg-gray-50 rounded-full">
                    {scheme.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">
                    {scheme.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Avail Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-12 shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Avail These Schemes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Hospital</h3>
              <p className="text-gray-600 text-sm">
                Bring your valid government scheme ID and necessary documents
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Verification</h3>
              <p className="text-gray-600 text-sm">
                Our staff will verify your documents and guide you
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Treatment</h3>
              <p className="text-gray-600 text-sm">
                Get medical care as per your scheme coverage
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Billing</h3>
              <p className="text-gray-600 text-sm">
                We handle billing and claims as per guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtSchemes;