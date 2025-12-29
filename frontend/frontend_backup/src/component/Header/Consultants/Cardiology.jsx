import React from 'react';
import { FaHeartbeat, FaUserMd, FaStethoscope, FaProcedures, FaLaptopMedical, FaClock } from 'react-icons/fa';

const Cardiology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Cardiologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Leaders in heart health, dedicated to providing you with expert, personalized, and compassionate cardiac care.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Excellence in Cardiovascular Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified cardiologists is at the forefront of diagnosing and treating heart and vascular diseases. 
            We combine years of experience with the latest medical advancements to ensure you receive the highest standard of care, tailored to your unique needs.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Heart</h2>
            <p className="text-gray-600 mb-4">
              We believe in building a strong, collaborative relationship with our patients, founded on trust, education, and shared decision-making.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Diagnostics:</strong> We utilize state-of-the-art non-invasive and invasive testing to achieve an accurate and timely diagnosis.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Treatment Plans:</strong> Your cardiologist will work with you to create a treatment plan that fits your lifestyle and health goals.</span></li>
              <li className="flex items-start"><FaHeartbeat className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Preventative Focus:</strong> We are dedicated to helping you manage risk factors and prevent heart disease before it starts.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Cardiologist consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Cardiology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaProcedures className="text-red-500 mr-3" />Interventional Cardiology</h3>
              <p className="text-gray-600">
                Our interventional cardiologists specialize in minimally invasive procedures to open blocked arteries, such as angioplasty and stenting, to treat heart attacks and coronary artery disease.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Cardiac catheterization procedure" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-blue-500 mr-3" />Clinical Cardiology & Heart Failure</h3>
              <p className="text-gray-600">
                We provide comprehensive, non-invasive care for a wide range of heart conditions, including hypertension, heart failure, and valve disease, focusing on long-term management and improving quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Doctor listening to a patient's heart" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaLaptopMedical className="text-purple-500 mr-3" />Electrophysiology (EP)</h3>
              <p className="text-gray-600">
                Our electrophysiologists are experts in diagnosing and treating abnormal heart rhythms (arrhythmias) with advanced procedures like ablation and the implantation of pacemakers and defibrillators.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Electrophysiology lab" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Cardiologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Cardiologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Evelyn Reed" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Evelyn Reed</h3>
                <p className="text-blue-600 mb-3">MD, FACC - Chief of Cardiology</p>
                <p className="text-gray-600 text-sm">A leading interventional cardiologist with over 20 years of experience in complex coronary interventions and structural heart disease.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FACC - Clinical Cardiologist</p>
                <p className="text-gray-600 text-sm">Specializing in heart failure and preventative cardiology, Dr. Carter is dedicated to helping patients manage chronic conditions and lead healthier lives.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aisha Khan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aisha Khan</h3>
                <p className="text-blue-600 mb-3">MD, FHRS - Electrophysiologist</p>
                <p className="text-gray-600 text-sm">An expert in the management of complex arrhythmias, Dr. Khan is skilled in the latest ablation techniques and device implantation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-red-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Heart Health is Our Priority</h2>
          <p className="text-lg mb-6">Take the first step towards a healthier heart. Schedule a consultation with one of our expert cardiologists today.</p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Book a Cardiology Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Cardiology;