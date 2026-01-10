import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

  // --- NEW: Handler for when a doctor is selected ---
  const handleDoctorChange = (e) => {
    const selectedDoctorId = e.target.value;
    
    // First, update the doctor field in the form
    setFormData(prevData => ({ ...prevData, doctor: selectedDoctorId }));

    // Find the selected doctor object from our state
    const selectedDoctor = doctors.find(doc => doc.id === parseInt(selectedDoctorId, 10));

    // If a doctor is found and they have a start_time, update the appointment time
    if (selectedDoctor && selectedDoctor.start_time) {
      // Format time from "HH:mm:ss" to "HH:mm" for the input field
      const formattedTime = selectedDoctor.start_time.slice(0, 5);
      setFormData(prevData => ({ ...prevData, appointmentTime: formattedTime }));
    } else {
      // If no doctor is selected or no time is available, clear the time field
      setFormData(prevData => ({ ...prevData, appointmentTime: '' }));
    }
  };
  
  // --- REVISED: Auto-fill logic ---
  useEffect(() => {
    if (location.state && location.state.selectedDoctor) {
      const selectedDoc = location.state.selectedDoctor;
      
      // Scroll form into view
      const formElement = document.getElementById('appointment-form');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });

      // Fetch doctors for this department first
      setLoadingDoctors(true);
      fetch(`${API}/api/doctors/?department=${selectedDoc.department}`)
        .then(res => res.json())
        .then(data => {
          setDoctors(data);
          
          // Now that we have the doctors, find the full object for our selected doctor
          const fullDoctorObject = data.find(doc => doc.id === selectedDoc.id);
          
          // Format the time
          let defaultTime = '';
          if (fullDoctorObject && fullDoctorObject.start_time) {
            defaultTime = fullDoctorObject.start_time.slice(0, 5); 
          }

          // Set all form data at once, including the auto-filled time
          setFormData(prev => ({
            ...prev,
            department: selectedDoc.department, 
            doctor: selectedDoc.id,
            appointmentTime: defaultTime 
          }));
          
          setLoadingDoctors(false);
        })
        .catch(err => {
          console.error("Failed to fetch doctors for auto-fill:", err);
          setLoadingDoctors(false);
        });
    }
  }, [location.state]); // Dependency array remains the same

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDepartmentChange = (e) => {
    const deptId = e.target.value;
    setFormData(prevData => ({ ...prevData, department: deptId, doctor: '', appointmentTime: '' })); // Also clear time
    setDoctors([]);
    
    if(deptId) {
      setLoadingDoctors(true);
      fetch(`${API}/api/doctors/?department=${deptId}`)
        .then(res => res.json())
        .then(data => {
          setDoctors(data);
          setLoadingDoctors(false);
        })
        .catch(err => setLoadingDoctors(false));
    } else {
      setLoadingDoctors(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
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
      setDoctors([]); 
    })
    .catch((err) => {
      try {
        const errorObj = JSON.parse(err.message);
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
              // --- UPDATED: Use the new handler ---
              onChange={handleDoctorChange} 
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
            {/* The time value will now be populated automatically when a doctor is selected */}
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