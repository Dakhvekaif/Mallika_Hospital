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

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to delete specialist. Please try again.');
      }
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
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to update specialist. Please try again.');
      }
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
      if (err.message.includes('401') || err.message.includes('403')) {
        setActionError('Authentication failed. Please login again.');
      } else {
        setActionError('Failed to add specialist. Please try again.');
      }
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
          <div className="relative">
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

        {/* Specialists Table - Desktop */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
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
                    (specialist.specialization || "").toLowerCase().includes(searchTerm.toLowerCase())
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
                            className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(specialist)}
                            className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded"
                            title="Delete"
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
            {specialists
              .filter(specialist =>
                (specialist.specialization || "").toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((specialist) => (
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

          {/* Empty State */}
          {specialists.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <FaGraduationCap className="mx-auto text-4xl text-gray-300 mb-4" />
              <p>No specialists found</p>
            </div>
          )}
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
                {actionError && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {actionError}
                  </div>
                )}
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
                        placeholder="e.g., Cardiology, Neurology"
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
                {actionError && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {actionError}
                  </div>
                )}
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
              {actionError && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {actionError}
                </div>
              )}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900">{selectedSpecialist?.specialization}</p>
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

export default ManageSpecialist;