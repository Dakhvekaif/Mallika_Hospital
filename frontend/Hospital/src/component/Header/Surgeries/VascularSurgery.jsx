import React from 'react';
import { FaHeartbeat, FaUserMd, FaStethoscope, FaCogs, FaCheckCircle, FaRunning } from 'react-icons/fa';

const VascularSurgery = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vascular Surgery</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Expert care for your circulatory system, restoring blood flow and preventing life-threatening vascular disease.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Leaders in Circulatory Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Vascular Surgery team specializes in treating diseases of the arteries and veins, excluding the heart and brain. 
            We use the latest minimally invasive and surgical techniques to manage complex conditions, save limbs, and prevent strokes.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Modern Approach to Vascular Care</h2>
            <p className="text-gray-600 mb-4">
              We are dedicated to providing the most effective and least invasive treatment options to ensure your safety and a speedy recovery.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaCogs className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Minimally Invasive Focus:</strong> We specialize in endovascular surgery (stents, angioplasty) through small incisions, reducing pain and recovery time.</span></li>
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> Our non-invasive vascular lab provides precise imaging for accurate diagnosis and treatment planning.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Management:</strong> We provide long-term care for chronic conditions like PAD, helping you manage your health and improve your quality of life.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Vascular surgeon looking at a 3D model" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Conditions We Treat & Solutions We Provide</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Aneurysm & Stroke Prevention</h3>
              <p className="text-gray-600">
                We treat weak areas in blood vessel walls (aneurysms) and blockages in the neck arteries that can lead to a stroke, using life-saving procedures.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Endovascular Stent Grafting</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Carotid Endarterectomy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Open Aneurysm Repair</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="Abstract visualization of blood flow" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Relieving Leg Pain & Peripheral Artery Disease (PAD)</h3>
              <p className="text-gray-600">
                We restore blood flow to the legs for patients suffering from PAD, relieving pain, healing wounds, and preventing amputation.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Angioplasty & Stenting</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Atherectomy (Plaque Removal)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Bypass Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Person walking comfortably outdoors" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Vein Care & Circulation</h3>
              <p className="text-gray-600">
                We offer a range of treatments for varicose veins and serious conditions like blood clots (DVT) to improve both appearance and vascular health.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Sclerotherapy & Vein Ablation</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> DVT Diagnosis & Management</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Dialysis Access Creation</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Doctor performing a vascular ultrasound" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Vascular Specialists Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Vascular Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. David Chen" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. David Chen</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Chief of Vascular Surgery</p>
                <p className="text-gray-600 text-sm">A nationally recognized expert in complex aortic aneurysm repair and endovascular procedures, dedicated to pioneering new techniques.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Maria Flores" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Maria Flores</h3>
                <p className="text-blue-600 mb-3">MD - Vascular Surgeon</p>
                <p className="text-gray-600 text-sm">Specializing in limb salvage and the treatment of peripheral artery disease, Dr. Flores is passionate about improving her patients' quality of life.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. Robert Singh" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Robert Singh</h3>
                <p className="text-blue-600 mb-3">MD, RPVI - Vascular Surgeon</p>
                <p className="text-gray-600 text-sm">An expert in venous disease and stroke prevention, Dr. Singh is skilled in both minimally invasive and open surgical techniques.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Vascular Health</h2>
          <p className="text-lg mb-6">If you have risk factors or symptoms, a screening could save your life. Schedule a consultation with our experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule a Vascular Screening
          </button>
        </section>

      </div>
    </div>
  );
};

export default VascularSurgery;