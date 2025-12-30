import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaEdit, 
  FaTrash, 
  FaSearch, 
  FaPlus, 
  FaEye,
  FaTimes,
  FaFilter,
  FaUserMd,
  FaHospital,
  FaCalendarPlus
} from 'react-icons/fa';

const ManageAppointment = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      doctorName: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'Confirmed',
      department: 'General Medicine',
      type: 'Regular Checkup',
      patientId: 'P1001',
      doctorId: 'D2001'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      doctorName: 'Dr. Michael Chen',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'Pending',
      department: 'Surgery',
      type: 'Consultation',
      patientId: 'P1002',
      doctorId: 'D2002'
    },
    {
      id: 3,
      patientName: 'Robert Johnson',
      doctorName: 'Dr. Emily Davis',
      date: '2024-01-16',
      time: '11:30 AM',
      status: 'Completed',
      department: 'Pediatrics',
      type: 'Follow-up',
      patientId: 'P1003',
      doctorId: 'D2003'
    },
    {
      id: 4,
      patientName: 'Mary Williams',
      doctorName: 'Dr. Sarah Johnson',
      date: '2024-01-16',
      time: '3:00 PM',
      status: 'Cancelled',
      department: 'General Medicine',
      type: 'Emergency',
      patientId: 'P1004',
      doctorId: 'D2001'
    }
  ]);

  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    status: 'Pending',
    department: '',
    type: '',
    patientId: '',
    doctorId: ''
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setFormData(appointment);
    setShowEditModal(true);
  };

  const handleDelete = (appointment) => {
    setSelectedAppointment(appointment);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // In a real app, you would update the state or call an API
    setShowDeleteModal(false);
    setSelectedAppointment(null);
  };

  const handleUpdate = () => {
    // In a real app, you would update the state or call an API
    setShowEditModal(false);
    setSelectedAppointment(null);
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          apt.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || apt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Manage Appointments</h1>
              <p className="text-gray-600 mt-1">View and manage patient appointments</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search appointments by patient, doctor, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Status</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <FaFilter /> Filter
              </button>
            </div>
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 lg:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{appointment.patientName}</h3>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <FaUserMd className="mr-2 text-gray-400" />
                  {appointment.doctorName}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-gray-400" />
                  {appointment.date} at {appointment.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaHospital className="mr-2 text-gray-400" />
                  {appointment.department}
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => handleEdit(appointment)}
                  className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded hover:bg-blue-100 transition-colors text-sm"
                >
                  <FaEdit className="inline mr-1" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(appointment)}
                  className="flex-1 bg-red-50 text-red-600 py-2 px-3 rounded hover:bg-red-100 transition-colors text-sm"
                >
                  <FaTrash className="inline mr-1" /> Delete
                </button>
                {appointment.status !== 'Completed' && appointment.status !== 'Cancelled' && (
                  <button className="flex-1 bg-green-50 text-green-600 py-2 px-3 rounded hover:bg-green-100 transition-colors text-sm">
                    <FaEye className="inline mr-1" /> View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Edit Appointment Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Edit Appointment</h2>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
                      <input
                        type="text"
                        value={formData.patientName}
                        onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Name</label>
                      <input
                        type="text"
                        value={formData.doctorName}
                        onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <input
                        type="text"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="e.g., 10:00 AM"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
                      <input
                        type="text"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="e.g., Regular Checkup"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
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
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      Update Appointment
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
                  <h3 className="text-lg font-bold text-gray-900">Delete Appointment</h3>
                  <p className="text-gray-600">Are you sure you want to delete this appointment?</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900">{selectedAppointment?.patientName}</p>
                <p className="text-sm text-gray-600">{selectedAppointment?.doctorName} - {selectedAppointment?.date} at {selectedAppointment?.time}</p>
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

export default ManageAppointment;