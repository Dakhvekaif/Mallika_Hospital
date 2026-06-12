import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaArrowLeft, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

// We only need getDoctors now!
import { getDoctors } from '../dashboard/api.js'; 

const DoctorProfile = () => {
  const { slug } = useParams(); // Using slug!
  const location = useLocation();
  const navigate = useNavigate();
  
  const [doctor, setDoctor] = useState(location.state?.doctor || null);
  const [departmentName, setDepartmentName] = useState("Specialist");
  const [loading, setLoading] = useState(!doctor);
  const [fetchError, setFetchError] = useState(null); 
  
  const [activeSection, setActiveSection] = useState('profile');

  // Fetch Data
  useEffect(() => {
    const loadData = async () => {
  try {
    let currentDoc = doctor; // use location.state if available (fast nav)

    if (!currentDoc) {
      // ✅ Hit the single-doctor endpoint directly — much faster for Googlebot
      const res = await fetch(`https://mallikahospital.co.in/api/doctors/${slug}/`);

      if (res.status === 404) {
        setFetchError('not_found');
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setFetchError('network');
        setLoading(false);
        return;
      }

      currentDoc = await res.json();
      setDoctor(currentDoc);
    }

    if (currentDoc?.department_name) {
      setDepartmentName(currentDoc.department_name);
    }

    setLoading(false);

  } catch (error) {
    console.error("Error loading profile:", error);
    setFetchError('network');
    setLoading(false);
  }
};

    loadData();
  }, [slug, doctor]); // <--- Fixed! No more 'id' hiding here!

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const [hours, minutes] = timeString.split(':');
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const formattedHour = h % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  if (loading) return (
    <>
      <Helmet>
        <title>Loading Doctor Profile… | Mallika Hospital</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="h-screen flex items-center justify-center text-blue-600 font-bold">
        Loading Profile...
      </div>
    </>
  );

  if (fetchError === 'not_found') return (
    <>
      <Helmet>
        <title>Doctor Not Found | Mallika Hospital</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="h-screen flex items-center justify-center text-red-600">
        Doctor not found.
      </div>
    </>
  );

  if (fetchError === 'network') return (
    <>
      <Helmet>
        <title>Something Went Wrong | Mallika Hospital</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="h-screen flex items-center justify-center text-orange-500 font-bold">
        Could not load profile. Please try again.
      </div>
    </>
  );

  // --- JSON-LD SCHEMA GENERATOR ---
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "image": doctor.photo_url || "https://mallikahospital.co.in/default-doctor.png",
    "medicalSpecialty": departmentName,
    "description": doctor.description || `Expert ${departmentName} at Mallika Hospital.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sharma Estate, Next To Dewan Shopping Centre, S.V Road",
      "addressLocality": "Jogeshwari West, Mumbai",
      "postalCode": "400102",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "telephone": "+91 9082097421"
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* --- DYNAMIC SEO TAGS --- */}
      <Helmet>
        <title>{`${doctor.name} - ${departmentName} in Jogeshwari West | Mallika Hospital`}</title>
        <meta name="description" content={`Book an appointment with ${doctor.name}, an expert ${departmentName} at Mallika Hospital, Jogeshwari West, Mumbai.`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center text-gray-500 hover:text-blue-600 transition-colors"
        >
            <FaArrowLeft className="mr-2" /> Back to Doctors
        </button>

        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-full max-w-sm aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden shadow-sm">
                     {doctor.photo_url ? (
                        <img 
                            src={doctor.photo_url} 
                            alt={doctor.name} 
                            className="w-full h-full object-cover"
                        />
                     ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                             No Image
                        </div>
                     )}
                </div>
            </div>

            <div className="w-full md:w-2/3 pt-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <h2 className="text-xl font-medium text-gray-700 mb-4">{departmentName}</h2>
                
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2 font-semibold">
                    {doctor.degrees || doctor.qualifications || "MBBS"}
                </p>
                
                {doctor.experience_years && (
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                        {doctor.experience_years}+ Years of Experience
                    </p>
                )}

                {doctor.mmc_registration && (
                    <p className="text-xs text-gray-400 mb-6">
                        MMC Reg No: {doctor.mmc_registration}
                    </p>
                )}

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-4">OPD Schedule</h3>
                <div className="text-gray-600 mb-8">
                   <p className="mb-1"><span className="font-semibold">Days:</span> {doctor.display_available_days || "Contact Hospital"}</p>
                   <p><span className="font-semibold">Time:</span> {doctor.start_time ? `${formatTime(doctor.start_time)} - ${formatTime(doctor.end_time)}` : "By Appointment"}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                         onClick={() => navigate('/contact', { state: { selectedDoctor: doctor } })}
                         className="flex items-center justify-center px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        Book an Appointment <FaPlus className="ml-2 text-sm" />
                    </button>
                </div>
            </div>
        </div>

        <div className="border-t-2 border-gray-100">
            
            <div className="border-b border-gray-200">
                <button 
                    onClick={() => toggleSection('profile')}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                >
                    <span className="text-2xl font-bold text-gray-900">About {doctor.name}</span>
                    {activeSection === 'profile' ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'profile' ? 'max-h-[1500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                       {doctor.description || "No detailed profile available at the moment."}
                    </p>
                </div>
            </div>

            <div className="border-b border-gray-200">
                <button 
                    onClick={() => toggleSection('contact')}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                >
                    <span className="text-2xl font-bold text-gray-900">Contact Information</span>
                    {activeSection === 'contact' ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'contact' ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-3 text-gray-600">
                        <div className="flex items-center">
                            <FaPhone className="mr-3 text-blue-600" /> 
                            <span className='font-semibold'>022 26798585</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-3 text-blue-600" /> 
                            <span className='font-semibold'>hospital.m@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;