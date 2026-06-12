import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus, FaArrowLeft, FaVideo, FaImage, FaCheckCircle, FaTimesCircle, FaEdit, FaTimes } from 'react-icons/fa';
import { getAuthHeader } from '../../utils/auth';

const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://mallika-hospital.onrender.com";

const ManageTestimonials = ({ onBack }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [editingId, setEditingId] = useState(null); // 👈 Tracks if we are editing an entry
  
  // Form State
  const [formData, setFormData] = useState({
    patient_name: '',
    department: '',
    testimonial_type: 'image',
    review_text: '',
    video_url: '',
    display_order: '100',
    is_visible: true
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch current list
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/testimonials/`, {
        headers: getAuthHeader()
      });
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (err) {
      console.error("Failed to load testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Triggered when the user clicks the Edit button row
  const startEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      patient_name: item.patient_name,
      department: item.department,
      testimonial_type: item.testimonial_type,
      review_text: item.review_text || '',
      video_url: item.video_url || '',
      display_order: String(item.display_order),
      is_visible: item.is_visible
    });
    setImageFile(null); // Clear previous selection
    setIsFormOpen(true);
    
    // Smoothly scroll to the top form view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancels editing mode and flushes state fields clean
  const cancelEdit = () => {
    setEditingId(null);
    setImageFile(null);
    setFormData({
      patient_name: '',
      department: '',
      testimonial_type: 'image',
      review_text: '',
      video_url: '',
      display_order: '100',
      is_visible: true
    });
    setIsFormOpen(false);
  };

  // Submit handler supporting both POST (Create) and PATCH (Update) paths
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    const uploadPayload = new FormData();
    uploadPayload.append('patient_name', formData.patient_name);
    uploadPayload.append('department', formData.department);
    uploadPayload.append('testimonial_type', formData.testimonial_type);
    uploadPayload.append('review_text', formData.review_text);
    uploadPayload.append('display_order', formData.display_order);
    uploadPayload.append('is_visible', formData.is_visible);

    if (formData.testimonial_type === 'video') {
      uploadPayload.append('video_url', formData.video_url);
      // Send blank string to clear out any old images if switching types
      uploadPayload.append('image_file', ''); 
    } else if (formData.testimonial_type === 'image') {
      uploadPayload.append('video_url', '');
      if (imageFile) {
        uploadPayload.append('image_file', imageFile);
      }
    }

    // Determine path rules dynamically based on operation state mode
    const url = editingId 
      ? `${API_BASE}/api/testimonials/${editingId}/` 
      : `${API_BASE}/api/testimonials/`;
      
    const method = editingId ? 'PATCH' : 'POST';

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          ...getAuthHeader() // No 'Content-Type' header here, browser handles Multipart boundaries natively
        },
        body: uploadPayload
      });

      if (res.ok) {
        cancelEdit();
        fetchTestimonials();
      }
    } catch (err) {
      console.error("Error saving testimonial data payload:", err);
    } finally {
      setFormLoading(false);
    }
  };

  // Delete handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this testimonial?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/testimonials/${id}/`, {
        method: 'DELETE',
        headers: getAuthHeader()
      });
      if (res.ok) {
        if (editingId === id) cancelEdit();
        fetchTestimonials();
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-2">
            <FaArrowLeft className="mr-2" /> Back to Dashboard
          </button>
          <h1 className="text-2xl lg:text-3xl font-black text-gray-800">
            {editingId ? 'Modify Patient Testimonial' : 'Manage Patient Testimonials'}
          </h1>
        </div>
        <button 
          onClick={() => { if(isFormOpen && editingId) { cancelEdit(); } else { setIsFormOpen(!isFormOpen); } }}
          className={`${isFormOpen ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 self-start transition-colors`}
        >
          {isFormOpen ? 'Close Panel' : 'Add New Testimonial'} {isFormOpen ? <FaTimes size={12}/> : <FaPlus size={12} />}
        </button>
      </div>

      {/* Upload/Edit Form Panel */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {editingId && (
            <div className="col-span-1 md:col-span-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium flex justify-between items-center">
              <span>You are currently editing the entry record for: <strong>{formData.patient_name}</strong></span>
              <button type="button" onClick={cancelEdit} className="text-blue-600 hover:text-blue-900 font-bold underline text-xs">Cancel Edit</button>
            </div>
          )}

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Patient Name</label>
            <input 
              type="text" required value={formData.patient_name}
              onChange={(e) => setFormData({...formData, patient_name: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="e.g., Ramesh Kumar"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Medical Department</label>
            <input 
              type="text" required value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="e.g., Cardiology"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Testimonial Media Type</label>
            <select 
              value={formData.testimonial_type}
              onChange={(e) => setFormData({...formData, testimonial_type: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option value="image">Image + Written Quote</option>
              <option value="video">YouTube Video Review</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Display Order (Sorting Priority)</label>
            <input 
              type="number" required value={formData.display_order}
              onChange={(e) => setFormData({...formData, display_order: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            />
          </div>

          {formData.testimonial_type === 'video' ? (
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">YouTube Watch Link URL</label>
              <input 
                type="url" required value={formData.video_url}
                onChange={(e) => setFormData({...formData, video_url: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
          ) : (
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Patient Photo Upload {editingId && <span className="text-xs font-normal text-gray-500">(Leave blank to keep existing file picture)</span>}
              </label>
              <input 
                type="file" accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full border p-1.5 rounded-lg bg-gray-50 outline-none" 
              />
            </div>
          )}

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Written Review / Quote Text</label>
            <textarea 
              rows="3" value={formData.review_text}
              onChange={(e) => setFormData({...formData, review_text: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Type out what the patient or relative said here..."
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex items-center gap-2 py-2">
            <input 
              type="checkbox" id="is_visible" checked={formData.is_visible}
              onChange={(e) => setFormData({...formData, is_visible: e.target.checked})}
              className="size-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="is_visible" className="text-sm font-medium text-gray-700 select-none">
              Make this testimonial active immediately on the public website pages
            </label>
          </div>

          <div className="col-span-1 md:col-span-2 flex gap-3 mt-2">
            {editingId && (
              <button 
                type="button" onClick={cancelEdit}
                className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2.5 rounded-lg transition-colors"
              >
                Cancel
              </button>
            )}
            <button 
              type="submit" disabled={formLoading}
              className={`flex-1 font-bold py-2.5 rounded-lg transition-colors text-white disabled:opacity-50 ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {formLoading ? 'Processing data...' : editingId ? 'Update Testimonial Entry' : 'Save Testimonial Entry'}
            </button>
          </div>
        </form>
      )}

      {/* Main Content Table List View */}
      {loading ? (
        <div className="text-center py-12"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div></div>
      ) : testimonials.length === 0 ? (
        <div className="bg-white rounded-xl text-center py-12 border p-6"><p className="text-gray-500">No testimonials saved in database.</p></div>
      ) : (
        <div className="bg-white shadow rounded-xl overflow-hidden border">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-gray-700">
              <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-3.5">Patient Details</th>
                  <th className="px-6 py-3.5">Type</th>
                  <th className="px-6 py-3.5">Sorting ID</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {testimonials.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{item.patient_name}</div>
                      <div className="text-xs text-blue-600 font-medium tracking-wide mt-0.5">{item.department}</div>
                    </td>
                    <td className="px-6 py-4">
                      {item.testimonial_type === 'video' ? (
                        <span className="flex items-center gap-1.5 font-medium text-red-600"><FaVideo size={13}/> Video</span>
                      ) : (
                        <span className="flex items-center gap-1.5 font-medium text-blue-600"><FaImage size={13}/> Image</span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-mono text-gray-500">{item.display_order}</td>
                    <td className="px-6 py-4">
                      {item.is_visible ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700"><FaCheckCircle size={12}/> Live</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600"><FaTimesCircle size={12}/> Hidden</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center flex items-center justify-center gap-1">
                      {/* ✅ Edit Button Option Added Here */}
                      <button 
                        onClick={() => startEdit(item)}
                        className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit entry details"
                      >
                        <FaEdit size={15}/>
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete entry"
                      >
                        <FaTrash size={15}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTestimonials;