import img1 from '../../../assets/Consultant/Cardio/cardio.png';
import img2 from '../../../assets/Consultant/Cardio/cardioimg1.png';
import img3 from '../../../assets/Consultant/Cardio/cardioimg2.png';
import img4 from '../../../assets/Consultant/Cardio/cardioimg3.png';
import img5 from '../../../assets/Consultant/Cardio/cardioimg4.png';
import doc1 from '../../../assets/Consultant/Cardio/doc1.png';
import doc2 from '../../../assets/Consultant/Cardio/doc2.png';
import doc3 from '../../../assets/Consultant/Cardio/doc3.png';
import doc4 from '../../../assets/Consultant/Cardio/doc4.png';
import { FaHeartbeat, FaUserMd, FaStethoscope, FaProcedures, FaLaptopMedical, FaClock } from 'react-icons/fa';

const Cardiology = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cardiology</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Leaders in heart health, dedicated to providing you with expert, personalized, and compassionate cardiac care.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Excellence in Cardiovascular Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified cardiologists is at the forefront of diagnosing and treating heart and vascular diseases. 
            We combine years of experience with the latest medical advancements to ensure you receive the highest standard of care, tailored to your unique needs.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Heart</h2>
            <p className="text-gray-600 mb-4">
              We believe in building a strong, collaborative relationship with our patients, founded on trust, education, and shared decision-making.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Comprehensive Diagnostics:</strong> We utilize state-of-the-art non-invasive and invasive testing to achieve an accurate and timely diagnosis.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Treatment Plans:</strong> Your cardiologist will work with you to create a treatment plan that fits your lifestyle and health goals.</span></li>
              <li className="flex items-start"><FaHeartbeat className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Preventative Focus:</strong> We are dedicated to helping you manage risk factors and prevent heart disease before it starts.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Cardiologist consulting with a patient" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Cardiology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaProcedures className="text-red-500 mr-3" />Interventional Cardiology</h3>
              <p className="text-gray-600">
                Our interventional cardiologists specialize in minimally invasive procedures to open blocked arteries, such as angioplasty and stenting, to treat heart attacks and coronary artery disease.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img3} 
              alt="Cardiac catheterization procedure" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-blue-500 mr-3" />Clinical Cardiology & Heart Failure</h3>
              <p className="text-gray-600">
                We provide comprehensive, non-invasive care for a wide range of heart conditions, including hypertension, heart failure, and valve disease, focusing on long-term management and improving quality of life.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img4} 
              alt="Doctor listening to a patient's heart" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaLaptopMedical className="text-purple-500 mr-3" />Electrophysiology (EP)</h3>
              <p className="text-gray-600">
                Our electrophysiologists are experts in diagnosing and treating abnormal heart rhythms (arrhythmias) with advanced procedures like ablation and the implantation of pacemakers and defibrillators.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img5} 
              alt="Electrophysiology lab" 
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardiology;