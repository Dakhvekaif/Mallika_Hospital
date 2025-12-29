import React from 'react';
import { FaVial, FaMicroscope, FaDna, FaShieldAlt, FaLaptopMedical, FaFileMedical, FaUserNurse, FaFileAlt } from 'react-icons/fa';

const Laboratory = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Clinical Laboratory</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Delivering precise, reliable, and timely diagnostic results to guide your healthcare.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Precision at the Heart of Diagnosis</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art clinical laboratory is a cornerstone of our hospital's diagnostic capabilities. 
            Staffed by a team of experienced pathologists and technologists, we are committed to providing accurate 
            and rapid test results that are essential for effective diagnosis and treatment.
          </p>
        </section>

        {/* State-of-the-Art Technology Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">State-of-the-Art Diagnostics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaVial className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Automated Analyzers</h3>
              <p className="text-gray-600">Advanced equipment ensures high-throughput testing with precision and minimal turnaround time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaMicroscope className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Pathology</h3>
              <p className="text-gray-600">High-resolution digital imaging for accurate and remote consultation on complex cases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaDna className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Molecular Diagnostics</h3>
              <p className="text-gray-600">Cutting-edge genetic and PCR testing for rapid and precise detection of diseases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rigorous Quality Control</h3>
              <p className="text-gray-600">We adhere to strict national and international standards to guarantee the reliability of every test result.</p>
            </div>
          </div>
        </section>

        {/* Comprehensive Range of Tests Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Comprehensive Range of Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaVial className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Hematology & Coagulation</h3>
                <p className="text-gray-600">Complete blood counts, blood typing, and tests for bleeding and clotting disorders.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaLaptopMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Biochemistry</h3>
                <p className="text-gray-600">Essential tests for monitoring kidney function, liver function, electrolytes, and cholesterol.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaDna className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Microbiology & Serology</h3>
                <p className="text-gray-600">Identification of infectious agents and testing for viral and bacterial antibodies.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMicroscope className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Histopathology</h3>
                <p className="text-gray-600">Microscopic examination of tissue samples to diagnose diseases like cancer.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Your Path to Diagnosis Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Path to a Clear Diagnosis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaFileMedical className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Doctor's Order</h3>
              <p className="text-gray-600">Your doctor provides a detailed requisition form for the specific tests you need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUserNurse className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Sample Collection</h3>
              <p className="text-gray-600">Visit our patient service center for a quick and comfortable sample collection by our trained phlebotomists.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaFileAlt className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Receive Your Results</h3>
              <p className="text-gray-600">Your results are securely sent to your doctor and can be made available to you through our patient portal.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Lab Test?</h2>
          <p className="text-lg mb-6">Schedule an appointment for sample collection or find a location near you.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Book an Appointment
          </button>
        </section>

      </div>
    </div>
  );
};

export default Laboratory;