import img1 from '../../../assets/Consultant/Nepro/nepro.png';
import img2 from '../../../assets/Consultant/Nepro/neproimg1.png';
import img3 from '../../../assets/Consultant/Nepro/neproimg2.png';
import img4 from '../../../assets/Consultant/Nepro/neproimg3.png';
import img5 from '../../../assets/Consultant/Nepro/neproimg4.png';
import doc1 from '../../../assets/Consultant/Nepro/doc1.png';
import { FaUserMd, FaStethoscope, FaShieldAlt, FaTint, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';

const Nephrology = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nephrology</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Leaders in kidney health, dedicated to managing chronic kidney disease and hypertension.
            </p>
          </div>
        </div>
      </div>
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experts in Kidney Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified nephrologists specializes in diagnosing and treating diseases of the kidneys and urinary system. 
            We are dedicated to providing comprehensive, long-term care to manage chronic conditions, slow disease progression, and improve your quality of life.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Kidney Health</h2>
            <p className="text-gray-600 mb-4">
              We understand that managing kidney disease is a long journey. We are here to be your dedicated partners, providing expert care and support every step of the way.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Diagnostics:</strong> We utilize advanced lab tests, imaging, and kidney biopsies to provide an accurate diagnosis.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Disease Management:</strong> We create personalized plans to slow the progression of kidney disease and manage complications like hypertension and anemia.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Renal Replacement Therapy:</strong> Our experts manage all aspects of dialysis and work closely with the transplant team for those who need it.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Nephrologist consulting with a patient" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Nephrology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaTint className="text-cyan-500 mr-3" />Chronic Kidney Disease (CKD)</h3>
              <p className="text-gray-600">
                We provide expert management for all stages of CKD, focusing on slowing progression, managing symptoms, and preparing patients for future renal replacement therapy.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3}
              alt="Abstract visualization of water and filtration" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Dialysis & Hypertension</h3>
              <p className="text-gray-600">
                Our nephrologists oversee and manage dialysis plans to ensure they are effective and comfortable. We also specialize in managing difficult-to-control hypertension related to kidney issues.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4} 
              alt="Dialysis machine and patient" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Glomerular & Transplant Care</h3>
              <p className="text-gray-600">
                We have expertise in treating complex inflammatory conditions of the kidney (glomerulonephritis) and provide comprehensive care for patients before and after a kidney transplant.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img5} 
              alt="Doctor analyzing a medical report" 
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nephrology;