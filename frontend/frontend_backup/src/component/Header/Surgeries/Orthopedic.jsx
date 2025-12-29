import React from 'react';
import { FaBone, FaRunning, FaUserMd, FaHandHoldingMedical, FaWheelchair, FaCheckCircle} from 'react-icons/fa';

const Orthopedic = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Orthopedics</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Dedicated to restoring your mobility, relieving your pain, and getting you back to the life you love.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Musculoskeletal Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Orthopedics department offers comprehensive care for a wide range of conditions affecting your bones, joints, ligaments, tendons, and muscles. 
            From conservative therapies to advanced surgical procedures, our expert team is dedicated to helping you regain strength, function, and mobility.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Full Spectrum of Bone & Joint Care</h2>
            <p className="text-gray-600 mb-4">
              We believe in a personalized approach to your care, starting with the most conservative treatments and advancing to surgery only when necessary.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Non-Surgical Treatments:</strong> We offer physical therapy, medication management, and injections to effectively manage pain and improve function.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Surgery:</strong> Whenever possible, we use arthroscopic and other advanced techniques to minimize pain and accelerate recovery.</span></li>
              <li className="flex items-start"><FaBone className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Complex Reconstruction:</strong> Our surgeons are experts in joint replacement, spine surgery, and trauma care for the most challenging conditions.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Surgeon analyzing a knee model" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Joint Replacement</h3>
              <p className="text-gray-600">
                Relieve chronic pain and restore function with our advanced joint replacement procedures. We specialize in minimally invasive hip and knee replacements to help you get back on your feet faster.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Total & Partial Knee Replacement</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Total Hip Replacement</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Shoulder & Elbow Replacement</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Advanced surgical technology" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sports Medicine</h3>
              <p className="text-gray-600">
                We provide specialized care for athletes of all levels. Our focus is on the prevention, diagnosis, and treatment of sports-related injuries, helping you return to your peak performance safely and quickly.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Arthroscopic Knee & Shoulder Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> ACL & Ligament Reconstruction</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Concussion Management</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Athlete training with physiotherapist" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Spine Care</h3>
              <p className="text-gray-600">
                Our spine specialists offer expert diagnosis and treatment for back and neck pain. We offer a full range of options, from physical therapy to complex spinal reconstruction, to alleviate pain and restore stability.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Minimally Invasive Spine Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Herniated Disc Treatment</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Spinal Fusion & Decompression</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor examining a spine model" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Orthopedic Specialists Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Orthopedic Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. David Chen" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. David Chen</h3>
                <p className="text-blue-600 mb-3">MD, FAAOS - Chief of Orthopedics</p>
                <p className="text-gray-600 text-sm">A fellowship-trained specialist in hip and knee replacement, renowned for his expertise in minimally invasive and robotic-assisted surgery.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Sarah Jenkins" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sarah Jenkins</h3>
                <p className="text-blue-600 mb-3">MD - Sports Medicine Specialist</p>
                <p className="text-gray-600 text-sm">Dedicated to helping athletes recover from injury. Dr. Jenkins specializes in arthroscopic surgery of the shoulder and knee.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Michael Vance" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Michael Vance</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Spine Specialist</p>
                <p className="text-gray-600 text-sm">An expert in the surgical and non-surgical treatment of complex spinal disorders, focusing on restoring patient quality of life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get Back to Your Active Life</h2>
          <p className="text-lg mb-6">Don't let pain hold you back. Schedule a consultation with our orthopedic experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule an Appointment
          </button>
        </section>

      </div>
    </div>
  );
};

export default Orthopedic;