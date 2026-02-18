import img1 from '../../../assets/Surgery/Neuro/neuro.png';
import img2 from '../../../assets/Surgery/Neuro/neuroimg1.png';
import img3 from '../../../assets/Surgery/Neuro/neuroimg2.png';
import img4 from '../../../assets/Surgery/Neuro/neuroimg3.png';
import img5 from '../../../assets/Surgery/Neuro/neuroimg4.png';
import { useEffect, useState } from 'react';
import { getDoctors } from '../../dashboard/api';
import DoctorCard from './DoctorCard';
import { FaBrain, FaUserMd, FaStethoscope, FaLaptopMedical, FaBolt, FaRunning, FaHeartbeat } from 'react-icons/fa';

const Neurology = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ONLY THESE 3 DOCTORS
  const ALLOWED_DOCTOR_IDS = [22, 19, 70];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        // ✅ FILTER BY ID (EXACT MATCH)
        const selectedDoctors = data.filter((doctor) =>
          ALLOWED_DOCTOR_IDS.includes(doctor.id)
        );

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
          alt="Neurology" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Neurology</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Leaders in diagnosing and treating disorders of the brain, spinal cord, and nervous system.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Excellence in Neurological Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified neurologists is dedicated to providing expert care for a wide range of neurological conditions. 
            We combine advanced diagnostic capabilities with a compassionate approach to develop personalized treatment plans that improve quality of life.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Brain Health</h2>
            <p className="text-gray-600 mb-4">
              We believe in a collaborative approach, working closely with you and your family to understand your symptoms and find the best path forward.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> We utilize state-of-the-art tools like EEG, EMG, and advanced neuroimaging to provide precise and accurate diagnoses.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Non-Surgical Treatment:</strong> Our focus is on managing conditions through medication, lifestyle changes, and other non-invasive therapies.</span></li>
              <li className="flex items-start"><FaBrain className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Long-Term Management:</strong> We are committed to being your long-term partner in managing chronic neurological diseases and helping you live well.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
            alt="Neurologist consulting with a patient" 
            className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Neurology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-red-500 mr-3" />Stroke & Cerebrovascular Disease</h3>
              <p className="text-gray-600">
                Our team provides rapid and expert care for stroke patients and focuses on preventing future strokes through risk factor management.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img3} 
              alt="Doctor analyzing a brain scan" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaBolt className="text-yellow-500 mr-3" />Epilepsy & Seizure Disorders</h3>
              <p className="text-gray-600">
                We offer comprehensive evaluation and management for epilepsy, using advanced EEG monitoring and the latest medical therapies to control seizures.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img4} 
              alt="EEG monitoring machine" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaRunning className="text-green-500 mr-3" />Movement Disorders</h3>
              <p className="text-gray-600">
                Our specialists provide expert care for conditions like Parkinson's disease, tremors, and dystonia, focusing on medication management and improving function.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src={img5} 
              alt="Patient in physical therapy" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>
        
      {/* DOCTORS */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Cardiology Consultants
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                departmentName="Cardiology"
                formatTime={formatTime}
              />
            ))}
          </div>
        )}
      </div>

      </div>
    </div>
  );
};

export default Neurology;