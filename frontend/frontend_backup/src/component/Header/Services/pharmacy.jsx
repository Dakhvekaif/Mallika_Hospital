import React from 'react';
import { FaPills, FaUserMd, FaClock, FaPrescriptionBottle, FaFileMedical, FaComments, FaHandHoldingMedical } from 'react-icons/fa';

const Pharmacy = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">24/7 Hospital Pharmacy</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your trusted partner for accurate, timely, and compassionate pharmaceutical care.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our hospital pharmacy is an integral part of your healthcare team. We are dedicated to ensuring you receive the right medications, 
            at the right dose, with clear instructions. Our expert pharmacists are here to answer your questions and support your wellness journey.
          </p>
        </section>

        {/* Our Pharmacy Services Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Pharmacy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaPrescriptionBottle className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inpatient & Outpatient</h3>
              <p className="text-gray-600">We efficiently manage prescriptions for patients within the hospital and for those being discharged.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaComments className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medication Counseling</h3>
              <p className="text-gray-600">Our pharmacists provide private consultations to explain your medication, dosage, and potential side effects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick & Easy Refills</h3>
              <p className="text-gray-600">We offer convenient options to refill your prescriptions, saving you time and hassle.</p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaPills className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Comprehensive Stock</h3>
                <p className="text-gray-600">Our pharmacy maintains a wide inventory of prescription and over-the-counter medications to meet your needs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaFileMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Prescription Management</h3>
                <p className="text-gray-600">We work with your doctors to ensure prescriptions are accurate, filled promptly, and safely managed.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserMd className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Medication Therapy Management</h3>
                <p className="text-gray-600">We help you understand your medications better to improve health outcomes and prevent adverse drug events.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandHoldingMedical className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Specialty Medications</h3>
                <p className="text-gray-600">Access to specialized medications for complex conditions, with dedicated support for patients.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How to Get Your Prescription Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Get Your Prescription</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaFileMedical className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Submit Your Prescription</h3>
              <p className="text-gray-600">Have your doctor send it to us electronically, or drop it off at our pharmacy counter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaPills className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. We Fill It with Care</h3>
              <p className="text-gray-600">Our pharmacists review your prescription for accuracy and prepare your medication with precision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaComments className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Pickup & Consultation</h3>
              <p className="text-gray-600">Pick up your order at your convenience. Our pharmacist is available to answer any final questions you may have.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Refill or Have a Question?</h2>
          <p className="text-lg mb-6">Our friendly and knowledgeable pharmacy staff is here to assist you.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Refill Prescription Online
          </button>
        </section>

      </div>
    </div>
  );
};

export default Pharmacy;