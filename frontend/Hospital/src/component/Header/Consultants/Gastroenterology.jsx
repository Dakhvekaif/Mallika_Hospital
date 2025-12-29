import img1 from '../../../assets/Consultant/Gastro/gastro.png';
import img2 from '../../../assets/Consultant/Gastro/gastroimg1.png';
import img3 from '../../../assets/Consultant/Gastro/gastroimg2.png';
import img4 from '../../../assets/Consultant/Gastro/gastroimg3.png';
import img5 from '../../../assets/Consultant/Gastro/gastroimg4.png';
import doc1 from '../../../assets/Consultant/Gastro/doc1.png';
import doc2 from '../../../assets/Consultant/Gastro/doc2.png';
import { FaUserMd, FaStethoscope, FaShieldAlt, FaNotesMedical, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';

const Gastroenterology = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gastroenterology</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Experts in digestive health, dedicated to diagnosing and treating disorders of your GI tract with precision and compassion.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Leaders in Digestive Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified gastroenterologists specializes in preventing, diagnosing, and treating a wide range of conditions affecting the esophagus, stomach, intestines, liver, and pancreas. 
            We use advanced endoscopic procedures to provide accurate diagnoses and effective treatments.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Digestive Wellness</h2>
            <p className="text-gray-600 mb-4">
              We are committed to providing you with clear answers and effective treatment plans in a comfortable and confidential setting.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Endoscopy:</strong> We perform a full range of diagnostic and therapeutic endoscopic procedures with precision and patient comfort.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Preventative Care:</strong> We are strong advocates for life-saving cancer screenings, such as colonoscopies, to detect and prevent disease early.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Disease Management:</strong> We provide long-term, personalized care for complex conditions like IBD, IBS, and liver disease.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            lt="Gastroenterologist consulting with a patient" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Gastroenterology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaNotesMedical className="text-orange-500 mr-3" />Upper GI Endoscopy</h3>
              <p className="text-gray-600">
                We perform upper endoscopies (EGD) to diagnose and treat conditions of the esophagus, stomach, and small intestine, such as GERD, ulcers, and celiac disease.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img3} 
              alt="Abstract medical visualization"
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Colonoscopy & Cancer Screening</h3>
              <p className="text-gray-600">
                Our experts perform colonoscopies to screen for colorectal cancer, detect and remove polyps, and investigate symptoms like bleeding and changes in bowel habits.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img4} 
              alt="Doctor analyzing a medical scan" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Liver & Pancreatic Disease</h3>
              <p className="text-gray-600">
                We provide comprehensive care for complex conditions like hepatitis, cirrhosis, fatty liver disease, and pancreatitis, working to manage symptoms and improve liver function.
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Lead Surgeons</h2>
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

export default Gastroenterology;