import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaArrowLeft, FaPhone, FaEnvelope } from 'react-icons/fa';

// Import API functions to fetch data if page is refreshed
import { getDoctors, getDepartments } from '../dashboard/api.js'; 

const DoctorProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // State
  const [doctor, setDoctor] = useState(location.state?.doctor || null);
  const [departmentName, setDepartmentName] = useState("Specialist");
  const [loading, setLoading] = useState(!doctor);
  
  // Accordion State
  const [activeSection, setActiveSection] = useState('profile'); // 'profile' is open by default

  // Fetch Data if missing (e.g. on Refresh)
  useEffect(() => {
    const loadData = async () => {
      try {
        let currentDoc = doctor;
        let depts = [];

        // 1. Fetch Doctor if missing
        if (!currentDoc) {
          const allDoctors = await getDoctors();
          currentDoc = allDoctors.find(d => d.id === parseInt(id));
          setDoctor(currentDoc);
        }

        // 2. Fetch Departments to get the Name (since doctor has dept ID)
        if (currentDoc) {
          depts = await getDepartments();
          const dept = depts.find(d => d.id === parseInt(currentDoc.department));
          if (dept) setDepartmentName(dept.name);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error loading profile:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [id, doctor]);

  // Helper to toggle accordions
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

  if (loading) return <div className="h-screen flex items-center justify-center text-blue-600 font-bold">Loading Profile...</div>;
  if (!doctor) return <div className="h-screen flex items-center justify-center text-red-600">Doctor not found.</div>;

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center text-gray-500 hover:text-blue-600 transition-colors"
        >
            <FaArrowLeft className="mr-2" /> Back to Doctors
        </button>

        {/* --- TOP SECTION: IMAGE & INFO --- */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            
            {/* Left: Image with organic shape background */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-full max-w-sm aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden shadow-sm">
                     {doctor.photo ? (
                        <img 
                            src={doctor.photo} 
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

            {/* Right: Text Info */}
            <div className="w-full md:w-2/3 pt-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <h2 className="text-xl font-medium text-gray-700 mb-4">{departmentName}</h2>
                
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-8 font-semibold">
                    {doctor.qualifications || "MBBS"}
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-4">OPD Schedule</h3>
                <div className="text-gray-600 mb-8">
                   <p className="mb-1"><span className="font-semibold">Days:</span> {doctor.available_days || "Contact Hospital"}</p>
                   <p><span className="font-semibold">Time:</span> {doctor.start_time ? `${formatTime(doctor.start_time)} - ${formatTime(doctor.end_time)}` : "By Appointment"}</p>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                         onClick={() => navigate('/contact', { state: { selectedDoctor: doctor } })}
                         className="flex items-center justify-center px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        Book an Appointment <FaPlus className="ml-2 text-sm" />
                    </button>
                    
                    {/* <button 
                         onClick={() => navigate('/contact')}
                         className="flex items-center justify-center px-8 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                    >
                        Request a Call <FaPlus className="ml-2 text-sm" />
                    </button> */}
                </div>
            </div>
        </div>

        {/* --- BOTTOM SECTION: ACCORDIONS --- */}
        <div className="border-t-2 border-gray-100">
            
            {/* Accordion 1: Profile */}
            <div className="border-b border-gray-200">
                <button 
                    onClick={() => toggleSection('profile')}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                >
                    <span className="text-2xl font-bold text-gray-900">Profile</span>
                    {activeSection === 'profile' ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
                </button>
                
                {/* Collapsible Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'profile' ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 leading-relaxed">
                        {doctor.name} is a dedicated {departmentName} with extensive experience in the field. 
                        Holding qualifications in {doctor.qualifications || "Medicine"}, Dr. {doctor.name.split(' ')[1]} is committed to providing compassionate and comprehensive care to all patients.
                        <br /><br />
                        He/She specializes in advanced treatments within the {departmentName} department and is known for a patient-centric approach. 
                        With a focus on continuous learning, the doctor stays updated with the latest medical advancements to ensure the best possible outcomes.
                    </p>
                </div>
            </div>

            {/* Accordion 2: Contact Info */}
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
                            <span className='font-semibold'>{ "022 26798585"}</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-3 text-blue-600" /> 
                            <span className='font-semibold'>diagnosticorigin@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion 3: Research (Placeholder for design match) */}
            {/* <div className="border-b border-gray-200">
                <button 
                    onClick={() => toggleSection('research')}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                >
                    <span className="text-2xl font-bold text-gray-900">Research & Publications</span>
                    {activeSection === 'research' ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'research' ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 italic">
                        Research papers and publications will be listed here.
                        <span className="text-blue-600 font-semibold cursor-pointer ml-2">Research Link</span>
                    </p>
                </div>
            </div> */}

        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;