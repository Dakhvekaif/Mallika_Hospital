import img1 from '../../../assets/Consultant/Onco/onco.png';
import img2 from '../../../assets/Consultant/Onco/oncoimg1.png';
import img3 from '../../../assets/Consultant/Onco/oncoimg2.png';
import img4 from '../../../assets/Consultant/Onco/oncoimg3.png';
import img5 from '../../../assets/Consultant/Onco/oncoimg4.png';
import doc1 from '../../../assets/Consultant/Onco/doc1.png';
import doc2 from '../../../assets/Consultant/Onco/doc2.png';
import { FaUserMd, FaRadiation, FaFlask, FaShieldAlt, FaUsers, FaHandHoldingMedical } from 'react-icons/fa';

const Oncology = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
        <img 
          src={img1} 
          alt="Otolaryngology (ENT)" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Oncology</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Providing advanced, compassionate, and comprehensive medical care for patients on their cancer journey.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership in Your Cancer Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Oncology is dedicated to providing state-of-the-art, evidence-based cancer treatment. 
            Our team of medical and radiation oncologists works collaboratively to create a personalized treatment plan that focuses on both fighting the disease and supporting your overall well-being.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive & Compassionate Care</h2>
            <p className="text-gray-600 mb-4">
              We treat the whole person, not just the disease. Our approach is built on three core principles:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaUsers className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Multidisciplinary Team:</strong> Your case is reviewed by our Tumor Board, ensuring you benefit from the combined expertise of medical, radiation, and surgical oncologists.</span></li>
              <li className="flex items-start"><FaRadiation className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Therapies:</strong> We offer the latest in medical oncology (chemo, immunotherapy) and radiation therapy to provide the most effective treatment options.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Supportive Services:</strong> We provide comprehensive support, including pain management, nutritional counseling, and emotional support to help you through treatment.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Oncologist consulting with a patient" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaFlask className="text-purple-500 mr-3" />Medical Oncology</h3>
              <p className="text-gray-600">
                Our medical oncologists specialize in the use of powerful medications to treat cancer, including chemotherapy, targeted therapy, and immunotherapy, which helps your own body fight cancer.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img3} 
              alt="Pharmacist preparing chemotherapy" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaRadiation className="text-teal-500 mr-3" />Radiation Oncology</h3>
              <p className="text-gray-600">
                Our radiation oncologists use the latest technology to deliver precise doses of radiation to cancer cells, minimizing damage to surrounding healthy tissue and maximizing effectiveness.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img4} 
              alt="Linear accelerator for radiation therapy" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Supportive & Palliative Care</h3>
              <p className="text-gray-600">
                We are committed to your quality of life. Our team provides expert management of treatment side effects, pain relief, and emotional support for you and your family.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img5} 
              alt="Support group or counseling session" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Consultants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc1} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc2} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Oncology;