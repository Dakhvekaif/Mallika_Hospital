import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCalendarAlt, FaEdit, FaTrash, FaSearch, FaTimes, 
  FaFilter, FaUserMd, FaHospital, FaExclamationTriangle, FaEye, FaPhone, FaFileMedical, FaPrint
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
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');

  const [formData, setFormData] = useState({
    patient_name: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
    status: 'Pending'
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
      setAppointments(Array.isArray(aptData) ? aptData : []);
      setDoctors(Array.isArray(docData) ? docData : []);
      setDepartments(Array.isArray(deptData) ? deptData : []);
      setError('');
    } catch (err) {
      console.error("Error fetching data:", err);
      setError('Failed to load appointments');
    } finally {
      setLoading(false);
    }
  };

  const getDoctorName = (id) => {
    const doc = doctors.find(d => d.id === Number(id));
    return doc ? doc.name : 'Unknown Doctor';
  };

  const getDepartmentName = (id) => {
    const dept = departments.find(d => d.id === Number(id));
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

  const getStatusCount = (status) => {
    if (status === 'all') return appointments.length;
    return appointments.filter(a => a.status === status).length;
  };

  const getSelectedDoctor = () => doctors.find(d => d.id === Number(formData.doctor));

  const validateAppointmentForm = () => {
    const doctor = getSelectedDoctor();
    if (!doctor) return 'Please select a doctor.';
    if (Number(formData.department) !== doctor.department) {
      return 'The selected doctor does not belong to this department. Please verify your selection.';
    }
    return null;
  };

  // ── PRINT SINGLE APPOINTMENT ──────────────────────────────────────────────
  const printSingle = (apt) => {
    const doc = getDoctorName(apt.doctor);
    const dept = getDepartmentName(apt.department);
    const win = window.open('', '_blank', 'width=700,height=600');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Appointment - ${apt.patient_name}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; padding: 40px; color: #111; }
          .header { text-align: center; border-bottom: 2px solid #6d28d9; padding-bottom: 16px; margin-bottom: 24px; }
          .header h1 { font-size: 22px; color: #6d28d9; }
          .header p { font-size: 13px; color: #666; margin-top: 4px; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: bold; margin-top: 8px; }
          .Pending { background: #fef9c3; color: #854d0e; }
          .Confirmed { background: #dbeafe; color: #1e40af; }
          .Completed { background: #dcfce7; color: #166534; }
          .Cancelled { background: #fee2e2; color: #991b1b; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; }
          .field label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.05em; }
          .field p { font-size: 15px; font-weight: 600; margin-top: 2px; }
          .full { grid-column: 1 / -1; }
          .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #aaa; border-top: 1px solid #eee; padding-top: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Mallika Hospital</h1>
          <p>Appointment Details</p>
          <span class="badge ${apt.status}">${apt.status}</span>
        </div>
        <div class="grid">
          <div class="field">
            <label>Patient Name</label>
            <p>${apt.patient_name}</p>
          </div>
          <div class="field">
            <label>Phone Number</label>
            <p>${apt.phone}</p>
          </div>
          <div class="field">
            <label>Doctor</label>
            <p>${doc}</p>
          </div>
          <div class="field">
            <label>Department</label>
            <p>${dept}</p>
          </div>
          <div class="field">
            <label>Date</label>
            <p>${apt.date}</p>
          </div>
          <div class="field">
            <label>Time</label>
            <p>${apt.time ? apt.time.slice(0,5) : 'N/A'}</p>
          </div>
          <div class="field full">
            <label>Reason for Visit</label>
            <p>${apt.reason || '—'}</p>
          </div>
        </div>
        <div class="footer">
          Printed on ${new Date().toLocaleString()} &nbsp;|&nbsp; Mallika Hospital Management System
        </div>
        <script>window.onload = () => { window.print(); window.onafterprint = () => window.close(); }<\/script>
      </body>
      </html>
    `);
    win.document.close();
  };

  // ── PRINT ALL FILTERED APPOINTMENTS ──────────────────────────────────────
  const printAll = () => {
    const label = filterStatus === 'all' ? 'All' : filterStatus;
    const rows = filteredAppointments.map((apt, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${apt.patient_name}</td>
        <td>${apt.phone}</td>
        <td>${getDoctorName(apt.doctor)}</td>
        <td>${getDepartmentName(apt.department)}</td>
        <td>${apt.date}</td>
        <td>${apt.time ? apt.time.slice(0,5) : 'N/A'}</td>
        <td>${apt.reason || '—'}</td>
        <td><span class="badge ${apt.status}">${apt.status}</span></td>
      </tr>
    `).join('');

    const win = window.open('', '_blank', 'width=1000,height=700');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${label} Appointments</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; padding: 30px; color: #111; font-size: 13px; }
          .header { text-align: center; border-bottom: 2px solid #6d28d9; padding-bottom: 14px; margin-bottom: 20px; }
          .header h1 { font-size: 20px; color: #6d28d9; }
          .header p { color: #666; font-size: 12px; margin-top: 4px; }
          table { width: 100%; border-collapse: collapse; }
          th { background: #6d28d9; color: white; padding: 8px 10px; text-align: left; font-size: 12px; }
          td { padding: 7px 10px; border-bottom: 1px solid #eee; vertical-align: top; }
          tr:nth-child(even) td { background: #f9f7ff; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: bold; }
          .Pending { background: #fef9c3; color: #854d0e; }
          .Confirmed { background: #dbeafe; color: #1e40af; }
          .Completed { background: #dcfce7; color: #166534; }
          .Cancelled { background: #fee2e2; color: #991b1b; }
          .footer { margin-top: 24px; text-align: center; font-size: 11px; color: #aaa; border-top: 1px solid #eee; padding-top: 10px; }
          .summary { margin-bottom: 16px; font-size: 13px; color: #444; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Mallika Hospital</h1>
          <p>${label} Appointments Report</p>
        </div>
        <p class="summary">Total records: <strong>${filteredAppointments.length}</strong>${searchTerm ? ` &nbsp;|&nbsp; Search: "${searchTerm}"` : ''}</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Phone</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="footer">
          Printed on ${new Date().toLocaleString()} &nbsp;|&nbsp; Mallika Hospital Management System
        </div>
        <script>window.onload = () => { window.print(); window.onafterprint = () => window.close(); }<\/script>
      </body>
      </html>
    `);
    win.document.close();
  };

  const handleView = (appointment) => {
    setSelectedAppointment(appointment);
    setShowViewModal(true);
  };

  const handleEdit = (appointment) => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to edit appointments');
      return;
    }
    setActionError('');
    setSelectedAppointment(appointment);
    setFormData({
      patient_name: appointment.patient_name || '',
      phone: appointment.phone || '',
      doctor: appointment.doctor,
      department: appointment.department,
      date: appointment.date || '',
      time: appointment.time ? appointment.time.slice(0, 5) : '',
      reason: appointment.reason || '',
      status: appointment.status,
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
    const validationError = validateAppointmentForm();
    if (validationError) {
      setActionError(validationError);
      return;
    }
    try {
      const payload = { ...formData, time: `${formData.time}:00` };
      const updatedApt = await updateAppointment(selectedAppointment.id, payload);
      setAppointments(appointments.map(a =>
        a.id === selectedAppointment.id ? updatedApt : a
      ));
      setShowEditModal(false);
      setSelectedAppointment(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      try {
        const jsonMatch = err.message.match(/\{.*\}/s);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          const msg =
            parsed?.non_field_errors?.[0] ||
            parsed?.detail ||
            Object.values(parsed)?.[0]?.[0] ||
            'Failed to update appointment. Please try again.';
          setActionError(msg);
        } else throw new Error('no json');
      } catch {
        if (err.message?.includes('401') || err.message?.includes('403')) {
          setActionError('Authentication failed. Please login again.');
        } else {
          setActionError('Failed to update appointment. Please try again.');
        }
      }
    }
  };

  const filteredAppointments = appointments.filter(apt => {
    const patientName = apt.patient_name || "";
    const phone = apt.phone || "";
    const docName = getDoctorName(apt.doctor);
    const deptName = getDepartmentName(apt.department);
    const aptStatus = (apt.status || "").trim();
    const matchesSearch = 
      patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      docName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deptName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || aptStatus === filterStatus;
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
        
        {/* Alerts */}
        {(error || actionError) && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
            <FaExclamationTriangle className="mr-2 flex-shrink-0" />
            <span>{error || actionError}</span>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Manage Appointments</h1>
              <p className="text-gray-600 mt-1">View, filter, and manage patient appointments</p>
            </div>
            <button 
              onClick={printAll}
              disabled={filteredAppointments.length === 0}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPrint /> Print Filtered Report
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by patient, phone, doctor, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <FaFilter className="text-gray-400 mr-2 flex-shrink-0" />
              {['all', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors flex-shrink-0 ${
                    filterStatus === status 
                      ? 'bg-purple-600 text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All' : status} ({getStatusCount(status)})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {filteredAppointments.map((apt) => (
            <div key={apt.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 lg:p-6 flex flex-col justify-between border border-transparent hover:border-gray-100">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="pr-2">
                    <h3 className="font-bold text-gray-900 text-lg break-words">{apt.patient_name}</h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <FaPhone className="mr-2 text-gray-400" /> {apt.phone}
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 text-xs rounded-full font-semibold border ${getStatusColor(apt.status)} whitespace-nowrap`}>
                    {apt.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100 mb-5">
                  <div className="flex items-center text-gray-700">
                    <FaUserMd className="mr-2 text-purple-500 flex-shrink-0" />
                    <span className="font-medium mr-1 text-gray-500">Doctor:</span> 
                    <span className="truncate">{getDoctorName(apt.doctor)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaHospital className="mr-2 text-purple-500 flex-shrink-0" />
                    <span className="font-medium mr-1 text-gray-500">Dept:</span> 
                    <span className="truncate">{getDepartmentName(apt.department)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="mr-2 text-purple-500 flex-shrink-0" />
                    <span className="font-medium mr-1 text-gray-500">Date:</span> 
                    {apt.date} 
                    {apt.time && <span className="ml-1 text-gray-500">at {apt.time.slice(0,5)}</span>}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-gray-100">
                <button 
                  onClick={() => handleView(apt)}
                  className="flex-1 bg-gray-50 text-gray-700 py-2 px-2 rounded hover:bg-gray-100 border border-gray-200 transition-colors text-sm flex items-center justify-center font-medium"
                  title="View Details"
                >
                  <FaEye className="mr-1.5" /> View
                </button>
                <button 
                  onClick={() => handleEdit(apt)}
                  className="flex-1 bg-blue-50 text-blue-700 py-2 px-2 rounded hover:bg-blue-100 border border-blue-100 transition-colors text-sm flex items-center justify-center font-medium"
                >
                  <FaEdit className="mr-1.5" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(apt)}
                  className="flex-1 bg-red-50 text-red-700 py-2 px-2 rounded hover:bg-red-100 border border-red-100 transition-colors text-sm flex items-center justify-center font-medium"
                >
                  <FaTrash className="mr-1.5" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAppointments.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center text-gray-500 border border-gray-100 mt-4">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFileMedical className="text-3xl text-gray-300" />
            </div>
            <p className="text-lg font-medium text-gray-600">No appointments found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* View Modal */}
        {showViewModal && selectedAppointment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Appointment Details</h2>
                  <p className="text-sm text-gray-500 mt-1">Detailed overview for {selectedAppointment.patient_name}</p>
                </div>
                <button 
                  onClick={() => setShowViewModal(false)} 
                  className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Status</span>
                    <span className={`inline-block mt-1.5 px-2.5 py-1 text-xs rounded-full font-bold border ${getStatusColor(selectedAppointment.status)}`}>
                      {selectedAppointment.status}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Date & Time</span>
                    <span className="block mt-1.5 text-sm font-semibold text-gray-900 flex items-center">
                      <FaCalendarAlt className="text-gray-400 mr-1.5" />
                      {selectedAppointment.date} {selectedAppointment.time ? selectedAppointment.time.slice(0,5) : ''}
                    </span>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100">
                  <div className="px-4 py-3 bg-white flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Patient Name</span>
                    <span className="text-sm font-bold text-gray-900">{selectedAppointment.patient_name}</span>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Phone</span>
                    <span className="text-sm font-semibold text-gray-900 flex items-center">
                      <FaPhone className="text-gray-400 mr-1.5 text-xs" /> {selectedAppointment.phone}
                    </span>
                  </div>
                  <div className="px-4 py-3 bg-white flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Doctor</span>
                    <span className="text-sm font-semibold text-gray-900">{getDoctorName(selectedAppointment.doctor)}</span>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Department</span>
                    <span className="text-sm font-semibold text-gray-900">{getDepartmentName(selectedAppointment.department)}</span>
                  </div>
                  {selectedAppointment.created_at && (
                    <div className="px-4 py-3 bg-white flex justify-between items-center border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Booked On</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {new Date(selectedAppointment.created_at).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  )}
                  {/* --- END OF NEW BLOCK --- */}
                  <div className="px-4 py-4 bg-white flex flex-col">
                    <span className="text-sm font-medium text-gray-500 mb-2">Reason for Visit</span>
                    <span className="text-sm text-gray-800 bg-gray-50 p-3 rounded border border-gray-100">
                      {selectedAppointment.reason || 'No specific reason provided at booking.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => printSingle(selectedAppointment)}
                  className="flex-1 bg-purple-600 text-white py-2.5 px-4 rounded-lg hover:bg-purple-700 transition-colors flex justify-center items-center font-medium shadow-sm"
                >
                  <FaPrint className="mr-2" /> Print Slip
                </button>
                <button 
                  onClick={() => setShowViewModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <FaEdit className="mr-2 text-purple-600" /> Edit Appointment
                  </h2>
                  <button 
                    onClick={() => setShowEditModal(false)} 
                    className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {actionError && (
                  <div className="mb-5 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start">
                    <FaExclamationTriangle className="mt-0.5 mr-2 flex-shrink-0" />
                    <span>{actionError}</span>
                  </div>
                )}
                <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Patient Name</label>
                      <input 
                        type="text" 
                        value={formData.patient_name} 
                        onChange={(e) => setFormData({...formData, patient_name: e.target.value})} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 focus:bg-white transition-colors" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input 
                        type="text" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 focus:bg-white transition-colors" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department</label>
                      <select 
                        value={formData.department} 
                        onChange={(e) => {
                          setFormData({
                            ...formData, 
                            department: e.target.value,
                            doctor: '' // Reset doctor selection when department changes
                          })
                        }} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 focus:bg-white transition-colors" 
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Doctor</label>
                      <select 
                        value={formData.doctor} 
                        onChange={(e) => setFormData({...formData, doctor: e.target.value})} 
                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${!formData.department ? 'bg-gray-100 cursor-not-allowed text-gray-400' : 'bg-gray-50 focus:bg-white'}`} 
                        required
                        disabled={!formData.department}
                      >
                        <option value="">{formData.department ? 'Select Doctor' : 'Select Dept First'}</option>
                        {doctors
                          .filter(doc => !formData.department || doc.department === Number(formData.department))
                          .map(doc => (
                            <option key={doc.id} value={doc.id}>{doc.name}</option>
                          ))
                        }
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date</label>
                      <input 
                        type="date" 
                        value={formData.date} 
                        onChange={(e) => setFormData({...formData, date: e.target.value})} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 focus:bg-white transition-colors" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Time</label>
                      <input 
                        type="time" 
                        value={formData.time} 
                        onChange={(e) => setFormData({...formData, time: e.target.value})} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 focus:bg-white transition-colors" 
                        required 
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Status</label>
                      <div className="relative">
                        <select 
                          value={formData.status} 
                          onChange={(e) => setFormData({...formData, status: e.target.value})} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium bg-gray-50 focus:bg-white transition-colors appearance-none"
                        >
                          <option value="Pending">Pending (Awaiting Confirmation)</option>
                          <option value="Confirmed">Confirmed (Scheduled)</option>
                          <option value="Completed">Completed (Visit Finished)</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                           ▼
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Reason for Visit</label>
                      <textarea 
                        rows="3"
                        value={formData.reason} 
                        onChange={(e) => setFormData({...formData, reason: e.target.value})} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 focus:bg-white transition-colors resize-none" 
                        placeholder="Brief description of symptoms or reason for appointment..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100 mt-6">
                    <button 
                      type="button" 
                      onClick={() => setShowEditModal(false)} 
                      className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium bg-white"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm flex items-center"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex items-start mb-5">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaTrash className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Delete Appointment</h3>
                  <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                    Are you sure you want to delete this appointment? This action is permanent and cannot be undone.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-100">
                <p className="font-bold text-gray-900">{selectedAppointment?.patient_name}</p>
                <div className="flex items-center mt-1.5 text-sm text-gray-600">
                  <FaCalendarAlt className="mr-1.5 text-gray-400" />
                  <span>Date: {selectedAppointment?.date}</span>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button 
                  onClick={() => setShowDeleteModal(false)} 
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDelete} 
                  className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium shadow-sm transition-colors"
                >
                  Delete Appointment
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