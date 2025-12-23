import React from 'react';
import { FaUserMd, FaStethoscope, FaShieldAlt, FaNotesMedical, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';

const Gastroenterology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Gastroenterologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Experts in digestive health, dedicated to diagnosing and treating disorders of your GI tract with precision and compassion.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Leaders in Digestive Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified gastroenterologists specializes in preventing, diagnosing, and treating a wide range of conditions affecting the esophagus, stomach, intestines, liver, and pancreas. 
            We use advanced endoscopic procedures to provide accurate diagnoses and effective treatments.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Digestive Wellness</h2>
            <p className="text-gray-600 mb-4">
              We are committed to providing you with clear answers and effective treatment plans in a comfortable and confidential setting.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Endoscopy:</strong> We perform a full range of diagnostic and therapeutic endoscopic procedures with precision and patient comfort.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Preventative Care:</strong> We are strong advocates for life-saving cancer screenings, such as colonoscopies, to detect and prevent disease early.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Disease Management:</strong> We provide long-term, personalized care for complex conditions like IBD, IBS, and liver disease.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Gastroenterologist consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Gastroenterology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaNotesMedical className="text-orange-500 mr-3" />Upper GI Endoscopy</h3>
              <p className="text-gray-600">
                We perform upper endoscopies (EGD) to diagnose and treat conditions of the esophagus, stomach, and small intestine, such as GERD, ulcers, and celiac disease.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Abstract medical visualization" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Colonoscopy & Cancer Screening</h3>
              <p className="text-gray-600">
                Our experts perform colonoscopies to screen for colorectal cancer, detect and remove polyps, and investigate symptoms like bleeding and changes in bowel habits.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a medical scan" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Liver & Pancreatic Disease</h3>
              <p className="text-gray-600">
                We provide comprehensive care for complex conditions like hepatitis, cirrhosis, fatty liver disease, and pancreatitis, working to manage symptoms and improve liver function.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a medical report" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Gastroenterologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Gastroenterologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Evelyn Reed" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Evelyn Reed</h3>
                <p className="text-blue-600 mb-3">MD, FACG - Chief of Gastroenterology</p>
                <p className="text-gray-600 text-sm">A fellowship-trained expert in advanced endoscopy and inflammatory bowel disease (IBD), dedicated to providing cutting-edge digestive care.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD, FAASLD - Hepatologist</p>
                <p className="text-gray-600 text-sm">An expert in liver diseases, Dr. Carter provides comprehensive care for patients with hepatitis, cirrhosis, and liver cancer.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aisha Khan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aisha Khan</h3>
                <p className="text-blue-600 mb-3">MD, FACG - Gastroenterologist</p>
                <p className="text-gray-600 text-sm">Specializing in motility disorders and functional GI conditions, Dr. Khan is dedicated to improving her patients' quality of life through personalized care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-teal-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Digestive Health is Our Priority</h2>
          <p className="text-lg mb-6">Don't ignore digestive symptoms. Schedule a consultation with our experts to get the answers and care you need.</p>
          <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a GI Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Gastroenterology;