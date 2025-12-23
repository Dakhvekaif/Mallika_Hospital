import React from 'react';
import { FaProcedures, FaUserMd, FaShieldAlt, FaWind, FaHeartbeat, FaBrain, FaBone, FaClipboardCheck, FaBed } from 'react-icons/fa';

const OperatingTheatre = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Operating Theatre (OT)</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A state-of-the-art surgical facility designed for precision, safety, and optimal patient outcomes.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Hub of Surgical Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Operating Theatres are sterile, technologically advanced environments where our expert surgical teams perform a wide range of procedures. 
            We are committed to the highest standards of safety and efficiency, ensuring every patient receives exceptional care.
          </p>
        </section>

        {/* Our Advanced Surgical Suites Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Advanced Surgical Suites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaWind className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laminar Airflow</h3>
              <p className="text-gray-600">Our OTs feature ultra-clean ventilation systems that minimize the risk of airborne contamination and infection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaProcedures className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Imaging</h3>
              <p className="text-gray-600">Intra-operative imaging like C-arms and endoscopy provides real-time guidance for greater surgical precision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrated Technology</h3>
              <p className="text-gray-600">Ceiling-mounted equipment booms and centralized controls create a clutter-free and highly efficient workspace.</p>
            </div>
          </div>
        </section>

        {/* Surgical Specialties Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Surgical Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaBrain className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Neurosurgery</h3>
                <p className="text-gray-600">Complex procedures for the brain, spine, and peripheral nerves.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaHeartbeat className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Cardiothoracic Surgery</h3>
                <p className="text-gray-600">Procedures on the heart, lungs, and major blood vessels.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBone className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Orthopedic Surgery</h3>
                <p className="text-gray-600">Joint replacements, sports medicine, and trauma-related surgeries.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserMd className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">General & Laparoscopic Surgery</h3>
                <p className="text-gray-600">Minimally invasive and open procedures for abdominal and gastrointestinal conditions.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Your Surgical Journey Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Surgical Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaClipboardCheck className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Before Surgery</h3>
              <p className="text-gray-600">You'll have a pre-operative assessment to discuss the procedure, anesthesia, and any questions you may have.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaProcedures className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Day of Surgery</h3>
              <p className="text-gray-600">Our compassionate team will guide you through admission, preparation, and ensure your comfort and safety at every step.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaBed className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">After Surgery</h3>
              <p className="text-gray-600">You'll receive dedicated care in our Post-Anesthesia Care Unit (PACU) and then be moved to your room for recovery.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Expert Surgical Care, When You Need It Most</h2>
          <p className="text-lg mb-6">Our team of renowned surgeons is dedicated to achieving the best possible outcomes for our patients.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Find a Surgeon
          </button>
        </section>

      </div>
    </div>
  );
};

export default OperatingTheatre;