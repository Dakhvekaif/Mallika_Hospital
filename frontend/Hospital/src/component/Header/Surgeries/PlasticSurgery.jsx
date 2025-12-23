import React from 'react';
import { FaHandHoldingMedical, FaStar, FaEye, FaHeart, FaUserMd, FaComments, FaBandAid } from 'react-icons/fa';

const PlasticSurgery = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plastic & Reconstructive Surgery</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Where artistry and medical science converge to restore form, function, and confidence.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Harmony of Art and Science</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Plastic and Reconstructive Surgery is dedicated to enhancing and restoring natural beauty. 
            We offer a full spectrum of procedures, from life-changing reconstructive surgeries to personalized cosmetic enhancements, 
            all performed with the highest level of skill and artistic precision.
          </p>
        </section>

        {/* Our Services - Side-by-Side */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reconstructive Surgery */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaHandHoldingMedical className="text-blue-600 mr-3" />
              Reconstructive Surgery
            </h2>
            <p className="text-gray-600 mb-6">
              We are committed to restoring function and a natural appearance for patients who have experienced trauma, 
              cancer, or congenital conditions. Our goal is to help you heal and move forward with confidence.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStar className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Breast Reconstruction:</strong> Restoring the breast after mastectomy.</span></li>
              <li className="flex items-start"><FaStar className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Skin Cancer Removal:</strong> Excising and repairing skin defects with aesthetic precision.</span></li>
              <li className="flex items-start"><FaStar className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Scar Revision:</strong> Minimizing the appearance of scars from injury or previous surgery.</span></li>
              <li className="flex items-start"><FaStar className="text-green-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Cleft Lip & Palate Repair:</strong> Correcting congenital facial differences.</span></li>
            </ul>
          </div>

          {/* Cosmetic Surgery */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaStar className="text-purple-600 mr-3" />
              Cosmetic Surgery
            </h2>
            <p className="text-gray-600 mb-6">
              Enhance your natural beauty and boost your self-confidence with our personalized cosmetic procedures. 
              We work closely with you to understand your aesthetic goals and deliver results that look natural and harmonious.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaEye className="text-purple-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Facial Procedures:</strong> Facelift, Rhinoplasty (Nose Job), Blepharoplasty (Eyelid Surgery).</span></li>
              <li className="flex items-start"><FaEye className="text-purple-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Body Contouring:</strong> Liposuction, Tummy Tuck (Abdominoplasty), Body Lifts.</span></li>
              <li className="flex items-start"><FaEye className="text-purple-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Breast Surgery:</strong> Augmentation, Lift, and Reduction.</span></li>
              <li className="flex items-start"><FaEye className="text-purple-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Non-Surgical:</strong> Botox, Fillers, and Laser Treatments.</span></li>
            </ul>
          </div>
        </section>

        {/* Your Journey to Transformation Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Journey to Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaComments className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Personalized Consultation</h3>
              <p className="text-gray-600">Your journey begins with a private, in-depth consultation. We listen to your goals, assess your needs, and develop a customized treatment plan tailored just for you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUserMd className="text-3xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. The Procedure</h3>
              <p className="text-gray-600">Your surgery is performed in our state-of-the-art facility by our expert surgeons, using the most advanced techniques to ensure your safety and achieve the best possible outcome.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBandAid className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Recovery & Support</h3>
              <p className="text-gray-600">Our compassionate team provides dedicated post-operative care and follow-up to support your recovery, ensuring you are comfortable and informed every step of the way.</p>
            </div>
          </div>
        </section>

        {/* Meet Our Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Expert Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Isabella Rossi" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Isabella Rossi</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Head of Department</p>
                <p className="text-gray-600 text-sm">Renowned for her artistic approach to facial rejuvenation and breast surgery. Dr. Rossi is dedicated to achieving natural, elegant results.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Julian Vance" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Julian Vance</h3>
                <p className="text-blue-600 mb-3">MD, FRCS - Plastic Surgeon</p>
                <p className="text-gray-600 text-sm">Specializing in complex reconstructive microsurgery and advanced body contouring procedures. Dr. Vance combines technical skill with deep compassion.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Aisha Khan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aisha Khan</h3>
                <p className="text-blue-600 mb-3">MD, DABPS - Plastic Surgeon</p>
                <p className="text-gray-600 text-sm">With a focus on non-surgical aesthetics and minimally invasive techniques, Dr. Khan helps patients achieve their goals with little to no downtime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Options?</h2>
          <p className="text-lg mb-6">Take the first step towards a new you. Schedule a confidential consultation with our experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Book a Confidential Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default PlasticSurgery;