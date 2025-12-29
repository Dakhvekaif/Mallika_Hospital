import React from 'react';
import { FaBrain, FaUserMd, FaStethoscope, FaLaptopMedical, FaBolt, FaRunning, FaHeartbeat } from 'react-icons/fa';

const Neurology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Neurologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Leaders in diagnosing and treating disorders of the brain, spinal cord, and nervous system.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Excellence in Neurological Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified neurologists is dedicated to providing expert care for a wide range of neurological conditions. 
            We combine advanced diagnostic capabilities with a compassionate approach to develop personalized treatment plans that improve quality of life.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Brain Health</h2>
            <p className="text-gray-600 mb-4">
              We believe in a collaborative approach, working closely with you and your family to understand your symptoms and find the best path forward.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> We utilize state-of-the-art tools like EEG, EMG, and advanced neuroimaging to provide precise and accurate diagnoses.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Non-Surgical Treatment:</strong> Our focus is on managing conditions through medication, lifestyle changes, and other non-invasive therapies.</span></li>
              <li className="flex items-start"><FaBrain className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Long-Term Management:</strong> We are committed to being your long-term partner in managing chronic neurological diseases and helping you live well.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Neurologist consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Neurology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Stroke & Cerebrovascular Disease</h3>
              <p className="text-gray-600">
                Our team provides rapid and expert care for stroke patients and focuses on preventing future strokes through risk factor management.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a brain scan" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaBolt className="text-yellow-500 mr-3" />Epilepsy & Seizure Disorders</h3>
              <p className="text-gray-600">
                We offer comprehensive evaluation and management for epilepsy, using advanced EEG monitoring and the latest medical therapies to control seizures.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="EEG monitoring machine" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaRunning className="text-green-500 mr-3" />Movement Disorders</h3>
              <p className="text-gray-600">
                Our specialists provide expert care for conditions like Parkinson's disease, tremors, and dystonia, focusing on medication management and improving function.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Patient in physical therapy" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Neurologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Neurologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aris Thorne" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aris Thorne</h3>
                <p className="text-blue-600 mb-3">MD, FAAN - Chief of Neurology</p>
                <p className="text-gray-600 text-sm">A leading expert in stroke and cerebrovascular disease, dedicated to pioneering new protocols for acute stroke treatment and prevention.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Lena Petrova" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Lena Petrova</h3>
                <p className="text-blue-600 mb-3">MD - Epilepsy Specialist</p>
                <p className="text-gray-600 text-sm">Fellowship-trained in epilepsy and clinical neurophysiology, Dr. Petrova is an expert in the diagnosis and management of complex seizure disorders.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Ben Carter" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ben Carter</h3>
                <p className="text-blue-600 mb-3">MD - Movement Disorders Specialist</p>
                <p className="text-gray-600 text-sm">Specializing in the care of patients with Parkinson's disease and other movement disorders, Dr. Carter focuses on improving quality of life through advanced therapies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Brain Health is Our Priority</h2>
          <p className="text-lg mb-6">If you are experiencing neurological symptoms, don't wait. Schedule a consultation with our experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Book a Neurology Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Neurology;