import React from 'react';
import { FaUserMd, FaShieldAlt, FaHandHoldingMedical, FaMicroscope, FaCheckCircle, FaHeart } from 'react-icons/fa';

const Proctology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Colorectal Surgery (Proctology)</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Providing expert, compassionate, and discreet care for your colorectal and anorectal health.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Health and Comfort Are Our Priority</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Colorectal Surgery is dedicated to the diagnosis and treatment of conditions affecting the colon, rectum, and anus. 
            We understand these issues can be sensitive, which is why we provide a supportive, confidential environment where you can receive the advanced care you need.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Focus on Diagnosis, Treatment, and Comfort</h2>
            <p className="text-gray-600 mb-4">
              Our approach is centered around patient well-being, utilizing the latest techniques to ensure effective and comfortable treatment.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Confidential & Compassionate Care:</strong> We provide a private and respectful setting, ensuring you feel comfortable discussing your symptoms and treatment options.</span></li>
              <li className="flex items-start"><FaMicroscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> We use state-of-the-art tools like high-resolution anoscopy and colonoscopy for accurate and early diagnosis.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Options:</strong> Whenever possible, we offer minimally invasive and non-surgical treatments that minimize pain and speed up recovery.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1584467735871-8ec4bb12fb12?q=80&w=2070&auto=format&fit=crop" alt="Doctor in a modern consultation room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Conditions We Treat - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Conditions We Treat</h2>
          
          {/* Condition Group 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Common Anorectal Conditions</h3>
              <p className="text-gray-600">
                We provide effective, minimally invasive treatments for a wide range of common and often painful conditions.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hemorrhoids</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Anal Fissures</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Anal Fistulas & Abscesses</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pilonidal Sinus</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Abstract medical technology visualization" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Condition Group 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Complex Colorectal Conditions</h3>
              <p className="text-gray-600">
                Our specialists are highly trained to manage more complex diseases of the colon and rectum using advanced medical and surgical therapies.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Inflammatory Bowel Disease (Crohn's, Ulcerative Colitis)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Diverticular Disease</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Colorectal Cancer Screening & Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pelvic Floor Disorders</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a medical scan" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Specialists Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Colorectal Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Julian Vance" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Julian Vance</h3>
                <p className="text-blue-600 mb-3">MD, FACS, FASCRS - Chief of Colorectal Surgery</p>
                <p className="text-gray-600 text-sm">A fellowship-trained expert in minimally invasive and robotic colorectal surgery, dedicated to providing compassionate and effective patient care.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Aisha Khan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Aisha Khan</h3>
                <p className="text-blue-600 mb-3">MD - Colorectal Surgeon</p>
                <p className="text-gray-600 text-sm">Specializing in the treatment of inflammatory bowel disease and pelvic floor disorders, Dr. Khan combines surgical expertise with a deep commitment to patient well-being.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Mark Robinson" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Mark Robinson</h3>
                <p className="text-blue-600 mb-3">MD, FRCS - Colorectal Surgeon</p>
                <p className="text-gray-600 text-sm">With a focus on colon and rectal cancer surgery, Dr. Robinson is skilled in advanced techniques that preserve function and improve outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Take the First Step Towards Relief</h2>
          <p className="text-lg mb-6">Don't let discomfort or worry hold you back. Schedule a confidential consultation with our experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Confidential Consultation
          </button>
        </section>

      </div>
    </div>
  );
};

export default Proctology;