import React from 'react';
import { FaUserMd, FaHandHoldingMedical, FaSearch, FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Dermatology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619697-f3e534f40f5f?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Dermatologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Experts in medical, surgical, and cosmetic care for your skin, hair, and nails.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Science and Art for Healthy Skin</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified dermatologists is dedicated to the health and beauty of your skin. 
            We offer comprehensive medical, surgical, and cosmetic services to help you achieve and maintain healthy, radiant skin at every stage of life.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Personalized Approach to Skin Health</h2>
            <p className="text-gray-600 mb-4">
              We believe that healthy skin is a reflection of overall wellness. We combine medical expertise with the latest technology to provide you with the best possible care.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaSearch className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Accurate Diagnosis:</strong> We use advanced diagnostic tools, including dermoscopy and skin biopsies, to diagnose skin conditions accurately.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Medical & Cosmetic Expertise:</strong> Our dermatologists are skilled in treating complex diseases and providing advanced aesthetic treatments.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Plans:</strong> We create a customized treatment plan tailored to your unique skin type, concerns, and goals.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Dermologist examining a patient's skin" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-red-500 mr-3" />Medical Dermatology</h3>
              <p className="text-gray-600">
                We diagnose and treat a wide range of skin, hair, and nail conditions, including acne, eczema, psoriasis, and skin infections.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Close up of a dermatoscope on skin" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeart className="text-pink-500 mr-3" />Cosmetic Dermatology</h3>
              <p className="text-gray-600">
                Enhance your natural beauty with our advanced cosmetic procedures, including Botox, fillers, laser resurfacing, and chemical peels.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="Cosmetic dermatology treatment" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Skin Cancer Surgery</h3>
              <p className="text-gray-600">
                We offer expert skin cancer screenings and perform surgical procedures like Mohs surgery to remove skin cancer with precision and minimize scarring.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a mole" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Dermatologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Dermatologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Isabella Rossi" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Isabella Rossi</h3>
                <p className="text-blue-600 mb-3">MD, FAAD - Chief of Dermatology</p>
                <p className="text-gray-600 text-sm">A board-certified dermatologist with a special interest in cosmetic dermatology and laser surgery, dedicated to helping patients look and feel their best.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Julian Vance" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Julian Vance</h3>
                <p className="text-blue-600 mb-3">MD, FAAD - Mohs Surgeon</p>
                <p className="text-gray-600 text-sm">A fellowship-trained expert in Mohs micrographic surgery for skin cancer, ensuring the highest cure rates and best cosmetic outcomes.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aisha Khan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aisha Khan</h3>
                <p className="text-blue-600 mb-3">MD, FAAD - Medical Dermatologist</p>
                <p className="text-gray-600 text-sm">Specializing in complex medical conditions like psoriasis and autoimmune diseases, Dr. Khan provides compassionate and effective care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-teal-500 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Love the Skin You're In</h2>
          <p className="text-lg mb-6">Whether you have a medical concern or a cosmetic goal, our expert dermatologists are here to help.</p>
          <button className="bg-white text-teal-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Book a Dermatology Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Dermatology;