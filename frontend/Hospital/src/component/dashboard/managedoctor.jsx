import React, { useState } from 'react';
import { 
  FaStethoscope, 
  FaEdit, 
  FaTrash, 
  FaSearch, 
  FaPlus, 
  FaEye,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUserPlus,
  FaSave,
  FaList,
  FaUserMd
} from 'react-icons/fa';

const ManageDoctor = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'General Physician',
      department: 'General Medicine',
      experience: '10 years',
      email: 'sarah.j@hospital.com',
      phone: '+91 98765 43215',
      status: 'Active',
      schedule: '09:00 - 17:00'

    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Surgeon',
      department: 'Surgery',
      experience: '8 years',
      email: 'michael.c@hospital.com',
      phone: '+91 98765 43216',
      status: 'Active',
      schedule: '09:00 - 17:00'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialization: 'Pediatrician',
      department: 'Pediatrics',
      experience: '6 years',
      email: 'emily.d@hospital.com',
      phone: '+91 98765 43217',
      status: 'On Leave',
      schedule: '09:00 - 17:00'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    education: '',
    endTime: '',
    schedule: '',
    status: 'Active'
  });

  const handleEdit = (doctor) => {
    const [startTime, endTime] = doctor.schedule.split(' - ');
    setSelectedDoctor(doctor);
    setFormData({
    ...doctor,
    startTime,
    endTime
    });
    setShowEditModal(true);
  };

  const handleDelete = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDeleteModal(true);
  };

  const handleAdd = () => {
    // Reset form for new doctor
    setFormData({
      name: '',
      phone: '',
      department: '',
      education: '',
      schedule: '',
      startTime: '',
      endTime: '',
      status: 'Active'
    });
    setShowAddModal(true);
  };

  const confirmDelete = () => {
    setDoctors(doctors.filter(d => d.id !== selectedDoctor.id));
    setShowDeleteModal(false);
    setSelectedDoctor(null);
  };

  const handleUpdate = () => {
    setDoctors(doctors.map(d => 
      d.id === selectedDoctor.id 
      ?  {
          ...formData,
          schedule: `${formData.startTime} - ${formData.endTime}`
        } 
      : d
    ));
    setShowEditModal(false);
    setSelectedDoctor(null);
  };

  const handleAddDoctor = () => {
    // In a real app, you would call an API to add the doctor
    const newDoctor = {
      ...formData,
      schedule: `${formData.startTime} - ${formData.endTime}`,
      id: doctors.length + 1
    };
    setDoctors([...doctors, newDoctor]);
    setShowAddModal(false);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Manage Doctors</h1>
              <p className="text-gray-600 mt-1">View and manage hospital doctors</p>
            </div>
            <button 
              onClick={handleAdd}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaUserPlus /> Add New Doctor
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name, specialization, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">All Departments</option>
                <option value="general">General Medicine</option>
                <option value="surgery">Surgery</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="on-leave">On Leave</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {doctors.filter(d => 
            d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.department.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 lg:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(doctor.status)}`}>
                  {doctor.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-2 text-gray-400" />
                  {doctor.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhone className="mr-2 text-gray-400" />
                  {doctor.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-gray-400" />
                  {doctor.schedule}
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => handleEdit(doctor)}
                  className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded hover:bg-blue-100 transition-colors text-sm"
                >
                  <FaEdit className="inline mr-1" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(doctor)}
                  className="flex-1 bg-red-50 text-red-600 py-2 px-3 rounded hover:bg-red-100 transition-colors text-sm"
                >
                  <FaTrash className="inline mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Doctor Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Add New Doctor</h2>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={(e) => { e.preventDefault(); handleAddDoctor(); }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="General Medicine">General Medicine</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Cardiology">Cardiology</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                      <input
                        type="text"
                        value={formData.education}
                        onChange={(e) => setFormData({...formData, education: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., MBBS, MD"
                      />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Schedule
                    </label>
                      <div className="flex gap-3">
                        <input
                          type="time"
                          value={formData.startTime}
                          onChange={(e) =>
                            setFormData({ ...formData, startTime: e.target.value })
                          }
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                        <span className="self-center text-gray-500">to</span>
                          <input
                            type="time"
                            value={formData.endTime}
                            onChange={(e) =>
                              setFormData({ ...formData, endTime: e.target.value })
                            }
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                    >
                      <FaSave /> Add Doctor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Edit Doctor Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Edit Doctor</h2>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="General Medicine">General Medicine</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Cardiology">Cardiology</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                      <input
                        type="text"
                        value={formData.education}
                        onChange={(e) => setFormData({...formData, education: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., MBBS, MD"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Schedule
                      </label>

                      <div className="flex gap-3">
                        <input
                          type="time"
                          value={formData.startTime}
                          onChange={(e) =>
                            setFormData({ ...formData, startTime: e.target.value })
                          }
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />

                        <span className="self-center text-gray-500">to</span>
                        
                        <input
                          type="time"
                          value={formData.endTime}
                          onChange={(e) =>
                            setFormData({ ...formData, endTime: e.target.value })
                          }
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowEditModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                    >
                      <FaSave /> Update Doctor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <FaTrash className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Delete Doctor</h3>
                  <p className="text-gray-600">Are you sure you want to delete this doctor?</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900">{selectedDoctor?.name}</p>
                <p className="text-sm text-gray-600">{selectedDoctor?.specialization}</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageDoctor;