import img1 from '../../../assets/Surgery/Onco/onco.png';
import img2 from '../../../assets/Surgery/Onco/oncoimg1.png';
import img3 from '../../../assets/Surgery/Onco/oncoimg2.png';
import img4 from '../../../assets/Surgery/Onco/oncoimg3.png';
import img5 from '../../../assets/Surgery/Onco/oncoimg4.png';
import { FaUserMd, FaUsers, FaShieldAlt, FaHandHoldingMedical, FaHeartbeat, FaCheckCircle } from 'react-icons/fa';

const OncoSurgery = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="Surgical Oncology" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Surgical Oncology</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                A leader in the fight against cancer with advanced, compassionate, and personalized surgical care.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Expertise at the Forefront of Cancer Treatment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Surgical Oncology department is dedicated to providing the most advanced and effective surgical treatments for cancer. 
            Our fellowship-trained surgeons work as part of a multidisciplinary team to create a personalized treatment plan 
            focused on removing cancer while preserving your quality of life.
          </p>
        </section>

        {/* Our Approach - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive & Personalized Care</h2>
            <p className="text-gray-600 mb-4">
              We believe in treating the whole person, not just the disease. Our approach is built on three core principles:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaUsers className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Multidisciplinary Tumor Board:</strong> Your case is reviewed by a team of experts, including medical and radiation oncologists, radiologists, and pathologists, to ensure the most comprehensive plan.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Surgical Techniques:</strong> We specialize in minimally invasive and robotic-assisted surgeries that lead to less pain, faster recovery, and better outcomes.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Compassionate Support:</strong> From diagnosis to recovery, our team provides emotional and physical support, guiding you and your family through every step.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2}
             alt="Doctor consulting with patient" 
             className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Surgical Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Areas of Surgical Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Breast Cancer Surgery</h3>
              <p className="text-gray-600">
                We offer the full spectrum of breast-conserving and reconstructive procedures. Our goal is to remove the cancer effectively while achieving the best possible aesthetic outcome.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Lumpectomy & Mastectomy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Sentinel Lymph Node Biopsy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Immediate Breast Reconstruction</li>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gastrointestinal Oncology</h3>
              <p className="text-gray-600">
                Our surgeons are highly skilled in complex procedures for cancers of the digestive tract, often using minimally invasive techniques to improve recovery.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Liver & Pancreatic Resections</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Esophagectomy & Gastrectomy</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Colon & Rectal Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img4} 
              alt="Surgical team in operating room" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thoracic Oncology</h3>
              <p className="text-gray-600">
                We provide advanced surgical care for cancers in the chest cavity, utilizing video-assisted thoracoscopic surgery (VATS) and robotic-assisted techniques for a less invasive approach.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Lung Cancer Resection (Lobectomy)</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Mediastinal Tumor Removal</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Esophageal Cancer Surgery</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={img5} 
              alt="Robotic surgery interface" 
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

export default OncoSurgery;