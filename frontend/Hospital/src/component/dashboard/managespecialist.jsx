import React, { useState, useEffect } from 'react';
import {
  FaEdit,
  FaTrash,
  FaTimes,
  FaUserPlus,
  FaSave,
  FaGraduationCap,
  FaSearch,
  FaExclamationTriangle
} from 'react-icons/fa';

import {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment
} from "./api.js";

import { isAuthenticated } from '../../utils/auth.js';

const ManageSpecialist = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  
  const [specialists, setSpecialists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');

  const [formData, setFormData] = useState({
    specialization: ''
  });

  useEffect(() => {
    fetchSpecialists();
  }, []);

  const fetchSpecialists = async () => {
    try {
      setLoading(true);
      const data = await getDepartments();
      // Map API data to component state
      const mapped = data.map(dep => ({
        id: dep.id,
        specialization: dep.name
      }));
      setSpecialists(mapped);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to load specialists');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (specialist) => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to edit specialists');
      return;
    }
    setActionError('');
    setSelectedSpecialist(specialist);
    setFormData({ specialization: specialist.specialization });
    setShowEditModal(true);
  };

  const handleDelete = (specialist) => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to delete specialists');
      return;
    }
    setActionError('');
    setSelectedSpecialist(specialist);
    setShowDeleteModal(true);
  };

  const handleAdd = () => {
    if (!isAuthenticated()) {
      setActionError('You must be logged in to add specialists');
      return;
    }
    setActionError('');
    setFormData({ specialization: '' });
    setShowAddModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteDepartment(selectedSpecialist.id);
      setSpecialists(specialists.filter(s => s.id !== selectedSpecialist.id));
      setShowDeleteModal(false);
      setSelectedSpecialist(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      setActionError('Failed to delete specialist. Please try again.');
    }
  };

  const handleUpdate = async () => {
    try {
      const updated = await updateDepartment(
        selectedSpecialist.id,
        { name: formData.specialization }
      );
      setSpecialists(
        specialists.map(s =>
          s.id === selectedSpecialist.id
            ? { ...s, specialization: updated.name }
            : s
        )
      );
      setShowEditModal(false);
      setSelectedSpecialist(null);
      setActionError('');
    } catch (err) {
      console.error(err);
      setActionError('Failed to update specialist. Please try again.');
    }
  };

  const handleAddSpecialist = async () => {
    try {
      const newDep = await addDepartment({
        name: formData.specialization
      });
      setSpecialists([
        ...specialists,
        {
          id: newDep.id,
          specialization: newDep.name
        }
      ]);
      setShowAddModal(false);
      setActionError('');
    } catch (err) {
      console.error(err);
      setActionError('Failed to add specialist. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading specialists...</p>
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

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search specialists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Specialists Grid (Updated to match Doctors Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {specialists
            .filter(specialist =>
              (specialist.specialization || "").toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((specialist) => (
              <div key={specialist.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 lg:p-6 flex flex-col justify-between">
                
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaGraduationCap className="text-blue-600 text-xl" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900 text-lg">{specialist.specialization}</h3>
                        <p className="text-sm text-gray-500">Department ID: {specialist.id}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Spacer (to match height feel of doctor card) */}
                  <div className="h-4"></div>
                </div>

                {/* Bottom Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button 
                    onClick={() => handleEdit(specialist)}
                    className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded hover:bg-blue-100 transition-colors text-sm flex items-center justify-center"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(specialist)}
                    className="flex-1 bg-red-50 text-red-600 py-2 px-3 rounded hover:bg-red-100 transition-colors text-sm flex items-center justify-center"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Empty State */}
        {specialists.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            <FaGraduationCap className="mx-auto text-4xl text-gray-300 mb-4" />
            <p>No specialists found</p>
          </div>
        )}

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
                        Specialization Name
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
                        Specialization Name
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
                  <p className="text-gray-600 text-sm">Are you sure you want to delete this specialist?</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900">{selectedSpecialist?.specialization}</p>
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