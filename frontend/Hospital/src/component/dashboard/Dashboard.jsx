import React, { useState,useEffect } from 'react';
import { 
  FaUserMd, 
  FaStethoscope, 
  FaCalendarAlt, 
  FaPlus, 
  FaList,
  FaChevronDown,
  FaChevronRight,
  FaHospital,
  FaArrowLeft,
  FaUserCheck,
  FaCalendarCheck
} from 'react-icons/fa';

// Import components
import ManageSpecialist from './managespecialist';
import ManageDoctor from './managedoctor';
import ManageAppointment from './manageappointment';

const API = import.meta.env.VITE_BACKEND_URL; // Or your deployed backend URL

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [expandedSection, setExpandedSection] = useState('specialist');

const [totalSpecialists, setTotalSpecialists] = useState(0);
const [totalDoctors, setTotalDoctors] = useState(0);
const [totalAppointments, setTotalAppointments] = useState(0);

useEffect(() => {
  // Fetch departments (specialists)
  fetch(`${API}/api/departments/`)
    .then(res => res.json())
    .then(data => setTotalSpecialists(data.length))
    .catch(err => console.error("Failed to fetch departments", err));

  // Fetch doctors
  fetch(`${API}/api/doctors/`)
    .then(res => res.json())
    .then(data => setTotalDoctors(data.length))
    .catch(err => console.error("Failed to fetch doctors", err));

  // Fetch appointments
  fetch(`${API}/api/total-appointments/`)
      .then((res) => res.json())
      .then((data) => {
        setTotalAppointments(data.total_appointments);
      })
      .catch((err) => console.error("Error fetching total appointments:", err));
}, []);


  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return (
          <div className="flex-1 p-4 lg:p-8">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Welcome to the hospital management system</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-4 lg:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Specialists</p>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">{totalSpecialists}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaUserMd className="text-blue-600 text-xl" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 lg:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Doctors</p>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">{totalDoctors}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaStethoscope className="text-green-600 text-xl" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 lg:p-6 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Appointments</p>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">{totalAppointments}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaCalendarAlt className="text-purple-600 text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 lg:p-6 lg:hidden">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <button 
      onClick={() => setActiveSection('manage-specialist')}
      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center"
    >
      <FaList className="text-blue-600 mr-3" />
      <div className="text-left">
        <p className="font-medium">Manage Specialists</p>
        <p className="text-sm text-gray-500">
          View and edit specialist information
        </p>
      </div>
    </button>

    <button 
      onClick={() => setActiveSection('manage-doctor')}
      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center"
    >
      <FaList className="text-green-600 mr-3" />
      <div className="text-left">
        <p className="font-medium">Manage Doctors</p>
        <p className="text-sm text-gray-500">
          View and edit doctor information
        </p>
      </div>
    </button>

    <button 
      onClick={() => setActiveSection('manage-appointment')}
      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center"
    >
      <FaCalendarCheck className="text-purple-600 mr-3" />
      <div className="text-left">
        <p className="font-medium">Manage Appointments</p>
        <p className="text-sm text-gray-500">
          View and manage appointments
        </p>
      </div>
    </button>
  </div>
</div>
          </div>
        );
      case 'manage-specialist':
        return <ManageSpecialist onBack={() => setActiveSection('dashboard')} />;
      case 'manage-doctor':
        return <ManageDoctor onBack={() => setActiveSection('dashboard')} />;
      case 'manage-appointment':
        return <ManageAppointment onBack={() => setActiveSection('dashboard')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md hidden lg:block h-100%">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <FaHospital className="text-blue-600 text-2xl" />
            <h1 className="text-xl font-bold text-gray-900">MediCare</h1>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection('dashboard')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  activeSection === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <FaHospital />
                <span className="font-medium">Dashboard</span>
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setExpandedSection(expandedSection === 'specialist' ? '' : 'specialist');
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FaUserMd className="text-blue-600" />
                  <span className="font-medium">Specialist</span>
                </div>
                {expandedSection === 'specialist' ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              {expandedSection === 'specialist' && (
                <ul className="ml-10 mt-2 space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveSection('manage-specialist')}
                      className={`w-full text-left p-2 rounded hover:bg-gray-100 transition-colors ${
                        activeSection === 'manage-specialist' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      Manage Specialist
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => {
                  setExpandedSection(expandedSection === 'doctor' ? '' : 'doctor');
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FaStethoscope className="text-blue-600" />
                  <span className="font-medium">Doctor</span>
                </div>
                {expandedSection === 'doctor' ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              {expandedSection === 'doctor' && (
                <ul className="ml-10 mt-2 space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveSection('manage-doctor')}
                      className={`w-full text-left p-2 rounded hover:bg-gray-100 transition-colors ${
                        activeSection === 'manage-doctor' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      Manage Doctor
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => {
                  setExpandedSection(expandedSection === 'appointment' ? '' : 'appointment');
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-blue-600" />
                  <span className="font-medium">Appointment</span>
                </div>
                {expandedSection === 'appointment' ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              {expandedSection === 'appointment' && (
                <ul className="ml-10 mt-2 space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveSection('manage-appointment')}
                      className={`w-full text-left p-2 rounded hover:bg-gray-100 transition-colors ${
                        activeSection === 'manage-appointment' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      Manage Appointment
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm p-4 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">MediCare</h1>
            {activeSection !== 'dashboard' && (
              <button
                onClick={() => setActiveSection('dashboard')}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaArrowLeft className="mr-2" />
                Back
              </button>
            )}
          </div>
        </div>

        {/* Desktop Header with Back Button */}
        {activeSection !== 'dashboard' && (
          <div className="hidden lg:block bg-white shadow-sm p-4.5 border-b">
            <button
              onClick={() => setActiveSection('dashboard')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Dashboard
            </button>
          </div>
        )}
        
        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;