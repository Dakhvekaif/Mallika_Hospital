import img1 from '../../../assets/Consultant/Hemato/hemato.avif';
import img2 from '../../../assets/Consultant/Hemato/hematoimg1.avif';
import img3 from '../../../assets/Consultant/Hemato/hematoimg2.avif';
import img4 from '../../../assets/Consultant/Hemato/hematoimg3.avif';
import img5 from '../../../assets/Consultant/Hemato/hematoimg4.avif';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getDoctors } from '../../dashboard/api';
import DoctorCard from '../DoctorCard';
import { FaUserMd, FaStethoscope, FaShieldAlt, FaTint, FaMicroscope, FaHeartbeat } from 'react-icons/fa';

const Hematology = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Set your unique Department ID from your backend database
  const HEMATOLOGY_DEPARTMENT_ID = 21; 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        // ✅ FILTER BY ID (EXACT MATCH)
        const selectedDoctors = data.filter(
          (doctor) => doctor.department === HEMATOLOGY_DEPARTMENT_ID
        );
        
        // ✅ Apply the priority order built in the backend
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

      <Helmet>
        <title>Top Hematologists & Blood Disorder Specialists in Jogeshwari | Mallika Hospital</title>
        <meta name="description" content="Professional hematology care at Mallika Hospital, Jogeshwari West. Expert diagnosis and treatment for anemia, blood clotting disorders, leukemia, and lymphoma." />
        <link rel="canonical" href="https://mallikahospital.co.in/consultants/hematology" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden w-full">
        {/* Optimized gradient overlay for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/45 to-transparent z-10"></div>
        <img 
          src={img1} 
          alt="Hematology Department" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-start text-left text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hematology</h1>
            <div className="w-32 h-1 bg-white mb-6"></div>
            <p className="text-xl leading-relaxed drop-shadow-md">
              Experts in blood health, dedicated to diagnosing and treating blood disorders and hematologic malignancies with absolute precision.
            </p>
          </div>
        </div>
      </div>

      {/* DOCTORS */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Hematology Consultants
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                departmentName="Hematology"
                formatTime={formatTime}
              />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Leaders in Blood & Bone Marrow Disorders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified hematologists specializes in preventing, diagnosing, and treating conditions affecting red blood cells, white blood cells, platelets, and bone marrow tissues. We combine cutting-edge clinical pathology with customized systemic therapies to manage both benign and malignant blood disorders.
          </p>
        </section>

        {/* Our Approach to Care - Side-by-Side */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Partnership for Your Systemic Health</h2>
            <p className="text-gray-600 mb-4">
              We understand that conditions of the blood affect the entire body. We are committed to providing you with clear insights, advanced options, and comprehensive monitoring plans.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><FaStethoscope className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Advanced Diagnostics:</strong> We utilize state-of-the-art flow cytometry, bone marrow evaluations, and coagulation studies for accurate diagnostics.</span></li>
              <li className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Targeted Therapy:</strong> Formulating personalized medication protocols, targeted immunotherapies, and coordinate care strategies for specialized treatments.</span></li>
              <li className="flex items-start"><FaUserMd className="text-blue-500 mr-2 mt-1 flex-shrink-0" /> <span><strong>Chronic Management:</strong> Providing continuous, empathetic clinical management for long-term clotting, bleeding, and genetic hematological conditions.</span></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={img2} 
              alt="Hematologist consulting with a patient about blood work" 
              className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
          </div>
        </section>

        {/* Hematology Subspecialties - Alternating Layout */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Areas of Expertise</h2>
          
          {/* Expertise 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaTint className="text-red-500 mr-3" />Anemia & Red Blood Cell Disorders</h3>
              <p className="text-gray-600">
                We provide targeted clinical care paths for severe iron-deficiency anemias, vitamin deficiencies, hemolytic anemias, sickle cell disease, thalassemia, and polycythemia configurations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3} 
                alt="Microscopic view of red blood cells layout"
                className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 2 - Alternated */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaMicroscope className="text-blue-500 mr-3" />Hematologic Malignancies</h3>
              <p className="text-gray-600">
                Our specialists deliver comprehensive treatment protocols for hematological cancers, managing acute and chronic leukemias, lymphomas (Hodgkin and non-Hodgkin), and multiple myelomas.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4} 
                alt="Medical professional analyzing blood samples under a microscope" 
                className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center"><FaHeartbeat className="text-orange-500 mr-3" />Coagulation & Bleeding Disorders</h3>
              <p className="text-gray-600">
                We offer expert management plans for abnormal bleeding or hypercoagulation trends, treating hemophilia, Von Willebrand disease, deep vein thrombosis (DVT), and platelet count anomalies.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img5} 
                alt="Patient undergoing therapeutic blood monitoring setup" 
                className="rounded-lg shadow-md w-full object-cover h-64 md:h-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hematology;