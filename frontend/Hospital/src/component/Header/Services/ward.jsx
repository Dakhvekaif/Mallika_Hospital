import React from 'react';
import { FaBed, FaUserNurse, FaUtensils, FaWifi, FaConciergeBell, FaBaby, FaHeart, FaHome, FaClipboardList } from 'react-icons/fa';

const Ward = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Wards</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A comfortable and supportive environment designed for your recovery and well-being.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comfort & Care During Your Stay</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our inpatient wards are designed to provide a healing environment where you can rest and recover with peace of mind. 
            With a focus on comfort, privacy, and dedicated medical care, we ensure you feel supported every step of the way.
          </p>
        </section>

        {/* Our Ward Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ward Features & Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaBed className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comfortable Rooms</h3>
              <p className="text-gray-600">Well-appointed private and semi-private rooms designed for rest and recovery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaUserNurse className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Nursing Care</h3>
              <p className="text-gray-600">Our compassionate nursing team is available around the clock to assist with your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaUtensils className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nutritional Support</h3>
              <p className="text-gray-600">Healthy, delicious meals tailored to your dietary needs and prepared by expert dietitians.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <FaWifi className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient Entertainment</h3>
              <p className="text-gray-600">Stay connected with complimentary Wi-Fi and access to television and other amenities.</p>
            </div>
          </div>
        </section>

        {/* Types of Wards Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Wards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaConciergeBell className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Wards</h3>
              <p className="text-gray-600">Semi-private and general wards providing excellent care for patients recovering from a wide range of conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBaby className="text-3xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maternity Ward</h3>
              <p className="text-gray-600">A special, nurturing environment for mothers and newborns, featuring private labor and delivery rooms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHeart className="text-3xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Rooms</h3>
              <p className="text-gray-600">For those seeking enhanced privacy and comfort, our private rooms offer a serene space for recovery.</p>
            </div>
          </div>
        </section>
        
        {/* Guide for Patients & Families Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Guide for Patients & Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaClipboardList className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Admission</h3>
              <p className="text-gray-600">Our front desk staff will guide you through a smooth and efficient admission process, ensuring all necessary information is recorded.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaConciergeBell className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">During Your Stay</h3>
              <p className="text-gray-600">Meals are served at scheduled times. Nurses are available at the press of a button, and we have clear visiting hours to support your rest.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHome className="text-3xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discharge</h3>
              <p className="text-gray-600">Our team will provide you with detailed instructions for at-home care, medications, and follow-up appointments to ensure a smooth transition.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Your Stay?</h2>
          <p className="text-lg mb-6">We are here to provide you with all the information you need for a comfortable experience.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Contact Ward Services
          </button>
        </section>

      </div>
    </div>
  );
};

export default Ward;