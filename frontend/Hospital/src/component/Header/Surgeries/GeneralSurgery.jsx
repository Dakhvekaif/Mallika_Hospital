import img1 from '../../../assets/Surgery/General/general.png';
import img2 from '../../../assets/Surgery/General/generalimg1.png';
import img3 from '../../../assets/Surgery/General/generalimg2.png';
import img4 from '../../../assets/Surgery/General/generalimg3.png';
import doc1 from '../../../assets/Surgery/General/doc1.png';
import doc2 from '../../../assets/Surgery/General/doc2.png';
import doc3 from '../../../assets/Surgery/General/doc3.png';
import doc4 from '../../../assets/Surgery/General/doc4.png';
import doc5 from '../../../assets/Surgery/General/doc5.png';
import { FaUserMd, FaProcedures, FaHandHoldingMedical, FaShieldAlt, FaCheckCircle, FaUserFriends } from 'react-icons/fa';

const GeneralSurgery = () => {
  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10"></div>
          <img 
            src={img1} 
            alt="General Surgery" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">General Surgery</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Expert surgical care for a wide range of conditions, using advanced techniques for a faster recovery.              
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction & Why Choose Us Combined */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Partner in Surgical Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our General Surgery department provides comprehensive care for conditions that may require surgical intervention. 
            We are dedicated to providing the safest and most effective surgical treatments, from diagnosis to post-operative recovery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUserMd className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert-Led Care</h3>
              <p className="text-gray-600">Our surgeries are performed by board-certified surgeons with years of experience.</p>
            </div>
            <div className="text-center">
              <FaProcedures className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minimally Invasive Techniques</h3>
              <p className="text-gray-600">We specialize in laparoscopic surgery, leading to less pain, smaller scars, and quicker recovery.</p>
            </div>
            <div className="text-center">
              <FaHandHoldingMedical className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">Our team supports you at every step, from pre-op education to post-operative follow-up care.</p>
            </div>
          </div>
        </section>

        {/* Conditions We Treat - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
            <p className="text-gray-600 mb-4">Our team is skilled in diagnosing and surgically managing a wide variety of conditions, including:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hernias (Inguinal, Umbilical, Incisional)</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Gallbladder Disease and Gallstones</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Appendicitis</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Stomach and Intestinal Issues</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Skin and Soft Tissue Lesions</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Thyroid and Parathyroid Disorders</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
              alt="Surgeons consulting" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Our Procedures - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Surgical Procedures</h2>
          
          {/* Procedure 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Laparoscopic Surgery</h3>
              <p className="text-gray-600">
                A minimally invasive technique where small incisions and a camera are used to perform surgery. 
                It's commonly used for gallbladder removal, hernia repairs, and appendectomies, resulting in faster recovery and less scarring.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3} alt="Laparoscopic tools" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Procedure 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Endocrine Surgery</h3>
              <p className="text-gray-600">
                We perform delicate surgeries on the endocrine glands, such as the thyroid, parathyroid, and adrenal glands. 
                Our expertise ensures precise removal of tumors or glands while preserving surrounding structures.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4} alt="Surgical team in operating room" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>

        {/* Meet Our Lead Surgeons Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc1} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc2} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center ">
              <img src={doc3} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center ">
              <img src={doc4} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center ">
              <img src={doc5} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneralSurgery;