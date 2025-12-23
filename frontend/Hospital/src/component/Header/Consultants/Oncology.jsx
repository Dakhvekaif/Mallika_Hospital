import React from 'react';
import { FaUserMd, FaRadiation, FaFlask, FaShieldAlt, FaUsers, FaHandHoldingMedical } from 'react-icons/fa';

const Oncology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Oncologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Providing advanced, compassionate, and comprehensive medical care for patients on their cancer journey.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership in Your Cancer Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Oncology is dedicated to providing state-of-the-art, evidence-based cancer treatment. 
            Our team of medical and radiation oncologists works collaboratively to create a personalized treatment plan that focuses on both fighting the disease and supporting your overall well-being.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive & Compassionate Care</h2>
            <p className="text-gray-600 mb-4">
              We treat the whole person, not just the disease. Our approach is built on three core principles:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaUsers className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Multidisciplinary Team:</strong> Your case is reviewed by our Tumor Board, ensuring you benefit from the combined expertise of medical, radiation, and surgical oncologists.</span></li>
              <li className="flex items-start"><FaRadiation className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Therapies:</strong> We offer the latest in medical oncology (chemo, immunotherapy) and radiation therapy to provide the most effective treatment options.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Supportive Services:</strong> We provide comprehensive support, including pain management, nutritional counseling, and emotional support to help you through treatment.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Oncologist consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaFlask className="text-purple-500 mr-3" />Medical Oncology</h3>
              <p className="text-gray-600">
                Our medical oncologists specialize in the use of powerful medications to treat cancer, including chemotherapy, targeted therapy, and immunotherapy, which helps your own body fight cancer.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Pharmacist preparing chemotherapy" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaRadiation className="text-teal-500 mr-3" />Radiation Oncology</h3>
              <p className="text-gray-600">
                Our radiation oncologists use the latest technology to deliver precise doses of radiation to cancer cells, minimizing damage to surrounding healthy tissue and maximizing effectiveness.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Linear accelerator for radiation therapy" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Supportive & Palliative Care</h3>
              <p className="text-gray-600">
                We are committed to your quality of life. Our team provides expert management of treatment side effects, pain relief, and emotional support for you and your family.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Support group or counseling session" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Oncologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Oncologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Marcus Thorne" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Marcus Thorne</h3>
                <p className="text-blue-600 mb-3">MD, PhD - Chief of Oncology</p>
                <p className="text-gray-600 text-sm">A renowned expert in hematology and medical oncology, Dr. Thorne is dedicated to pioneering new treatments for leukemia and lymphoma.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Elena Petrova" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Elena Petrova</h3>
                <p className="text-blue-600 mb-3">MD - Medical Oncologist</p>
                <p className="text-gray-600 text-sm">Specializing in breast and gastrointestinal cancers, Dr. Petrova is passionate about using targeted therapy and immunotherapy to provide personalized care.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FASTRO - Radiation Oncologist</p>
                <p className="text-gray-600 text-sm">An expert in the latest radiation techniques, including SBRT and IMRT, Dr. Carter is focused on delivering highly precise and effective treatments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Find Hope and Expert Care</h2>
          <p className="text-lg mb-6">You are not alone in this fight. Our dedicated team is here to support you every step of the way.</p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Request an Oncology Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Oncology;