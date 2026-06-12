import img1 from '../../../assets/Consultant/Derma/derma.png';
import img2 from '../../../assets/Consultant/Derma/dermaimg1.png';
import img3 from '../../../assets/Consultant/Derma/dermaimg2.png';
import img4 from '../../../assets/Consultant/Derma/dermaimg3.png';
import img5 from '../../../assets/Consultant/Derma/dermaimg4.png';
import { useEffect, useState } from 'react';
import { getDoctors } from '../../dashboard/api';
import DoctorCard from '../DoctorCard';
import { FaUserMd, FaHandHoldingMedical, FaSearch, FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Dermatology = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ONLY THESE 4 DOCTORS
  const DERMATOLOGY_DEPARTMENT_ID = 28;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        const selectedDoctors = data.filter(
          (doctor) => doctor.department === DERMATOLOGY_DEPARTMENT_ID
        );
        selectedDoctors.sort((a, b) => (a.display_order ?? 100) - (b.display_order ?? 100));

        setDoctors(selectedDoctors);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const formatTime = (time) => {
    if (!time) return 'By Appointment';
    const [h, m] = time.split(':');
    const hour = h % 12 || 12;
    const ampm = h >= 12 ? 'PM' : 'AM';
    return `${hour}:${m} ${ampm}`;
  };

  return (
      <div className="w-full min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/30 z-10"></div>
          <img 
            src={img1} 
            alt="Dermatology" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dermatology</h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Experts in medical, surgical, and cosmetic care for your skin, hair, and nails.
              </p>
            </div>
          </div>
        </div>

                {/* DOCTORS */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Dermatology Consultants
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                departmentName="Dermatology"
                formatTime={formatTime}
              />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Science and Art for Healthy Skin</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified dermatologists is dedicated to the health and beauty of your skin. 
            We offer comprehensive medical, surgical, and cosmetic services to help you achieve and maintain healthy, radiant skin at every stage of life.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Personalized Approach to Skin Health</h2>
            <p className="text-gray-600 mb-4">
              We believe that healthy skin is a reflection of overall wellness. We combine medical expertise with the latest technology to provide you with the best possible care.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaSearch className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Accurate Diagnosis:</strong> We use advanced diagnostic tools, including dermoscopy and skin biopsies, to diagnose skin conditions accurately.</span></li>
              <li className="flex items-start"><FaHandHoldingMedical className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Medical & Cosmetic Expertise:</strong> Our dermatologists are skilled in treating complex diseases and providing advanced aesthetic treatments.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Plans:</strong> We create a customized treatment plan tailored to your unique skin type, concerns, and goals.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Dermologist examining a patient's skin" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Areas of Expertise - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-red-500 mr-3" />Medical Dermatology</h3>
              <p className="text-gray-600">
                We diagnose and treat a wide range of skin, hair, and nail conditions, including acne, eczema, psoriasis, and skin infections.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img3} 
              alt="Close up of a dermatoscope on skin" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeart className="text-pink-500 mr-3" />Cosmetic Dermatology</h3>
              <p className="text-gray-600">
                Enhance your natural beauty with our advanced cosmetic procedures, including Botox, fillers, laser resurfacing, and chemical peels.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img4} 
              alt="Cosmetic dermatology treatment" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaShieldAlt className="text-green-500 mr-3" />Skin Cancer Surgery</h3>
              <p className="text-gray-600">
                We offer expert skin cancer screenings and perform surgical procedures like Mohs surgery to remove skin cancer with precision and minimize scarring.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img5} 
              alt="Doctor analyzing a mole" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dermatology;