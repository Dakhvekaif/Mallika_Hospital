import React, { useState, useEffect } from 'react';
import { 
  FaStethoscope, FaEdit, FaTrash, FaSearch, FaUserPlus, FaTimes, 
  FaPhone, FaClock, FaSave, FaExclamationTriangle, FaInfoCircle, FaUserMd, FaUpload
} from 'react-icons/fa';

import { 
  getDoctors, 
  addDoctor, 
  updateDoctor, 
  deleteDoctor,
  getDepartments 
} from "./api.js";

import { isAuthenticated } from '../../utils/auth.js';

const ManageDoctor = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');

  // --- NEW STATE for Load More functionality ---
  const [visibleCount, setVisibleCount] = useState(6);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const initialFormState = {
    name: '',
    phone: '', 
    department: '', 
    description: '',
    startTime: '',
    endTime: '',
    status: 'Active',
    availableDays: [],
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [doctorsData, deptData] = await Promise.all([
        getDoctors(),
        getDepartments()
      ]);
      setDoctors(doctorsData);
      setDepartments(deptData);
      setError('');
    } catch (err) {
      console.error("Error loading data:", err);
      setError('Failed to load doctors');
    } finally {
      setLoading(false);
    }
  };

  // --- NEW FUNCTION to handle loading more items ---
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };
  
  // --- MODIFIED: Filter logic is now separate from rendering ---
  const filteredDoctors = doctors.filter(d => 
    (d.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- IMPORTANT: Reset visible count when search term changes ---
  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setImagePreviewUrl(null);
    }
  };
  
  const handleEdit = (doctor) => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to edit doctors');
      return;
    }
    setActionError('');
    setSelectedDoctor(doctor);

    setFormData({
      ...doctor,
      department: doctor.department || '',
      description: doctor.description || '',
      startTime: doctor.start_time ? doctor.start_time.slice(0, 5) : '',
      endTime: doctor.end_time ? doctor.end_time.slice(0, 5) : '',
      status: doctor.active ? 'Active' : 'Inactive',
      availableDays: doctor.available_days ? doctor.available_days.split(', ').map(day => day.trim()) : [],
    });
    
    setImagePreviewUrl(doctor.photo || null);
    setImageFile(null);
    setShowEditModal(true);
  };

  const handleDelete = (doctor) => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to delete doctors');
      return;
    }
    setActionError('');
    setSelectedDoctor(doctor);
    setShowDeleteModal(true);
  };

  const handleAdd = () => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to add doctors');
      return;
    }
    setActionError('');
    setFormData(initialFormState);
    setImageFile(null);
    setImagePreviewUrl(null);
    setShowAddModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteDoctor(selectedDoctor.id);
      setDoctors(doctors.filter(d => d.id !== selectedDoctor.id));
      setShowDeleteModal(false);
      setSelectedDoctor(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to delete doctor. Please try again.');
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('department', formData.department);
      payload.append('description', formData.description);
      payload.append('start_time', `${formData.startTime}:00`);
      payload.append('end_time', `${formData.endTime}:00`);
      payload.append('active', formData.status === 'Active');
      payload.append('available_days', formData.availableDays.join(', '));
      if (imageFile) {
        payload.append('photo', imageFile);
      }
      
      const updatedDoc = await updateDoctor(selectedDoctor.id, payload);
      
      setDoctors(doctors.map(d => d.id === selectedDoctor.id ? updatedDoc : d));
      setShowEditModal(false);
      setSelectedDoctor(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to update doctor. Please try again.');
      }
    }
  };

  const handleAddDoctor = async () => {
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('department', formData.department);
      payload.append('description', formData.description);
      payload.append('start_time', `${formData.startTime}:00`);
      payload.append('end_time', `${formData.endTime}:00`);
      payload.append('active', formData.status === 'Active');
      payload.append('available_days', formData.availableDays.join(', '));
      if (imageFile) {
        payload.append('photo', imageFile);
      }

      const newDoc = await addDoctor(payload);
      
      setDoctors([...doctors, newDoc]);
      setShowAddModal(false);
      setActionError('');
    } catch (err) {
      console.error(err);
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to add doctor. Please try again.');
      }
    }
  };

  const getStatusColor = (isActive) => {
    return isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getDepartmentName = (id) => {
    const dept = departments.find(d => d.id === id);
    return dept ? dept.name : 'N/A';
  };
  
  const handleDayChange = (day, isChecked) => {
    setFormData(prev => {
      const days = isChecked 
        ? [...prev.availableDays, day]
        : prev.availableDays.filter(d => d !== day);
      return { ...prev, availableDays: days };
    });
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctors...</p>
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

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* --- MODIFIED: Map over the SLICED array --- */}
          {filteredDoctors.slice(0, visibleCount).map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 lg:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {doctor.photo ? (
                    <img src={doctor.photo} alt={doctor.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaUserMd className="text-green-600" />
                    </div>
                  )}
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">
                        {getDepartmentName(doctor.department)}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(doctor.active)}`}>
                  {doctor.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <FaPhone className="mr-2 text-gray-400" />
                  {doctor.phone || "N/A"}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-gray-400" />
                  {doctor.start_time && doctor.end_time 
                    ? `${doctor.start_time.slice(0, 5)} - ${doctor.end_time.slice(0, 5)}`
                    : "N/A"}
                </div>
                <div className="text-gray-600">
                  <FaInfoCircle className="mr-2 text-gray-400 inline" />
                  {doctor.available_days 
                    ? doctor.available_days.split(',').map(day => day.trim()).join(', ') 
                    : 'No days specified'}
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

        {/* --- NEW: Load More Button --- */}
        {filteredDoctors.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredDoctors.length === 0 && !loading && (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            <FaStethoscope className="mx-auto text-4xl text-gray-300 mb-4" />
            <p>No doctors found</p>
          </div>
        )}

        {/* Modals (Add, Edit, Delete) remain the same */}
        {/* Add Doctor Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Add New Doctor</h2>
                  <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select 
                        value={formData.department} 
                        onChange={(e) => setFormData({...formData, department: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                           <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Photo</label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                          <FaUpload className="mr-2" />
                          Choose File
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                        </label>
                        <span className="text-sm text-gray-500">
                          {imageFile ? imageFile.name : 'No file chosen'}
                        </span>
                      </div>
                      {imagePreviewUrl && (
                        <div className="mt-4">
                          <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
                          <img src={imagePreviewUrl} alt="Preview" className="h-24 w-24 object-cover rounded-full shadow-md" />
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea 
                        rows="3"
                        value={formData.description} 
                        onChange={(e) => setFormData({...formData, description: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        placeholder="Doctor's qualifications and bio..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                      <input 
                        type="time" 
                        value={formData.startTime} 
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                      <input 
                        type="time" 
                        value={formData.endTime} 
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select 
                        value={formData.status} 
                        onChange={(e) => setFormData({...formData, status: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Days</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                          <label key={day} className="flex items-center space-x-2 text-sm">
                            <input
                              type="checkbox"
                              value={day}
                              checked={formData.availableDays.includes(day)}
                              onChange={(e) => handleDayChange(day, e.target.checked)}
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span>{day}</span>
                          </label>
                        ))}
                      </div>
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
        
        {/* Edit Doctor Modal - Form is the same as Add Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Edit Doctor</h2>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select 
                        value={formData.department} 
                        onChange={(e) => setFormData({...formData, department: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                           <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Photo</label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                          <FaUpload className="mr-2" />
                          Choose New File
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                        </label>
                        <span className="text-sm text-gray-500">
                          {imageFile ? imageFile.name : 'No new file chosen'}
                        </span>
                      </div>
                      {imagePreviewUrl && (
                        <div className="mt-4">
                          <p className="text-xs text-gray-500 mb-2">Current/New Image Preview:</p>
                          <img src={imagePreviewUrl} alt="Preview" className="h-24 w-24 object-cover rounded-full shadow-md" />
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea 
                        rows="3"
                        value={formData.description} 
                        onChange={(e) => setFormData({...formData, description: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                      <input 
                        type="time" 
                        value={formData.startTime} 
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                      <input 
                        type="time" 
                        value={formData.endTime} 
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select 
                        value={formData.status} 
                        onChange={(e) => setFormData({...formData, status: e.target.value})} 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Days</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                          <label key={day} className="flex items-center space-x-2 text-sm">
                            <input
                              type="checkbox"
                              value={day}
                              checked={formData.availableDays.includes(day)}
                              onChange={(e) => handleDayChange(day, e.target.checked)}
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span>{day}</span>
                          </label>
                        ))}
                      </div>
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

export default ManageDoctor;