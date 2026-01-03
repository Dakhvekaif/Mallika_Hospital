import React, { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, FaEdit, FaTrash, FaSearch, FaTimes, 
  FaFilter, FaUserMd, FaHospital, FaExclamationTriangle
} from 'react-icons/fa';

import { 
  getAppointments, 
  updateAppointment, 
  deleteAppointment,
  getDoctors,
  getDepartments
} from "./api.js";

import { isAuthenticated } from '../../utils/auth.js';

const ManageAppointment = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    patient_name: '',
    doctor: '',
    department: '',
    date: '',
    time: '',
    status: 'Pending',
    type: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [aptData, docData, deptData] = await Promise.all([
        getAppointments(),
        getDoctors(),
        getDepartments()
      ]);
      setAppointments(aptData);
      setDoctors(docData);
      setDepartments(deptData);
      setError('');
    } catch (err) {
      console.error("Error fetching data:", err);
      setError('Failed to load appointments');
    } finally {
      setLoading(false);
    }
  };

  // Helper to find Name from ID
  const getDoctorName = (id) => {
    const doc = doctors.find(d => d.id === id);
    return doc ? doc.name : 'Unknown Doctor';
  };

  const getDepartmentName = (id) => {
    const dept = departments.find(d => d.id === id);
    return dept ? dept.name : 'Unknown Dept';
  };

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
    if (!isAuthenticated()) {
      setActionError('You must be logged in to edit appointments');
      return;
    }
    setActionError('');
    setSelectedAppointment(appointment);
    setFormData({
      patient_name: appointment.patient_name || appointment.patientName || '',
      doctor: appointment.doctor,
      department: appointment.department,
      date: appointment.date,
      time: appointment.time,
      status: appointment.status,
      type: appointment.type || ''
    });
    setShowEditModal(true);
  };

  const handleDelete = (appointment) => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to delete appointments');
      return;
    }
    setActionError('');
    setSelectedAppointment(appointment);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteAppointment(selectedAppointment.id);
      setAppointments(appointments.filter(a => a.id !== selectedAppointment.id));
      setShowDeleteModal(false);
      setSelectedAppointment(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to delete appointment. Please try again.');
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedApt = await updateAppointment(selectedAppointment.id, formData);
      
      setAppointments(appointments.map(a => 
        a.id === selectedAppointment.id ? updatedApt : a
      ));
      
      setShowEditModal(false);
      setSelectedAppointment(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to update appointment. Please try again.');
      }
    }
  };

  // Filter Logic
  const filteredAppointments = appointments.filter(apt => {
    const pName = apt.patient_name || apt.patientName || "";
    const docName = getDoctorName(apt.doctor); 
    const deptName = getDepartmentName(apt.department);

    const matchesSearch = pName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          docName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          deptName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || apt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Error Alert */}
        {(error || actionError) && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
            <FaExclamationTriangle className="mr-2" />
            {error || actionError}
          </div>
        )}

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
                placeholder="Search by patient, doctor, or department..."
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
                  <h3 className="font-semibold text-gray-900">{appointment.patient_name || appointment.patientName}</h3>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <FaUserMd className="mr-2 text-gray-400" />
                  {getDoctorName(appointment.doctor)}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-gray-400" />
                  {appointment.date} at {appointment.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaHospital className="mr-2 text-gray-400" />
                  {getDepartmentName(appointment.department)}
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
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAppointments.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            <FaCalendarAlt className="mx-auto text-4xl text-gray-300 mb-4" />
            <p>No appointments found</p>
          </div>
        )}

        {/* Edit Appointment Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Edit Appointment</h2>
                  <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600">
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {actionError && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {actionError}
                  </div>
                )}
                <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
                      <input
                        type="text"
                        value={formData.patient_name}
                        onChange={(e) => setFormData({...formData, patient_name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      >
                        <option value="">Select Doctor</option>
                        {doctors.map(doc => (
                          <option key={doc.id} value={doc.id}>{doc.name}</option>
                        ))}
                      </select>
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
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                        {departments.map(dept => (
                           <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                      <input
                        type="text"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="e.g., Checkup"
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
              {actionError && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {actionError}
                </div>
              )}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900">{selectedAppointment?.patient_name || selectedAppointment?.patientName}</p>
                <p className="text-sm text-gray-600">Date: {selectedAppointment?.date}</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setActionError('');
                  }}
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
