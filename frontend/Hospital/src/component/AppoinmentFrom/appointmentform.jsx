// src/components/AppointmentForm.jsx

import React, { useState, useEffect } from 'react';

const API = import.meta.env.VITE_BACKEND_URL; // Or your deployed backend URL

const AppointmentForm = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetch(`${API}/api/departments/`)
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => setError('Failed to load departments'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDepartmentChange = (e) => {
    const deptId = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      department: deptId,
      doctor: '',
    }));
    setDoctors([]);
    setLoadingDoctors(true);
    fetch(`${API}/api/doctors/?department=${deptId}`)
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoadingDoctors(false);
      })
      .catch(err => {
        setError('Failed to load doctors');
        setLoadingDoctors(false);
      });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
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
      const errorData = await res.json();
      console.error("🚨 Django validation error:", errorData);
      setError("Booking failed. " + JSON.stringify(errorData));
      return;
    }
    return res.json();
  })
  .then((data) => {
    if (data) {
      setStatusMessage("Appointment booked successfully!");
      setFormData({
        fullName: '',
        phone: '',
        department: '',
        doctor: '',
        appointmentDate: '',
        appointmentTime: '',
        reason: '',
      });
    }
  })
  .catch((err) => {
    console.error("❌ Error booking appointment:", err);
    setError("An unexpected error occurred.");
  });
};


  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Book an Appointment</h2>
      <p className="text-center text-gray-600 mb-8">Fill in the form below to schedule your visit.</p>

      {statusMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          {statusMessage}
        </div>
      )}

      {error && <div className="text-red-600 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Select Department</label>
            <select id="department" name="department" value={formData.department} onChange={handleDepartmentChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option value="">Select department</option>
              {departments.map(dep => (
                <option key={dep.id} value={dep.id}>{dep.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Select Doctor</label>
            <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} disabled={!formData.department} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option value="">{formData.department ? 'Select a Doctor' : 'Select a Department First'}</option>
              {doctors.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Preferred Appointment Date</label>
            <input type="date" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">Preferred Appointment Time</label>
            <input type="time" id="appointmentTime" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
          <textarea id="reason" name="reason" rows="4" value={formData.reason} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Briefly describe your reason for the visit..." />
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
