import React from 'react';
import { FaUserMd, FaUsers, FaShieldAlt, FaHandHoldingMedical, FaHeartbeat, FaCheckCircle } from 'react-icons/fa';

const OncoSurgery = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Surgical Oncology</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A leader in the fight against cancer with advanced, compassionate, and personalized surgical care.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Expertise at the Forefront of Cancer Treatment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Surgical Oncology department is dedicated to providing the most advanced and effective surgical treatments for cancer. 
            Our fellowship-trained surgeons work as part of a multidisciplinary team to create a personalized treatment plan 
            focused on removing cancer while preserving your quality of life.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive & Personalized Care</h2>
            <p className="text-gray-600 mb-4">
              We believe in treating the whole person, not just the disease. Our approach is built on three core principles:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaUsers className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Multidisciplinary Tumor Board:</strong> Your case is reviewed by a team of experts, including medical and radiation oncologists, radiologists, and pathologists, to ensure the most comprehensive plan.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Surgical Techniques:</strong> We specialize in minimally invasive and robotic-assisted surgeries that lead to less pain, faster recovery, and better outcomes.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Compassionate Support:</strong> From diagnosis to recovery, our team provides emotional and physical support, guiding you and your family through every step.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Doctor consulting with patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Surgical Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Surgical Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Breast Cancer Surgery</h3>
              <p className="text-gray-600">
                We offer the full spectrum of breast-conserving and reconstructive procedures. Our goal is to remove the cancer effectively while achieving the best possible aesthetic outcome.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Lumpectomy & Mastectomy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Sentinel Lymph Node Biopsy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Immediate Breast Reconstruction</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Advanced surgical technology" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gastrointestinal Oncology</h3>
              <p className="text-gray-600">
                Our surgeons are highly skilled in complex procedures for cancers of the digestive tract, often using minimally invasive techniques to improve recovery.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Liver & Pancreatic Resections</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Esophagectomy & Gastrectomy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Colon & Rectal Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thoracic Oncology</h3>
              <p className="text-gray-600">
                We provide advanced surgical care for cancers in the chest cavity, utilizing video-assisted thoracoscopic surgery (VATS) and robotic-assisted techniques for a less invasive approach.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Lung Cancer Resection (Lobectomy)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Mediastinal Tumor Removal</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Esophageal Cancer Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Robotic surgery interface" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Surgical Oncologists Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Surgical Oncologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Marcus Thorne" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Marcus Thorne</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Chief of Surgical Oncology</p>
                <p className="text-gray-600 text-sm">A nationally recognized expert in complex gastrointestinal and pancreatic cancers, dedicated to innovative surgical techniques.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Elena Petrova" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Elena Petrova</h3>
                <p className="text-blue-600 mb-3">MD, PhD - Breast Surgical Oncologist</p>
                <p className="text-gray-600 text-sm">Specializing in oncoplastic breast surgery, Dr. Petrova combines cancer removal with advanced reconstructive techniques for optimal outcomes.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Rajiv Singh" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Rajiv Singh</h3>
                <p className="text-blue-600 mb-3">MD, FRCS - Thoracic Surgical Oncologist</p>
                <p className="text-gray-600 text-sm">A leader in minimally invasive and robotic thoracic surgery, offering patients less pain and a quicker return to a normal life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">A Dedicated Partner in Your Care</h2>
          <p className="text-lg mb-6">If you are facing a cancer diagnosis, our expert team is here to provide the advanced care and support you need.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Request an Oncology Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default OncoSurgery;