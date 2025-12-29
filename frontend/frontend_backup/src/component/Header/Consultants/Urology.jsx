import React from 'react';
import { FaUserMd, FaStethoscope, FaVenusMars, FaShieldAlt, FaCheckCircle, FaTint } from 'react-icons/fa'; // Corrected: FaKidney -> FaTint

const Urology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Urologists</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Providing expert, compassionate, and discreet care for your urinary and reproductive health.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Leaders in Urologic Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified urologists is dedicated to diagnosing and treating a wide range of conditions affecting the urinary tract and male reproductive system. 
            We combine advanced medical and surgical techniques with a patient-centered approach to ensure your comfort and well-being.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership in Your Health</h2>
            <p className="text-gray-600 mb-4">
              We are committed to providing a confidential and supportive environment where you can feel comfortable discussing your health concerns.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Diagnostics:</strong> We utilize advanced imaging, lab tests, and urodynamic studies to provide an accurate diagnosis.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Treatments:</strong> We offer a full range of therapies, including laser procedures and laparoscopic surgery, to minimize pain and recovery time.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Care:</strong> We take the time to understand your concerns and develop a treatment plan tailored to your individual needs.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Urologist consulting with a patient" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Urology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaTint className="text-cyan-500 mr-3" />Kidney Stones & BPH</h3> {/* Corrected Icon and Color */}
              <p className="text-gray-600">
                We provide effective, minimally invasive treatments for common conditions like kidney stones and benign prostatic hyperplasia (BPH) to relieve symptoms and improve your quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Abstract medical visualization" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-red-500 mr-3" />Urologic Oncology</h3>
              <p className="text-gray-600">
                Our specialists offer expert diagnosis and treatment for cancers of the urinary tract and male reproductive organs, working as part of a multidisciplinary team to provide comprehensive cancer care.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a medical scan" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaVenusMars className="text-purple-500 mr-3" />Men's Health & Female Urology</h3>
              <p className="text-gray-600">
                We provide sensitive and expert care for a range of conditions, including erectile dysfunction, male infertility, pelvic floor disorders, and urinary incontinence.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor in a modern clinic" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Urologists Section - The Main Focus */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Urologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. David Chen" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. David Chen</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Chief of Urology</p>
                <p className="text-gray-600 text-sm">A fellowship-trained expert in urologic oncology and robotic surgery, dedicated to providing cutting-edge care for patients with cancer.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Maria Flores" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Maria Flores</h3>
                <p className="text-blue-600 mb-3">MD, FPMRS - Female Pelvic Medicine Specialist</p>
                <p className="text-gray-600 text-sm">Specializing in female urology and pelvic floor reconstruction, Dr. Flores is dedicated to improving the quality of life for her patients.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Robert Singh" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Robert Singh</h3>
                <p className="text-blue-600 mb-3">MD - Men's Health & Infertility Specialist</p>
                <p className="text-gray-600 text-sm">An expert in male infertility, erectile dysfunction, and BPH, Dr. Singh provides compassionate and effective care for sensitive men's health issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-teal-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Urologic Health is Our Priority</h2>
          <p className="text-lg mb-6">Take the first step towards better health. Schedule a confidential consultation with our experts today.</p>
          <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Discreet Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Urology;