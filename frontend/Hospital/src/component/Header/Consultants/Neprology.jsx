import React from 'react';
import { FaUserMd, FaStethoscope, FaShieldAlt, FaTint, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';

const Nephrology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Nephrologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Leaders in kidney health, dedicated to managing chronic kidney disease and hypertension.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experts in Kidney Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified nephrologists specializes in diagnosing and treating diseases of the kidneys and urinary system. 
            We are dedicated to providing comprehensive, long-term care to manage chronic conditions, slow disease progression, and improve your quality of life.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Kidney Health</h2>
            <p className="text-gray-600 mb-4">
              We understand that managing kidney disease is a long journey. We are here to be your dedicated partners, providing expert care and support every step of the way.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Diagnostics:</strong> We utilize advanced lab tests, imaging, and kidney biopsies to provide an accurate diagnosis.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Disease Management:</strong> We create personalized plans to slow the progression of kidney disease and manage complications like hypertension and anemia.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Renal Replacement Therapy:</strong> Our experts manage all aspects of dialysis and work closely with the transplant team for those who need it.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Nephrologist consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Nephrology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaTint className="text-cyan-500 mr-3" />Chronic Kidney Disease (CKD)</h3>
              <p className="text-gray-600">
                We provide expert management for all stages of CKD, focusing on slowing progression, managing symptoms, and preparing patients for future renal replacement therapy.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1581094732438-4d0112b2d9a0?q=80&w=2070&auto=format&fit=crop" alt="Abstract visualization of water and filtration" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Dialysis & Hypertension</h3>
              <p className="text-gray-600">
                Our nephrologists oversee and manage dialysis plans to ensure they are effective and comfortable. We also specialize in managing difficult-to-control hypertension related to kidney issues.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Dialysis machine and patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Glomerular & Transplant Care</h3>
              <p className="text-gray-600">
                We have expertise in treating complex inflammatory conditions of the kidney (glomerulonephritis) and provide comprehensive care for patients before and after a kidney transplant.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a medical report" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Nephrologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Nephrologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Julian Vance" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Julian Vance</h3>
                <p className="text-blue-600 mb-3">MD, FASN - Chief of Nephrology</p>
                <p className="text-gray-600 text-sm">A leading expert in chronic kidney disease and hypertension, Dr. Vance is dedicated to providing innovative and compassionate care for his patients.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Lena Petrova" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Lena Petrova</h3>
                <p className="text-blue-600 mb-3">MD - Transplant Nephrologist</p>
                <p className="text-gray-600 text-sm">Specializing in the care of kidney transplant patients, Dr. Petrova works to ensure the best possible outcomes before and after surgery.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FASN - Dialysis Specialist</p>
                <p className="text-gray-600 text-sm">An expert in managing all types of dialysis, Dr. Carter is committed to optimizing treatment plans to improve patients' quality of life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-cyan-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Kidney Health is Our Priority</h2>
          <p className="text-lg mb-6">If you have been diagnosed with a kidney condition or have risk factors, our expert team is here to help.</p>
          <button className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Nephrology Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Nephrology;