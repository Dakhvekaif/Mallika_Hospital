import React, { useState } from 'react';
import { FaUserMd, FaSearch, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Doctor data - easy to update from backend
  // Just replace this array with data from your API
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiologist",
      department: "Cardiology",
      experience: "15 years",
      education: "MD - Cardiology, DM - Cardiology",
      email: "rajesh.kumar@hospital.com",
      phone: "+91 98765 43210",
      availability: "Mon-Fri: 9AM-5PM",
      image: ""
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Neurologist",
      department: "Neurology",
      experience: "12 years",
      education: "MD - Medicine, DM - Neurology",
      email: "priya.sharma@hospital.com",
      phone: "+91 98765 43211",
      availability: "Mon-Sat: 10AM-6PM",
      image: ""
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
      experience: "20 years",
      education: "MS - Orthopedics, MCh - Orthopedics",
      email: "amit.patel@hospital.com",
      phone: "+91 98765 43212",
      availability: "Mon-Fri: 8AM-4PM",
      image: ""
    },
    {
      id: 4,
      name: "Dr. Sneha Reddy",
      specialization: "Pediatrician",
      department: "Pediatrics",
      experience: "8 years",
      education: "MD - Pediatrics, DNB - Pediatrics",
      email: "sneha.reddy@hospital.com",
      phone: "+91 98765 43213",
      availability: "Mon-Sat: 9AM-5PM",
      image: ""
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialization: "Gastroenterologist",
      department: "Gastroenterology",
      experience: "18 years",
      education: "MD - Medicine, DM - Gastroenterology",
      email: "vikram.singh@hospital.com",
      phone: "+91 98765 43214",
      availability: "Mon-Fri: 10AM-6PM",
      image: ""
    },
    {
      id: 6,
      name: "Dr. Anjali Gupta",
      specialization: "Gynecologist",
      department: "Obstetrics & Gynecology",
      experience: "10 years",
      education: "MD - Obstetrics & Gynecology, DNB - OBG",
      email: "anjali.gupta@hospital.com",
      phone: "+91 98765 43215",
      availability: "Mon-Sat: 9AM-7PM",
      image: ""
    },
    {
      id: 7,
      name: "Dr. Rohit Verma",
      specialization: "Pulmonologist",
      department: "Pulmonology",
      experience: "14 years",
      education: "MD - Medicine, DM - Pulmonology",
      email: "rohit.verma@hospital.com",
      phone: "+91 98765 43216",
      availability: "Mon-Fri: 8AM-5PM",
      image: ""
    },
    {
      id: 8,
      name: "Dr. Kavita Nair",
      department: "Dermatology",
      phone: "+91 98765 43217",
      availability: "Mon-Sat: 10AM-6PM",
      image: ""
    }
  ];

  // Get unique departments for filter
  const departments = ['all', ...new Set(doctors.map(doctor => doctor.department))];

  // Filter doctors based on search and department
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

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
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name, specialization, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Doctor Image */}
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/seed/default/300/300.jpg';
                  }}
                />
              </div>

              {/* Doctor Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{doctor.department}</p>

                {/* Contact Info */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaPhone className="mr-2 text-gray-400" />
                    {doctor.phone}
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <FaClock className="mr-2 text-gray-400" />
                  {doctor.availability}
                </div>

                {/* Action Button */}
                {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Book Appointment
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <FaUserMd className="text-gray-300 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{doctors.length}</div>
              <div className="text-gray-600">Total Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">{departments.length - 1}</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Emergency Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;