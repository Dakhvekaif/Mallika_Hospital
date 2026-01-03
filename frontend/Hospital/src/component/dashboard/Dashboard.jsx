import logo from '../../assets/MalikaHospital-logo.png';
import React, { useState, useEffect } from 'react';
import {
  FaUserMd, FaUsers, FaStethoscope, FaCalendarAlt, FaPlus, FaList, 
  FaChevronDown, FaChevronRight, FaHospital, FaArrowLeft, FaUserCheck, 
  FaCalendarCheck, FaUser, FaLock, FaTimes, FaEye, FaEyeSlash, FaSignOutAlt
} from 'react-icons/fa';
import { apiLogin, getAuthToken, setAuthToken, clearAuthToken, isAuthenticated } from "../../utils/auth.js";

// Import components
import ManageSpecialist from './ManageSpecialist'; 
import ManageDoctor from './ManageDoctor';
import ManageAppointment from './ManageAppointment';

// Login Component
const LoginModal = ({ onLogin, onClose }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await apiLogin(credentials.username, credentials.password);
      // data should be { token: "..." }
      if (data && data.token) {
        onLogin(data.token); // pass token up to Dashboard
      } else {
        setError("Login failed: invalid response");
      }
    } catch (err) {
      // err might be { non_field_errors: [...] } or other object
      if (err && typeof err === "object") {
        const msg =
          (err.non_field_errors && err.non_field_errors.join(", ")) ||
          (err.detail && err.detail) ||
          "Invalid username or password";
        setError(msg);
      } else {
        setError("Login failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Owner Login</h2>
          <p className="text-gray-600 mt-2">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Demo Credentials:</strong><br />
            Username: <span className="font-mono">admin</span><br />
            Password: <span className="font-mono">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!getAuthToken());
  const [showLoginModal, setShowLoginModal] = useState(() => !getAuthToken());
  const [activeSection, setActiveSection] = useState('dashboard');
  const [expandedSection, setExpandedSection] = useState('specialist');

  const API = import.meta.env.VITE_BACKEND_URL;
  
  const [totalSpecialists, setTotalSpecialists] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);

  const handleLogin = (token) => {
    setAuthToken(token);       // store token
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    clearAuthToken();
    setIsLoggedIn(false);
    setShowLoginModal(true);
    setActiveSection('dashboard');
  };

  // Verify token is still valid on mount
  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      // Optionally validate the token with the backend
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } else {
      setIsLoggedIn(false);
      setShowLoginModal(true);
    }
  }, []);

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
  }, [API]);

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

            <div className="bg-white rounded-lg shadow p-4 lg:p-6 block lg:hidden">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button 
                  onClick={() => setActiveSection('manage-specialist')}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  <FaList className="text-blue-600 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">Manage Specialists</p>
                    <p className="text-sm text-gray-500">View and edit specialist information</p>
                  </div>
                </button>
                <button 
                  onClick={() => setActiveSection('manage-doctor')}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  <FaList className="text-green-600 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">Manage Doctors</p>
                    <p className="text-sm text-gray-500">View and edit doctor information</p>
                  </div>
                </button>
                <button 
                  onClick={() => setActiveSection('manage-appointment')}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  <FaCalendarCheck className="text-purple-600 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">Manage Appointments</p>
                    <p className="text-sm text-gray-500">View and manage appointments</p>
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
      {/* Login Modal */}
      {showLoginModal && !isLoggedIn && (
        <LoginModal 
          onLogin={handleLogin} 
          onClose={() => setShowLoginModal(false)} 
        />
      )}

      {/* Main Dashboard (only shown after login) */}
      {isLoggedIn && (
        <>
          {/* Sidebar */}
          <div className="border-r w-64 bg-white shadow-md h-screen hidden lg:block">
            <div className="border-b flex justify-center">
              <div className="flex items-center border-red-900">
                <img src={logo} alt='logo' className='w-30' />
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

              {/* Logout Button in Sidebar */}
              <div className="mt-8 pt-4 border-t">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  <FaSignOutAlt />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </nav>            
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Mobile Header */}
            <div className="bg-white shadow-sm p-4 border-b flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">Mallika Hospital</h1>
              <div className="flex items-center gap-4">
                {activeSection !== 'dashboard' && (
                  <button
                    onClick={() => setActiveSection('dashboard')}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-600 hover:text-red-800 gap-1"
                >
                  <FaSignOutAlt />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>

            {/* Desktop Header with Back Button */}
            {activeSection !== 'dashboard' && (
              <div className="hidden lg:block bg-white shadow-sm p-4 border-b">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveSection('dashboard')}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back to Dashboard
                  </button>
                </div>
              </div>
            )}
            
            {/* Content Area */}
            <div className="flex-1 overflow-auto">
              {renderContent()}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
