import img1 from '../../../assets/Surgery/Ent/ent.png';
import img2 from '../../../assets/Surgery/Ent/entimg1.png';
import img3 from '../../../assets/Surgery/Ent/entimg2.png';
import img4 from '../../../assets/Surgery/Ent/entimg3.png';
import img5 from '../../../assets/Surgery/Ent/entimg4.png';
import { FaEarListen, FaUserDoctor, FaWind, FaMicrophone, FaCircleCheck } from 'react-icons/fa6'; 
import { FaStethoscope, FaComments } from 'react-icons/fa'; 
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async'; // 1. IMPORT HELMET HERE
import DoctorCard from '../DoctorCard.jsx';
import { getDoctors } from '../../dashboard/api.js';

const Ent = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ UPDATED: Based on your data, the ID should be 13
  const ENT_DEPARTMENT_ID = 26; 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        // Filter only ENT doctors by matching the department ID 13
        const entDoctors = data.filter(
          (doctor) => doctor.department === ENT_DEPARTMENT_ID
        );

        setDoctors(entDoctors);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
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
      
      {/* --- 2. INJECT LOCALIZED SURGERY METADATA HERE --- */}
      <Helmet>
        <title>Best ENT Specialists & Ear Nose Throat Care | Mallika Hospital</title>
        <meta name="description" content="Consult expert ENT surgeons at Mallika Hospital, Jogeshwari West, Mumbai. Advanced diagnostics and surgical treatments for ear, nose, throat, and sinus disorders." />
        <link rel="canonical" href="https://mallikahospital.co.in/surgeries/ent" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/30 z-10"></div>
        <img 
          src={img1} 
          alt="Otolaryngology (ENT)" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Otolaryngology (ENT)</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Expert care for your ears, nose, and throat, helping you breathe, hear, and feel better.
            </p>
          </div>
        </div>
      </div>

      {/* ENT Doctors Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our ENT Specialists
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading specialists...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                departmentName="ENT"
                formatTime={formatTime}
              />
            ))}
          </div>
        )}
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Care for All Ages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Department of Otolaryngology provides expert medical and surgical care for a wide range of ear, nose, and throat conditions. 
          </p>
        </section>

        {/* Our Approach */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Focus on Your Well-being</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> Quick and accurate in-office testing.</span></li>
              <li className="flex items-start"><FaUserDoctor className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Personalized Treatment:</strong> Tailored plans for your specific recovery.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} alt="ENT Exam" className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ent;