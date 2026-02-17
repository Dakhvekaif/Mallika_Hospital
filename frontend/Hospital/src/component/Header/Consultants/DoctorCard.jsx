import React from 'react';
import {
  FaUserMd,
  FaPhone,
  FaClock,
  FaCalendarAlt,
  FaPlus,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor, departmentName, formatTime }) => {
  // 🔒 Safety guard – prevents "undefined.photo" crash
  if (!doctor) return null;

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/doctor-profile/${doctor.id}`, { state: { doctor } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative group">

      {/* Doctor Image */}
      <div className="relative h-64 bg-gray-200 rounded-t-lg overflow-hidden">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctor.name}
            loading="lazy"
            className="w-full h-full object-contain bg-gray-100 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <FaUserMd className="text-gray-400 text-5xl" />
          </div>
        )}

        {/* Profile Button */}
        <button
          onClick={handleProfileClick}
          title="View Full Profile"
          className="absolute top-2 right-2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10"
        >
          <FaPlus size={16} />
        </button>

        {/* Status Badge */}
        <div
          className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium border ${
            doctor.active
              ? 'bg-green-100 text-green-800 border-green-200'
              : 'bg-red-100 text-red-800 border-red-200'
          }`}
        >
          {doctor.active ? 'Available' : 'Unavailable'}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {doctor.name}
        </h3>

        <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">
          {departmentName || 'General'}
        </p>

        <div className="flex items-start mb-2">
          <FaCalendarAlt className="text-gray-400 mr-2 mt-1 text-sm" />
          <p className="text-gray-600 text-xs font-semibold line-clamp-2">
            {doctor.display_available_days || 'Call for Schedule'}
          </p>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaClock className="mr-2 text-gray-400" />
          {doctor.start_time && doctor.end_time ? (
            <span>
              {formatTime
                ? `${formatTime(doctor.start_time)} - ${formatTime(
                    doctor.end_time
                  )}`
                : 'By Appointment'}
            </span>
          ) : (
            <span>By Appointment</span>
          )}
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-4 mt-auto">
          <FaPhone className="mr-2 text-gray-400" />
          {doctor.phone || '+91 9082097421 / 022 26798585'}
        </div>

        {/* Action Button */}
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
  );
};

export default DoctorCard;
