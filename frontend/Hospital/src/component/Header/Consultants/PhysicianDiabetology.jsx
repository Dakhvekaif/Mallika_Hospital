import img1 from '../../../assets/Consultant/Physic/physic.png';
import img2 from '../../../assets/Consultant/Physic/physicimg1.png';
import img3 from '../../../assets/Consultant/Physic/physicimg2.png';
import img4 from '../../../assets/Consultant/Physic/physicimg3.png';
import img5 from '../../../assets/Consultant/Physic/physicimg4.png';
import doc1 from '../../../assets/Consultant/Physic/doc1.png';
import doc2 from '../../../assets/Consultant/Physic/doc2.png';
import doc3 from '../../../assets/Consultant/Physic/doc3.png';
import doc4 from '../../../assets/Consultant/Physic/doc4.png';
import doc5 from '../../../assets/Consultant/Physic/doc5.png';
import { FaUserMd, FaStethoscope, FaShieldAlt, FaNotesMedical, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';

const InternalMedicine = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Physician & Diabetology</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Your dedicated partners in long-term health, with a special focus on diabetes and chronic disease management.
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Care for Adults</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified internal medicine physicians is dedicated to preventing, diagnosing, and treating a wide range of adult illnesses. 
            We serve as your primary care providers, offering continuous, coordinated care to help you achieve and maintain your best possible health.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Foundation for Your Wellness</h2>
            <p className="text-gray-600 mb-4">
              We believe in building a strong, trusting relationship with you, centered on communication, education, and personalized care.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Preventative Health:</strong> We focus on routine check-ups, screenings, and vaccinations to keep you healthy.</span></li>
              <li className="flex items-start"><FaNotesMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Disease Management:</strong> We provide expert, long-term management for conditions like diabetes, hypertension, and asthma.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Coordination of Care:</strong> We serve as your central point of contact, coordinating with specialists to ensure all your health needs are met.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Physician consulting with a patient" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Diabetology</h3>
              <p className="text-gray-600">
                Our physicians have special expertise in managing all types of diabetes. We provide comprehensive care, including medication management, lifestyle counseling, and monitoring to prevent complications.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3} 
              alt="Doctor reviewing a glucose monitor" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Preventative Medicine</h3>
              <p className="text-gray-600">
                We are your proactive partners in health, offering annual physicals, risk assessments, and personalized wellness plans to help you stay ahead of potential health issues.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4}
              alt="Doctor talking to a healthy patient" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaNotesMedical className="text-purple-500 mr-3" />Acute & Chronic Care</h3>
              <p className="text-gray-600">
                From treating common illnesses like the flu to managing complex chronic conditions, our physicians provide skilled, evidence-based care to improve your health and quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img5} 
              alt="Physician reviewing a patient chart" 
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc3} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc4} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img src={doc5} alt="Dr. image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternalMedicine;