import React from 'react';
import { FaEye, FaUserMd, FaMicroscope, FaShieldAlt, FaCheckCircle, FaHeart } from 'react-icons/fa';

const Ophthalmology = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c7733197e?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ophthalmology</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Dedicated to protecting and restoring your vision with advanced medical and surgical eye care.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Clear Vision for Your Eye Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Ophthalmology offers comprehensive care for a wide range of eye conditions. 
            Our team of expert ophthalmologists combines surgical skill with the latest technology 
            to provide you with the highest quality of vision care at every stage of life.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Advanced Technology, Compassionate Care</h2>
            <p className="text-gray-600 mb-4">
              We are committed to providing personalized care using the most advanced diagnostic and surgical technology available.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaMicroscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>State-of-the-Art Diagnostics:</strong> We use advanced imaging like OCT and fundus photography for early and accurate detection of eye diseases.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Laser-Precision Surgery:</strong> Our surgeons utilize blade-free (femtosecond) laser technology for maximum safety and precision in procedures like LASIK and cataract surgery.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Sub-Specialty Expertise:</strong> Our team includes specialists in retina, cornea, glaucoma, and oculoplastics to manage complex conditions.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Ophthalmologist using a slit lamp" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cataract Surgery</h3>
              <p className="text-gray-600">
                Restore clarity to your vision with our advanced, minimally invasive cataract surgery. We use premium intraocular lenses (IOLs) to correct astigmatism and reduce your dependence on glasses.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Small-Incision Cataract Surgery (Phacoemulsification)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Laser-Assisted Cataract Surgery</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Advanced IOLs (Multifocal, Toric)</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop" alt="Advanced surgical technology" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Refractive Surgery (LASIK)</h3>
              <p className="text-gray-600">
                Achieve visual freedom and reduce or eliminate your need for glasses or contact lenses with our safe and effective custom LASIK procedures.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Blade-Free (Femtosecond) LASIK</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Custom Wavefront-Guided Treatment</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Comprehensive Pre-Operative Screening</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop" alt="LASIK eye surgery visualization" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Medical & Surgical Retina</h3>
              <p className="text-gray-600">
                We provide expert diagnosis and treatment for serious retinal conditions like macular degeneration, diabetic retinopathy, and retinal detachments.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Anti-VEGF Injections</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Laser Photocoagulation</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Vitrectomy Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1584467735871-8ec4bb12fb12?q=80&w=2070&auto=format&fit=crop" alt="Doctor analyzing a retinal scan" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Ophthalmologists Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Ophthalmologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1887&auto=format&fit=crop" alt="Dr. Alan Grant" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Alan Grant</h3>
                <p className="text-blue-600 mb-3">MD, FACS - Chief of Ophthalmology</p>
                <p className="text-gray-600 text-sm">A renowned expert in cataract and refractive surgery, Dr. Grant is dedicated to helping patients achieve their best possible vision.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop" alt="Dr. Ilsa Nesser" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Ilsa Nesser</h3>
                <p className="text-blue-600 mb-3">MD - Retina Specialist</p>
                <p className="text-gray-600 text-sm">Fellowship-trained in medical and surgical retina, Dr. Nesser specializes in managing macular degeneration and diabetic eye disease.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ce2?q=80&w=1887&auto=format&fit=crop" alt="Dr. John Hammond" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. John Hammond</h3>
                <p className="text-blue-600 mb-3">MD - Glaucoma & Cornea Specialist</p>
                <p className="text-gray-600 text-sm">An expert in the medical and surgical management of glaucoma and complex corneal diseases, including corneal transplantation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">See the World with Clarity</h2>
          <p className="text-lg mb-6">Don't let vision problems hold you back. Schedule a comprehensive eye exam with our experts today.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule an Eye Exam
          </button>
        </section>

      </div>
    </div>
  );
};

export default Ophthalmology;