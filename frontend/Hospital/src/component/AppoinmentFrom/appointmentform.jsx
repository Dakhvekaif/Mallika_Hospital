import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fix 1: Add fallback URL to prevent crashes if env variable is missing
const API = import.meta.env.VITE_BACKEND_URL || "https://mallika-hospital.onrender.com";

const AppointmentForm = () => {
  const location = useLocation();
  
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [error, setError] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
  });

  // Fetch Departments on Load
  useEffect(() => {
    fetch(`${API}/api/departments/`)
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => setError('Failed to load departments'));
  }, []);

  // AUTO-FILL LOGIC (From Doctors List)
  useEffect(() => {
    if (location.state && location.state.selectedDoctor) {
      const selectedDoc = location.state.selectedDoctor;
      
      // Scroll form into view smoothly
      const formElement = document.getElementById('appointment-form');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });

      // A. Pre-fill form data
      setFormData(prev => ({
        ...prev,
        department: selectedDoc.department, 
        doctor: selectedDoc.id 
      }));

      // B. Fetch doctors for this department
      setLoadingDoctors(true);
      fetch(`${API}/api/doctors/?department=${selectedDoc.department}`)
        .then(res => res.json())
        .then(data => {
          setDoctors(data);
          setLoadingDoctors(false);
        })
        .catch(err => {
          console.error(err);
          // Fix 2: Ensure loading stops even on error
          setLoadingDoctors(false); 
        });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDepartmentChange = (e) => {
    const deptId = e.target.value;
    setFormData(prevData => ({ ...prevData, department: deptId, doctor: '' }));
    setDoctors([]);
    
    if(deptId) {
      setLoadingDoctors(true);
      fetch(`${API}/api/doctors/?department=${deptId}`)
        .then(res => res.json())
        .then(data => {
          setDoctors(data);
          setLoadingDoctors(false);
        })
        .catch(err => {
          setLoadingDoctors(false);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setStatusMessage('');

    const payload = {
      patient_name: formData.fullName,
      phone: formData.phone,
      department: formData.department,
      doctor: formData.doctor,
      date: formData.appointmentDate,
      time: formData.appointmentTime,
      reason: formData.reason
    };

    fetch(`${API}/api/appointments/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    .then(async (res) => {
      if (!res.ok) {
        const errData = await res.json();
        // Return structured error for catch block
        throw new Error(JSON.stringify(errData)); 
      }
      return res.json();
    })
    .then((data) => {
      setStatusMessage("Appointment booked successfully!");
      setFormData({
        fullName: '', phone: '', department: '', doctor: '', 
        appointmentDate: '', appointmentTime: '', reason: ''
      });
      // Clear doctors list after success
      setDoctors([]); 
    })
    .catch((err) => {
      console.error(err);
      // Try to parse the Django error message, otherwise show generic
      try {
        const errorObj = JSON.parse(err.message);
        // Join values if it's an object of arrays (standard Django format)
        const msg = Object.values(errorObj).flat().join(', ');
        setError(`Booking failed: ${msg}`);
      } catch (e) {
        setError("Failed to book appointment. Please check your inputs.");
      }
    });
  };

  return (
    <div id="appointment-form" className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Book an Appointment</h2>
      <p className="text-center text-gray-600 mb-8">Fill in the form below to schedule your visit.</p>

      {statusMessage && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">{statusMessage}</div>}
      {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Department</label>
            <select name="department" value={formData.department} onChange={handleDepartmentChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option value="">Select department</option>
              {departments.map(dep => (
                <option key={dep.id} value={dep.id}>{dep.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
            <select 
              name="doctor" 
              value={formData.doctor} 
              onChange={handleChange} 
              disabled={!formData.department || loadingDoctors} 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white disabled:bg-gray-100"
            >
              {loadingDoctors ? (
                <option>Loading...</option>
              ) : (
                <>
                  <option value="">{formData.department ? 'Select a Doctor' : 'Select Department First'}</option>
                  {doctors.map(doc => (
                    <option key={doc.id} value={doc.id}>{doc.name}</option>
                  ))}
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Reason</label>
          <textarea name="reason" rows="4" value={formData.reason} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;