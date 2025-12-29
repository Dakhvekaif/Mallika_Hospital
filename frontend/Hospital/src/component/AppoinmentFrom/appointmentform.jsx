// src/components/AppointmentForm.jsx

import React, { useState } from 'react';

// Mock data for departments and doctors
const departmentDoctors = {
  "General Practice": ["Dr. Alice Smith", "Dr. Bob Johnson"],
  "Cardiology": ["Dr. Carol Williams", "Dr. David Brown"],
  "Pediatrics": ["Dr. Eve Davis", "Dr. Frank Miller"],
  "Orthopedics": ["Dr. Grace Wilson", "Dr. Henry Moore"],
  "Neurology": ["Dr. Ian Taylor", "Dr. Jane Anderson"],
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    agreedToTerms: false,
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      doctor: '', // Reset doctor when department changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form Data Submitted:', formData);
    setStatusMessage('Appointment request submitted successfully! We will contact you soon.');
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      department: '',
      doctor: '',
      appointmentDate: '',
      appointmentTime: '',
      reason: '',
      agreedToTerms: false,
    });
    setTimeout(() => setStatusMessage(''), 5000); // Hide message after 5 seconds
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          {/* <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div> */}

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date of Birth */}
          {/* <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div> */}

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleDepartmentChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="" disabled>Select a Department</option>
              {Object.keys(departmentDoctors).map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Doctor */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Select Doctor</label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              disabled={!formData.department}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white disabled:bg-gray-100"
            >
              <option value="" disabled>
                {formData.department ? 'Select a Doctor' : 'Select a Department First'}
              </option>
              {formData.department && departmentDoctors[formData.department].map(doc => (
                <option key={doc} value={doc}>{doc}</option>
              ))}
            </select>
          </div>

          {/* Appointment Date */}
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Preferred Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Appointment Time */}
          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">Preferred Appointment Time</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Reason for Visit */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
          <textarea
            id="reason"
            name="reason"
            rows="4"
            value={formData.reason}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please briefly describe the reason for your appointment..."
          ></textarea>
        </div>

        {/* Agreement Checkbox */}
        {/* <div className="flex items-start">
          <input
            id="agreedToTerms"
            name="agreedToTerms"
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <label htmlFor="agreedToTerms" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions and confirm that the information provided is accurate.
          </label>
        </div> */}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;