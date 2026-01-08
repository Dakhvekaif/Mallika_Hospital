import React, { useState, useEffect, useMemo } from 'react';
import { 
  FaUserMd, FaSearch, FaPhone, FaClock, 
  FaGraduationCap, FaFilter, FaCalendarAlt, FaPlus // Import FaPlus
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

import { getDoctors, getDepartments } from '../dashboard/api.js';

const DoctorsList = () => {
  const navigate = useNavigate(); 

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  // PAGINATION STATE
  const [visibleCount, setVisibleCount] = useState(8); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorsData, departmentsData] = await Promise.all([
          getDoctors(),
          getDepartments()
        ]);
        setDoctors(doctorsData);
        setDepartments(departmentsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatTime = (timeString) => {
    if (!timeString) return "Not Available";
    const [hours, minutes] = timeString.split(':');
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const formattedHour = h % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const getDepartmentName = (id) => {
    if (!id) return "General";
    const dept = departments.find(d => d.id === parseInt(id));
    return dept ? dept.name : 'General';
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const deptName = getDepartmentName(doctor.department);
      
      const matchesSearch = (doctor.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (doctor.qualifications || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                            deptName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment = selectedDepartment === 'all' || 
                                doctor.department?.toString() === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [doctors, searchTerm, selectedDepartment, departments]);

  useEffect(() => {
    setVisibleCount(8);
  }, [searchTerm, selectedDepartment]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  // --- HANDLER FOR PROFILE CLICK ---
  const handleProfileClick = (doctor) => {
    // Navigate to the profile page, passing the doctor ID in URL and data in state
    navigate(`/doctor-profile/${doctor.id}`, { state: { doctor } });
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-blue-600 font-semibold animate-pulse">Loading Doctors...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Our Doctors</h1>
              <p className="text-gray-600 mt-1">Meet our experienced medical team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
                <FaFilter className="absolute left-3 top-3 text-gray-400" />
                <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white min-w-[200px]"
                >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                    {dept.name}
                    </option>
                ))}
                </select>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {filteredDoctors.slice(0, visibleCount).map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative group">
              
              {/* Doctor Image */}
              <div className="relative h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                {doctor.photo ? (
                  <img 
                    src={""} 
                    alt={""}
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <FaUserMd className="text-gray-400 text-5xl" />
                  </div>
                )}
                
                {/* --- THE "+" BUTTON --- */}
                <button
                  onClick={() => handleProfileClick(doctor)}
                  title="View Full Profile"
                  className="absolute top-2 right-2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 z-10"
                >
                  <FaPlus size={16} />
                </button>

                {/* Status Badge */}
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium border ${
                  doctor.active 
                  ? 'bg-green-100 text-green-800 border-green-200' 
                  : 'bg-red-100 text-red-800 border-red-200'
                }`}>
                  {doctor.active ? 'Available' : 'Unavailable'}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                
                <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">
                  {getDepartmentName(doctor.department)}
                </p>

                <div className="flex items-start mb-2">
                  <FaCalendarAlt className="text-gray-400 mr-2 mt-1 text-sm" />
                  <p className="text-gray-600 text-xs line-clamp-2">
                    {doctor.available_days || "Call for Schedule"}
                  </p>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <FaClock className="mr-2 text-gray-400" />
                  {doctor.start_time && doctor.end_time ? (
                    <span>{formatTime(doctor.start_time)} - {formatTime(doctor.end_time)}</span>
                  ) : (
                    <span>By Appointment</span>
                  )}
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-4 mt-auto">
                  <FaPhone className="mr-2 text-gray-400" />
                  {doctor.phone ? doctor.phone : "+91 98765 00000"} 
                </div>

                <button 
                  onClick={() => {
                    navigate('/contact', { state: { selectedDoctor: doctor } });
                    window.scrollTo(0, 0); 
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm mt-2"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredDoctors.length && (
          <div className="text-center mt-8">
            <button 
              onClick={handleLoadMore}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 shadow-sm transition-all"
            >
              Load More Doctors ({filteredDoctors.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserMd className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;