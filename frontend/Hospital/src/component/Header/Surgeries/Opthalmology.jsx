import img1 from '../../../assets/Surgery/Opthal/opthal.png';
import img2 from '../../../assets/Surgery/Opthal/opthalimg1.png';
import img3 from '../../../assets/Surgery/Opthal/opthalimg2.png';
import img4 from '../../../assets/Surgery/Opthal/opthalimg3.png';
import img5 from '../../../assets/Surgery/Opthal/opthalimg4.png';
import { FaEye, FaUserMd, FaMicroscope, FaShieldAlt, FaCheckCircle, FaHeart } from 'react-icons/fa';

const Ophthalmology = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Opthalmology" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Opthalmology</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Dedicated to protecting and restoring your vision with advanced medical and surgical eye care.
              </p>
            </div>
          </div>
        </div>

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
            <img src={img2}
            alt="Ophthalmologist using a slit lamp" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img3} 
              alt="Advanced surgical technology" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img4} 
              alt="LASIK eye surgery visualization" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
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
              <img src={img5} 
              alt="Doctor analyzing a retinal scan" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. image" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Name</h3>
                <p className="text-blue-600 mb-3">Title</p>
                <p className="text-gray-600 text-sm">
                  Description
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. image" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Name</h3>
                <p className="text-blue-600 mb-3">Title</p>
                <p className="text-gray-600 text-sm">
                  Description.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src="" alt="Dr. image" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Sara Davis</h3>
                <p className="text-blue-600 mb-3">Ttitle</p>
                <p className="text-gray-600 text-sm">
                  Descrioption.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ophthalmology;