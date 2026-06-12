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
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                Total: <span className="font-semibold text-gray-800">{appointments.length}</span>
              </span>
              {/* Print All Button */}
              <button
                onClick={printAll}
                disabled={filteredAppointments.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaPrint /> Print {filterStatus !== 'all' ? filterStatus : 'All'} ({filteredAppointments.length})
              </button>
            </div>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {[
              { label: 'All', value: 'all', color: 'bg-gray-100 text-gray-700 border-gray-300' },
              { label: 'Pending', value: 'Pending', color: 'bg-yellow-50 text-yellow-700 border-yellow-300' },
              { label: 'Confirmed', value: 'Confirmed', color: 'bg-blue-50 text-blue-700 border-blue-300' },
              { label: 'Completed', value: 'Completed', color: 'bg-green-50 text-green-700 border-green-300' },
              { label: 'Cancelled', value: 'Cancelled', color: 'bg-red-50 text-red-700 border-red-300' },
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilterStatus(tab.value)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-2 ${
                  filterStatus === tab.value 
                    ? `${tab.color} border-2 shadow-sm` 
                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  filterStatus === tab.value ? 'bg-white bg-opacity-60' : 'bg-gray-100'
                }`}>
                  {getStatusCount(tab.value)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by patient name, phone, doctor, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">
          Showing <span className="font-semibold text-gray-800">{filteredAppointments.length}</span>
          {filterStatus !== 'all' ? ` ${filterStatus}` : ''} appointment{filteredAppointments.length !== 1 ? 's' : ''}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 lg:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{appointment.patient_name}</h3>
                  <p className="text-sm text-gray-600">{appointment.reason}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <FaUserMd className="mr-2 text-gray-400 flex-shrink-0" />
                  {getDoctorName(appointment.doctor)}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-gray-400 flex-shrink-0" />
                  {appointment.date} at {appointment.time ? appointment.time.slice(0, 5) : 'N/A'}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhone className="mr-2 text-gray-400 flex-shrink-0" />
                  {appointment.phone}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <button 
                  onClick={() => handleView(appointment)}
                  className="bg-gray-50 text-gray-600 py-2 px-3 rounded hover:bg-gray-100 transition-colors text-sm"
                >
                  <FaEye className="inline mr-1" /> View
                </button>
                <button 
                  onClick={() => handleEdit(appointment)}
                  className="bg-blue-50 text-blue-600 py-2 px-3 rounded hover:bg-blue-100 transition-colors text-sm"
                >
                  <FaEdit className="inline mr-1" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(appointment)}
                  className="bg-red-50 text-red-600 py-2 px-3 rounded hover:bg-red-100 transition-colors text-sm"
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
            {filterStatus !== 'all' ? (
              <>
                <p className="font-medium">No {filterStatus} appointments</p>
                <p className="text-sm mt-1">There are currently no appointments with "{filterStatus}" status.</p>
                <button onClick={() => setFilterStatus('all')} className="mt-3 text-purple-600 hover:underline text-sm">
                  View all appointments
                </button>
              </>
            ) : (
              <p>No appointments found{searchTerm ? ` matching "${searchTerm}"` : ''}</p>
            )}
          </div>
        )}

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Edit Appointment</h2>
                  <button onClick={() => { setShowEditModal(false); setActionError(''); }} className="text-gray-400 hover:text-gray-600">
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
                      <input type="text" value={formData.patient_name}
                        onChange={(e) => setFormData({...formData, patient_name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
                      <select value={formData.doctor}
                        onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                        <option value="">Select Doctor</option>
                        {doctors.map(doc => <option key={doc.id} value={doc.id}>{doc.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                        <option value="">Select Department</option>
                        {departments.map(dept => <option key={dept.id} value={dept.id}>{dept.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input type="date" value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                      {getSelectedDoctor()?.available_days && (
                        <p className="text-xs text-gray-500 mt-1">
                          Available: {getSelectedDoctor().available_days.split(',').map(d => d.trim()).join(', ')}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <input type="time" value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                      {getSelectedDoctor()?.start_time && getSelectedDoctor()?.end_time && (
                        <p className="text-xs text-gray-500 mt-1">
                          Hours: {getSelectedDoctor().start_time.slice(0,5)} – {getSelectedDoctor().end_time.slice(0,5)}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                      <textarea rows="2" value={formData.reason}
                        onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="e.g., Fever, Checkup" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button type="button" onClick={() => { setShowEditModal(false); setActionError(''); }}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      Update Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* View Modal */}
        {showViewModal && selectedAppointment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Appointment Details</h2>
                  <button onClick={() => setShowViewModal(false)} className="text-gray-400 hover:text-gray-600">
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{selectedAppointment.patient_name}</h3>
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedAppointment.status)}`}>
                      {selectedAppointment.status}
                    </span>
                  </div>
                  <hr />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-700 flex items-center"><FaPhone className="mr-2 text-gray-400" /> Phone Number</h4>
                      <p className="text-gray-600 mt-1">{selectedAppointment.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 flex items-center"><FaFileMedical className="mr-2 text-gray-400" /> Reason</h4>
                      <p className="text-gray-600 mt-1">{selectedAppointment.reason}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 flex items-center"><FaUserMd className="mr-2 text-gray-400" /> Doctor</h4>
                      <p className="text-gray-600 mt-1">{getDoctorName(selectedAppointment.doctor)}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 flex items-center"><FaHospital className="mr-2 text-gray-400" /> Department</h4>
                      <p className="text-gray-600 mt-1">{getDepartmentName(selectedAppointment.department)}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 flex items-center"><FaCalendarAlt className="mr-2 text-gray-400" /> Date & Time</h4>
                    <p className="text-gray-600 mt-1">
                      {selectedAppointment.date} at {selectedAppointment.time ? selectedAppointment.time.slice(0, 5) : 'N/A'}
                    </p>
                  </div>
                </div>
                {/* View modal footer with Print + Close */}
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => printSingle(selectedAppointment)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FaPrint /> Print
                  </button>
                  <button onClick={() => setShowViewModal(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
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
                <p className="font-medium text-gray-900">{selectedAppointment?.patient_name}</p>
                <p className="text-sm text-gray-600">Date: {selectedAppointment?.date}</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button onClick={() => { setShowDeleteModal(false); setActionError(''); }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
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