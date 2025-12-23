import React from 'react';
import { FaTint, FaUserMd, FaClock, FaTv, FaWater, FaHandHoldingMedical, FaCalendarCheck, FaHeartbeat } from 'react-icons/fa';

const DialysisCenter = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dialysis Center</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Providing comprehensive and compassionate renal care to help you live a fuller, healthier life.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partner in Your Renal Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Dialysis Center is a state-of-the-art facility dedicated to providing life-sustaining treatment for patients with chronic kidney disease. 
            We combine advanced technology with a warm, supportive environment to ensure your comfort and well-being during every visit.
          </p>
        </section>

        {/* Our Center's Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Designed for Your Comfort</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaTv className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Entertainment</h3>
              <p className="text-gray-600">Each station is equipped with a personal television and Wi-Fi to help you relax and pass the time comfortably.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaTint className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Machines</h3>
              <p className="text-gray-600">We use the latest hemodialysis machines for efficient, safe, and gentle treatments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaUserMd className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Staff</h3>
              <p className="text-gray-600">Our team of experienced nephrologists and certified dialysis nurses provides compassionate, specialized care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">We offer flexible scheduling options, including evening and weekend shifts, to fit your lifestyle.</p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaWater className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">In-Center Hemodialysis</h3>
                <p className="text-gray-600">We provide comfortable, supervised hemodialysis sessions where your blood is filtered by a machine to remove waste and excess fluid.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandHoldingMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Peritoneal Dialysis (PD) Support</h3>
                <p className="text-gray-600">We offer comprehensive training and ongoing support for patients who choose to perform dialysis at home, giving them greater independence.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Your Treatment Journey Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Treatment Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCalendarCheck className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Initial Consultation</h3>
              <p className="text-gray-600">You'll meet with our nephrology team to discuss your health, create a personalized treatment plan, and schedule your sessions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHeartbeat className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Your Dialysis Session</h3>
              <p className="text-gray-600">During your 3-4 hour session, our nurses will monitor you closely. You can read, watch TV, nap, or socialize with other patients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHandHoldingMedical className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Ongoing Support</h3>
              <p className="text-gray-600">We provide continuous care, including regular check-ups, dietary counseling from our dietitians, and social work support.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey with Us?</h2>
          <p className="text-lg mb-6">Our caring team is here to answer your questions and support you every step of the way.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Request a Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default DialysisCenter;