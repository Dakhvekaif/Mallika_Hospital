import React, { useState } from 'react';
import { 
  FaUserMd, 
  FaEdit, 
  FaTrash, 
  FaSearch, 
  FaPlus, 
  FaEye,
  FaTimes,
  FaCheck,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFilter,
  FaUserPlus,
  FaSave,
  FaGraduationCap
} from 'react-icons/fa';

const ManageSpecialist = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [specialists, setSpecialists] = useState([
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialization: 'Cardiologist',
      experience: '15 years',
      email: 'rajesh.kumar@hospital.com',
      phone: '+91 98765 43210',
      education: 'MD - Cardiology',
      status: 'Active',
      department: 'Cardiology',
      joinedDate: '2015-03-15'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialization: 'Neurologist',
      experience: '12 years',
      email: 'priya.sharma@hospital.com',
      phone: '+91 98765 43211',
      education: 'DM - Neurology',
      status: 'Active',
      department: 'Neurology',
      joinedDate: '2018-06-20'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialization: 'Orthopedic Surgeon',
      experience: '20 years',
      email: 'amit.patel@hospital.com',
      phone: '+91 98765 43212',
      education: 'MS - Orthopedics',
      status: 'Active',
      department: 'Orthopedics',
      joinedDate: '2010-01-10'
    },
    {
      id: 4,
      name: 'Dr. Sneha Reddy',
      specialization: 'Pediatrician',
      experience: '8 years',
      email: 'sneha.reddy@hospital.com',
      phone: '+91 98765 43213',
      education: 'MD - Pediatrics',
      status: 'On Leave',
      department: 'Pediatrics',
      joinedDate: '2020-09-05'
    },
    {
      id: 5,
      name: 'Dr. Vikram Singh',
      specialization: 'Gastroenterologist',
      experience: '18 years',
      email: 'vikram.singh@hospital.com',
      phone: '+91 98765 43214',
      education: 'DM - Gastroenterology',
      status: 'Active',
      department: 'Gastroenterology',
      joinedDate: '2012-11-25'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    experience: '',
    email: '',
    phone: '',
    education: '',
    status: 'Active',
    department: '',
    joinedDate: ''
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (specialist) => {
    setSelectedSpecialist(specialist);
    setFormData(specialist);
    setShowEditModal(true);
  };

  const handleDelete = (specialist) => {
    setSelectedSpecialist(specialist);
    setShowDeleteModal(true);
  };

  const handleAdd = () => {
    // Reset form for new specialist
    setFormData({
      name: '',
      specialization: '',
      experience: '',
      email: '',
      phone: '',
      education: '',
      status: 'Active',
      department: '',
      joinedDate: ''
    });
    setShowAddModal(true);
  };

  const confirmDelete = () => {
    setSpecialists(specialists.filter(s => s.id !== selectedSpecialist.id));
    setShowDeleteModal(false);
    setSelectedSpecialist(null);
  };

  const handleUpdate = () => {
    setSpecialists(specialists.map(s => 
      s.id === selectedSpecialist.id ? formData : s
    ));
    setShowEditModal(false);
    setSelectedSpecialist(null);
  };

  const handleAddSpecialist = () => {
    // In a real app, you would call an API to add the specialist
    const newSpecialist = {
      ...formData,
      id: specialists.length + 1,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setSpecialists([...specialists, newSpecialist]);
    setShowAddModal(false);
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Manage Specialists</h1>
              <p className="text-gray-600 mt-1">View and manage hospital specialists</p>
            </div>
            <button 
              onClick={handleAdd}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaUserPlus /> Add New Specialist
            </button>
          </div>
        </div>

        {/* Specialists Table - Mobile Responsive */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specialties
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {specialists
                .filter(specialist =>
                  specialist.specialization.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((specialist) => (
                  <tr key={specialist.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaGraduationCap className="text-blue-600" />
                        </div>
                        <div className="ml-4 text-sm font-medium text-gray-900">
                          {specialist.specialization}
                        </div>
                      </div>
                    </td>
                
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(specialist)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(specialist)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden p-4 space-y-4">
            {specialists.filter(specialist =>
              specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              specialist.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
              specialist.department.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((specialist) => (
              <div key={specialist.id} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <FaGraduationCap className="text-blue-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">
                    {specialist.specialization}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(specialist)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(specialist)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Add Specialist Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Add New Specialist</h2>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={(e) => { e.preventDefault(); handleAddSpecialist(); }} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialization
                      </label>
                      <input
                        type="text"
                        value={formData.specialization}
                        onChange={(e) =>
                          setFormData({ ...formData, specialization: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
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
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                    >
                      <FaSave /> Add Specialist
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Edit Specialist Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Edit Specialist</h2>
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
                  <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization
                    </label>
                    <input
                      type="text"
                      value={formData.specialization}
                      onChange={(e) =>
                        setFormData({ ...formData, specialization: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
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
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                    >
                      <FaSave /> Update Specialist
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
                  <h3 className="text-lg font-bold text-gray-900">Delete Specialist</h3>
                  <p className="text-gray-600">Are you sure you want to delete this specialist?</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900">{selectedSpecialist?.name}</p>
                <p className="text-sm text-gray-600">{selectedSpecialist?.specialization}</p>
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

export default ManageSpecialist;