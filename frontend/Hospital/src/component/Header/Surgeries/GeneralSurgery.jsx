import React from 'react';
import { FaUserMd, FaProcedures, FaHandHoldingMedical, FaShieldAlt, FaCheckCircle, FaUserFriends } from 'react-icons/fa';

const GeneralSurgery = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">General Surgery</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Expert surgical care for a wide range of conditions, using advanced techniques for a faster recovery.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction & Why Choose Us Combined */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Surgical Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our General Surgery department provides comprehensive care for conditions that may require surgical intervention. 
            We are dedicated to providing the safest and most effective surgical treatments, from diagnosis to post-operative recovery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUserMd className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert-Led Care</h3>
              <p className="text-gray-600">Our surgeries are performed by board-certified surgeons with years of experience.</p>
            </div>
            <div className="text-center">
              <FaProcedures className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minimally Invasive Techniques</h3>
              <p className="text-gray-600">We specialize in laparoscopic surgery, leading to less pain, smaller scars, and quicker recovery.</p>
            </div>
            <div className="text-center">
              <FaHandHoldingMedical className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">Our team supports you at every step, from pre-op education to post-operative follow-up care.</p>
            </div>
          </div>
        </section>

        {/* Conditions We Treat - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
            <p className="text-gray-600 mb-4">Our team is skilled in diagnosing and surgically managing a wide variety of conditions, including:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hernias (Inguinal, Umbilical, Incisional)</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Gallbladder Disease and Gallstones</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Appendicitis</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Stomach and Intestinal Issues</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Skin and Soft Tissue Lesions</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Thyroid and Parathyroid Disorders</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Surgeons consulting" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Our Procedures - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Surgical Procedures</h2>
          
          {/* Procedure 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Laparoscopic Surgery</h3>
              <p className="text-gray-600">
                A minimally invasive technique where small incisions and a camera are used to perform surgery. 
                It's commonly used for gallbladder removal, hernia repairs, and appendectomies, resulting in faster recovery and less scarring.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Endocrine Surgery</h3>
              <p className="text-gray-600">
                We perform delicate surgeries on the endocrine glands, such as the thyroid, parathyroid, and adrenal glands. 
                Our expertise ensures precise removal of tumors or glands while preserving surrounding structures.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Alice Chen" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Alice Chen</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Chief of Surgery</p>
                <p className="text-gray-600 text-sm">Dr. Chen is a board-certified surgeon with over 20 years of experience in advanced laparoscopic and oncologic surgery.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FRCSC - General Surgeon</p>
                <p className="text-gray-600 text-sm">Specializing in minimally invasive hernia repair and bariatric surgery, Dr. Carter is dedicated to patient-centered care.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Sara Davis" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sara Davis</h3>
                <p className="text-blue-600 mb-3">MD, ABS - General Surgeon</p>
                <p className="text-gray-600 text-sm">With a focus on breast surgery and endocrine procedures, Dr. Davis combines surgical expertise with compassionate care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Take the Next Step Towards Better Health</h2>
          <p className="text-lg mb-6">If you or a loved one requires surgical consultation, our expert team is here to help.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default GeneralSurgery;